"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
}

/**
 * Copies the target email address to clipboard with brief visual feedback.
 */
export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may be blocked in restricted contexts; ignore silently.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${email} to clipboard`}
      className="inline-flex items-center gap-1.5 rounded-md border border-[#E5E2DC] bg-[#F7F5F0] px-2.5 py-1 text-xs font-medium text-[#52525B] transition-colors hover:border-[#D4CFC6] hover:text-[#18181B]"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-600" />
          <span className="text-emerald-700">Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
