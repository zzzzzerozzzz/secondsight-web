"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, Briefcase, TrendingUp, Users, Lightbulb, ChefHat } from "lucide-react";

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
                                行業專題
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
                            【營運心法】餐飲業人手荒解藥：
                            <span className="block text-2xl lg:text-3xl text-slate-500 font-normal mt-4">
                                如何透過外勞計劃，將「救火式管理」轉為「穩定增長」？
                            </span>
                        </h1>

                        <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                                <Image src="/founder-handshake.png" alt="Zero Wong" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-brand-blue">作者：Zero Wong</p>
                                <p className="text-sm text-slate-500">粵港外勞事務所創辦人 | 25 年餐飲營運總監</p>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image
                                src="/blog-restaurant-labor.png"
                                alt="餐飲業人手解決方案"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            在香港做餐飲，2026 年的老闆們面臨的已經不是單純的「請人難」，而是<strong>「人才結構性斷層」</strong>。我由侍應做到營運總監這 25 年間，看過太多老闆因為樓面缺人而親自收碟、因為廚房缺人而自己炒菜。
                            <br /><br />
                            這種「救火式管理」不僅讓老闆疲於奔命，更會導致服務質素下降、熟客流失。今天，我想從營運戰略的角度，跟你聊聊為什麼「補充勞工優化計劃」是你穩定江山的關鍵。
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">一、</span> 為什麼「加薪請人」不再是唯一出路？
                        </h2>
                        <p>很多老闆會陷入一個心理陷阱：「請不到人是因為錢不夠。」 但現實是：</p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="text-lg font-bold text-brand-blue mb-3">勞動力流失</h3>
                                <p className="text-sm text-slate-600 mb-0">
                                    本地年輕人更傾向於 Slash 族或送遞員，不願進入高壓的餐飲業。
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="text-lg font-bold text-brand-blue mb-3">高流失成本</h3>
                                <p className="text-sm text-slate-600 mb-0">
                                    本地員工往往「說走就走」。每一次新入職，你都要付出招募、試工、培訓的隱性成本。
                                </p>
                            </div>
                        </div>

                        <p className="font-semibold text-slate-700">
                            這就是 NLP 中所謂的<strong>「無效循環」。要打破它，你需要的是一種具備「契約精神」與「長期穩定性」</strong>的勞動力。
                        </p>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">二、</span> 外勞計劃：餐飲營運的「穩定器」
                        </h2>
                        <p>聘用外勞（如大廚、侍應、洗碗工）對營運的最大貢獻，不是節省薪金，而是<strong>「穩定性」</strong>：</p>

                        <div className="space-y-4 my-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">兩年穩定合約</h3>
                                    <p className="text-slate-600">外勞合約通常為 24 個月。這意味著你的團隊核心在兩年內不會隨意變動，你可以從容地進行 SOP（標準作業程序）培訓。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">降低管理內耗</h3>
                                    <p className="text-slate-600">當你不再需要每天為排班表缺人而煩惱，你才有時間去思考如何優化菜單、如何提升營銷（Growth）。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <ChefHat className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">技術傳承</h3>
                                    <p className="text-slate-600">引進具備國內實戰經驗的專業大廚，有助於提升廚房生產力與品質穩定度。</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">三、</span> Zero 的營運策略：外勞如何落地？
                        </h2>
                        <p>作為 NLP 高級執行師，我建議老闆在引進外勞時採取以下 「三位一體」 策略：</p>

                        <div className="bg-slate-50 rounded-2xl p-8 my-8 border border-slate-200">
                            <h3 className="text-xl font-bold text-brand-blue mb-4">1. 心理與文化對接（NLP 心法）</h3>
                            <p className="text-slate-600 mb-6">
                                外勞初到香港，會面臨語言與生活節奏的挑戰。我會在培訓中加入「感官特徵（Submodalities）」的引導，讓他們快速理解香港餐飲的「快、準、熱」要求，縮短磨合期。
                            </p>

                            <h3 className="text-xl font-bold text-brand-blue mb-4">2. 計算投資報酬率 (ROI)</h3>
                            <p className="text-slate-600 mb-4">
                                不要只看招聘費，要看長期的營運效率。利用以下簡單模型估計：
                            </p>
                            <div className="bg-white p-6 rounded-xl border border-dashed border-slate-300 text-center font-mono my-4 shadow-sm">
                                ROI = <span className="text-brand-blue">(穩定運作產生的額外營收 - 外勞輸入成本)</span> / <span className="text-brand-gold">外勞輸入成本</span> × 100%
                            </div>
                            <p className="text-sm text-slate-500 italic mb-6">
                                當你有了穩定人手，能多開兩張檯、多做兩小時宵夜，那點輸入成本其實微不足道。
                            </p>

                            <h3 className="text-xl font-bold text-brand-blue mb-4">3. 混合團隊架構</h3>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border-l-4 border-brand-gold shadow-sm">
                                <Users className="w-8 h-8 text-brand-gold" />
                                <p className="font-bold text-slate-800 mb-0">建議比例：30% 本地骨幹 + 70% 穩定外勞</p>
                            </div>
                            <p className="text-slate-600 mt-4">
                                這種架構能確保公司既保留香港本土特色，又具備極強的抗風險能力。
                            </p>
                        </div>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">四、</span> 為什麼選擇「粵港外勞事務所」？
                        </h2>
                        <p>市場上中介很多，但懂餐飲營運的極少。我創辦事務所的初衷，是想用我 25 年的管理經驗，幫老闆做第一輪篩選：</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-700">
                            <li><strong>專業篩選：</strong> 只有我懂什麼樣的廚師才適合香港的「快火」節奏。</li>
                            <li><strong>全流程配套：</strong> 從住宿安排、徵款繳納到到港培訓，我幫你解決所有行政瑣事。</li>
                            <li><strong>持續更新：</strong> 2026 年的最新政策、長服金對沖新法，我第一時間為你更新。</li>
                        </ul>

                        {/* Conclusion */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 text-center">
                            結語：別讓「沒人做」限制了你的想像力
                        </h2>
                        <p className="text-center">
                            經營企業的核心是<strong>「增長」</strong>。如果你的精力都花在找洗碗工，你如何帶領團隊從 Zero 走向 Growth？外勞計劃是一個工具，而我是那個教你如何使用工具，讓企業活下來、強起來的專家。
                        </p>

                        {/* CTA Box */}
                        <div className="bg-slate-900 rounded-2xl p-8 text-white text-center mt-12 shadow-xl">
                            <Lightbulb className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">想規劃最適合您餐廳的人才組合？</h3>
                            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                                如果您正在忍受人手慌的痛苦，歡迎聯絡 Zero。我們一起規劃一套最適合您餐廳的人才組合方案。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all inline-block hover:-translate-y-1"
                                >
                                    預約免費諮詢
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all inline-block hover:-translate-y-1"
                                >
                                    立即聯絡
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
                            {["餐飲人手", "外勞計劃", "營運管理", "ROI", "NLP"].map(tag => (
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
