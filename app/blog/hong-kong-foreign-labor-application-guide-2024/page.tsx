"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

export default function ArticlePage() {
    return (
        <div className="min-h-screen font-sans selection:bg-brand-navy/10">
            <Navbar />

            <main className="pt-32 pb-20 bg-white">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Breadcrumb & Navigation */}
                    <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-brand-blue mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        返回文章列表
                    </Link>

                    {/* Article Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-4 mb-6 text-sm">
                            <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold font-semibold rounded-full">
                                申請指南
                            </span>
                            <span className="flex items-center text-slate-500">
                                <Calendar className="w-4 h-4 mr-2" />
                                2024-01-10
                            </span>
                            <span className="flex items-center text-slate-500">
                                <Clock className="w-4 h-4 mr-2" />
                                15 分鐘閱讀
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-bold text-brand-blue leading-tight mb-8">
                            【2024最新】香港外勞申請完整攻略：流程、費用、時間一次看懂
                        </h1>

                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image
                                src="/hero.png"
                                alt="香港外勞申請攻略"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            隨著香港各行各業人手短缺問題日益嚴重，特區政府於2023年推出「補充勞工優化計劃」，為僱主輸入外勞提供了更便捷的途徑。本文將由擁有25年經驗的資深運營顧問，為您詳細解析申請外勞的每一個環節，助您少走彎路，快速解決人手問題。
                        </p>

                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6">為什麼需要考慮輸入外勞？</h2>
                        <p>
                            在後疫情時代，香港面臨嚴峻的勞動力流失。特別是餐飲、零售、建造及運輸業，「有工無人做」已成常態。輸入外勞不僅是填補空缺，更是企業生存與發展的戰略選擇：
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8">
                            <li><strong>穩定人手供應：</strong>外勞合約期通常為兩年，能有效降低流失率。</li>
                            <li><strong>緩解本地招聘壓力：</strong>釋放本地員工處理更高級或核心業務。</li>
                            <li><strong>控制營運成本：</strong>雖然有住宿等額外開支，但長遠來看，穩定的人手能減少因缺人導致的業務損失。</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6">申請資格與前提條件</h2>
                        <p>並非所有公司都能隨意申請外勞，僱主必須符合以下核心條件：</p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
                            <ol className="list-decimal pl-6 space-y-4">
                                <li><strong>證明本地招聘困難：</strong> 必須證明已經進行了為期4星期的本地公開招聘（透過勞工處及報章/招聘網站），但未能聘得合適人手。</li>
                                <li><strong>具備實質業務運作：</strong> 公司必須有真實的業務營運及財務紀錄。</li>
                                <li><strong>不僅是「買人頭」：</strong> 必須為外勞提供合理的住宿安排及不低於本地工資中位數的薪酬。</li>
                            </ol>
                        </div>

                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6">外勞申請 6 大步驟詳解</h2>

                        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第一步：本地招聘（4星期）</h3>
                        <p>
                            這是最關鍵的一步。僱主需在勞工處互動就業服務網站刊登職位空缺，並同時在至少兩份本地報章或招聘網站刊登廣告。此期間的所有面試紀錄必須妥善保存，以證明「確實請不到人」。
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第二步：遞交申請（SLSP表格）</h3>
                        <p>
                            完成本地招聘後，填妥「補充勞工優化計劃」申請表，連同相關證明文件（如商業登記證、招聘廣告副本、面試紀錄等）遞交至勞工處。
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第三步：初步甄別與審批</h3>
                        <p>
                            勞工處會審核申請資料。優化計劃下，若申請職位屬於26個常見職位（如侍應、售貨員、廚師等），程序會加快，一般可於3個月內完成審批（相比以往需時6-9個月）。
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第四步：獲發「原則性批准」</h3>
                        <p>
                            一旦申請獲批，僱主會收到「原則性批准書」。此時，僱主便可開始在內地或其他地區物色合適的勞工。這正是我們<strong>粵港外勞事務所</strong>發揮最大價值的環節 —— 我們為您精準篩選已培訓的熟手。
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">第五步：申請簽證與輸入勞工</h3>
                        <p>
                            選定勞工後，需向入境事務處申請工作簽證。同時，如聘用內地勞工，還需辦理內地相關的勞務輸出切結手續。
                        </p>

                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6">費用預算（每名外勞）</h2>
                        <p>除了薪金，僱主還需預算以下一次性或持續性費用：</p>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="py-3 px-4 text-left font-semibold text-slate-700">項目</th>
                                        <th className="py-3 px-4 text-left font-semibold text-slate-700">預估費用 (港幣)</th>
                                        <th className="py-3 px-4 text-left font-semibold text-slate-700">備註</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr>
                                        <td className="py-3 px-4">再培訓徵款 (Levy)</td>
                                        <td className="py-3 px-4">$400 / 月</td>
                                        <td className="py-3 px-4">合約期全數需一次性繳付（約$9,600/2年）</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">簽證費</td>
                                        <td className="py-3 px-4">$230</td>
                                        <td className="py-3 px-4">入境處收取</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">身體檢查</td>
                                        <td className="py-3 px-4">約 $800 - $1,500</td>
                                        <td className="py-3 px-4">到港前體檢</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">住宿津貼/租金</td>
                                        <td className="py-3 px-4">$3,000 - $4,000 / 月</td>
                                        <td className="py-3 px-4">僱主必須提供住宿或扣除薪金提供津貼</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6">常見陷阱與注意事項</h2>
                        <ol className="list-decimal pl-6 space-y-4 mb-8">
                            <li><strong>住宿安排不合規：</strong> 勞工處對外勞住宿有嚴格標準，隨意安排劏房可能導致申請被拒或日後被檢控。</li>
                            <li><strong>工資未達中位數：</strong> 必須確保外勞工資不低於政府公佈的相關職位工資中位數。</li>
                            <li><strong>隱性中介費：</strong> 坊間部分中介向勞工收取高昂費用，這會嚴重影響員工士氣及穩定性。我們堅持合規收費，保障勞工權益，從而保障僱主的用人穩定。</li>
                        </ol>

                        <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-8 mt-12">
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">需要專業協助？</h3>
                            <p className="mb-6 text-slate-700">
                                申請外勞涉及繁複的文件與法規，稍有不慎便會浪費數個月時間。粵港外勞事務所憑藉 25 年經驗，為您提供一站式「交鑰匙」服務。從文件準備、本地招聘證明到人才篩選、住宿安排，我們全程代辦。
                            </p>
                            <div className="flex gap-4">
                                <Link href="/consultation">
                                    <button className="bg-brand-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                                        預約免費諮詢
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="bg-white hover:bg-slate-50 text-brand-blue border border-brand-blue/30 px-6 py-3 rounded-lg font-semibold transition-all">
                                        聯繫客服
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Social Share & Tags */}
                    <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-slate-500 text-sm flex items-center mr-2">
                                <Tag className="w-4 h-4 mr-1" /> 標籤：
                            </span>
                            {["補充勞工計劃", "外勞申請", "人力資源", "招聘攻略"].map(tag => (
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
