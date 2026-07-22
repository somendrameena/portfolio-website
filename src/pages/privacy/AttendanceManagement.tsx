import { useEffect } from "react";

import '../Privacy.css';

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
        Last updated: July 2026
      </p>

      <h4>Overview</h4>

      <p>
        Attendance Manager is a Chrome extension that allows authorized users
        to quickly check their attendance status and perform check-in and
        check-out actions using the CreateBytes Attendance Management System.
        This Privacy Policy explains what information the extension accesses,
        how it is used, and how it is protected.
      </p>

      <h4>Information We Collect</h4>

      <p>
        The extension stores the following information locally on your device
        using Chrome Storage:
      </p>

      <ul>
        <li>Access Token</li>
        <li>Email Address</li>
        <li>User Name</li>
      </ul>

      <p>
        The extension does not collect or store your password after
        authentication.
      </p>

      <h4>How We Use Your Information</h4>

      <p>
        The stored information is used solely to:
      </p>

      <ul>
        <li>Keep you signed in.</li>
        <li>Display your name within the extension.</li>
        <li>Retrieve your attendance status.</li>
        <li>Perform attendance check-in and check-out requests.</li>
      </ul>

      <h4>Data Sharing</h4>

      <p>
        The extension does not sell, share, or transfer your personal
        information to any third party. Information is only transmitted to the
        official CreateBytes Attendance API to provide the requested
        functionality.
      </p>

      <h4>Data Storage</h4>

      <p>
        All locally stored information remains on your device using Chrome
        Storage and is removed when you sign out of the extension.
      </p>

      <h4>Third-Party Services</h4>

      <p>
        The extension communicates only with official CreateBytes attendance
        service endpoints required for authentication and attendance
        operations.
      </p>

      <h4>Changes to this Privacy Policy</h4>

      <p>
        This Privacy Policy may be updated from time to time. Any changes will
        be reflected on this page with an updated revision date.
      </p>

      <h4>Contact</h4>

      <p>
        If you have any questions regarding this Privacy Policy, please contact
        us at <strong>your-email@example.com</strong>.
      </p>

    </div>
  );
};

export default Privacy;