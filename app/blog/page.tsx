"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

// SEO優化文章數據
const articles = [
    {
        id: 104,
        slug: "employer-guide-injury-sick-leave-mistakes",
        title: "【Zero 實務】工傷與病假的「雷區」：老闆如何預防官司與管理「假病」？",
        excerpt: "一個員工滑倒可能導致數十萬賠償！Zero Wong 親授「黃金48小時」工傷處理法，以及如何運用 NLP 技巧識別「情緒性病假」，避免誤踩解僱紅線。",
        category: "Zero專欄",
        readTime: "9 分鐘",
        date: "2026-01-13",
        image: "/blog-injury.jpg",
        featured: true,
    },
    {
        id: 103,
        slug: "employer-guide-3-steps-dismissal-calculator",
        title: "【老闆必看】解僱員工的 3 個合法步驟與賠償計算機：25 年總監的避險指南",
        excerpt: "解僱不是「補錢」這麼簡單！25年營運總監為你總結「3 步驟合法解僱流程」與 2026 最新賠償計算公式，助你果斷優化團隊，避免法律風險。",
        category: "Zero專欄",
        readTime: "8 分鐘",
        date: "2026-01-13",
        image: "/blog-dismissal-steps.png",
        featured: true,
    },
    {
        id: 102,
        slug: "negotiation-settlement-psychology",
        title: "【Zero 談判課】勞工處和解不是打官司，是心理戰！營運總監的 3 大和解心法",
        excerpt: "調解室不是法庭！Zero Wong 教你如何運用 NLP 建立親和感、處理員工情緒，並透過「黃金橋樑」策略讓雙方體面撤訴，省下巨額律師費。",
        category: "Zero專欄",
        readTime: "10 分鐘",
        date: "2026-01-13",
        image: "/blog-negotiation.jpg",
        featured: true,
    },
    {
        id: 101,
        slug: "mpf-offsetting-prevention-guide",
        title: "【2026 新制】強積金對沖已成歷史：長期服務金怎麼計？老闆如何應對成本上漲？",
        excerpt: "進入後對沖時代，解僱老員工到底要自掏腰包多少？Zero Wong 帶你實戰計算「標叔」案例，詳解政府資助計劃及如何從「匱乏思維」轉向「投資人才」。",
        category: "Zero專欄",
        readTime: "12 分鐘",
        date: "2026-01-13",
        image: "/blog-mpf.png",
        featured: true,
    },
    {
        id: 100,
        slug: "employer-guide-theft-summary-dismissal",
        title: "【Zero 實戰課】員工偷竊怎麼辦？餐飲老闆必學：合法「即時解僱」與證據處理 4 部曲",
        excerpt: "當發現員工涉嫌偷竊，千萬別只會憤怒！25年營運總監教你如何搜集證據、運用NLP面談心理術、以及執行合法的即時解僱程序。",
        category: "Zero專欄",
        readTime: "8 分鐘",
        date: "2026-01-13",
        image: "/blog-theft.jpg",
        featured: true,
    },
    {
        id: 99,
        slug: "employer-guide-dismissal-laws-2026",
        title: "【Zero 專欄】僱主必讀：解僱員工只是「補錢」這麼簡單？25年營運總監教你合法避險",
        excerpt: "【Zero的提醒】25年營運總監親自拆解解僱員工的最新法律紅線。詳解2026最新賠償清單、強積金對沖取消影響及NLP預期管理心法。",
        category: "Zero專欄",
        readTime: "10 分鐘",
        date: "2026-01-13",
        image: "/blog-dismissal-law-new.png",
        featured: true,
    },
    {
        id: 1,
        slug: "hong-kong-foreign-labor-application-guide-2024",
        title: "【2024最新】香港外勞申請完整攻略：流程、費用、時間一次看懂",
        excerpt: "完整解析香港輸入外勞計劃申請流程，包括補充勞工優化計劃詳細步驟、所需文件清單、費用明細及審批時間。助您快速了解如何合法聘用內地勞工。",
        category: "申請指南",
        readTime: "15 分鐘",
        date: "2024-01-10",
        image: "/hero.png",
        featured: true,
    },
    {
        id: 2,
        slug: "slsp-supplementary-labor-scheme-explained",
        title: "補充勞工優化計劃（SLSP）深度解讀：26個行業開放申請",
        excerpt: "詳細介紹補充勞工優化計劃的適用行業、申請資格、配額限制及最新政策更新。了解餐飲、零售、建造業如何透過計劃解決人手短缺問題。",
        category: "政策解讀",
        readTime: "12 分鐘",
        date: "2024-01-08",
        image: "/service_interview.png",
        featured: true,
    },
    {
        id: 3,
        slug: "foreign-labor-cost-analysis",
        title: "【深度分析】外勞成本全披露：僱主必須收藏的費用清單（2026 版）",
        excerpt: "請外勞不只看薪水！Zero Wong 拆解 Levy、住宿、隱藏成本結構，並提供 Python ROI 計算模型，教你如何精算每一分錢的投入產出比。",
        category: "Zero專欄",
        readTime: "10 分鐘",
        date: "2026-01-13",
        image: "/blog-cost-analysis-2026.png",
        featured: false,
    },
    {
        id: 4,
        slug: "restaurant-industry-labor-shortage-solution",
        title: "【營運心法】餐飲業人手荒解藥：如何透過外勞計劃穩定增長？",
        excerpt: "Zero Wong 拆解如何用 ROI 數學打破「加薪請人」迷思，並利用「30/70 混合團隊」架構，讓你的餐廳從「救火」轉向「增長」。",
        category: "行業專題",
        readTime: "8 分鐘",
        date: "2026-01-13",
        image: "/blog-restaurant-labor.png",
        featured: false,
    },
    {
        id: 5,
        slug: "foreign-labor-interview-tips",
        title: "【Zero 專家課】外勞面試別只看履歷！如何用 NLP 識人術挑選「長效型」員工",
        excerpt: "Zero Wong 分享 25 年面試經驗，教你用「場景模擬題」測技術，用 NLP 測「動機」，並用獨家公式算出人才真實價值。",
        category: "招聘技巧",
        readTime: "7 分鐘",
        date: "2026-01-13",
        image: "/blog-interview-nlp.png",
        featured: false,
    },
    {
        id: 6,
        slug: "labor-law-compliance-guide",
        title: "【避險指南】香港外勞僱傭法規全攻略：25 年營運總監教你如何合法「避雷」",
        excerpt: "Zero Wong 整理外勞法規核心清單與刑事紅線，結合 NLP 預防心理，助你避開勞資糾紛與法律地雷。",
        category: "法規合規",
        readTime: "12 分鐘",
        date: "2026-01-13",
        image: "/blog-law-compliance.png",
        featured: false,
    },
];

