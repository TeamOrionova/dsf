export default function Disclaimer() {
    return (
        <main className="max-w-4xl mx-auto py-32 px-6">
            <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
            <div className="prose prose-invert max-w-none text-neutral-400 space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">No Guaranteed Results</h2>
                    <p>Marketing and content results depend on many factors including market conditions and execution. We do not guarantee specific financial results or growth metrics from our services.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Informational Purposes</h2>
                    <p>The information provided on this website is for general informational purposes only and does not constitute professional advice.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Liability Limitations</h2>
                    <p>Ninethcloud Media is not responsible for any actions taken based on the information provided on this site.</p>
                </section>
            </div>
        </main>
    );
}
