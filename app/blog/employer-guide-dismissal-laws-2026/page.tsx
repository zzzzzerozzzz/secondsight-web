"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, AlertTriangle, Calculator, Briefcase } from "lucide-react";

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
                                10 分鐘閱讀
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-bold text-brand-blue leading-tight mb-6">
                            【Zero 專欄】僱主必讀：解僱員工只是「補錢」這麼簡單？
                            <span className="block text-2xl lg:text-3xl text-slate-500 font-normal mt-4">
                                25年營運總監教你合法避險
                            </span>
                        </h1>

                        <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                                <Image src="/founder-handshake.png" alt="Zero Wong" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-brand-blue">作者：Zero Wong</p>
                                <p className="text-sm text-slate-500">粵港外勞事務所創辦人 | NLP 高級執行師</p>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image
                                src="/blog-dismissal-law-new.png"
                                alt="解僱員工法律風險"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            在餐飲與服務業打滾 25 年，我管理過超過 200 人的團隊。我深知「請人難，送人走更難」。很多老闆在解僱員工時，往往因為一時意氣或對《僱傭條例》的誤解，導致賠錢又賠名聲，甚至惹上官非。
                            <br /><br />
                            今天，我以營運者而非單純顧問的角度，為大家拆解「解僱賠償」的底層邏輯與最新法律紅線。
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">一、</span> 重新定義「解僱」：是終止合約，還是法律危機？
                        </h2>
                        <p>在 NLP 的溝通邏輯中，我們強調「預期管理」。在香港法律下，解僱通常分為兩類，老闆必須分清界線：</p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-2 mt-0">✅ 合理解僱 (Valid Reason)</h3>
                                <p className="text-sm text-green-700 mb-0">
                                    這是最常見的「補錢請人走」。只要給足通知期或代通知金，並發放應有賠償。這不是「無故」，而是基於業務需求或表現不合的商業決定。
                                </p>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-xl font-bold text-red-800 mb-2 mt-0">❌ 不合理解僱 (Unreasonable Dismissal)</h3>
                                <p className="text-sm text-red-700 mb-0">
                                    如果你在員工懷孕、有薪病假、或處理工傷期間解僱他，這不只是賠錢問題，而是刑事罪行。
                                </p>
                            </div>
                        </div>

                        <div className="bg-brand-blue/5 p-6 rounded-xl border-l-4 border-brand-blue mb-8">
                            <p className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> Zero 的提醒：
                            </p>
                            <p className="text-slate-700 italic mb-0">
                                25 年來我見過無數個案，紅線絕對不能碰。違法解僱最高可罰款 10 萬元及監禁，這對公司聲譽是毀滅性的打擊。
                            </p>
                        </div>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">二、</span> 2026 最新賠償清單：老闆的荷包要準備多少？
                        </h2>
                        <p>解僱一名服務滿一年的員工，你通常需要計算以下 5 大項目。請注意，2025 年 5 月後「強積金對沖」已正式取消，計算方式已變得複雜：</p>

                        <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl shadow-sm">
                            <table className="min-w-full bg-white text-sm">
                                <thead className="bg-slate-100 text-slate-700">
                                    <tr>
                                        <th className="py-4 px-6 text-left">項目</th>
                                        <th className="py-4 px-6 text-left">計算重點</th>
                                        <th className="py-4 px-6 text-left">Zero 的專業備註</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-4 px-6 font-semibold">1. 代通知金</td>
                                        <td className="py-4 px-6">(過去12個月平均工資) × 通知期</td>
                                        <td className="py-4 px-6 text-slate-600">想員工「即日走」就必須付這筆錢。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-semibold">2. 遣散費/長服金</td>
                                        <td className="py-4 px-6">(最後一個月工資* × 2/3) × 服務年資</td>
                                        <td className="py-4 px-6 text-slate-600">*月薪計法上限為 $22,500。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-semibold">3. 未放年假薪酬</td>
                                        <td className="py-4 px-6">按比例折算現金</td>
                                        <td className="py-4 px-6 text-slate-600">每一天假都是員工的法定期權。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-semibold">4. 比例雙糧/花紅</td>
                                        <td className="py-4 px-6">若合約有列明，須按比例支付</td>
                                        <td className="py-4 px-6 text-slate-600">這是很多老闆最容易漏計的項目。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-8">
                            <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> 重點更新：強積金對沖取消（Abolition of MPF Offsetting）
                            </h3>
                            <p className="text-yellow-900 mb-2">
                                自 2025 年 5 月 1 日起，僱主不能再用強積金供款來對沖「轉職日後」產生的長服金/遣散費。
                            </p>
                            <ul className="list-disc pl-5 text-yellow-900 space-y-1">
                                <li><strong>轉職日前的服務年資：</strong>仍可對沖。</li>
                                <li><strong>轉職日後的服務年資：</strong>僱主須全數自行承擔。</li>
                            </ul>
                            <p className="text-yellow-900 mt-3 font-semibold">
                                這代表：老闆們現在的解僱成本比以前更高，這要求我們在「選才」時必須更加精準（這也是我成立外勞事務所、引入 NLP 篩選的原因）。
                            </p>
                        </div>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">三、</span> 「即時解僱」：這是一把危險的雙刃劍
                        </h2>
                        <p>
                            很多老闆在員工犯錯時想引用《僱傭條例》第 9 條「即時解僱」而不給予賠償。但作為 NLP 執行師，我建議你先冷靜。法律對「嚴重過失」的定義極高：
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>故意不服從合法合理的命令。</li>
                            <li>欺詐、不誠實或行為不當（如打架、偷竊）。</li>
                        </ul>
                        <p className="font-semibold text-red-600">
                            「表現欠佳」或「態度不好」通常不足以構成即時解僱！ 如果處理不當，員工投訴至勞工處，敗訴的往往是僱主。
                        </p>


                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">四、</span> 實戰案例：廚房大佬阿強的離職課
                        </h2>
                        <div className="bg-slate-100 p-8 rounded-2xl mb-8">
                            <div className="flex gap-4 items-start mb-6">
                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                    <Briefcase className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-800">情境設定</h4>
                                    <p className="text-slate-600">阿強是餐廳大廚，月薪 $30,000，入職 6 年。因出品不穩，你決定請他即日離職。</p>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 pt-6">
                                <h4 className="font-bold text-brand-blue mb-4 flex items-center gap-2">
                                    <Calculator className="w-5 h-5" /> Zero 的營運分析
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex justify-between border-b border-slate-200 pb-2">
                                        <span>代通知金 (1個月)</span>
                                        <span className="font-mono font-bold">$30,000</span>
                                    </li>
                                    <li className="flex justify-between border-b border-slate-200 pb-2">
                                        <span>長期服務金 (基數上限 $22,500 × 2/3 × 6年)</span>
                                        <span className="font-mono font-bold">$90,000</span>
                                    </li>
                                    <li className="text-sm text-slate-500 italic">*注意：需區分 2025 年前后的對沖比例。</li>
                                    <li className="flex justify-between pt-2 text-lg font-bold text-brand-gold">
                                        <span>總支出預算</span>
                                        <span>$100,000 - $120,000</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6 p-4 bg-white rounded-lg border border-brand-gold/20">
                                <p className="font-bold text-brand-gold mb-1">💡 心法分享</p>
                                <p className="text-slate-600 mb-0">
                                    與其等到要賠 10 萬時才後悔，不如在入職時就建立好 KPI 與 警告信系統 (Warning Letter)。
                                </p>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">五、</span> Zero 的管理增長建議：如何避免勞資糾紛？
                        </h2>
                        <div className="space-y-6 mb-12">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">建立「行為證據鏈」</h3>
                                    <p className="text-slate-600">運用 NLP 的行為觀察，對員工表現進行書面紀錄。警告信不是為了開除，是為了給予改進機會，同時保護公司。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">持續更新法規知識</h3>
                                    <p className="text-slate-600">2026 年的法規與五年前大不相同，老闆必須保持學習。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">精準人才輸入</h3>
                                    <p className="text-slate-600">透過專業管道（如粵港外勞事務所）引進具備高素質、高穩定性的人才，從源頭減少解僱的需求。</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">需要精確的賠償試算？</h3>
                            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                                如果您正為處理員工問題感到困擾，歡迎聯絡我們的專業團隊。我們不只給您法規意見，更給您營運上的增長戰略。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/consultation">
                                    <button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all">
                                        預約顧問諮詢
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
                            {["解僱賠償", "勞工法例", "強積金對沖", "Zero專欄", "營運管理"].map(tag => (
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
