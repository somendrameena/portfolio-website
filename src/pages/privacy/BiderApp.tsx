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
        Last updated: June 2026
      </p>

      <h4>General</h4>

      <p>
          By using, accessing or participating in the Service, you agree to the terms of this privacy policy (the
          "Privacy Policy"). Capitalized terms not defined in this Privacy Policy have the meanings set forth in the
          Terms and Conditions, located here. We reserve the right to change our Privacy Policy at any time. If we
          do this, we will post a notice that we have made changes to this Privacy Policy on the Website for at
          least 7 days after the changes are posted. If you do not agree to abide by this Privacy Policy, you are not
          authorized to use, access or participate in the Service.
      </p>

      <h4>Information We Collect</h4>
      <p>
          When you use the Service you provide us with two types of information: (i) information you submit via
          the Service and (ii) information regarding your use of the Service collected by us as you interact with the
          Service.
      </p>
      <p>
          When you enter the Website, we collect your browser type and IP address. This information is gathered
          for all Website visitors. In addition, we store certain information from your browser using "cookies." A
          cookie is a piece of data stored on the user's computer tied to information about the user. We use
          session ID cookies to confirm that users are logged in. If you do not want information collected through
          the use of cookies, there is a simple procedure in most browsers that allows you to deny or accept the
          cookie feature; however, you should note that cookies may be necessary to provide you certain features
          (e.g., customized delivery of information) available on the Website.
      </p>
      <p>
          Through the registration process you may provide us with your name, email address, hometown, and
          other information that may be requested during the registration process. When you use the Service you
          may submit information and content to your profile, generate Activity Data through engaging in
          educational activities on the Service, or send messages and otherwise transmit information to other
          users. We store this information so that we can provide you the Service and offer personalized features.
      </p>

      <h4>Use of Information obtained by BiderApp</h4>
      <p>
          We may use your contact information to send you notifications regarding new services offered by
          BiderApp and its partners that we think you may find valuable. BiderApp may also send you servicerelated
          announcements from time to time through the general operation of the Service. Generally, you
          may opt out of such emails, although BiderApp reserves the right to send you notices about your
          account even if you opt out of all voluntary email notifications.
      </p>
      <p>
          Profile information is used by BiderApp primarily to be presented back to and edited by you when you
          access the Service and to be presented to other users. In some cases, other users may be able to
          supplement your profile, including by submitting comments
      </p>
      <p>
          BiderApp may use aggregate or anonymous data collected through the Service, including Activity Data,
          for any purpose. This data may be used by BiderApp and shared with third parties in any manner.
      </p>


      <h4>Sharing Your Personally-Identifiable Information with Third Parties</h4>
      <p>
          BiderApp shares your personally-identifiable information only in limited circumstances where
          BiderApp believes such sharing is reasonably necessary to offer the Service, legally required or,
          permitted by you.
          For example:
      </p>
      <p>
          We may provide personally-identifiable information to service providers who help us bring you the
          Service, such as hosting the Service at a co-location facility or sending email updates. In connection with
          these operations, our service providers may have access to personally-identifiable information for use
          for a limited time. Where we utilize service providers for the processing of any of personally-identifiable
          information, we implement reasonable contractual protections limiting the use of that personallyidentifiable
          information to the provision of services to BiderApp.
      </p>

      <p>
          Notwithstanding anything else in this policy, we may work with partners who use mobile SDKs, including
          the OneSignal Messaging SDK, to passively collect information (collectively, “SDK Information”), which
          generally helps us deliver personalized notifications. This data may also be used to identify you in a
          unique manner across other devices or browsers for the purposes of customizing ads or content.
          Depending on the permissions granted to this application, this information may include personally
          identifiable information (PII) including your e-mail address. This information may also include precise
          location (i.e. GPS-level data) or WiFi information, apps you have installed and enabled, and your mobile
          identifier (e.g., Android Advertising ID).
      </p>
      <p>
          We may be required to disclose personally-identifiable information pursuant to lawful requests, such as
          subpoenas or court orders, or in compliance with applicable laws. Additionally, we may share account or
          other personally-identifiable information when we believe it is necessary to comply with law, to protect
          our interests or property, to prevent fraud or other illegal activity perpetrated through the Service or
          using the BiderApp name, or to prevent imminent harm. This may include sharing personallyidentifiable information
          with other companies, lawyers, agents or government agencies.
      </p>
      <p>
          If the ownership of all or substantially all of the BiderApp business, or individual business units or
          assets owned by BiderApp that are related to the Service, were to change, your personally-identifiable
          information may be transferred to the new owner. In any such transfer of information, your personallyidentifiable
          information would remain subject to this section.
      </p>

      <h4>Links</h4>
      <p>
          The Service may contain links to other websites. We are not responsible for the privacy practices of
          other websites. We encourage users to be aware when they leave the Service to read the privacy
          statements of other websites that collect personally identifiable information. This Privacy Policy applies
          solely to information collected by BiderApp via the Service. We may also integrate with third parties
          who will interact with you under their terms of service
      </p>

      <h4>Deletion</h4>
      <p>
          If user want to delete their information, then he/she contact on email id BiderAppedu122@gmail.com.
          User data will be deleted within 24 hours of this action.
      </p>
    </div>

  );
};

export default Privacy;
