import { cn } from "@/lib/utils";

interface BrandLogoProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
    const sizeClasses = {
        sm: "text-lg",
        md: "text-2xl",
        lg: "text-4xl",
        xl: "text-6xl"
    };

    return (
        <div className={cn("flex items-end text-white select-none", sizeClasses[size], className)}>
            <div className="flex items-start">
                <span className="font-serif leading-[0.8] tracking-tighter">IX</span>
                <span className="text-[0.35em] font-sans font-black uppercase tracking-tight leading-none -mt-[0.1em] ml-0.5">th</span>
            </div>
            <span className="font-sans font-bold uppercase tracking-[0.05em] leading-[0.8] ml-1.5 text-balance">Cloud Studio</span>
        </div>
    );
}
