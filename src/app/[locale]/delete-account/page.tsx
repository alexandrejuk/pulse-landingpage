import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "How to request deletion of your PulseUp account and data.",
};

const UPDATED = "August 11, 2026";
const CONTACT_EMAIL = "privacy@pulseup.io";

export default function DeleteAccountPage() {
  return (
    <LegalPage title="Delete Your Account" updated={UPDATED}>
      <p>
        This page explains how to request deletion of your account and associated data for{" "}
        <strong>PulseUp</strong>, the app published by PulseUp. You do not need to have the app
        installed to submit a deletion request.
      </p>

      <h2>Option 1: Delete your account from within the app</h2>
      <p>If you still have the app installed, this is the fastest way to delete your account:</p>
      <ul>
        <li>Open PulseUp and sign in.</li>
        <li>
          Go to <strong>Profile → Settings → Account → Delete Account</strong>.
        </li>
        <li>Confirm the deletion when prompted.</li>
      </ul>
      <p>Your account is deactivated immediately once you confirm.</p>

      <h2>Option 2: Request deletion without the app</h2>
      <p>
        If you no longer have the app installed or can&rsquo;t sign in, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the address associated with
        your account (or include your account&rsquo;s username/email in the message) and request
        account deletion. We will process the request within 30 days and confirm by email once
        it&rsquo;s complete.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your profile (name, username, photo, bio).</li>
        <li>Your email address and login credentials, which are removed/anonymized so they can no longer be used to sign in or identify you.</li>
        <li>Your workout history, cardio sessions, streaks, XP, and achievements.</li>
        <li>Your social content: posts, reactions, comments, chat messages, and Crew memberships.</li>
        <li>Device push notification tokens.</li>
      </ul>

      <h2>What may be retained, and for how long</h2>
      <p>
        Some records may be kept for a limited additional period after deletion where required for
        legal, security, fraud-prevention, or accounting obligations (for example, records needed
        to resolve an active report or dispute). This retention is limited to what is legally
        required and is typically no longer than 90 days, after which the remaining data is
        permanently erased.
      </p>

      <p>
        For more detail on how we handle your data, see our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
