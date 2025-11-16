import "./home.css";

export const metadata = {
  title: "Bloxion Documentation",
  description: "Official legal documents and policies for Bloxion",
};

export default function DocsHome() {
  return (
    <div className="docs-container">
      <div className="docs-card">
        <h1>Bloxion Documentation</h1>
        <p className="subtitle">
          Official legal and policy resources for Bloxion.
        </p>

        <ul className="docs-links">
          <li><a href="/legal/privacy">Privacy Policy</a></li>
          <li><a href="/legal/terms">Terms of Service</a></li>
           
        </ul>

        <p className="footer-note">
          Need help? Visit our support portal or contact us.
        </p>
      </div>
    </div>
  );
}