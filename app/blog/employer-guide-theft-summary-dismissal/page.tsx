"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, AlertTriangle, ShieldCheck, Camera, FileText, Gavel, Users } from "lucide-react";

export default function ArticlePage() {
    return (
        <div className="min-h-screen font-sans selection:bg-brand-navy/10">
            <Navbar />

            <main className="pt-32 pb-20 bg-white">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Breadcrumb */}
                    <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-brand-blue mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        返回文章列表
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-4 mb-6 text-sm">
                            <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold font-semibold rounded-full">
                                Zero專欄
                            </span>
                            <span className="flex items-center text-slate-500">
                                <Calendar className="w-4 h-4 mr-2" />
                                2026-01-13
                            </span>
                            <span className="flex items-center text-slate-500">
                                <Clock className="w-4 h-4 mr-2" />
                                8 分鐘閱讀
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-bold text-brand-blue leading-tight mb-6">
                            【Zero 實戰課】員工偷竊怎麼辦？餐飲老闆必學：合法「即時解僱」與證據處理 4 部曲
                        </h1>

                        <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                                <Image src="/founder-handshake.png" alt="Zero Wong" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-brand-blue">作者：Zero Wong</p>
                                <p className="text-sm text-slate-500">25年餐飲營運專家 | NLP 高級執行師</p>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image
                                src="/blog-theft.jpg"
                                alt="員工偷竊處理"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            在 25 年的餐飲生涯中，最讓我痛心的不是業績下滑，而是「信任的崩塌」。當發現朝夕相處的員工涉嫌偷竊，很多老闆的第一反應是憤怒，甚至想衝過去當眾拆穿。
                            <br /><br />
                            但作為一個營運總監，我必須冷靜地提醒你：處理不當，你可能會從「受害者」變成勞工處的「被告」。
                        </p>

                        <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-12">
                            <h3 className="text-xl font-bold text-red-800 mb-2 mt-0 flex items-center gap-2">
                                <Gavel className="w-5 h-5" /> 法律基礎：《僱傭條例》第 9 條
                            </h3>
                            <p className="text-red-900 mb-0">
                                偷竊屬於「嚴重過失」，僱主可以行使<strong>即時解僱（Summary Dismissal）</strong>，且不需支付代通知金。但前提是，你的程序必須滴水不漏。
                            </p>
                        </div>

                        {/* Step 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-base">1</span>
                            第一步：證據搜集（絕不能只靠「聽說」）
                        </h2>
                        <p>法律只相信證據。在餐飲環境中，你必須先掌握以下其中一項：</p>

                        <div className="grid md:grid-cols-2 gap-4 my-6">
                            <div className="bg-white border border-slate-200 p-4 rounded-lg flex gap-3">
                                <Camera className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-800 mt-0">閉路電視 (CCTV)</h4>
                                    <p className="text-sm text-slate-600 mb-0">確保畫面清晰，能清楚看到涉事人的動作、時間、財物特徵。</p>
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 p-4 rounded-lg flex gap-3">
                                <FileText className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-800 mt-0">POS 系統紀錄</h4>
                                    <p className="text-sm text-slate-600 mb-0">如果涉及「刪單」、「偷跳（Void 單）」，必須導出系統 Log。</p>
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 p-4 rounded-lg flex gap-3">
                                <Users className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-800 mt-0">人證</h4>
                                    <p className="text-sm text-slate-600 mb-0">必須有其他同事的書面證供。</p>
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 p-4 rounded-lg flex gap-3">
                                <ShieldCheck className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-800 mt-0">物證</h4>
                                    <p className="text-sm text-slate-600 mb-0">例如在員工私人置物櫃中發現公司財物（需符合搜查程序）。</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-base">2</span>
                            第二步：NLP 式的面談心理術
                        </h2>
                        <p>掌握證據後，不要急著報警，先進行內部面談。作為 NLP 高級執行師，我建議面談時要注意：</p>
                        <ul className="list-disc pl-6 space-y-3 mb-6">
                            <li><strong>營造環境：</strong> 找一個安靜、有第三者在場（如副經理）的房間。</li>
                            <li><strong>開放式提問：</strong> 不要直接說「你為什麼偷錢？」，而是說「最近收銀帳目有些出入，關於這部分你有什麼想說明的嗎？」。</li>
                            <li><strong>觀察行為模式（Body Language）：</strong> 觀察對方的微表情和語言漏洞。如果對方主動承認，務必讓他簽署一份<strong>「自願承認書」</strong>。</li>
                        </ul>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-brand-gold">
                            <p className="font-bold text-brand-blue mb-1">💡 Zero 的管理心法</p>
                            <p className="text-slate-700 mb-0">承認書是最強有力的證據，能避免日後員工反口說是「老闆威逼利誘」。</p>
                        </div>

                        {/* Step 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-base">3</span>
                            第三步：即時解僱的合法執行
                        </h2>
                        <p>如果你決定即時解僱（不賠代通知金），你必須在解僱信中寫明：</p>

                        <div className="space-y-4 mb-8">
                            <div className="border border-slate-200 p-4 rounded-lg">
                                <h4 className="font-bold text-slate-800 mt-0 mb-2">1. 解僱理由</h4>
                                <p className="mb-0 text-slate-600">引用《僱傭條例》第 9 條，明確指出其嚴重過失（偷竊）。</p>
                            </div>
                            <div className="border border-slate-200 p-4 rounded-lg">
                                <h4 className="font-bold text-slate-800 mt-0 mb-2">2. 最後薪金結算</h4>
                                <p className="mb-0 text-slate-600">即使是即時解僱，你仍然要支付截至解僱當刻的工資及未放的年假薪酬。</p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg flex gap-3 items-start mb-8">
                            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                            <p className="text-yellow-800 text-sm mb-0">
                                <strong>注意：</strong>你不能直接「沒收」員工工資來抵消偷竊損失。法律上，扣薪必須經過特定程序或報警處理。
                            </p>
                        </div>

                        {/* Step 4 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-base">4</span>
                            第四步：報警還是私了？
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2">🚓 報警</h3>
                                <p className="text-slate-600">這是最強的合法證明。如果未來員工告上勞工處，有警察報案編號（RN）對老闆極其有利。</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 mb-2">🤝 私了</h3>
                                <p className="text-slate-600">如果金額極小，且員工簽署了辭職信與承認書，有些老闆會選擇放過。</p>
                            </div>
                        </div>

                        <div className="bg-slate-100 p-6 rounded-xl mb-12">
                            <h4 className="font-bold text-brand-blue mb-2">Zero 的專業建議</h4>
                            <p className="text-slate-700 italic mb-0">
                                對於「偷竊」這種行為，我一向主張零容忍。在管理 200 人的團隊時，一旦開了「私了」的先例，團隊的誠信文化就會崩解。
                            </p>
                        </div>

                        {/* Growth Section */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6">如何從源頭杜絕「內賊」？（增長管理思維）</h2>
                        <p>與其在事後賠錢賠心力，不如從管理體系下手：</p>

                        <ul className="space-y-4 mb-12">
                            <li className="flex gap-3">
                                <ShieldCheck className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                <span><strong>精準篩選人才：</strong> 在我的「粵港外勞事務所」，我們會利用 NLP 心理測評與嚴格的背景調查，從源頭剔除高風險候選人。</span>
                            </li>
                            <li className="flex gap-3">
                                <Camera className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                <span><strong>完善收銀系統：</strong> 2026 年，數位支付與 AI 視覺監控已經很成熟，將「人」接觸現金的機會降到最低。</span>
                            </li>
                            <li className="flex gap-3">
                                <Users className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                <span><strong>持續學習與文化建設：</strong> 讓員工明白，公司的成長（Growth）與他們的誠信掛鉤。</span>
                            </li>
                        </ul>

                        <p className="text-xl font-bold text-center text-slate-800 border-t border-slate-200 pt-8 mt-12">
                            管理的本質是人性，而好的制度是為了不給人性軟弱的機會。
                        </p>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-8 text-white text-center mt-12">
                            <h3 className="text-2xl font-bold mb-4">想建立一套「防弊」的營運體系？</h3>
                            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                                如果你正遇到棘手的勞資問題，或者想了解如何提升團隊的誠信文化，歡迎與我交流。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/consultation">
                                    <button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all">
                                        預約營運諮詢
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all">
                                        聯絡我們
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-slate-500 text-sm flex items-center mr-2">
                                <Tag className="w-4 h-4 mr-1" /> 標籤：
                            </span>
                            {["即時解僱", "員工偷竊", "勞務糾紛", "Zero實戰課", "危機處理"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-brand-gold/20 hover:text-brand-gold transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    );
}
