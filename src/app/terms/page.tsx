export default function Terms() {
    return (
        <main className="max-w-4xl mx-auto py-32 px-6">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <div className="prose prose-invert max-w-none text-neutral-400 space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">1. Service Usage Terms</h2>
                    <p>By using this website, you agree to comply with and be bound by these terms. Our services are provided for professional use in accordance with project-specific agreements.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">2. Payment & Refunds</h2>
                    <p>Payments for services are subject to the terms outlined in individual service contracts. Unless otherwise stated, fees are non-refundable once work has commenced.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                    <p>All content and materials on this website are the intellectual property of Ninethcloud Media unless otherwise noted. Unauthorized use is prohibited.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                    <p>Ninethcloud Media shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or website.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                    <p>These terms are governed by the laws of the jurisdiction in which Ninethcloud Media operates.</p>
                </section>
            </div>
        </main>
    );
}
