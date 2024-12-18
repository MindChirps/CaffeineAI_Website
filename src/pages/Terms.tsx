import React from 'react';

const Terms = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">Effective Date: {currentDate}</p>

        <div className="prose max-w-none">
          <section className="mb-8">
            <p className="mb-4">Welcome to Caffeine AI! By accessing or using our services, you agree to these Terms and Conditions.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Services Provided</h2>
            <p className="mb-4">We offer AI-powered solutions to enhance business productivity and efficiency. These services are provided "as-is" and are subject to change or discontinuation at our discretion.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">User Accounts</h2>
            <p className="mb-4">Users are responsible for maintaining the confidentiality of their login credentials. Misuse of accounts may result in suspension or termination.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Subscriptions and Payments</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscriptions are billed on a monthly basis.</li>
              <li>Failure to make timely payments may result in suspension of your account.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Intellectual Property</h2>
            <p className="mb-4">All content, trademarks, and services are owned by Caffeine AI. Users are prohibited from copying, modifying, or distributing content without written permission.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Limitation of Liability</h2>
            <p className="mb-4">Caffeine AI is not liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Termination</h2>
            <p className="mb-4">We reserve the right to terminate accounts for violations of these terms.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Changes to Terms</h2>
            <p className="mb-4">We may update these Terms and Conditions from time to time. Users will be notified of significant changes.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Privacy Policy</h2>
            <p className="mb-4">Caffeine AI values your privacy and is committed to protecting your personal information.</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Information We Collect</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal information (e.g., name, email, billing information)</li>
              <li>Usage data (e.g., IP addresses, browser types, time spent on the platform)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">How We Use Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and improve our services</li>
              <li>To communicate updates, offers, and relevant information</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Data Sharing</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>We do not sell your data</li>
              <li>Data may be shared with third-party vendors for operational purposes</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Your Rights</h3>
            <p className="mb-4">Access, modify, or delete your data by contacting info@caffeineai.xyz</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Security</h3>
            <p className="mb-4">We implement security measures to protect your data, but no method of transmission is 100% secure.</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Changes to Policy</h3>
            <p className="mb-4">Updates to this policy will be communicated via email or on our website.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Shipping Policy</h2>
            <p className="mb-4">As Caffeine AI provides digital services, there is no physical shipping. Upon successful subscription or payment, your account will be granted access to the purchased services.</p>
            <p className="mb-4">If you face any issues accessing your subscription, contact us at info@caffeineai.xyz</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cancellation and Refunds Policy</h2>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Cancellations</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Subscriptions can be canceled at any time before the next billing cycle</li>
              <li>Cancellation will stop future renewals, but no pro-rated refunds will be issued for the current billing cycle</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Refunds</h3>
            <p className="mb-4">No refunds are provided for any payments made.</p>
            <p className="mb-4">For assistance, contact us at info@caffeineai.xyz</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Contact Information</h2>
            <p className="mb-4">For any questions or concerns regarding these terms, please contact us:</p>
            <ul className="list-none pl-6 mb-4">
              <li>Email: info@caffeineai.xyz</li>
              <li>Phone: +91 9677213091</li>
              <li>Location: Chennai, TN, India</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;