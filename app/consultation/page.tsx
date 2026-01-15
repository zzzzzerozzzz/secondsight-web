"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, User, Briefcase, Phone, Mail, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConsultationPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        requirements: ""
    });

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `你好，我想預約跨境勞務諮詢：\n` +
            `姓名：${formData.name}\n` +
            `公司：${formData.company || "未提供"}\n` +
            `電郵：${formData.email}\n` +
            `電話：${formData.phone}\n` +
            `選擇服務：${formData.service || "未選擇"}\n` +
            `首選日期：${formData.preferredDate}\n` +
            `首選時間：${formData.preferredTime}\n\n` +
            `需求說明：\n${formData.requirements || "無"}`;

        const url = `https://wa.me/85266925445?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl font-bold text-brand-blue mb-6">預約專業諮詢</h1>
                        <p className="text-xl text-slate-600">
                            填寫以下資料，我們的專業顧問將為您提供一對一諮詢服務
                        </p>
                    </div>
                </div>
            </section>

            {/* Consultation Form */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Progress Steps */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between">
                            {[1, 2, 3, 4].map((s) => (
                                <div key={s} className="flex items-center flex-1">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${s <= step ? 'bg-brand-blue text-white' : 'bg-slate-200 text-slate-500'
                                        }`}>
                                        {s < step ? <CheckCircle className="w-6 h-6" /> : s}
                                    </div>
                                    {s < 4 && (
                                        <div className={`flex-1 h-1 mx-2 ${s < step ? 'bg-brand-blue' : 'bg-slate-200'}`}></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-slate-600">
                            <span>基本資料</span>
                            <span>服務選擇</span>
                            <span>預約時間</span>
                            <span>需求說明</span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                        {/* Step 1: Basic Info */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-brand-blue mb-6">基本資料</h2>
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
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">公司名稱</label>
                                    <input
                                        id="company"
                                        type="text"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
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
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">電話 *</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            required
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Service Selection */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-brand-blue mb-6">選擇服務類型</h2>
                                <div className="space-y-3">
                                    {[
                                        { value: "外勞申請", label: "外勞申請專案" },
                                        { value: "其他", label: "其他服務" }
                                    ].map((service) => (
                                        <label key={service.value} className="flex items-center p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-brand-blue transition-colors">
                                            <input
                                                type="radio"
                                                name="service"
                                                value={service.value}
                                                checked={formData.service === service.value}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-5 h-5 text-brand-blue"
                                            />
                                            <span className="ml-3 font-medium text-slate-700">{service.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Preferred Date/Time */}
                        {step === 3 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-brand-blue mb-6">預約時間</h2>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">首選日期 *</label>
                                    <input
                                        id="date"
                                        type="date"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                        value={formData.preferredDate}
                                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-slate-700 mb-2">首選時間 *</label>
                                    <select
                                        id="time"
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                                        value={formData.preferredTime}
                                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                    >
                                        <option value="">請選擇...</option>
                                        <option value="09:00-10:00">09:00 - 10:00</option>
                                        <option value="10:00-11:00">10:00 - 11:00</option>
                                        <option value="11:00-12:00">11:00 - 12:00</option>
                                        <option value="14:00-15:00">14:00 - 15:00</option>
                                        <option value="15:00-16:00">15:00 - 16:00</option>
                                        <option value="16:00-17:00">16:00 - 17:00</option>
                                    </select>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <p className="text-sm text-slate-600">
                                        <strong>注意：</strong>我們會在收到您的預約後盡快與您聯繫確認具體時間。
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Requirements */}
                        {step === 4 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-brand-blue mb-6">需求說明</h2>
                                <div>
                                    <label htmlFor="requirements" className="block text-sm font-medium text-slate-700 mb-2">請簡述您的需求</label>
                                    <textarea
                                        id="requirements"
                                        rows={6}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                                        value={formData.requirements}
                                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                        placeholder="例如：需要申請多少名外勞、預計開始時間、特殊要求等..."
                                    ></textarea>
                                </div>
                                <div className="bg-green-50 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-3">諮詢流程</h3>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>提交預約後，我們會在24小時內與您聯繫確認</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>專業顧問將為您提供30-60分鐘的一對一諮詢</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span>諮詢後將為您提供詳細的服務方案和報價</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all"
                                >
                                    上一步
                                </button>
                            )}
                            {step < 4 ? (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="ml-auto gradient-guangzhou-hongkong hover:opacity-90 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
                                >
                                    下一步 <ArrowRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="ml-auto gradient-guangzhou-hongkong hover:opacity-90 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
                                >
                                    以 WhatsApp 提交預約 <MessageSquare className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </form>

                    {/* Quick Contact */}
                    <div className="mt-8 bg-gradient-to-r from-brand-blue to-brand-red p-8 rounded-2xl text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">需要即時協助？</h3>
                        <p className="mb-6">通過 WhatsApp 與我們的專業顧問直接對話</p>
                        <a
                            href="https://wa.me/85266925445"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-brand-blue hover:bg-slate-100 px-8 py-3 rounded-xl font-semibold transition-all"
                        >
                            WhatsApp 即時諮詢
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
