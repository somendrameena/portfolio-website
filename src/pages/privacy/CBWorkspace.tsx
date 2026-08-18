import { useEffect } from "react";

import "../Privacy.css";

const CBWorkspacePrivacy = () => {
  useEffect(() => {
    document.body.classList.add("privacy-page");

    return () => {
      document.body.classList.remove("privacy-page");
    };
  }, []);

  return (
    <div className="privacy-container">
      <h1>Privacy Policy for CB Workspace by CreateBytes</h1>

      <p>
        This Privacy Policy explains how CreateBytes (&quot;CreateBytes,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles information when an authorized
        user uses the CB Workspace by CreateBytes Chrome extension (the
        &quot;Extension&quot;).
      </p>

      <p>
        The Extension&apos;s single purpose is to give authorized CB Workspace users
        convenient access to workplace attendance, assigned work, task
        management, and work-time tracking from the Chrome toolbar.
      </p>

      <h2>Information handled by the Extension</h2>

      <p>
        The Extension handles only information needed to provide its disclosed
        CB Workspace features:
      </p>

      <ul>
        <li>
          Account information, including the user&apos;s name, email address, and CB
          Workspace user identifier
        </li>
        <li>
          Authentication information, including the user&apos;s password during
          login and the access token returned by CB Workspace
        </li>
        <li>
          Workplace attendance information, including check-in and check-out
          status
        </li>
        <li>
          Workspace information, including projects, sprints, assigned tasks and
          subtasks, statuses, favorites, and related identifiers
        </li>
        <li>
          Time-tracking information, including timer state, time-log segments,
          and worklogs
        </li>
        <li>
          Technical state needed for reliability, including cached-data
          timestamps and queued synchronization operations
        </li>
      </ul>

      <p>
        The Extension sends the user&apos;s email address and password directly to
        the CB Workspace API over HTTPS when the user chooses to sign in. The
        Extension does not store the password. It stores the resulting access
        token locally so the user can remain signed in.
      </p>

      <h2>How information is used</h2>

      <p>We use this information only to:</p>

      <ul>
        <li>
          Authenticate the user and provide access to their CB Workspace account
        </li>
        <li>
          Display relevant projects, assigned work items, attendance, and logged
          time
        </li>
        <li>
          Let the user create and update work items, manage favorites, and record
          attendance
        </li>
        <li>
          Run task timers and synchronize time with CB Workspace worklogs
        </li>
        <li>
          Cache relevant information locally for faster loading and limited
          offline operation
        </li>
        <li>
          Maintain, secure, and troubleshoot the Extension and its disclosed
          functionality
        </li>
      </ul>

      <h2>Local storage and server communication</h2>

      <p>
        The Extension uses Chrome&apos;s local extension storage to keep the access
        token, basic account identifiers, cached workspace and attendance data,
        timer state, and synchronization queues on the user&apos;s device.
      </p>

      <p>
        The Extension communicates with the CB Workspace API at{" "}
        <code>https://cb.api-workspace.createbytes.com</code> over HTTPS. It does
        not request access to browsing history, read or modify unrelated
        websites, or monitor the pages the user visits.
      </p>

      <h2>Sharing and disclosure</h2>

      <p>
        We do not sell user information or use it for personalized advertising.
        We do not use user information to determine creditworthiness or for
        lending purposes.
      </p>

      <p>
        We may disclose information when required by applicable law, to protect
        against security threats or abuse, or as otherwise permitted under the
        Chrome Web Store User Data Policy.
      </p>

      <h2>Data retention and deletion</h2>

      <p>
        Logging out removes the locally stored access token, name, email address,
        and user identifier. Some cached workspace, attendance, timer, and
        synchronization data may remain in Chrome local extension storage until
        it is replaced, the Extension&apos;s storage is cleared, or the Extension is
        uninstalled.
      </p>

      <p>
        Users can remove locally stored Extension data by uninstalling the
        Extension or clearing its stored data in Chrome. For help with account or
        server-side data, contact us using the details below.
      </p>

      <h2>Security</h2>

      <p>
        The Extension transmits information to the CB Workspace API using HTTPS.
      </p>

      <p>
        No method of storage or transmission is completely secure, but we use
        reasonable safeguards appropriate to the nature of the information
        handled.
      </p>

      <h2>Children&apos;s privacy</h2>

      <p>
        The Extension is intended for authorized workplace users and is not
        directed to children.
      </p>

      <h2>Changes to this policy</h2>

      <p>
        We may update this Privacy Policy when the Extension or our data
        practices change. We will update the effective date and provide any
        notice or consent required by applicable law or Chrome Web Store policy
        before materially different data handling begins.
      </p>

      <h2>Limited Use disclosure</h2>

      <p>
        Our use and transfer of information received through the Extension will
        adhere to the Chrome Web Store User Data Policy, including the Limited
        Use requirements. We use user information only to provide or improve the
        Extension&apos;s disclosed single purpose, subject to the limited exceptions
        permitted by that policy.
      </p>

      <h2>Contact us</h2>

      <p>
        CreateBytes
        <br />
        1st Floor, Plot No. 121, Sector 44, Gurugram, Haryana
        <br />
        hr@createbytes.com
      </p>

    </div>
  );
};

export default CBWorkspacePrivacy;
