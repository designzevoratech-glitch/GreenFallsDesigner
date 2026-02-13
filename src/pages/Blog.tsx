
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { blogs } from "@/data/blogData";
import { Calendar, User } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import PageHeader from "@/components/PageHeader";
import heroImg from "@/assets/hero_garden_comp.jpg";
import serviceLandscape from "@/assets/service-landscape.jpg";
import serviceWater from "@/assets/service-water.jpg";

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

    return (
        <main className="pt-16 pb-20">
            <SEO
                title="Gardening Blog & Tips"
                description="Expert gardening tips, landscaping ideas, and green living inspiration shared by our experienced horticulturists in Coimbatore."
                canonical="/blog"
                keywords="gardening tips coimbatore, landscaping blog tamil nadu, terrace garden ideas coimbatore, lawn maintenance tips, green falls blog"
            />
            <PageHeader
                title="Gardening Tips & Landscaping Blog – Coimbatore"
                subtitle="Expert gardening tips, landscaping ideas, and green living inspiration shared by our experienced horticulturists serving Coimbatore since 1975."
                images={[heroImg, serviceLandscape, serviceWater]}
            />
            <div className="container mx-auto px-4 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                            onClick={() => setSelectedBlog(blog)}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={`${blog.title} – Gardening Blog by Green Falls Garden Designer Coimbatore`}
                                    title={blog.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                                        {blog.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {blog.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                                    {blog.content}
                                </p>
                                <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-1">
                                    Read More
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
                <DialogContent className="max-w-3xl h-[80vh] p-0 overflow-hidden flex flex-col">
                    {selectedBlog && (
                        <>
                            <div className="relative h-64 shrink-0">
                                <img
                                    src={selectedBlog.image}
                                    alt={selectedBlog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <div>
                                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full mb-2 inline-block">
                                            {selectedBlog.category}
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                                            {selectedBlog.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <ScrollArea className="flex-1 p-6 lg:p-10">
                                <div className="prose prose-green max-w-none text-foreground/90">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={16} /> {selectedBlog.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User size={16} /> Green Falls Team
                                        </span>
                                    </div>
                                    <div className="whitespace-pre-wrap leading-relaxed">
                                        {selectedBlog.content}
                                    </div>
                                </div>
                            </ScrollArea>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </main>
    );
};

export default Blog;
