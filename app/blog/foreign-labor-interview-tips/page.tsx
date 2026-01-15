"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, BrainCircuit, ScanSearch, Target, Award, Users } from "lucide-react";

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
                                招聘技巧
                            </span>
                            <span className="flex items-center text-slate-500">
                                <Calendar className="w-4 h-4 mr-2" />
                                2026-01-13
                            </span>
                            <span className="flex items-center text-slate-500">
                                <Clock className="w-4 h-4 mr-2" />
                                7 分鐘閱讀
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-bold text-brand-blue leading-tight mb-6">
                            【Zero 專家課】外勞面試別只看履歷！
                            <span className="block text-2xl lg:text-3xl text-slate-500 font-normal mt-4">
                                25 年營運總監教你：如何用 NLP 識人術挑選「長效型」員工
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
                                src="/blog-interview-nlp.png"
                                alt="外勞面試與 NLP 識人"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            在餐飲業管理 200 人團隊的歲月裡，我面試過的人不下數千位。我深知一個道理：「請錯人，比請不到人更燒錢。」特別是外勞，涉及兩年合約與申請成本，一旦「人崗不匹配」，損失的不僅是金錢，更是營運的節奏。
                            <br /><br />
                            今天，我分享如何運用 25 年的實戰經驗結合 NLP 識人技術，幫你挑選出最適合香港節奏的穩定員工。
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">一、</span> 技能評估：別問「你會嗎」，要問「怎麼做」
                        </h2>
                        <p>很多老闆面試時會問：「你會炒鍋嗎？」或「你會操作 POS 嗎？」對方為了得到工作，答案一定是一致的「會」。</p>

                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                            <h3 className="text-lg font-bold text-brand-blue mb-4">Zero 的專業做法：場景模擬法</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <strong className="block text-slate-700 mb-1">實戰題設計：</strong>
                                    <p className="text-sm text-slate-600">「如果你在午市高峰期，同時有 5 張單要出，其中一桌客人投訴菜太鹹，你會如何排優先順序？」</p>
                                    <p className="text-sm text-brand-gold font-semibold mt-2">→ 觀察點：真正的熟手會先講「情緒安撫」和「流程補救」。</p>
                                </div>
                                <div>
                                    <strong className="block text-slate-700 mb-1">技術校準：</strong>
                                    <p className="text-sm text-slate-600">視訊面談時，請他展示一下拿刀的手勢、翻鍋的動作或端托盤的姿勢。</p>
                                    <p className="text-sm text-brand-gold font-semibold mt-2">→ 肌肉記憶是騙不了人的。</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">二、</span> 態度評估：運用 NLP 挖掘「動機」的深層結構
                        </h2>
                        <p>外勞之所以願意離鄉背井，核心動力通常是「錢」。但作為 NLP 執行師，我會進一步觀察他的<strong>「激勵模式」 (Motivation Direction)</strong>：</p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                                        <Target className="w-5 h-5" /> 追求型 (Toward)
                                    </h3>
                                    <p className="text-sm text-green-900 mb-0 italic">
                                        「我想來香港賺錢買房子、供孩子讀書。」
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-green-200">
                                    <span className="text-xs font-bold text-green-700 bg-green-200 px-2 py-1 rounded">Zero 推薦</span>
                                </div>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center gap-2">
                                        <ScanSearch className="w-5 h-5" /> 逃避型 (Away from)
                                    </h3>
                                    <p className="text-sm text-red-900 mb-0 italic">
                                        「我在家鄉找不到工作，所以想出來試試。」
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-red-200">
                                    <span className="text-xs font-bold text-red-700 bg-red-200 px-2 py-1 rounded">韌性較低</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600 font-semibold mb-8">
                            有明確目標（如供樓、供學）的人，在面對香港高壓工作環境時，韌性與穩定性會比單純想「逃避現狀」的人強得多。
                        </p>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">三、</span> 穩定性評估：觀察「行為模式」而非承諾
                        </h2>
                        <ul className="list-disc pl-6 space-y-4 text-slate-700">
                            <li>
                                <strong>壓力測試 (Stress Test)：</strong> 故意告知香港餐飲業非常辛苦，可能要站 10 小時，且空間狹窄。觀察他的第一反應是「下意識退縮」還是「堅定接受」。
                            </li>
                            <li>
                                <strong>觀察與校準 (Calibration)：</strong> 詢問他過去最長的一份工作做了多久？為什麼離開？觀察他在回答這些問題時的語速、呼吸和眼神，判斷其是否有隱瞞。
                            </li>
                            <li>
                                <strong>親和感測試 (Rapport)：</strong> 觀察他是否能快速適應你的對話節奏。在餐飲業，靈活性與溝通力是團隊合作的基石。
                            </li>
                        </ul>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">四、</span> 核心公式：人才價值評估
                        </h2>
                        <p>我習慣在心中用這個簡單的公式來對候選人進行評分：</p>

                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-xl my-8 text-center shadow-2xl">
                            <span className="text-2xl md:text-4xl font-mono tracking-wider block mb-4">
                                V = (S + E) × A × St
                            </span>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-300 mt-6 border-t border-slate-700 pt-6">
                                <div>S: Skills<br />專業技能</div>
                                <div>E: Experience<br />相關經驗</div>
                                <div>A: Attitude<br />工作態度</div>
                                <div>St: Stability<br />穩定性</div>
                            </div>
                        </div>
                        <p className="text-center text-slate-600 font-semibold">
                            注意：技能和經驗是相加的，但心態與穩定性是「相乘」的。如果穩定性為零，整個人才價值就是零。
                        </p>

                        {/* Section 5 & Conclusion */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">五、</span> 為什麼「粵港外勞事務所」的面試篩選不一樣？
                        </h2>
                        <p>
                            在我的事務所，我會親自設計面試題目。因為我做過侍應、做過總監，我懂一個洗碗工、一個燒味師傅或一個樓面主管在香港最需要具備的<strong>「心理素質」</strong>。
                        </p>
                        <div className="flex flex-wrap gap-3 my-6">
                            <span className="px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full font-bold">技術達標</span>
                            <span className="px-4 py-2 bg-brand-gold/10 text-brand-gold rounded-full font-bold">心態正確 (NLP)</span>
                            <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full font-bold">背景可靠</span>
                        </div>

                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 text-center">
                            結語：用營運總監的眼光，為你選對的人
                        </h2>
                        <p className="text-center">
                            面試是一場關於「人」的博弈。25 年的管理經驗告訴我，選對一個人，能讓你的營運省心兩年；選錯一個人，會讓你的營運混亂兩年。
                        </p>

                        {/* CTA Box */}
                        <div className="bg-slate-900 rounded-2xl p-8 text-white text-center mt-12 shadow-xl">
                            <Users className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">想找到真正適合的「長效型」外勞？</h3>
                            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                                讓 Zero 用 25 年的識人經驗為你把關。我們提供的不是履歷表，而是經過嚴格篩選的營運夥伴。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all inline-block hover:-translate-y-1"
                                >
                                    了解人才配對服務
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all inline-block hover:-translate-y-1"
                                >
                                    聯絡 Zero
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
                            {["外勞面試", "NLP識人", "招聘技巧", "人才評估", "餐飲管理"].map(tag => (
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
