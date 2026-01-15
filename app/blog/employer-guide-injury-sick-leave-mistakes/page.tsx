"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, Activity, AlertOctagon, HeartPulse } from "lucide-react";
// 引入 katex 樣式或使用簡單 CSS 呈現公式

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
                                9 分鐘閱讀
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-bold text-brand-blue leading-tight mb-6">
                            【Zero 實務】工傷與病假的「雷區」：老闆如何預防官司與管理「假病」？
                        </h1>

                        <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                                <Image src="/founder-handshake.png" alt="Zero Wong" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-brand-blue">作者：Zero Wong</p>
                                <p className="text-sm text-slate-500">25年餐飲營運總監 | NLP 高級執行師</p>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image
                                src="/blog-injury.jpg"
                                alt="工傷與病假管理"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            在廚房的油煙與樓面的奔走中，工傷與病假是餐飲老闆永遠的痛。一個員工滑倒，可能導致數十萬的賠償；一個員工頻繁請假，可能癱瘓整個排班系統。
                            <br /><br />
                            25 年來，我管理過 200 人的跨港、粵團隊，我深知處理這些問題不能只靠「法」，更要靠「理」與「術」。
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">一、</span> 工傷處理：黃金 48 小時的關鍵動作
                        </h2>
                        <p>工傷發生時，老闆的第一反應決定了事情的走向。</p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                                    <Activity className="w-5 h-5" /> 即時救治與紀錄
                                </h3>
                                <p className="text-sm text-red-900 mb-0">發生工傷（如切傷、燙傷、跌倒）時，必須即時送醫，並在 <strong>48 小時內</strong> 完成初步內部調查。</p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                                    <Clock className="w-5 h-5" /> 法定期限（呈報 Form 2）
                                </h3>
                                <ul className="list-disc pl-5 text-sm text-blue-900 mb-0 space-y-2">
                                    <li><strong>死亡個案：</strong> 24 小時內呈報。</li>
                                    <li><strong>喪失工作能力超過 3 天：</strong> 14 天內呈報勞工處。</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-slate-100 rounded-xl p-6 mb-8 text-center">
                            <h4 className="text-lg font-bold text-slate-700 mb-4">💰 工傷病假薪酬計法</h4>
                            <div className="inline-block bg-slate-50 px-6 py-4 rounded-lg font-mono text-xl font-bold text-brand-blue border border-slate-200">
                                工傷補償 = 平均日薪 × 4/5 × 工傷病假日數
                            </div>
                            <p className="text-sm text-slate-500 mt-3 mb-0">僱主必須支付「按期付款」，金額為員工受傷前平均工資的五分之四。</p>
                        </div>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">二、</span> 有薪病假：別再為了「醫生紙」與員工硬碰
                        </h2>
                        <p>很多老闆會問：「員工每個月請兩天病假，我一定要給錢嗎？」根據《僱傭條例》，請記住 <strong>「4-1-4」原則</strong>：</p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-4 items-start">
                                <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                <div>
                                    <strong className="text-slate-800">連續 4 天或以上：</strong>
                                    <p className="text-slate-600 text-sm mt-1">員工出示合資格醫生紙（醫護註冊證明），僱主必須支付 4/5 薪金。</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                <div>
                                    <strong className="text-slate-800">累積病假天數：</strong>
                                    <p className="text-slate-600 text-sm mt-1">員工受僱首年每月可累積 2 天 有薪病假，之後每月可累積 4 天（上限 120 天）。</p>
                                </div>
                            </li>
                        </ul>

                        <div className="bg-brand-gold/10 p-4 rounded-lg border-l-4 border-brand-gold mb-8">
                            <p className="font-bold text-brand-navy mb-1">💡 Zero 的管理心法</p>
                            <p className="text-slate-700 mb-0">
                                對於少於 4 天的散假，雖然法律規定可以不付薪金，但在餐飲管理中，我建議建立<strong>「全勤獎金」</strong>制度，用「獎勵」代替「扣錢」，這在心理學上比處罰更能驅動正面行為。
                            </p>
                        </div>


                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">三、</span> NLP 技巧：如何識別與管理「情緒性病假」？
                        </h2>
                        <p>作為 NLP 高級執行師，我發現很多頻繁請假的員工，病根不在身體，而在「心裡」。</p>

                        <div className="space-y-6 mb-8">
                            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-brand-blue mb-2">👁️ 觀察模式 (Calibration)</h4>
                                <p className="text-sm text-slate-600 mb-0">觀察員工請假的規律。是否總是在週末前夕或大節日後？</p>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-brand-blue mb-2">🤝 親和感溝通 (Rapport)</h4>
                                <p className="text-sm text-slate-600 mb-0">復工後進行一次短暫面談。不要用審問的語氣，而是說：「我看你最近身體不太穩定，是不是工作壓力太大，或家裡有需要幫忙的地方？」</p>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-brand-blue mb-2">🔄 重新編程 (Reframing)</h4>
                                <p className="text-sm text-slate-600 mb-0">讓員工意識到他的缺席對團隊（以及他個人獎金）的影響。透過 NLP 的語言技巧，將「逃避工作」轉化為「對團隊的責任感」。</p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">四、</span> 絕對禁區：工傷及有薪病假期間「禁止解僱」
                        </h2>
                        <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertOctagon className="w-6 h-6 text-red-600" />
                                <h3 className="text-xl font-bold text-red-800 m-0">這是老闆最容易被告到破產的雷區</h3>
                            </div>
                            <p className="text-red-900 mb-4">
                                <strong>禁止解僱：</strong> 法律嚴禁僱主解僱正在放「有薪病假」或「工傷病假」的員工。<br />
                                <strong>代價：</strong> 違例者最高可被罰款 10 萬元，且員工可申索不合理解僱賠償。
                            </p>
                            <p className="text-red-800 text-sm font-semibold italic mb-0">
                                即使你對該員工極度不滿，也必須等他復工後，再觀察其表現，按正常程序處理。
                            </p>
                        </div>

                        {/* CTA Box */}
                        <div className="mt-12 text-center border-t border-slate-200 pt-12">
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">想建立完善的病假管理制度？</h3>
                            <p className="mb-8 text-slate-600 max-w-2xl mx-auto">
                                工傷與病假管理不能只靠運氣。如果您需要協助制定員工手冊中的請假條款，或處理複雜的工傷個案，歡迎諮詢。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/consultation">
                                    <button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                                        <HeartPulse className="w-5 h-5" /> 預約管理諮詢
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold transition-all">
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
                            {["工傷賠償", "有薪病假", "勞工法例", "Zero實務", "請假管理"].map(tag => (
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
