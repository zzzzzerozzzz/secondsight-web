"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, Users, TrendingUp, Heart, Target, Star, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 bg-gradient-to-br from-blue-50 to-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-brand-blue text-sm font-semibold mb-8 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                            SINCE 2000
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-brand-blue mb-6 leading-[1.2] tracking-tight">
                            20年專業深耕<br />
                            <span className="text-gradient-dual">粵港跨境勞務領航者</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            我們不只提供勞力，更提供連結粵港兩地繁榮的橋樑。
                            <br className="hidden md:block" />
                            致力於為企業注入高效動能，為人才搭建夢想舞台。
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Stats Section - Digital Milestones */}
            <section className="py-16 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "20+", label: "年飲食行業經驗", sub: "F&B Focus" },
                            { number: "10k+", label: "成功案例", sub: "Trust by Clients" },
                            { number: "98%", label: "簽證批核率", sub: "High Success Rate" },
                            { number: "50+", label: "資深顧問團隊", sub: "Professional Team" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-lg font-bold text-slate-800 mb-1">{stat.label}</div>
                                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Story Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                                <Image
                                    src="/hero.png"
                                    alt="Our Story"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl -z-0"></div>
                            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -z-0"></div>
                        </div>

                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-blue/5 text-brand-blue text-xs font-bold tracking-widest uppercase mb-6">
                                The Story
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                源於廣州，立足香港<br />
                                服務大灣區的<span className="text-brand-blue">人力引擎</span>
                            </h2>

                            <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
                                <p>
                                    粵港外勞事務所成立於2000年，見證了珠三角到大灣區的每一次經濟騰飛。作為最早從事跨境勞務服務的專業機構之一，我們始終扮演著「橋樑」與「潤滑劑」的角色。
                                </p>
                                <p>
                                    20年來，我們建立了一套標準化、高效率的 SOP 流程。從人才篩選、技能培訓、證件辦理到跨境接送，每一個環節都精益求精。我們深知，每一個外勞名額背後，都承載著一個企業的產能需求，和一個家庭的生計希望。
                                </p>

                                <div className="mt-8 p-6 bg-white border-l-4 border-brand-gold rounded-r-xl shadow-sm">
                                    <p className="text-slate-800 font-medium italic mb-2">
                                        「我們的核心優勢不在於『中介』，而在於『解決方案』。我們解決的不只是缺人問題，而是企業整體的用工效率與合規風險。」
                                    </p>
                                    <p className="text-sm text-slate-500 font-bold">— 創辦人寄語</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">核心價值觀</h2>
                        <p className="text-2xl font-bold text-slate-700 mt-2 tracking-wide">
                            支撐我們走過 <span className="text-brand-gold text-3xl mx-1">20</span> 年的信念
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100 group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                                <Heart className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">誠信為本</h3>
                            <p className="text-slate-600 leading-relaxed">
                                不誇大、不隱瞞。我們堅持透明化的收費與流程，因為我們相信，信任是跨境合作最寶貴的資產。
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100 group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">專業至上</h3>
                            <p className="text-slate-600 leading-relaxed">
                                團隊由資深勞務專家、法律顧問組成。我們對兩地法規的精準解讀，能為您規避 99% 的合規風險。
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100 group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">以人為本</h3>
                            <p className="text-slate-600 leading-relaxed">
                                善待每一位勞工，就是善待企業的生產力。我們提供完善的崗前心理輔導與住宿安排，確保員工穩定性。
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-brand-blue mb-6">想了解更多合作細節？</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        歡迎預約我們的資深顧問，進行一對一的免費諮詢
                    </p>
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <button className="gradient-guangzhou-hongkong text-white px-12 py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl transition-all transform hover:scale-105 hover:shadow-brand-blue/50 inline-flex items-center justify-center gap-3 ring-4 ring-blue-100/50 w-auto">
                                立即聯繫我們 <ArrowRight className="w-6 h-6 animate-pulse" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
