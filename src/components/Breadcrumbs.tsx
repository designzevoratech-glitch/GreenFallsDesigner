import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    to?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <nav className="flex mb-6 overflow-x-auto no-scrollbar" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground whitespace-nowrap">
                <li className="flex items-center">
                    <Link
                        to="/"
                        className="hover:text-primary transition-colors flex items-center gap-1"
                    >
                        <Home size={14} />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>

                {items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <ChevronRight size={14} className="text-muted-foreground/40 shrink-0" />
                        {item.to ? (
                            <Link
                                to={item.to}
                                className="hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
