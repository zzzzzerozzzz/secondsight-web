"use client";

import Link from "next/link";
import { Upload, FileText, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ApplyPage() {
    return (
        <div className="min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl font-bold text-brand-blue mb-6">開始申請</h1>
                        <p className="text-xl text-slate-600">
                            請準備好以下文件，我們將協助您完成申請流程
                        </p>
                    </div>
                </div>
            </section>

            {/* Requirements Checklist */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                        <h2 className="text-3xl font-bold text-brand-blue mb-2">申請前準備清單</h2>
                        <p className="text-slate-600 mb-8">請在填表前集齊以下文件副本（視乎公司類別）：</p>

                        <div className="space-y-8">
                            {/* Category 1 */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-brand-gold rounded-full"></span>
                                    基本文件
                                </h3>
                                <div className="space-y-3 pl-4">
                                    {[
                                        "有效的商業登記證 (BR) 副本",
                                        "(如適用) 牌照副本 (例如食肆牌照)"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors border border-slate-100">
                                            <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Category 2 */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-brand-gold rounded-full"></span>
                                    公司架構文件
                                </h3>
                                <div className="space-y-3 pl-4">
                                    {[
                                        "有限公司：公司註冊證明書 (CI) 副本",
                                        "獨資/合夥：商業登記冊內資料的摘錄 (核證本) 副本、所有合夥人資料"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors border border-slate-100">
                                            <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Category 3 */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-brand-gold rounded-full"></span>
                                    營運證明
                                </h3>
                                <div className="space-y-3 pl-4">
                                    {[
                                        "全職本地僱員資料報表 (附頁二)：需列出員工姓名、職位、身份證號碼等，證明符合人手比例",
                                        "輸入勞工的理據 (附頁五)：需詳細解釋為何無法在本地聘得人手、人手短缺對營運的影響",
                                        "經濟能力證明（如最近期的審計報告、銀行月結單等，勞工處或會要求提供）"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors border border-slate-100">
                                            <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Application Notice */}
                    <div className="bg-yellow-50 border-l-4 border-brand-gold p-6 rounded-xl mb-8">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">重要提示</h3>
                                <p className="text-slate-700 text-sm">
                                    正式申請需要提交完整的文件資料。如果您還未準備好所有文件，建議先
                                    <Link href="/consultation" className="text-brand-blue underline font-semibold">預約諮詢</Link>
                                    ，我們的專業顧問將協助您準備所需文件。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link href="/consultation" className="block h-full">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-brand-blue h-full flex flex-col">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue mb-4">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">預約諮詢</h3>
                                <p className="text-slate-600 mb-4 flex-1">
                                    與我們的專業顧問討論您的需求，獲取詳細的申請指導
                                </p>
                                <div className="flex items-center text-brand-blue font-semibold mt-auto">
                                    立即預約 <ArrowRight className="w-5 h-5 ml-2" />
                                </div>
                            </div>
                        </Link>

                        <a href="mailto:ZEROWONG5@GMAIL.COM?subject=申請資料提交" className="block h-full">
                            <div className="bg-gradient-to-br from-brand-blue to-brand-red p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-white h-full flex flex-col border-2 border-transparent">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                    <Upload className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">提交申請文件</h3>
                                <p className="text-white/90 mb-4 flex-1">
                                    已準備好所有文件？通過電郵提交您的申請資料
                                </p>
                                <div className="flex items-center font-semibold mt-auto">
                                    發送電郵 <ArrowRight className="w-5 h-5 ml-2" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-brand-blue mb-4">申請流程時間表</h2>
                        <p className="text-xl text-slate-600">一般申請需時 3-5 個月</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { week: "第1個月", title: "文件準備與招聘", desc: "協助準備 BR、CI 等文件，並進行為期 4 星期的本地招聘（強制性）。" },
                            { week: "第2-4個月", title: "勞工處審批", desc: "勞工處進行初步甄別，並視乎個案提交勞顧會諮詢及審批。" },
                            { week: "第5個月", title: "入境處簽證", desc: "成功獲批配額後，向入境處申請簽證，一般需時 6 星期。" },
                            { week: "完成", title: "正式到港", desc: "簽證獲批，安排外勞到港履新。" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-red text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                                    {item.week}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Link */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-brand-blue mb-4">還有疑問？</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        查看我們的常見問題或直接聯繫我們
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/faq">
                            <button className="bg-white border-2 border-brand-blue text-brand-blue hover:bg-blue-50 px-10 py-4 rounded-xl font-semibold transition-all">
                                常見問題
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="gradient-guangzhou-hongkong hover:opacity-90 text-white px-10 py-4 rounded-xl font-semibold transition-all">
                                聯繫我們
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
