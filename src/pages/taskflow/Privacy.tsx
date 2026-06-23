import { useEffect } from "react";

import './Privacy.css';

const Privacy = () => {

  useEffect(() => {
    document.body.classList.add("privacy-page");

    return () => {
      document.body.classList.remove("privacy-page");
    };
  }, []);

  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>

      <p>
        Last updated: June 2026
      </p>

      <p>
        Task Flow respects your privacy. This Privacy Policy explains how the
        application handles information when you use the app.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Task Flow does not collect, store, or transmit any personal information.
        The app does not require account creation, login, or registration.
      </p>

      <h2>Task Data</h2>
      <p>
        All tasks, categories, settings, and other information created within
        the app are stored locally on your device. This data is not transmitted
        to our servers and is not shared with third parties.
      </p>

      <h2>Internet Access</h2>
      <p>
        The app may open external links when you choose options such as
        submitting feedback, viewing the privacy policy, or rating the app.
        Aside from these actions initiated by you, Task Flow does not send your
        data over the internet.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Task Flow may use platform services provided by Google Play Store,
        Apple App Store, or your device operating system. These services may
        collect information according to their own privacy policies.
      </p>

      <h2>Data Security</h2>
      <p>
        Since your data is stored locally on your device, you are responsible
        for maintaining the security of your device and any backups you create.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Task Flow does not knowingly collect personal information from children
        or any users.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated revision date.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at: devardnemos@gmail.com
      </p>
    </div>

  );
};

export default Privacy;
