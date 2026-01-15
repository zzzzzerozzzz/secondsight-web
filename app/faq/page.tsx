"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const faqs = [
        {
            category: "服務優勢",
            questions: [
                {
                    q: "你們擅長哪些行業的外勞申請？",
                    a: "我們擁有 20 年中港飲食集團營運經驗，特別專精於餐飲業 (F&B) 的人才輸送，包括廚師、侍應、洗碗工等。同時，我們也廣泛涵蓋零售、物流、護理等其他行業。"
                },
                {
                    q: "提供的外勞是否有經過培訓？",
                    a: "是的。我們不只提供人頭，更重視人才質素。我們提供實戰 SOP 與崗前培訓，確保外勞具備相關技能與職業操守，到港後能迅速適應環境，為企業提供即戰力。"
                }
            ]
        },
        {
            category: "申請流程與時間",
            questions: [
                {
                    q: "申請外勞需要多長時間？",
                    a: (
                        <div>
                            整個流程並沒有固定的法定時限，但一般需時 <strong>3 至 5 個月或以上</strong>，主要由以下階段組成：
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>勞工處審批：</strong>
                                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-500">
                                        <li>初步甄別：視乎資料是否齊全及是否屬於「常見職位」。如申請「常見職位」（如售貨員、侍應）並填妥指定表格，可加快甄別。</li>
                                        <li>本地招聘期（強制性）：4 星期（由 2025 年 9 月 18 日起，侍應生及初級廚師的招聘期延長至 6 星期）。</li>
                                        <li>勞顧會諮詢及審批：視乎個案複雜度。</li>
                                    </ul>
                                </li>
                                <li><strong>入境處簽證：</strong>在收齊所需文件後，一般需時 6 星期。</li>
                            </ul>
                        </div>
                    )
                },
                {
                    q: "需要準備哪些文件？",
                    a: (
                        <div>
                            主要文件包括（但不限於）：
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>申請階段：</strong>
                                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-500">
                                        <li>申請表（常見職位填 ESLS-1A；非常見職位填 ESLS-1B）。</li>
                                        <li>商業登記證副本。</li>
                                        <li>全職本地僱員資料報表（證明符合 2:1 人手比例）。</li>
                                        <li>經濟能力證明（如審計報告、銀行月結單）。</li>
                                    </ul>
                                </li>
                                <li><strong>簽證階段：</strong>
                                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-500">
                                        <li>標準僱傭合約（LD294，一式四份）。</li>
                                        <li>輸入勞工的旅行證件、學歷及工作證明副本。</li>
                                        <li>（如屬內地勞工）經內地勞務企業蓋章的「聲明及授權書」及「共同聲明書」。</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    )
                },
                {
                    q: "申請被拒絕後可以重新申請嗎？",
                    a: (
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>可以覆核：</strong>如申請遭拒絕，僱主可在通知書發出日期起計 3 個月內 向補充勞工科提出書面覆核申請。</li>
                            <li><strong>重新遞交限制：</strong>同一申請者在 六個月內 不可遞交多於一次新申請（2025 年 6 月 16 日或之前的申請不計在內），否則會被直接退回。</li>
                            <li><strong>簽證被拒：</strong>如因文件不全或不符資格被入境處拒絕，原則性批准即告無效，需重新向勞工處申請。</li>
                        </ul>
                    )
                }
            ]
        },
        {
            category: "費用與合同",
            questions: [
                {
                    q: "服務費用如何計算？",
                    a: (
                        <div>
                            申請外勞需支付以下政府法定費用：
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>僱員再培訓徵款 (Levy)：</strong>這是必須繳付給政府的費用。
                                    <ul className="list-[circle] pl-5 mt-1 space-y-1 text-slate-500">
                                        <li>計算方法：$400 × 合約月數。</li>
                                        <li>例子：合約期 24 個月，需繳付 400×24=<strong>$9,600</strong>。</li>
                                    </ul>
                                </li>
                                <li><strong>簽證費用：</strong>入境事務處會收取規定的簽證／進入許可費用，由僱主支付。</li>
                                <li><strong>其他開支：</strong>必須支付外勞的來回旅費、醫療費用、住宿補貼（如適用）及內地勞務企業的招聘服務費（如聘用內地人）。</li>
                            </ul>
                        </div>
                    )
                },
                {
                    q: "是否需要預付費用？",
                    a: (
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>再培訓徵款：</strong>是。須在輸入勞工申請獲批後、入境處發出簽證前，一筆過繳付。</li>
                        </ul>
                    )
                }
            ]
        },
        {
            category: "工作證申請",
            questions: [
                {
                    q: "粵港兩地工作證有什麼區別？",
                    a: (
                        <div>
                            這通常是指內地居民來港工作所需的「雙重證件」：
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>內地發出：</strong>《往來港澳通行證》 (Exit-Entry Permit) 及相關赴港簽注（由內地公安局簽發），許可勞工離開內地。</li>
                                <li><strong>香港發出：</strong>簽證／進入許可 (Visa/Entry Permit)（由香港入境處簽發），許可勞工進入香港工作。</li>
                                <li><strong>注意：</strong>內地勞工必須經由核准的「內地勞務企業」辦理手續，不能以個人身分直接申請。</li>
                            </ul>
                        </div>
                    )
                },
                {
                    q: "工作證有效期多長？",
                    a: (
                        <ul className="list-disc pl-5 space-y-2">
                            <li>一般為 <strong>24 個月</strong> 或 <strong>僱傭合約期</strong>（兩者以較短者為準）。</li>
                            <li>合約完結後不會自動續期，外勞必須返回原居地。如僱主想繼續聘用，必須重新向勞工處遞交申請。</li>
                        </ul>
                    )
                }
            ]
        },
        {
            category: "其他問題",
            questions: [
                {
                    q: "你們提供哪些語言服務？",
                    a: (
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>表格與合約：</strong>申請表格（如 ESLS-1A）及標準僱傭合約均提供 <strong>中英文對照</strong> 版本。</li>
                            <li><strong>語文要求：</strong>申請表內需註明外勞的語文要求（如粵語、英語或普通話水平），以確保其能勝任工作。</li>
                        </ul>
                    )
                },
                {
                    q: "可以加急處理嗎？",
                    a: (
                        <div>
                            官方沒有付費加急服務，但您可以透過以下方式加快流程：
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>選用「常見職位」：</strong>填寫表格 ESLS-1A 並完全採納勞工處建議的薪金及入職條件，可加快通過初步甄別。</li>
                                <li><strong>資料準確：</strong>確保文件齊全，避免勞工處要求補充資料而拖慢進度。</li>
                            </ul>
                        </div>
                    )
                },
                {
                    q: "如何跟進申請進度？",
                    a: (
                        <div>
                            您可以透過以下途徑聯絡勞工處補充勞工科跟進：
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>熱線電話：</strong>2150 6363</li>
                                <li><strong>電郵：</strong>sld-hq@labour.gov.hk</li>
                                <li><strong>辦事處地址：</strong>九龍長沙灣道 303 號長沙灣政府合署 9 樓 929 室。</li>
                            </ul>
                        </div>
                    )
                }
            ]
        }
    ];

    const filteredFAQs = faqs.map(category => ({
        ...category,
        questions: category.questions.filter(
            item => item.q.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.questions.length > 0);

    return (
        <div className="min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl font-bold text-brand-blue mb-6">常見問題</h1>
                        <p className="text-xl text-slate-600 mb-8">
                            快速找到您需要的答案
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="搜索問題..."
                                className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent text-lg"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredFAQs.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-xl text-slate-600">沒有找到相關問題</p>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {filteredFAQs.map((category, catIndex) => (
                                <div key={catIndex}>
                                    <h2 className="text-2xl font-bold text-brand-blue mb-6">{category.category}</h2>
                                    <div className="space-y-4">
                                        {category.questions.map((item, qIndex) => {
                                            const globalIndex = catIndex * 100 + qIndex;
                                            const isOpen = openIndex === globalIndex;

                                            return (
                                                <div
                                                    key={qIndex}
                                                    className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                                                >
                                                    <button
                                                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                                                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                                                    >
                                                        <span className="font-semibold text-slate-900 pr-4">{item.q}</span>
                                                        <ChevronDown
                                                            className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''
                                                                }`}
                                                        />
                                                    </button>
                                                    {isOpen && (
                                                        <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                                            {item.a}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-brand-blue mb-4">還有其他問題？</h2>
                    <p className="text-xl text-slate-600 mb-8">
                        我們的專業團隊隨時為您解答
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <button className="gradient-guangzhou-hongkong hover:opacity-90 text-white px-10 py-4 rounded-xl font-semibold shadow-xl transition-all">
                                聯繫我們
                            </button>
                        </Link>
                        <Link href="/consultation">
                            <button className="bg-white border-2 border-brand-blue text-brand-blue hover:bg-blue-50 px-10 py-4 rounded-xl font-semibold transition-all">
                                預約諮詢
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
