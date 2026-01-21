export default function Privacy() {
    return (
        <main className="max-w-4xl mx-auto py-32 px-6">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none text-neutral-400 space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Data Collected</h2>
                    <p>We collect information you provide directly to us through our contact forms, including your name, email address, phone number, and message content.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. How Data is Used</h2>
                    <p>We use your data strictly to respond to your inquiries, provide the requested services, and improve our website experience. We do not sell your personal data to third parties.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services</h2>
                    <p>We may use third-party tools like Google Analytics and social media pixels to understand how users interact with our site. These services may collect cookies and usage data.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
                    <p>You have the right to request access to the personal data we hold about you, to request corrections, or to ask for your data to be deleted from our systems.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Contact Info</h2>
                    <p>For any privacy-related questions, please contact us at privacy@ninthcloudmedia.com</p>
                </section>
            </div>
        </main>
    );
}
