import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Privacy = () => {
    return (
        <main className="pt-24 pb-20">
            <SEO
                title="Privacy Policy"
                description="Privacy policy for Green Falls Garden Designer. Learn how we handle your data."
                canonical="/privacy"
            />
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>

                    <div className="prose prose-green max-w-none text-muted-foreground space-y-8">
                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Information Collection</h2>
                            <p>
                                We collect information when you fill out our contact form or call us directly. This information may include your name, email address, phone number, and details about your gardening project. We use this information solely to respond to your enquiry and provide our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. Use of Information</h2>
                            <p>
                                The information we collect is used to:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Personalize your experience and respond to individual needs.</li>
                                <li>Improve our website and customer service.</li>
                                <li>Communicate with you regarding site visits, project updates, or requested services.</li>
                                <li>Process transactions (if applicable).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Data Security</h2>
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information. Our enquiry form uses secure transmission, and we do not store sensitive payment information on this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Third-Party Disclosure</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Cookies</h2>
                            <p>
                                We may use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Your Consent</h2>
                            <p>
                                By using our site, you consent to our website's privacy policy.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-border">
                            <p className="text-sm">Last Updated: February 2026</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default Privacy;
