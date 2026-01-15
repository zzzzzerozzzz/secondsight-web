"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, CheckCircle, Calculator, FileText, Briefcase, AlertOctagon } from "lucide-react";

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
                            【老闆必看】解僱員工的 3 個合法步驟與賠償計算機
                            <span className="block text-2xl lg:text-3xl text-slate-500 font-normal mt-4">
                                25 年總監的避險指南
                            </span>
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
                                src="/blog-dismissal-steps.png"
                                alt="解僱賠償計算"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            在管理 200 人團隊的過程中，我發現最讓老闆睡不著覺的，往往不是業績，而是收到的那張勞工處傳票。很多人以為解僱就是「補錢請人走」，但如果步驟錯了，補了錢一樣會被告。
                            <br /><br />
                            今天我將這 25 年的營運經驗與最新法規結合，整理成這套 <strong>「3 步驟合法解僱流程」</strong>。
                        </p>

                        {/* Step 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-base">1</span>
                            第一步：確認「合法理由」與「紅線」
                        </h2>
                        <p>在香港《僱傭條例》下，解僱必須具備理由。雖然僱主可以透過支付「代通知金」終止合約，但你必須確保沒有踩到以下 「絕對禁區」：</p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-xl font-bold text-red-800 mb-2 mt-0 flex items-center gap-2">
                                    <AlertOctagon className="w-5 h-5" /> 禁止解僱期（禁區）
                                </h3>
                                <ul className="list-disc pl-5 text-red-900 space-y-1 mb-0">
                                    <li>員工懷孕</li>
                                    <li>放有薪病假期間</li>
                                    <li>工傷病假期間</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-2 mt-0 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" /> 合理解僱理由
                                </h3>
                                <ul className="list-disc pl-5 text-green-900 space-y-1 mb-0">
                                    <li><strong>裁員：</strong> 公司縮減規模</li>
                                    <li><strong>行為不當：</strong> 如偷竊、欺詐</li>
                                    <li><strong>能力不足：</strong> 表現未達標（建議配合警告信紀錄）</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-base">2</span>
                            第二步：執行「合規程序」
                        </h2>
                        <p>這一步決定了你是否會被判定為「不合理解僱」。</p>

                        <div className="space-y-4 mb-8">
                            <div className="flex gap-4 items-start border border-slate-200 p-4 rounded-lg">
                                <FileText className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-800 mt-0 mb-1">發出解僱通知信</h4>
                                    <p className="text-sm text-slate-600 mb-0">必須以書面形式，列明最後工作日期及解僱理由（若為即時解僱）。</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start border border-slate-200 p-4 rounded-lg">
                                <Clock className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-800 mt-0 mb-1">通知期安排</h4>
                                    <p className="text-sm text-slate-600 mb-0">根據合約給予足夠通知期（如 1 個月），或選擇支付「代通知金」讓其即日離職。</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start border border-slate-200 p-4 rounded-lg">
                                <Briefcase className="w-6 h-6 text-brand-navy flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-800 mt-0 mb-1">交接與紀錄</h4>
                                    <p className="text-sm text-slate-600 mb-0">運用 NLP 溝通技巧，在面談中保持中立，避免情緒化字眼。</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-base">3</span>
                            第三步：精準結算賠償（2026 賠償計算機）
                        </h2>
                        <p>這是老闆最關心的部分。2026 年起，由於「強積金對沖」已取消，計算方式必須分段處理。</p>

                        <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl shadow-lg">
                            <div className="bg-brand-blue text-white p-4 font-bold flex items-center gap-2">
                                <Calculator className="w-5 h-5" /> 💰 賠償計算公式表
                            </div>
                            <table className="min-w-full bg-white text-sm">
                                <thead className="bg-slate-50 text-slate-700">
                                    <tr>
                                        <th className="py-3 px-4 text-left border-b w-1/3">項目</th>
                                        <th className="py-3 px-4 text-left border-b w-1/3">計算公式</th>
                                        <th className="py-3 px-4 text-left border-b w-1/3">備註</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-3 px-4 font-semibold">1. 代通知金</td>
                                        <td className="py-3 px-4 font-mono text-slate-600">過去12個月平均月薪 × 通知期月數</td>
                                        <td className="py-3 px-4 text-slate-500">若合約為 1 個月，則補 1 個月薪。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-semibold">2. 長期服務金 (LSP)</td>
                                        <td className="py-3 px-4 font-mono text-slate-600">(月薪 (上限$22,500) × 2/3) × 服務年資</td>
                                        <td className="py-3 px-4 text-slate-500">滿 5 年適用。2025 年後年資不可對沖。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-semibold">3. 未放年假薪酬</td>
                                        <td className="py-3 px-4 font-mono text-slate-600">日薪 × 未放年假日數</td>
                                        <td className="py-3 px-4 text-slate-500">必須按比例折算現金。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-semibold">4. 工資與津貼</td>
                                        <td className="py-3 px-4 font-mono text-slate-600">解僱當月已工作天數的工資</td>
                                        <td className="py-3 px-4 text-slate-500">必須在解僱後 7 天內支付。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-semibold">5. 比例雙糧</td>
                                        <td className="py-3 px-4 font-mono text-slate-600">(年終酬金 ÷ 12) × 該年度受僱月數</td>
                                        <td className="py-3 px-4 text-slate-500">若合約有列明且受僱滿 3 個月。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Zero's Advice */}
                        <div className="bg-slate-50 p-8 rounded-2xl mt-12">
                            <h2 className="text-xl font-bold text-brand-blue mb-6">🚀 Zero 的實戰建議：從 Zero 到穩健管理</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">運用 Python 建立內部計算機</h3>
                                    <p className="text-slate-600 text-sm">輸入員工的入職日期和薪資，自動算出 2025 年劃線前後的長服金對沖額度。這不僅能減少人為錯誤，還能體現你的數位管理能力。</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">建立「人才備援庫」</h3>
                                    <p className="text-slate-600 text-sm">解僱是為了讓團隊更好。在「粵港外勞事務所」，我們不僅幫你處理勞工引進，更會教你如何建立一套穩健的人才流動與後備體系。</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">NLP 離職面談</h3>
                                    <p className="text-slate-600 text-sm">透過 NLP 的深層溝通，了解公司體系的漏洞，這就是 Zero to Growth 的核心——從問題中尋找增長點。</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="mt-12 text-center border-t border-slate-200 pt-12">
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">需要專業的工具支援？</h3>
                            <p className="mb-8 text-slate-600 max-w-2xl mx-auto">
                                如果您需要一份專業的「解僱通知信範本」或「2026 賠償試算 Excel 表」，歡迎聯絡我的團隊。我們用專業，守護您的企業增長。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/consultation">
                                    <button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                                        索取解僱範本
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
                            {["解僱流程", "賠償計算", "勞工法規", "Zero專欄", "風險管理"].map(tag => (
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
