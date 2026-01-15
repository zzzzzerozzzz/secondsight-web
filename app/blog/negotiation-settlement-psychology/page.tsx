"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag, MessageCircle, HeartHandshake, Scale, BrainCircuit, Timer, TrendingUp } from "lucide-react";

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
                            【Zero 談判課】勞工處和解不是打官司，是心理戰！
                            <span className="block text-2xl lg:text-3xl text-slate-500 font-normal mt-4">
                                營運總監的 3 大和解心法
                            </span>
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
                                src="/blog-negotiation.jpg"
                                alt="談判與和解技巧"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
                            很多老闆收到勞工處的傳票時，第一反應是「氣憤」和「對抗」。但我想告訴你，調解室不是法庭，調解員也不是法官。
                            <br /><br />
                            調解的本質是<strong>「成本交換」與「情緒處理」</strong>。如果你能運用 NLP 的溝通技巧，往往能省下幾個月的法庭糾纏與巨額的律師費。
                        </p>

                        {/* Principle 1 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">一、</span> 建立「契合點」（Pacing & Leading）：別把調解員推向對面
                        </h2>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                            <p className="mb-4">在調解室裡，最重要的第三方不是法律，而是調解員。 很多老闆一進門就對著調解員大喊大叫，這在 NLP 中叫「破壞狀態（State Breaking）」。</p>

                            <div className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm">
                                <BrainCircuit className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-800 mt-0 mb-1">Zero 的 NLP 技巧</h4>
                                    <p className="text-sm text-slate-600 mb-0">
                                        你要先與調解員建立<strong>「親和感（Rapport）」</strong>。主動遞名片、保持禮貌、表現出「我是來解決問題，不是來吵架」的態度。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-brand-blue font-semibold text-center italic">
                            目標：當調解員覺得你是一個「明事理的老闆」時，他在向員工傳達方案時，語氣會不自覺地偏向你。
                        </p>

                        {/* Principle 2 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">二、</span> 處理「情緒情緒」，再談「事實事實」
                        </h2>
                        <p>員工會告上勞工處，通常只有 20% 是為了錢，80% 是因為<strong>「不甘心」或「覺得被冒犯」</strong>。</p>

                        <div className="my-8 space-y-4">
                            <div className="bg-blue-50 p-4 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border border-blue-100 max-w-2xl">
                                <p className="text-sm text-blue-800 font-bold mb-1">🎯 運用 NLP 換位思考（Perceptual Positions）</p>
                                <p className="text-blue-900 mb-0">在談判前，先想一下員工現在的「安全感」是否被威脅？他是不是覺得這 25 年的餐飲尊嚴被踩碎了？</p>
                            </div>

                            <div className="flex justify-end">
                                <div className="bg-brand-gold/10 p-4 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl border border-brand-gold/20 max-w-2xl">
                                    <p className="text-sm text-brand-navy font-bold mb-1">🗣️ 實戰對話示範</p>
                                    <p className="text-slate-800 italic mb-0">
                                        「標哥，雖然你在這件事上有疏忽，但我一直很欣賞你過去對廚房的貢獻...（先處理情緒）。今天我們來這裡，是想找出一個大家都能接受的方案，讓我們都能重新開始（給予未來導向）。」
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p><strong>效果：</strong> 當一個人的情緒被看見，他的防衛機制（Fight or Flight）就會下降，和解空間就會增大。</p>

                        {/* Principle 3 */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">三、</span> 給予「黃金橋樑」：讓對方體面地撤訴
                        </h2>
                        <p>在談判學中，這叫「為對手築一座撤退的黃金橋」。不要一次把底牌亮出來。如果員工要求賠償 10 萬，你的底線是 5 萬。</p>

                        <div className="grid md:grid-cols-3 gap-4 my-8">
                            <div className="border border-slate-200 p-4 rounded-xl text-center">
                                <Scale className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                                <h4 className="font-bold text-slate-800">錨定效應</h4>
                                <p className="text-sm text-slate-600">先提出一個較低的方案（例如 2 萬），並詳細解釋計算邏輯。</p>
                            </div>
                            <div className="border border-slate-200 p-4 rounded-xl text-center">
                                <TrendingUp className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                                <h4 className="font-bold text-slate-800">階梯式讓步</h4>
                                <p className="text-sm text-slate-600">在調解員的協調下，慢慢加到 3 萬、4 萬。</p>
                            </div>
                            <div className="border border-slate-200 p-4 rounded-xl text-center">
                                <HeartHandshake className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                                <h4 className="font-bold text-slate-800">非金錢補償</h4>
                                <p className="text-sm text-slate-600">提供「工作推薦信」或「不追究過失聲明」，往往比現金重要。</p>
                            </div>
                        </div>

                        {/* Opportunity Cost */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6 flex items-center gap-2">
                            <span className="text-brand-gold">四、</span> 計算「機會成本」：贏了官司，輸了生意？
                        </h2>
                        <div className="bg-slate-800 text-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 bg-white/10 p-4 rounded-full">
                                <Timer className="w-10 h-10 text-brand-gold" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">作為營運總監，我常提醒老闆：「你的時間每小時值多少錢？」</h3>
                                <p className="opacity-80 mb-4">
                                    如果為了爭那 5,000 元的代通知金，你要跑三次勞工處、兩次勞資審裁處，加上準備證據的體力消耗，這絕對是負債投資。
                                </p>
                                <div className="bg-white/10 inline-block px-4 py-2 rounded-lg font-semibold text-brand-gold">
                                    🌟 黃金法則：如果雙方差距在 20% 以內，能當場簽署「和解協議」就絕對不要拖。
                                </div>
                            </div>
                        </div>

                        {/* Conclusion */}
                        <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6">結語：轉化衝突為成長的機會</h2>
                        <p>
                            每一次勞資糾紛，都是對公司制度的一次「壓力測試」。在「粵港外勞事務所」的管理諮詢中，我會教老闆如何把這些和解經驗寫進員工手冊。最好的和解，是從一開始就不需要進入調解室。
                        </p>

                        {/* CTA Box */}
                        <div className="mt-12 text-center border-t border-slate-200 pt-12">
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">正受困於勞資糾紛？</h3>
                            <p className="mb-8 text-slate-600 max-w-2xl mx-auto">
                                如果你需要我陪同進行「模擬面談」，或需要專業的談判策略諮詢，歡迎與我聯絡。我們用 NLP 的智慧，把大問題化小，小問題化無。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/consultation">
                                    <button className="bg-brand-gold hover:bg-yellow-500 text-brand-navy px-8 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                                        <MessageCircle className="w-5 h-5" /> 預約談判諮詢
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
                            {["勞工處調解", "談判技巧", "NLP心理戰", "Zero談判課", "危機管理"].map(tag => (
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
