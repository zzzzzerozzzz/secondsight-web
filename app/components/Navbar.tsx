"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: '核心服務', href: '/services' },
        { label: '文章', href: '/blog' },
        { label: '關於我們', href: '/about' },
        { label: '聯繫我們', href: '/contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
            : 'bg-white/50 backdrop-blur-sm border-b border-white/20 py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative overflow-hidden rounded-full border-2 border-transparent group-hover:border-brand-gold transition-all duration-300">
                            <Image src="/logo.jpg" alt="Yue Gang Logo" width={56} height={56} className="transform group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <span className="text-2xl lg:text-3xl font-semibold text-brand-blue tracking-tight">
                            粵港外勞<span className="text-brand-gold">事務所</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors relative group py-2"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link href="/consultation">
                            <button className="bg-brand-gold hover:bg-yellow-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95">
                                立即諮詢 <ChevronRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
