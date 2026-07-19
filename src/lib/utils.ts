import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getShareUrl(params: string): string {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}/results?${params}`;
}

export function getTwitterShareUrl(url: string, text: string): string {
  const params = new URLSearchParams({
    url,
    text,
  });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

export function getLinkedInShareUrl(url: string): string {
  const params = new URLSearchParams({
    url,
  });
  return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
}
