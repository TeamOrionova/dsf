export default function Cookies() {
    return (
        <main className="max-w-4xl mx-auto py-32 px-6">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <div className="prose prose-invert max-w-none text-neutral-400 space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">What are Cookies?</h2>
                    <p>Cookies are small text files stored on your device that help us improve your browsing experience and analyze site traffic.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">How We Use Them</h2>
                    <p>We use essential cookies for site functionality and analytical cookies to understand how our visitors use the site. We may also use marketing cookies for social media integration.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                    <p>You can manage or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of this website.</p>
                </section>
            </div>
        </main>
    );
}
