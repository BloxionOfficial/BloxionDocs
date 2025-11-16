import "./privacy.css";

export const metadata = {
  title: "Privacy Policy — Bloxion",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-container">
      <div className="legal-card">
        <h1>Bloxion Privacy Policy</h1>
        <p className="updated">Effective Date: [Insert Date]</p>

        <p>
          Bloxion (“we,” “our,” or “us”) values your privacy and is committed to
          protecting your personal information. This Privacy Policy explains what
          data we collect, how we use it, and your rights under applicable data
          protection laws, including the GDPR.
        </p>

        <hr />

        <h2>1. Information We Collect</h2>

        <p>We collect information necessary to provide and improve Bloxion, a group management suite for Roblox and Discord users:</p>

        <h3>Account Information:</h3>
        <ul>
          <li>Roblox user ID and other account identifiers (via OAuth)</li>
          <li>Discord user ID, discriminator, and other account identifiers (via OAuth)</li>
        </ul>

        <h3>Action and Usage Data:</h3>
        <ul>
          <li>Action audit logs to monitor activity within the service</li>
        </ul>

        <h3>Third-Party Data Collection:</h3>
        <ul>
          <li>IP addresses (via Cloudflare, for support ticket matching and service security)</li>
          <li>Payment information (billing address, card details) via Stripe</li>
          <li>Facial scans (via Persona) for rare verification purposes, such as age verification and protecting children</li>
        </ul>

        <h3>Anonymous Data:</h3>
        <ul>
          <li>Anonymous visit logging and monitoring for analytics and service improvement</li>
        </ul>

        <hr />

        <h2>2. How We Use Your Data</h2>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Monitor and prevent abuse</li>
          <li>Verify age and identity when required</li>
          <li>Process payments securely</li>
          <li>Maintain audit logs for administrative and compliance purposes</li>
          <li>Improve service reliability and performance</li>
        </ul>

        <p><strong>Special Note on Facial Scans:</strong></p>
        <ul>
          <li>Facial scans are used only for rare verification purposes</li>
          <li>Data is strictly handled and deleted within 30 days</li>
        </ul>

        <hr />

        <h2>3. Third-Party Services</h2>
        <p>We use third-party services to deliver and secure Bloxion:</p>
        <ul>
          <li>Cloudflare: anonymous visit logging and monitoring</li>
          <li>Stripe: payment processing</li>
          <li>Persona: age and identity verification</li>
        </ul>
        <p>
          Third parties may have their own privacy practices. For inquiries about
          your data with these providers, please contact them directly.
        </p>

        <hr />

        <h2>4. Your Rights</h2>
        <p>You have the following rights under GDPR:</p>
        <ul>
          <li><strong>Access & Export:</strong> request a copy of your personal data</li>
          <li><strong>Correction:</strong> request corrections to inaccurate data</li>
          <li><strong>Deletion:</strong> request deletion of your personal data, except for information required to provide the service</li>
          <li><strong>Opt-Out:</strong> opt out of accumulation of connecting data that is not essential for the service</li>
        </ul>
        <p>Note: Anonymous data collected for analytics cannot be exported or deleted.</p>

        <hr />

        <h2>5. Data Retention</h2>
        <ul>
          <li>Personal data retained only as long as needed to provide the service and comply with legal obligations</li>
          <li>Facial scan data deleted within 30 days of collection</li>
          <li>Audit logs and transactional data may be retained for compliance</li>
        </ul>

        <hr />

        <h2>6. Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect
          your personal data against accidental loss, unauthorized access,
          disclosure, alteration, and destruction.
        </p>

        <hr />

        <h2>7. Children’s Privacy</h2>
        <p>
          Bloxion is intended for users aged 13 and above. Users under 13 will
          undergo an age verification process via Persona before using the service.
        </p>

        <hr />

        <h2>8. Updates to This Privacy Policy</h2>
        <p>
          We may update this policy from time to time. Updates will be posted on
          this page with the effective date.
        </p>

        <hr />

        <h2>9. Contact Us</h2>
        <p>If you have any questions, please contact us:</p>
        <p>
          Email: <strong>[Insert Contact Email]</strong><br />
          Address: <strong>[Insert Address, if applicable]</strong>
        </p>

      </div>
    </div>
  );
}