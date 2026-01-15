"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Users, Globe, ArrowRight, CheckCircle, Clock, Shield, Zap, FileText } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCardNew from "../components/ServiceCardNew";

export default function ServicesPage() {
    const services = [
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "外勞申請專案",
            description: "提供印尼、菲律賓、越南等地外籍勞工申請服務，從文件準備到簽證辦理一站式支援。",
            features: ["文件準備協助", "簽證申請代辦", "面試培訓指導", "後續跟進服務"],
            price: "諮詢報價"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "跨境工作證申請",
            description: "專業辦理粵港兩地工作證申請，協助企業與個人順利完成跨境就業手續。",
            features: ["資格評估", "文件翻譯認證", "政府部門對接", "加急服務可選"],
            price: "諮詢報價"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "跨境人力資源諮詢",
            description: "為企業提供跨境人才招聘、勞務派遣、薪酬管理等全方位人力資源解決方案。",
            features: ["人才招聘方案", "勞務合同審核", "薪酬福利規劃", "合規風險管理"],
            price: "定制方案"
        }
    ];

    const processSteps = [
        { step: "01", title: "初步諮詢", desc: "了解您的需求，提供專業建議" },
        { step: "02", title: "資格評估", desc: "評估申請資格，制定方案" },
        { step: "03", title: "文件準備", desc: "協助準備所有必要文件" },
        { step: "04", title: "提交申請", desc: "向相關部門提交申請" },
        { step: "05", title: "跟進審批", desc: "實時跟進審批進度" },
        { step: "06", title: "成功交付", desc: "完成申請，提供後續支援" }
    ];

    return (
        <div className="min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-blue-50 to-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl lg:text-6xl font-bold text-brand-blue mb-0 leading-[1.2] tracking-tight">
                            香港外勞申請<br className="hidden md:block" />完整流程與指南
                        </h1>
                    </div>
                </div>
            </section>

            {/* Service Grid Section - Moved up to follow logical flow if needed, but keeping order as requested previously. Checking context, usually Guide comes first or Services? User asked for Guide page content. Keeping Services Grid. */}
            {/* Actually, user replaced "Core Services" with "Guide" in previous turn for Hero. The Service Grid (cards) is still there. Let's just update spacing. */}

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 max-w-4xl">
                        <h2 className="text-4xl font-bold text-brand-blue mb-6">全方位香港外勞服務範疇</h2>
                        <p className="text-lg text-slate-600 leading-relaxed text-justify">
                            我們香港外勞作為外勞中介推薦之選，在為本地僱主聘用外勞服務方面不遺餘力。坊間有著不少外勞公司，但論外勞代辦方面，本外勞公司對當中每個細節都兼顧得來，免去僱主的擔憂之同時，也能夠協助他們找到合適的員工，從而深得客戶信賴。
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-6 gap-6">
                        {/* Top Row: 3 Cards (each spans 2 cols) */}
                        <ServiceCardNew
                            title="申辦請外勞配額"
                            desc="外勞代辦項目，可確保僱主擁有需要申報請外勞的所有資料及資格，並受僱主委托，負責替企業根據其所屬行業進行申辦。"
                            bgImage="/service_interview.png"
                            colSpan="lg:col-span-2"
                        />
                        <ServiceCardNew
                            title="安排外勞面試"
                            desc="當獲得配額之後，我們外勞公司會按僱主的要求及配額數量進行匹配。面試會安排於內地、香港，或線上面試，相當方便。"
                            bgImage="/service_interview.png"
                            colSpan="lg:col-span-2"
                        />
                        <ServiceCardNew
                            title="安排來港手續及簽證"
                            desc="確認人手後，我們外勞公司會安排簽勞務合同，並為僱員於內地外勞機構辦理手續，以及香港入境處安排簽證來港。讓僱主可節省不少時間而放諸其業務發展方面等。"
                            bgImage="/hero.png"
                            colSpan="lg:col-span-2"
                        />

                        {/* Bottom Row: 2 Cards (each spans 3 cols) */}
                        <ServiceCardNew
                            title="中港兩地外勞招聘會"
                            desc="我們香港外勞辦事處在香港及內地兩地舉辦招聘會，可方便僱主更快更直接找到合適的外勞。"
                            bgImage="/hero.png"
                            colSpan="lg:col-span-3"
                        />
                        <ServiceCardNew
                            title="線上面試安排 尋找合適外勞"
                            desc="僱主可以透過我們香港外勞辦事處網頁對勞工進行篩選，並預約合適的外勞進行面試。"
                            bgImage="/service_interview.png"
                            colSpan="lg:col-span-3"
                        />
                    </div>
                </div>
            </section>

            {/* Process Section - Updated Scale */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">一、 申請流程逐步睇 (Step-by-Step)</h2>
                        <p className="text-xl text-slate-600">申請過程共分為六個標準化階段</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* STEP 1 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-visible hover:shadow-xl transition-all hover:-translate-y-1 group relative">
                            <div className="bg-brand-blue text-white py-5 px-8 font-bold flex justify-between items-center text-lg rounded-t-2xl">
                                <span>STEP 1</span>
                                <span className="text-white/80 text-base font-normal">需求溝通</span>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">需求溝通與授權</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    與僱主溝通需求，安排申請資料及授權，確保僱主符合「補充勞工優化計劃」要求。
                                </p>
                            </div>
                            {/* Arrow for Desktop */}
                            <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center text-brand-gold">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-visible hover:shadow-xl transition-all hover:-translate-y-1 group relative">
                            <div className="bg-brand-blue text-white py-5 px-8 font-bold flex justify-between items-center text-lg rounded-t-2xl">
                                <span>STEP 2</span>
                                <span className="text-white/80 text-base font-normal">取得配額</span>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">取得配額</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    協助僱主向勞工處取得輸入外勞的配額。
                                </p>
                            </div>
                            {/* Arrow for Desktop */}
                            <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center text-brand-gold">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <div className="bg-brand-blue text-white py-5 px-8 font-bold flex justify-between items-center text-lg">
                                <span>STEP 3</span>
                                <span className="text-white/80 text-base font-normal">人才招聘</span>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">人才招聘與篩選</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    在配額有效期內，透過線上或線下招聘活動，為僱主提供內地合適僱員並確認人選。
                                </p>
                            </div>
                        </div>

                        {/* STEP 4 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-visible hover:shadow-xl transition-all hover:-translate-y-1 group relative">
                            <div className="bg-brand-blue text-white py-5 px-8 font-bold flex justify-between items-center text-lg rounded-t-2xl">
                                <span>STEP 4</span>
                                <span className="text-white/80 text-base font-normal">簽署合約</span>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">簽署僱傭合約</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    安排僱傭雙方簽署勞工處指定的標準僱傭合約。
                                </p>
                            </div>
                            {/* Arrow for Desktop */}
                            <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center text-brand-gold">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>

                        {/* STEP 5 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-visible hover:shadow-xl transition-all hover:-translate-y-1 group relative">
                            <div className="bg-brand-blue text-white py-5 px-8 font-bold flex justify-between items-center text-lg rounded-t-2xl">
                                <span>STEP 5</span>
                                <span className="text-white/80 text-base font-normal">辦理簽證</span>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">辦理簽證</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    於入境處辦理僱員來港簽證，以及辦理內地所需的工作簽證。
                                </p>
                            </div>
                            {/* Arrow for Desktop */}
                            <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center text-brand-gold">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </div>

                        {/* STEP 6 */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <div className="bg-brand-blue text-white py-5 px-8 font-bold flex justify-between items-center text-lg">
                                <span>STEP 6</span>
                                <span className="text-white/80 text-base font-normal">到港安排</span>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-blue transition-colors">到港與住宿安排</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    安排勞工到港後的住宿環境及日常生活支援。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section II: Application Prerequisites */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                            CHECKLIST
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">二、 申請前需知事項</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            為提高申請成功率，提交前請確保企業符合以下四大核心門檻
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-blue/30 transition-all hover:shadow-lg group">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">符合本地員工比例</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                需符合「補充勞工優化計劃」下的比例要求，即本地全職員工與輸入外勞比例為 <span className="font-bold text-brand-gold">2:1</span>。
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-blue/30 transition-all hover:shadow-lg group">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-xl font-bold">$</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">確認職位薪金</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                申請外勞的職位薪金，不可低於政府最新編製的相關行業<span className="font-bold text-brand-gold">工資中位數</span>。
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-blue/30 transition-all hover:shadow-lg group">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">強積金 (MPF) 證明</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                僱主需提供強積金供款紀錄，以證明其實際聘用的<span className="font-bold text-brand-gold">本地全職員工</span>人數。
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-blue/30 transition-all hover:shadow-lg group">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">確認上班地點</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                申請時需填寫確切上班地點。勞工處通常會視情況批出 <span className="font-bold text-brand-gold">1 至 3 個</span>工作地點。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section III: Required Documents */}
            <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                DOCUMENTS
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">三、 申請外勞<br />所需文件清單</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                為確保流程順暢，避免因文件缺失與錯誤導致申請被拒或延誤，請預先準備好以下公司核心文件，讓我們助您快速審核。
                            </p>
                            <Link href="/contact">
                                <button className="bg-brand-gold hover:bg-yellow-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-yellow-500/20 flex items-center gap-2">
                                    免費獲取文件清單 <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {/* Doc 1 */}
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex items-start gap-5 hover:bg-white/15 transition-colors">
                                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400 shrink-0">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">1. 商業登記證 (BR)</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">由稅務局發出，證明企業在香港合法營運及繳稅狀況。</p>
                                </div>
                            </div>

                            {/* Doc 2 */}
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex items-start gap-5 hover:bg-white/15 transition-colors">
                                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400 shrink-0">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">2. 公司註冊證 (CI)</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">由公司註冊處簽發，證明公司的法人地位（即公司的「出生紙」）。</p>
                                </div>
                            </div>

                            {/* Doc 3 */}
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex items-start gap-5 hover:bg-white/15 transition-colors">
                                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400 shrink-0">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">3. 周年申報表 (NAR1)</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">載有公司最新董事及股東資料的法定表格，必須每年按時提交。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section IV: Simplification */}
            <section className="py-16 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">四、 程序簡化與快速招聘</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            自 2023 年優化計劃推出後，招聘流程已大幅提速，助您更快填補空缺
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">審批時間縮短</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                勞工處已優化審批流程，若資料齊全，審批時間較以往大幅縮短，讓企業能更快獲得人手。
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">取消實地巡查</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                以往勞工督察需親自巡查辦公地點，現已改為<span className="font-bold text-purple-600">審視文件</span>，大幅減少等待時間。
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">核實方式靈活</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                勞工處改以<span className="font-bold text-brand-blue">電話或書面</span>方式核實資料取代現場巡查，行政效率顯著提升。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-brand-blue mb-6">準備開始申請了嗎？</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        我們的專業團隊隨時為您提供協助
                    </p>
                    <div className="flex justify-center mt-8">
                        <Link href="/apply">
                            <button className="gradient-guangzhou-hongkong text-white px-10 py-4 md:px-16 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl transition-all transform hover:scale-105 hover:shadow-brand-blue/50 inline-flex items-center justify-center gap-3 ring-4 ring-blue-100/50 w-auto">
                                立即開始申請 <ArrowRight className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
