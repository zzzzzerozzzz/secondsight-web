"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after a small delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed bottom-10 right-10 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link
                href="https://wa.me/85266925445"
                target="_blank"
                className="group relative flex items-center gap-4 px-8 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
                aria-label="Contact us on WhatsApp"
            >
                {/* Continuous Pulse Effect */}
                <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-20 animate-ping duration-[2000ms]"></span>
                <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-pulse duration-[2000ms]"></span>

                <MessageCircle className="w-10 h-10 relative z-10 stroke-[2.5px]" />

                <div className="flex flex-col relative z-10 text-left">
                    <span className="text-sm font-semibold text-green-100 leading-none mb-1">即時專人回覆</span>
                    <span className="text-xl font-bold tracking-wide leading-none text-white">WhatsApp 諮詢</span>
                </div>
            </Link>
        </div>
    );
}
