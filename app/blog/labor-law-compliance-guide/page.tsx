"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, AlertTriangle, ShieldCheck, Scale, FileText, BadgeDollarSign } from "lucide-react";

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
                                法規合規
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
                            【避險指南】香港外勞僱傭法規全攻略：
                            <span className="block text-2xl lg:text-3xl text-slate-500 font-normal mt-4">
                                25 年營運總監教你如何合法「避雷」
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
                                src="/blog-law-compliance.png"
                                alt="法規合規指南"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            在香港經營餐飲業，最怕的不是辛苦，而是收到勞工處或入境處的「邀請函」。25 年前我做侍應時，看過老闆因為勞資糾紛焦頭爛額；後來我管理 200 人公司，我明白<strong>「法規合規」就是企業最大的保險</strong>。
                            <br /><br />
                            聘用外勞（補充勞工優化計劃）能解決人手荒，但如果對法規半知半解，隨時會陷入刑事風險。以下是我為大家整理的法規精華：
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">一、</span> 香港外勞法規核心清單 (Quick Check)
                        </h2>
                        <p>聘用外勞並非法律法外之地，基本上《僱傭條例》的所有保障都適用，更有額外規定：</p>

                        <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl shadow-sm">
                            <table className="min-w-full bg-white text-sm">
                                <thead className="bg-slate-100 text-slate-700">
                                    <tr>
                                        <th className="py-4 px-6 text-left w-1/4">項目</th>
                                        <th className="py-4 px-6 text-left w-1/3">法定要求 (Statutory Requirement)</th>
                                        <th className="py-4 px-6 text-left">Zero 的實戰叮囑</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="py-4 px-6 font-semibold flex items-center gap-2">
                                            <BadgeDollarSign className="w-4 h-4 text-brand-gold" /> 工資水平
                                        </td>
                                        <td className="py-4 px-6">不得低於政府公佈的職位工資中位數。</td>
                                        <td className="py-4 px-6 text-slate-600">每月薪金必須經由銀行轉賬，留下確鑿紀錄，<strong>嚴禁現金出糧</strong>。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-semibold flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-brand-gold" /> 工時與休息
                                        </td>
                                        <td className="py-4 px-6">與本地人一致，每 7 天享不少於 1 天休息日。</td>
                                        <td className="py-4 px-6 text-slate-600">建議建立數位簽到系統（Python 追蹤），確保沒有超時補償漏計。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-semibold flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-brand-gold" /> 法定假期
                                        </td>
                                        <td className="py-4 px-6">享有 12 天（2026年起增至14天）法定假期。</td>
                                        <td className="py-4 px-6 text-slate-600">絕不能以錢代假（除了離職結算），否則屬違法。</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-semibold flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4 text-brand-gold" /> 勞工保險
                                        </td>
                                        <td className="py-4 px-6">必須購買包含工傷賠償的保險。</td>
                                        <td className="py-4 px-6 text-slate-600">外勞保費與本地人略有不同，投保時需明確標註身份。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">二、</span> 絕對不能踩的「刑事紅線」
                        </h2>
                        <p>在管理實務中，以下三點是最高危險區，一旦觸犯，老闆可能面臨監禁：</p>

                        <div className="grid md:grid-cols-3 gap-6 my-8">
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> 非法改派工作地點</h3>
                                <p className="text-sm text-red-900 mb-0">
                                    外勞只能在申請書上指定的地址工作。例如：你申請外勞在 A 分店做，結果調去 B 分店支援。<strong>這是違法的！</strong>
                                </p>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2"><BadgeDollarSign className="w-5 h-5" /> 變相減少工資</h3>
                                <p className="text-sm text-red-900 mb-0">
                                    有些老闆會私下要求員工返還部分薪金（回扣）。這在香港是嚴重的刑事罪行（欺詐及違反僱傭條例）。
                                </p>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2"><FileText className="w-5 h-5" /> 非法解僱</h3>
                                <p className="text-sm text-red-900 mb-0">
                                    嚴禁在工傷期間或懷孕期間解僱外勞。
                                </p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">三、</span> NLP 角度：預防勝於補救的「心理合規」
                        </h2>
                        <p>作為 NLP 高級執行師，我發現 90% 的舉報都源於「溝通破裂」。</p>

                        <div className="space-y-4 my-8">
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <h3 className="font-bold text-brand-blue mb-2">建立預期 (Framing)</h3>
                                <p className="text-slate-600 mb-0">在員工到港第一天，就由我事務所進行「權利與義務」說明，建立清晰的邊界。</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <h3 className="font-bold text-brand-blue mb-2">觀察與校準 (Calibration)</h3>
                                <p className="text-slate-600 mb-0">
                                    營運經理應定期觀察外勞的情緒。如果發現員工出現「習得性無助（Learned Helplessness）」，通常是管理壓力過大，需及時介入，避免演變成勞資投訴。
                                </p>
                            </div>
                        </div>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">四、</span> 費用與補償：數據化管理
                        </h2>
                        <p>利用 Python 管理思維，你可以把合規成本公式化：</p>

                        <div className="bg-slate-800 text-slate-200 p-6 rounded-xl my-6 font-mono shadow-xl overflow-x-auto text-center">
                            Total Compliance Cost = Salary + Levy ($400) + Insurance + Admin Reserve
                        </div>

                        <div className="mt-6 flex flex-col md:flex-row gap-4">
                            <div className="flex-1 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                <strong className="text-yellow-800 block mb-1">僱員再培訓徵款 (Levy)</strong>
                                <span className="text-sm text-yellow-900">每月 $400，需預先繳付。</span>
                            </div>
                            <div className="flex-1 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                <strong className="text-yellow-800 block mb-1">長期服務金</strong>
                                <span className="text-sm text-yellow-900">外勞受僱滿 5 年（雖然通常合約為 2 年，但續約需注意）亦有此要求。</span>
                            </div>
                        </div>

                        {/* Section 5 & Conclusion */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">五、</span> 為什麼你需要專業的勞務顧問？
                        </h2>
                        <p>
                            規例每個月都在變（例如 2026 年的強積金對沖新制和法定假期增加）。「粵港外勞事務所」不只是幫你申請配額，我們更是你的法律防火牆：
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-700">
                            <li><strong>合約審核：</strong> 確保每一份合約都符合最新的《僱傭條例》。</li>
                            <li><strong>爭議調解：</strong> 萬一發生誤會，我們以專業顧問身分介入，利用談判心法在進入勞工處前解決問題。</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 text-center">
                            結語：合法經營，才能走得更遠
                        </h2>
                        <p className="text-center">
                            25 年的餐飲路讓我明白，穩健的法律基礎是 Growth 的根基。別讓法規知識的盲點，成為你事業的定時炸彈。
                        </p>

                        {/* CTA Box */}
                        <div className="bg-slate-900 rounded-2xl p-8 text-white text-center mt-12 shadow-xl">
                            <Scale className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">需要進行「企業勞務合規檢查」？</h3>
                            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                                如果您對現有的外勞合約有疑問，歡迎聯絡 Zero 團隊。我們用專業與經驗，為您的經營保駕護航。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all inline-block hover:-translate-y-1"
                                >
                                    預約合規諮詢
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
                            {["勞工法例", "外勞合規", "僱傭條例", "NLP", "風險管理"].map(tag => (
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
