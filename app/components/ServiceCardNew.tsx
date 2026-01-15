import Image from "next/image";

export default function ServiceCardNew({ title, desc, bgImage, colSpan }: { title: string, desc: string, bgImage: string, colSpan: string }) {
    return (
        <div className={`relative group overflow-hidden rounded-2xl shadow-lg border border-slate-100 h-full min-h-[320px] ${colSpan}`}>
            {/* Background Image */}
            <Image
                src={bgImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay - White with high opacity to match the reference design where text is on a light background */}
            <div className="absolute inset-0 bg-white/90 group-hover:bg-white/95 transition-all duration-300"></div>

            {/* Content */}
            <div className="relative p-8 h-full flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-brand-blue mb-4">{title}</h4>
                <p className="text-slate-600 leading-relaxed text-justify text-sm md:text-base">{desc}</p>

                {/* Decorative line or icon could go here if needed, keeping it clean for now */}
                <div className="mt-6 w-12 h-1 bg-brand-gold/30 group-hover:w-20 group-hover:bg-brand-gold transition-all duration-300"></div>
            </div>
        </div>
    )
}
