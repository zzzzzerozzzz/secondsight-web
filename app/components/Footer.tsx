"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="gradient-guangzhou-hongkong text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <span className="text-2xl font-bold text-white block mb-2">
                            粵港外勞<span className="text-brand-gold">事務所</span>
                        </span>
                        <p className="text-sm text-slate-400">Copyright © 2025 All Rights Reserved.</p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">隱私政策</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">服務條款</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">聯繫我們</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