const categories = ["全部", "申請指南", "政策解讀", "成本分析", "行業專題", "招聘技巧", "法規合規"];

export default function BlogPage() {
    const featuredArticles = articles.filter(a => a.featured);
    const regularArticles = articles.filter(a => !a.featured);

    return (
        <div className="min-h-screen font-sans selection:bg-brand-navy/10">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-sm font-semibold tracking-wide mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                            專業知識分享
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6">
                            外勞申請<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">資訊中心</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            深入了解香港外勞政策、申請流程、行業趨勢及實用技巧。<br className="hidden md:block" />
                            助您做出明智的人力資源決策。
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-6 border-b border-slate-200 sticky top-20 bg-white/95 backdrop-blur-sm z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${category === "全部"
                                    ? "bg-brand-blue text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-8 flex items-center gap-2">
                        <span className="w-1 h-6 bg-brand-gold rounded-full"></span>
                        精選文章
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {featuredArticles.map((article) => (
                            <Link href={`/blog/${article.slug}`} key={article.id}>
                                <article className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300">
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-brand-gold text-white text-xs font-semibold rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-sm text-slate-500">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {article.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {article.readTime}
                                                </span>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Articles */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-brand-blue mb-8 flex items-center gap-2">
                        <span className="w-1 h-6 bg-brand-blue rounded-full"></span>
                        所有文章
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularArticles.map((article) => (
                            <Link href={`/blog/${article.slug}`} key={article.id}>
                                <article className="group bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 h-full">
                                    <div className="relative h-40 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-0.5 bg-brand-blue/90 text-white text-xs font-medium rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 text-xs text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {article.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-navy">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        需要專業的外勞申請協助？
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        我們擁有 25 年行業經驗，為超過 20 個品牌提供人力資源解決方案。<br className="hidden md:block" />
                        立即聯繫我們，讓專家為您解答所有疑問。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/consultation">
                            <button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-4 rounded-xl font-semibold shadow-xl transition-all flex items-center justify-center gap-2">
                                免費諮詢 <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition-all">
                                聯繫我們
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
