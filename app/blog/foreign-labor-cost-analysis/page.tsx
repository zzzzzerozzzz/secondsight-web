"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, AlertTriangle, Calculator, Briefcase, DollarSign, BookOpen } from "lucide-react";

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
                                成本分析
                            </span>
                            <span className="flex items-center text-slate-500">
                                <Calendar className="w-4 h-4 mr-2" />
                                2026-01-13
                            </span>
                            <span className="flex items-center text-slate-500">
                                <Clock className="w-4 h-4 mr-2" />
                                10 分鐘閱讀
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-bold text-brand-blue leading-tight mb-6">
                            【深度分析】香港聘用外勞成本全披露：
                            <span className="block text-2xl lg:text-3xl text-slate-500 font-normal mt-4">
                                僱主必須收藏的費用清單（2026 版）
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
                                src="/blog-cost-analysis-2026.png"
                                alt="外勞成本分析"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            在餐飲與零售第一線奮鬥了 25 年，我最常聽到老闆們的感嘆：「請不到本地人，生意想擴張也沒辦法。」轉向申請外勞（如：補充勞工優化計劃）是必然的趨勢，但很多老闆在計算成本時，往往只看了「薪金」，卻忽略了背後的隱藏支出。
                            <br /><br />
                            今天，我以營運總監的視角，為你拆解聘用一名外勞的真實成本結構，讓你每一分錢都花在增長（Growth）上。
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">一、</span> 核心法規成本：不能省的「入場券」
                        </h2>
                        <p>
                            在香港聘用外勞，薪金必須符合<strong>「不低於相關職位的工資中位數」</strong>。除此之外，還有以下幾項固定開支：
                        </p>
                        <ul className="space-y-4 my-6">
                            <li className="bg-slate-50 p-4 rounded-lg flex items-start gap-3">
                                <DollarSign className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-brand-blue mb-1">僱員再培訓徵款 (Levy)</strong>
                                    <span className="text-slate-600">僱主必須為每名外勞繳付每月 <strong>HK$400</strong> 的徵款。這筆錢通常需要一次過繳付兩年的總額（即 HK$9,600）。</span>
                                </div>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-lg flex items-start gap-3">
                                <Briefcase className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-brand-blue mb-1">強制性勞工保險</strong>
                                    <span className="text-slate-600">與本地員工一樣，必須購買工傷補償保險。由於外勞涉及跨境醫療與遣返風險，保費通常略高於本地員工。</span>
                                </div>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-lg flex items-start gap-3">
                                <BookOpen className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-brand-blue mb-1">強積金 (MPF)</strong>
                                    <span className="text-slate-600">外勞受僱滿 60 天後，僱主同樣需供款 5%。</span>
                                </div>
                            </li>
                        </ul>

                        <div className="bg-brand-blue/5 p-6 rounded-xl border-l-4 border-brand-blue mb-8">
                            <p className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> Zero 的專業提醒：
                            </p>
                            <p className="text-slate-700 italic mb-0">
                                2026 年起，長服金已不能對沖 MPF 供款，這筆預算必須獨立計算。
                            </p>
                        </div>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">二、</span> 專屬外勞的附加成本（這是與本地人的最大差別）
                        </h2>
                        <p>聘用外勞除了工資，僱主還需承擔以下「落地」費用：</p>

                        <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl shadow-sm">
                            <table className="min-w-full bg-white text-sm">
                                <thead className="bg-slate-100 text-slate-700">
                                    <tr>
                                        <th className="py-4 px-6 text-left">成本項目</th>
                                        <th className="py-4 px-6 text-left">大約金額 (HKD)</th>
                                        <th className="py-4 px-6 text-left">說明</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-4 px-6 font-semibold">1. 住宿安排</td>
                                        <td className="py-4 px-6">薪金的 10% (扣減上限)</td>
                                        <td className="py-4 px-6 text-slate-600">僱主必須提供住所，或在工資中扣除最多 10% 作為住宿費。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-semibold">2. 往返交通</td>
                                        <td className="py-4 px-6">$1,000 - $2,000</td>
                                        <td className="py-4 px-6 text-slate-600">僱主需負擔員工由居住地到香港，及合約完結返回原居地的機票或車票。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-semibold">3. 體檢與簽證</td>
                                        <td className="py-4 px-6">$1,500 - $2,500</td>
                                        <td className="py-4 px-6 text-slate-600">包含兩地政府要求的身體檢查費及簽證申請費。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-semibold">4. 代理辦理費</td>
                                        <td className="py-4 px-6">視乎服務方案</td>
                                        <td className="py-4 px-6 text-slate-600">由「粵港外勞事務所」等專業機構代辦申請、配對與續證程序。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">三、</span> 隱藏成本：老闆最容易忽略的細節
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="text-lg font-bold text-brand-blue mb-3">培訓期損耗</h3>
                                <p className="text-sm text-slate-600 mb-0">
                                    外勞剛到港，對香港的餐飲流程、POS 系統、甚至語言環境需要 1-2 個月的適應期。這期間的產出效率較低。
                                </p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="text-lg font-bold text-brand-blue mb-3">管理心力成本</h3>
                                <p className="text-sm text-slate-600 mb-0">
                                    不同的生活習慣可能引發團隊磨合問題。
                                </p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-8">
                            <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center gap-2">
                                <Briefcase className="w-5 h-5" /> Zero 的 NLP 管理心法：
                            </h3>
                            <p className="text-yellow-900 mb-0">
                                我建議在入職首週進行「文化對接訓練」。利用 NLP 的心理模型，讓外勞快速理解香港的「快節奏文化」，這能減少 30% 以上的流失風險。
                            </p>
                        </div>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">四、</span> 成本 vs 效益：外勞真的比本地人貴嗎？
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 text-slate-700">
                            <li><strong>穩定性：</strong> 外勞合約通常為兩年，流失率極低（本地洗碗工或服務員的月流失率常高於 20%）。</li>
                            <li><strong>招聘成本：</strong> 本地人請了又走，重複的刊登廣告、面試、試工成本，長期累計其實不低於外勞。</li>
                            <li><strong>增長潛力：</strong> 有了穩定的人手，你的店舖才能開早市、宵夜，或進行連鎖擴張。</li>
                        </ul>

                        {/* Section 5 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">五、</span> Zero 的自動化成本控管建議
                        </h2>
                        <p>管理 200 人團隊時，我會利用 Python 建立一個簡單的 ROI 計算模型：</p>

                        <div className="mockup-code bg-slate-800 text-slate-200 p-6 rounded-xl my-6 overflow-x-auto shadow-xl">
                            <pre><code>{`# 簡單外勞成本計算邏輯 (Python)
def calculate_foreign_labor_cost(salary, months=24):
    levy = 400 * months
    insurance = 200 * (months/12) # 估計值
    travel = 2000 # 往返交通
    housing_subsidy = salary * 0.1 * months # 假設扣除10%
    
    total_cost = (
        (salary * months) + 
        levy + 
        insurance + 
        travel - 
        housing_subsidy
    )
    return total_cost`}</code></pre>
                        </div>
                        <p className="text-sm text-slate-500 italic text-center">
                            這種數位化管理，能讓你清晰看到每一名勞工在兩年合約期內的總體擁有成本 (TCO)。
                        </p>

                        {/* Conclusion */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 text-center">
                            結語：讓專業的人，幫你把成本變投資
                        </h2>
                        <p className="text-center">
                            聘用外勞不是「找個人來做」，而是一場人力資源的戰略佈局。在「粵港外勞事務所」，我們不只幫你遞交申請表，更會憑藉我 25 年的餐飲營運經驗，為你規劃最經濟的人才組合，並透過 NLP 技巧確保員工穩定。
                        </p>

                        {/* CTA Box */}
                        <div className="bg-slate-900 rounded-2xl p-8 text-white text-center mt-12 shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">需要精確的賠償試算？</h3>
                            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                                如果您需要一份量身定做的「外勞預算試算表」，或想了解最新的政府資助計劃，歡迎聯絡 Zero 團隊。我們不只幫你請人，更幫你成長（Growth）。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all inline-block hover:-translate-y-1"
                                >
                                    預約顧問諮詢
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all inline-block hover:-translate-y-1"
                                >
                                    聯絡我們
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
                            {["外勞成本", "Levy", "MPF", "ROI", "Python"].map(tag => (
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
