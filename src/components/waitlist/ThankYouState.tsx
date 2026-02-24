import { useMemo, useState } from 'react';
import { Button } from '@/components/ui';
import { trackShare } from '@/utils/analytics';

type ShareStatus = 'idle' | 'shared' | 'copied' | 'copy-failed';

type ThankYouStateProps = {
  source: 'landing' | 'demo';
};

const APP_URL = 'https://walki.app';

const copyText = async (text: string) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  if (typeof document === 'undefined') {
    return false;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', 'true');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  const success = document.execCommand('copy');
  document.body.removeChild(textarea);
  return success;
};

export const ThankYouState = ({ source }: ThankYouStateProps) => {
  const [shareStatus, setShareStatus] = useState<ShareStatus>('idle');

  const shareText = useMemo(
    () => 'I joined the Walki waitlist. AI walking motivation with six personas and a privacy-first approach.',
    [],
  );

  const tweetUrl = useMemo(() => {
    const params = new URLSearchParams({ text: shareText, url: APP_URL });
    return `https://twitter.com/intent/tweet?${params.toString()}`;
  }, [shareText]);

  const handleNativeShare = async () => {
    if (typeof navigator === 'undefined' || !navigator.share) {
      return;
    }

    try {
      await navigator.share({
        title: 'Walki Waitlist',
        text: shareText,
        url: APP_URL,
      });
      trackShare('waitlist', 'web-share');
      setShareStatus('shared');
    } catch {
      setShareStatus('idle');
    }
  };

  const handleCopyLink = async () => {
    try {
      const copied = await copyText(APP_URL);
      if (!copied) {
        setShareStatus('copy-failed');
        return;
      }

      trackShare('waitlist', 'clipboard');
      setShareStatus('copied');
    } catch {
      setShareStatus('copy-failed');
    }
  };

  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5" aria-live="polite">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">You&apos;re on the list</p>
      <h3 className="mt-1 text-xl font-bold text-slate-900">Thanks for signing up.</h3>
      <p className="mt-2 text-sm text-slate-700">We&apos;ll reach out when Walki opens early access.</p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Button
          type="button"
          variant="outline"
          className="w-full sm:w-auto"
          onClick={() => {
            trackShare('waitlist', 'twitter');
            window.open(tweetUrl, '_blank', 'noopener,noreferrer');
          }}
        >
          Share on X
        </Button>
        <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={handleCopyLink}>
          Copy Link
        </Button>
        {typeof navigator !== 'undefined' && 'share' in navigator ? (
          <Button type="button" className="w-full sm:w-auto" onClick={handleNativeShare}>
            Share with Friends
          </Button>
        ) : null}
      </div>

      {shareStatus === 'shared' ? <p className="mt-3 text-sm text-emerald-800">Shared successfully.</p> : null}
      {shareStatus === 'copied' ? <p className="mt-3 text-sm text-emerald-800">Link copied.</p> : null}
      {shareStatus === 'copy-failed' ? (
        <p className="mt-3 text-sm text-rose-700">Couldn&apos;t copy the link. Please copy it from your browser bar.</p>
      ) : null}
      {source === 'demo' ? <p className="mt-3 text-xs text-slate-600">You can continue exploring the demo anytime.</p> : null}
    </div>
  );
};

export type { ThankYouStateProps };
