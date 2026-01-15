"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, Calculator, TrendingUp, AlertCircle, Banknote, UserCheck } from "lucide-react";

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
                                12 分鐘閱讀
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-bold text-brand-blue leading-tight mb-6">
                            【2026 新制】強積金對沖已成歷史：長期服務金怎麼計？
                            <span className="block text-2xl lg:text-3xl text-slate-500 font-normal mt-4">
                                老闆如何應對成本上漲？
                            </span>
                        </h1>

                        <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                                <Image src="/founder-handshake.png" alt="Zero Wong" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-brand-blue">作者：Zero Wong</p>
                                <p className="text-sm text-slate-500">25年餐飲營運總監 | 粵港外勞事務所創辦人</p>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image
                                src="/blog-mpf.png"
                                alt="MPF Offset Abolition"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            進入 2026 年，香港的勞資環境已經進入了「後對沖時代」。自 2025 年 5 月 1 日「取消對沖」正式生效以來，我收到最多的詢問就是：「Zero，現在解僱一個做很久的員工，我到底要自掏腰包賠多少？」
                            <br /><br />
                            作為一個管理過 200 人團隊的營運者，我必須告訴你：以前那套靠強積金「填數」的日子已經過去了。 如果你還在用舊思維計數，你的財務預算將會出現巨大缺口。
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">.01</span> 核心概念：2025 年 5 月 1 日的「劃線」
                        </h2>
                        <div className="bg-brand-blue/5 p-6 rounded-xl mb-8">
                            <p className="mb-4">要學會 2026 年的計法，你必須記住這個日期。長期服務金（LSP）現在被切分為兩部分：</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500">
                                    <h3 className="text-xl font-bold text-slate-800 mt-0 mb-3">2025年5月1日 之前</h3>
                                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full mb-4">
                                        仍可對沖 ✅
                                    </div>
                                    <p className="text-sm text-slate-600 mb-0">
                                        僱主<strong>可以</strong>用強積金供款的累算權益來抵銷這部分的長服金。<br />
                                        <strong>計算基數：使用轉職前最後一個月的工資。</strong>
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-red-500">
                                    <h3 className="text-xl font-bold text-slate-800 mt-0 mb-3">2025年5月1日 之後</h3>
                                    <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-bold rounded-full mb-4">
                                        完全不能對沖 ❌
                                    </div>
                                    <p className="text-sm text-slate-600 mb-0">
                                        僱主必須<strong>全數自行支付</strong>，不能動用強積金供款。<br />
                                        <strong>計算基數：使用解僱前最後一個月的工資。</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-100 p-4 rounded-lg flex gap-3 items-center">
                            <AlertCircle className="w-6 h-6 text-brand-blue" />
                            <p className="text-slate-700 text-sm mb-0 italic">
                                <strong>Zero 的營運點評：</strong> 這意味著員工留得越久，你的「硬成本」就越高。這對餐飲業這種依賴老員工的行業來說，是一個巨大的財務轉變。
                            </p>
                        </div>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">.02</span> 實戰計算：以老臣子「標叔」為例
                        </h2>
                        <div className="border border-slate-200 rounded-xl overflow-hidden mb-8">
                            <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center gap-3">
                                <UserCheck className="w-5 h-5 text-brand-gold" />
                                <span className="font-bold text-slate-700">案例背景</span>
                            </div>
                            <div className="p-6">
                                <p className="mb-4">假設中菜館領班標叔，月薪 <strong>$22,500</strong>（剛好是計法上限），於 <strong>2026 年 5 月 1 日</strong>離職，總年資 10 年。</p>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-2">PART 1: 舊制 (2016-2025) - 9年年資</h4>
                                        <div className="bg-green-50 p-4 rounded-lg font-mono text-green-900 font-bold mb-2">
                                            $22,500 × 2/3 × 9年 = $135,000
                                        </div>
                                        <p className="text-sm text-slate-500">💡 這 $135,000 可以用強積金僱主供款對沖。</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-2">PART 2: 新制 (2025-2026) - 1年年資</h4>
                                        <div className="bg-red-50 p-4 rounded-lg font-mono text-red-900 font-bold mb-2">
                                            $22,500 × 2/3 × 1年 = $15,000
                                        </div>
                                        <p className="text-sm text-slate-500">💰 這 $15,000 老闆必須真金白銀拿出來，不能對沖。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">.03</span> 老闆的救命草：政府 25 年資助計劃
                        </h2>
                        <p>
                            政府知道這對中小企壓力很大，所以推出了為期 25 年的<strong>「政府資助計劃」</strong>。在 2026 年（計劃的第 2 年），如果你支付的長服金總額在 50 萬元內，政府會分擔很大一部分的比例。
                        </p>
                        <div className="bg-white border-l-4 border-brand-gold p-4 mt-4 shadow-sm">
                            <h4 className="font-bold text-brand-gold mb-2">Zero 的專業建議</h4>
                            <p className="mb-0 text-slate-600">
                                雖然有資助，但申請程序繁瑣。我建議老闆們在每月的財務報表中，預先撥出這筆「不可對沖」的預算，才不會在員工離職時出現現金流壓力。
                            </p>
                        </div>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">.04</span> NLP 視角：從「恐懼成本」到「投資人才」
                        </h2>
                        <p>
                            面對成本上升，很多老闆會想：「那我是不是不要請長工？」這正是 NLP 心理學中典型的<strong>「匱乏思維」</strong>。作為 NLP 高級執行師，我認為應對 2026 新制的最佳戰略是：提高人才的產出價值。
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <UserCheck className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold mb-2">精準招聘</h3>
                                <p className="text-sm text-slate-600">既然留人成本變高，你更需要精準的篩選（這也是我們存在的意義）。</p>
                            </div>
                            <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold mb-2">激勵成長</h3>
                                <p className="text-sm text-slate-600">讓員工的產出增長（Growth）超過長服金成本的增長。</p>
                            </div>
                            <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calculator className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold mb-2">自動化轉型</h3>
                                <p className="text-sm text-slate-600">運用科技減輕對體力勞動的依賴，將人力集中在「高價值」的服務上。</p>
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className="bg-slate-800 text-white p-8 rounded-2xl mt-12">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                結語：Zero 的增長叮囑
                            </h2>
                            <p className="text-lg opacity-90 leading-relaxed">
                                2026 年的管理，不再是比誰會「節流」，而是比誰更會「開源」與「避險」。取消對沖已成事實，與其抱怨成本上升，不如重新檢視你的團隊架構。
                            </p>
                        </div>

                        {/* CTA Box */}
                        <div className="mt-12 text-center border-t border-slate-200 pt-12">
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">對 2026 長服金計算仍有疑問？</h3>
                            <p className="mb-8 text-slate-600 max-w-2xl mx-auto">
                                或者想了解如何透過優化勞動力結構來對沖成本，歡迎隨時聯絡我。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/consultation">
                                    <button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                                        <Banknote className="w-5 h-5" /> 預約成本分析
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
                            {["強積金對沖", "長期服務金", "2026新制", "Zero專欄", "成本管理"].map(tag => (
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
