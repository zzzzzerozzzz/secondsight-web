"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`[網站諮詢] ${formData.service} - ${formData.name}`);
        const body = encodeURIComponent(
            `姓名: ${formData.name}\n` +
            `電話: ${formData.phone}\n` +
            `電郵: ${formData.email}\n` +
            `服務類型: ${formData.service}\n\n` +
            `訊息內容:\n${formData.message}`
        );

        window.location.href = `mailto:ZEROWONG5@GMAIL.COM?subject=${subject}&body=${body}`;
    };

    return (
        <div className="min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl font-bold text-brand-blue mb-6">聯繫我們</h1>
                        <p className="text-xl text-slate-600">
                            我們隨時準備為您提供專業的跨境勞務服務
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold text-brand-blue mb-6">發送訊息</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">姓名 *</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">電郵 *</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">電話</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}

                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">服務類型 *</label>
                                    <select
                                        id="service"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}

                                    >
                                        <option value="">請選擇...</option>
                                        <option value="外勞申請專案">外勞申請專案</option>
                                        <option value="跨境工作證申請">跨境工作證申請</option>
                                        <option value="跨境人力資源諮詢">跨境人力資源諮詢</option>
                                        <option value="其他">其他</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">訊息內容 *</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}

                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full gradient-guangzhou-hongkong hover:opacity-90 text-white py-4 rounded-xl font-semibold shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    發送訊息
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-brand-blue mb-6">聯繫方式</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-1">電話</h4>
                                            <p className="text-slate-600">香港: +852 6692 5445</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-1">電郵</h4>
                                            <p className="text-slate-600">ZEROWONG5@GMAIL.COM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-1">營業時間</h4>
                                            <p className="text-slate-600">週一至週日: 9:00 - 18:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-brand-blue to-brand-red p-8 rounded-2xl shadow-lg text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageSquare className="w-8 h-8" />
                                    <h3 className="text-2xl font-bold">WhatsApp 即時諮詢</h3>
                                </div>
                                <p className="mb-6 text-white/90">
                                    需要即時協助？通過 WhatsApp 與我們的專業顧問直接對話
                                </p>
                                <a
                                    href="https://wa.me/85266925445"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-white text-brand-blue hover:bg-slate-100 py-3 rounded-xl font-semibold text-center transition-all"
                                >
                                    開始 WhatsApp 對話
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-brand-blue mb-8">其他快速連結</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/services">
                            <button className="w-full bg-white border-2 border-slate-200 hover:border-brand-blue text-slate-700 hover:text-brand-blue py-4 rounded-xl font-semibold transition-all">
                                查看服務
                            </button>
                        </Link>
                        <Link href="/faq">
                            <button className="w-full bg-white border-2 border-slate-200 hover:border-brand-blue text-slate-700 hover:text-brand-blue py-4 rounded-xl font-semibold transition-all">
                                常見問題
                            </button>
                        </Link>
                        <Link href="/apply">
                            <button className="w-full bg-white border-2 border-slate-200 hover:border-brand-blue text-slate-700 hover:text-brand-blue py-4 rounded-xl font-semibold transition-all">
                                開始申請
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
