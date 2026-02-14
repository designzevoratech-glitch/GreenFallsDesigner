import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Terms = () => {
    return (
        <main className="pt-24 pb-20">
            <SEO
                title="Terms of Use"
                description="Terms and conditions for using Green Falls Garden Designer's website and services."
                canonical="/terms"
            />
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Use</h1>

                    <div className="prose prose-green max-w-none text-muted-foreground space-y-8">
                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using this website (greenfallsgardendesigner.com), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">2. Service Disclaimer</h2>
                            <p>
                                Green Falls Garden Designer provides landscaping and garden design services across Tamil Nadu. All projects are subject to site-specific conditions, material availability, and weather considerations. Consultation and site visits are required for accurate project estimates.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">3. Use License</h2>
                            <p>
                                Permission is granted to temporarily download one copy of the materials (information or images) on Green Falls Garden Designer's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                            <p>
                                The content, including but not limited to the logo, design showcase, project images (Semmozhi Poonga, Srivari Villas, etc.), and text content, are the property of Green Falls Garden Designer and are protected by applicable copyright and trademark law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">5. Limitations</h2>
                            <p>
                                In no event shall Green Falls Garden Designer or its suppliers be liable for any damages arising out of the use or inability to use the materials on the website, even if Green Falls Garden Designer or an authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">6. Governing Law</h2>
                            <p>
                                Any claim relating to Green Falls Garden Designer's website shall be governed by the laws of the State of Tamil Nadu, India, without regard to its conflict of law provisions.
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

export default Terms;
