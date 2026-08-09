import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of PulseUp.",
};

const UPDATED = "August 6, 2026";
const CONTACT_EMAIL = "legal@pulseup.io";

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" updated={UPDATED}>
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of PulseUp&rsquo;s
        mobile application and website (together, the &ldquo;Service&rdquo;). By creating an
        account or otherwise using the Service, you agree to be bound by these Terms. If you do
        not agree, do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old (or the minimum age of digital consent in your country)
        to use the Service. By using the Service, you represent that you meet this requirement.
      </p>

      <h2>2. Your Account</h2>
      <ul>
        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
        <li>You are responsible for all activity that occurs under your account.</li>
        <li>You must provide accurate and complete information when creating your account.</li>
        <li>You must notify us promptly of any unauthorized use of your account.</li>
      </ul>

      <h2>3. The Service</h2>
      <p>
        PulseUp is a social fitness app that lets you plan and track workouts, train live with
        others (Live Cardio, Party Workout), build a training crew, and earn XP, streaks, and
        achievements. PulseUp is free to use. We may add, change, or remove features at any time.
      </p>

      <h2>4. Health and Fitness Disclaimer</h2>
      <p>
        PulseUp is not a medical device and does not provide medical advice. Content, workout
        plans, and metrics in the app are for informational and motivational purposes only.
        Consult a physician before beginning any exercise program, especially if you have a
        pre-existing health condition. You use the Service, and perform any physical activity
        recommended or logged through it, at your own risk.
      </p>

      <h2>5. User Content and Conduct</h2>
      <p>
        You retain ownership of the content you post (workouts, photos, comments, and other
        social content), but you grant PulseUp a worldwide, non-exclusive, royalty-free license to
        host, display, and distribute it within the Service. You agree not to:
      </p>
      <ul>
        <li>Post content that is unlawful, harassing, abusive, or infringes on others&rsquo; rights.</li>
        <li>Impersonate any person or misrepresent your affiliation with any person or entity.</li>
        <li>Interfere with or disrupt the Service, including through automated scraping or reverse engineering.</li>
        <li>Organize, promote, or take part in gambling, betting, or paid raffles within the Service.</li>
        <li>Advertise, sell, or otherwise trade any products, services, or content to other users through the Service.</li>
        <li>Use the Service for any purpose that is illegal or prohibited by these Terms.</li>
      </ul>
      <p>We may remove content or suspend accounts that violate these Terms.</p>

      <h2>6. Community Standards</h2>
      <p>
        PulseUp has zero tolerance for content or conduct that undermines a safe and respectful
        community. In addition to the restrictions in Section 5, you agree not to post, share, or
        engage in:
      </p>
      <ul>
        <li>
          Hate speech or incitement to hatred, discrimination, or violence based on race,
          ethnicity, religion, national origin, gender, sexual orientation, disability, or any
          other characteristic.
        </li>
        <li>Threats, glorification, or incitement of violence against any person or group.</li>
        <li>Nudity or sexually explicit content.</li>
        <li>
          Content or behavior that promotes intolerance of any kind, including racial, religious,
          or social intolerance.
        </li>
      </ul>
      <p>
        Violations of this section may result in immediate removal of the content, suspension, or
        permanent termination of your account, at our sole discretion and without prior notice.
      </p>

      <h2>7. Advertising and Third-Party Ads</h2>
      <p>
        PulseUp may display third-party advertisements within the Service. Any ad served is the
        sole responsibility of the respective advertiser, including the accuracy of the
        information and the quality and delivery of any advertised products or services. PulseUp
        is not a party to any transaction between you and an advertiser, does not endorse the
        advertising content shown, and is not liable for damages arising from your interaction
        with ads or advertisers.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        The Service, including its design, features, and PulseUp trademarks and logos, is owned
        by PulseUp and protected by intellectual property laws. Except for the license granted to
        use the Service, no rights are transferred to you.
      </p>

      <h2>9. Termination</h2>
      <p>
        You may stop using the Service and delete your account at any time. We may suspend or
        terminate your access if you violate these Terms or if required to protect the Service or
        other users.
      </p>

      <h2>10. Disclaimers and Limitation of Liability</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
        warranties of any kind, express or implied. To the maximum extent permitted by law,
        PulseUp will not be liable for any indirect, incidental, special, or consequential
        damages arising from your use of the Service, including any injury sustained while
        performing exercises tracked or suggested through the app.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Federative Republic of Brazil, without regard
        to conflict-of-law principles, unless mandatory local law in your jurisdiction provides
        otherwise.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Service after changes
        take effect constitutes acceptance of the revised Terms. We will update the &ldquo;Last
        updated&rdquo; date above whenever we do.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions about these Terms, contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
