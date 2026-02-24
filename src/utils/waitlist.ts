const WAITLIST_STORAGE_KEY = 'walki_waitlist_entries';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type WaitlistSource = 'landing' | 'demo';

export type WaitlistErrorCode =
  | 'VALIDATION'
  | 'NETWORK'
  | 'RATE_LIMIT'
  | 'SERVER'
  | 'UNKNOWN';

export class WaitlistError extends Error {
  code: WaitlistErrorCode;

  constructor(code: WaitlistErrorCode, message: string) {
    super(message);
    this.code = code;
  }
}

export const normalizeEmail = (value: string) => value.trim().toLowerCase();

export const validateEmail = (value: string) => {
  const email = normalizeEmail(value);

  if (!email) {
    return 'Email is required.';
  }

  if (!EMAIL_REGEX.test(email)) {
    return 'Enter a valid email address.';
  }

  return '';
};

type WaitlistPayload = {
  email: string;
  source: WaitlistSource;
};

const persistLocally = ({ email, source }: WaitlistPayload) => {
  if (typeof window === 'undefined') {
    return;
  }

  const existingRaw = window.localStorage.getItem(WAITLIST_STORAGE_KEY);
  const existing = existingRaw ? (JSON.parse(existingRaw) as Array<{ email: string; source: WaitlistSource; createdAt: string }>) : [];
  existing.push({
    email,
    source,
    createdAt: new Date().toISOString(),
  });
  window.localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(existing));
};

export const submitWaitlist = async (payload: WaitlistPayload) => {
  const email = normalizeEmail(payload.email);
  const validationError = validateEmail(email);

  if (validationError) {
    throw new WaitlistError('VALIDATION', validationError);
  }

  const endpoint = (import.meta.env.VITE_WAITLIST_ENDPOINT || '').trim();

  if (!endpoint) {
    persistLocally({ email, source: payload.source });
    return { ok: true as const, mode: 'local' as const };
  }

  let response: Response;

  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: payload.source,
      }),
    });
  } catch {
    throw new WaitlistError('NETWORK', 'Network error. Please check your connection and try again.');
  }

  if (response.status === 429) {
    throw new WaitlistError('RATE_LIMIT', 'Too many attempts. Please try again later.');
  }

  if (!response.ok) {
    if (response.status >= 400 && response.status < 500) {
      throw new WaitlistError('VALIDATION', 'Unable to submit this email. Please double-check and try again.');
    }

    throw new WaitlistError('SERVER', 'Server error. Please try again in a few minutes.');
  }

  return { ok: true as const, mode: 'remote' as const };
};
