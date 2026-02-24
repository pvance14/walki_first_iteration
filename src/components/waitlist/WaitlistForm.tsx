import { FormEvent, useMemo, useState } from 'react';
import { Button, Input } from '@/components/ui';
import { trackWaitlistSignup } from '@/utils/analytics';
import { submitWaitlist, validateEmail, WaitlistError, type WaitlistSource } from '@/utils/waitlist';
import { ThankYouState } from './ThankYouState';

type WaitlistFormProps = {
  source: WaitlistSource;
};

export const WaitlistForm = ({ source }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [hasBlurredEmail, setHasBlurredEmail] = useState(false);

  const emailError = useMemo(() => {
    if (!hasBlurredEmail && email.trim().length === 0) {
      return '';
    }

    return validateEmail(email);
  }, [email, hasBlurredEmail]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasBlurredEmail(true);
    setGeneralError('');

    const validationError = validateEmail(email);
    if (validationError) {
      return;
    }

    setIsSubmitting(true);
    try {
      await submitWaitlist({ email, source });
      trackWaitlistSignup(source);
      setIsSubmitted(true);
    } catch (error) {
      if (error instanceof WaitlistError) {
        if (error.code === 'VALIDATION') {
          setGeneralError('Please fix the email and try again.');
        } else if (error.code === 'RATE_LIMIT') {
          setGeneralError('Too many attempts. Please wait before trying again.');
        } else {
          setGeneralError(error.message);
        }
      } else {
        setGeneralError('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <ThankYouState source={source} />;
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <Input
        type="email"
        autoComplete="email"
        inputMode="email"
        label="Email address"
        placeholder="you@example.com"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setGeneralError('');
        }}
        onBlur={() => setHasBlurredEmail(true)}
        error={emailError || undefined}
        aria-required="true"
      />

      {generalError ? (
        <p className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700" role="alert">
          {generalError}
        </p>
      ) : null}

      <Button type="submit" isLoading={isSubmitting} className="w-full" disabled={Boolean(emailError)}>
        Join Waitlist
      </Button>
      <p className="text-xs text-slate-600">We only use your email for Walki updates. No spam, no data sales.</p>
    </form>
  );
};

export type { WaitlistFormProps };
