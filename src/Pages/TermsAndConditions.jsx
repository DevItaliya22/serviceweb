import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const PrivacyPolicy = ({ onBack }) => (
  <div className="text-gray-700 text-sm flex-1 overflow-y-auto">
    <div className="flex items-center mb-4">
      <button onClick={onBack} className="mr-2 text-black hover:text-gray-700 focus:outline-none">
        <FaArrowLeft />
      </button>
      <h2 className="text-xl font-bold flex-1 text-center">Privacy Policy</h2>
    </div>
    <p className="text-xs text-gray-500 mb-2">Effective Date: 07.07.2018</p>
    <p className="mb-2">3RP-TECHNETIUM (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you interact with our website, contact forms, services, and communications.</p>
    <ol className="list-decimal pl-5 space-y-2">
      <li>
        <strong>Information We Collect</strong><br />
        When you interact with our website or contact us, we may collect the following information:
        <ul className="list-disc pl-5 mt-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name (if provided)</li>
          <li>Details of your inquiry or project</li>
          <li>Any other information you choose to provide</li>
        </ul>
        We may also collect technical data such as your IP address, browser type, and pages visited, to improve our website performance and user experience.
      </li>
      <li>
        <strong>How We Use Your Information</strong><br />
        We use your information to:
        <ul className="list-disc pl-5 mt-1">
          <li>Respond to your inquiries</li>
          <li>Provide our services, including data analytics, web development, AI solutions, algo trading systems, API integrations, and data automation</li>
          <li>Maintain internal records and project tracking</li>
          <li>Improve our services and website</li>
          <li>Comply with legal obligations</li>
        </ul>
      </li>
      <li>
        <strong>Information Sharing</strong><br />
        We do not sell or rent your personal information. We may share your data only in the following circumstances:
        <ul className="list-disc pl-5 mt-1">
          <li>With trusted service providers who support our business operations (bound by confidentiality agreements)</li>
          <li>If required by law, regulation, or legal process</li>
          <li>To protect our rights, property, or safety, or that of our clients</li>
        </ul>
      </li>
      <li>
        <strong>Data Security</strong><br />
        We take appropriate measures to secure your personal data against unauthorized access, alteration, disclosure, or destruction, including technical safeguards and strict internal procedures.
      </li>
      <li>
        <strong>Your Rights</strong><br />
        Depending on applicable data protection laws, you may have the right to:
        <ul className="list-disc pl-5 mt-1">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of incorrect or incomplete data</li>
          <li>Request deletion of your personal data (subject to legal and business requirements)</li>
          <li>Withdraw your consent for data processing at any time</li>
        </ul>
        You can exercise these rights by contacting us at <a href="mailto:contact@3rp-technetium.com" className="underline text-blue-600">contact@3rp-technetium.com</a>.
      </li>
      <li>
        <strong>Data Retention</strong><br />
        We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws.
      </li>
      <li>
        <strong>Third-Party Links</strong><br />
        Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external websites.
      </li>
      <li>
        <strong>Changes to This Policy</strong><br />
        We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated “Effective Date.” We encourage you to review this page regularly.
      </li>
      <li>
        <strong>Contact Us</strong><br />
        If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at: <a href="mailto:contact@3rp-technetium.com" className="underline text-blue-600">contact@3rp-technetium.com</a>
      </li>
    </ol>
  </div>
);

const TermsAndConditions = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  if (showPrivacy) {
    return <PrivacyPolicy onBack={() => setShowPrivacy(false)} />;
  }

  return (
    <div className="text-gray-700 text-sm flex-1 overflow-y-auto">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold flex-1 text-center">Terms and Conditions</h2>
      </div>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Information Collection</strong><br />
          We collect the personal details you provide, including your name, email address, phone number, and any other information shared through this form, for the purpose of responding to your inquiry regarding our data analytics, web development, AI solutions, algorithmic trading, API integrations, and related digital services.
        </li>
        <li>
          <strong>Use of Information</strong><br />
          Your information will be used to:
          <ul className="list-disc pl-5 mt-1">
            <li>Communicate with you regarding your inquiry</li>
            <li>Understand your requirements and provide relevant solutions</li>
            <li>Improve our services and offerings</li>
          </ul>
          We may store your information for follow-up, service history, and record-keeping purposes.
        </li>
        <li>
          <strong>Data Protection</strong><br />
          We value your privacy and will protect your personal data in accordance with applicable data protection laws. Your information will not be sold, rented, or shared with third parties without your explicit consent, except as required by law.
        </li>
        <li>
          <strong>Accuracy and Responsibility</strong><br />
          You are responsible for ensuring that the information you provide is accurate, complete, and does not infringe upon any third-party rights.
        </li>
        <li>
          <strong>Consent</strong><br />
          By submitting this form, you consent to the collection, use, and storage of your personal data as described in these terms and our <button onClick={() => setShowPrivacy(true)} className="underline text-blue-600 hover:text-blue-800 focus:outline-none">Privacy Policy</button>.
        </li>
        <li>
          <strong>Confidentiality and Intellectual Property</strong><br />
          If your message contains project-related or proprietary information, please note that sending such details does not establish any formal partnership or non-disclosure agreement. For sensitive or confidential discussions, please request a signed NDA (Non-Disclosure Agreement) before sharing additional details.
        </li>
        <li>
          <strong>Changes</strong><br />
          We may update these terms occasionally. Any changes will be posted on this page, and continued use of the contact form after updates implies your acceptance of the revised terms.
        </li>
      </ol>
      <p className="mt-4">
        For more details on how we manage and protect your data, please refer to our <button onClick={() => setShowPrivacy(true)} className="underline text-blue-600 hover:text-blue-800 focus:outline-none">Privacy Policy</button> or contact us directly.
      </p>
    </div>
  );
};

export default TermsAndConditions; 