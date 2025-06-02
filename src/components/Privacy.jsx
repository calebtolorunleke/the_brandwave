import React from "react";

const Privacy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-600">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: June 1, 2025</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-10 bg-white rounded-lg shadow mt-6 mb-12">
        <p className="mb-6">
          At <strong>Brandwave</strong>, we value your trust and are committed
          to protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard the data you share with us when
          using our platform.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Your name, email address, and password when you sign up</li>
            <li>Brand and business information you provide for your profile</li>
            <li>Payment and transaction details if you use paid features</li>
            <li>
              Usage data such as page visits, clicks, and time spent on features
            </li>
            <li>
              Any messages or customer inquiries sent through your brand page
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Create and manage your account</li>
            <li>Help you build and manage your brand page(s)</li>
            <li>Process payments and enable escrow protection</li>
            <li>Provide customer support</li>
            <li>Improve platform functionality and user experience</li>
            <li>Communicate important updates, offers, or new features</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            3. Data Sharing and Third Parties
          </h2>
          <p>
            We do not sell your personal data. We only share your data with
            trusted third-party services (like payment processors and analytics
            tools), and only to the extent necessary to operate Brandwave.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            4. Your Rights and Choices
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Access and update your personal information anytime</li>
            <li>Delete your account and data by contacting support</li>
            <li>Opt out of marketing emails using the unsubscribe link</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            5. Data Security
          </h2>
          <p>
            We use modern encryption, secure servers, and regular audits to keep
            your data safe.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            6. Children’s Privacy
          </h2>
          <p>
            Brandwave is not intended for individuals under the age of 13. We do
            not knowingly collect data from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            7. Updates to This Policy
          </h2>
          <p>
            We may update this policy from time to time. When we do, we’ll post
            the updated version on our site and notify you if the changes are
            significant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            8. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this policy or your
            data, please reach out to us at:
            <br />
            <a
              href="mailto:support@brandwave.app"
              className="text-indigo-600 underline"
            >
              support@brandwave.app
            </a>
            <span className="text-sm text-gray-500 block mt-1">
              (Note: Email hosting may require a paid plan in the future.)
            </span>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mb-4">
        © 2025 Brandwave. All rights reserved.
      </footer>
    </div>
  );
};

export default Privacy;
