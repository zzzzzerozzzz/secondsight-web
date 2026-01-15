"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-10 bg-gradient-to-b from-blue-50 via-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center text-brand-blue mx-auto mb-8 transform -rotate-6 hover:rotate-0 transition-all duration-500">
                            <Shield className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                            隱私政策
                        </h1>
                        <p className="text-lg text-slate-600 mb-2">
                            我們重視並保護您的個人資料
                        </p>
                        <p className="text-sm text-slate-400">最後更新日期：2026年1月9日</p>
                    </div>
                </div>
            </section>

            {/* Privacy Content */}
            <section className="pb-24 pt-2">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 space-y-10">
                        <div className="border-b border-slate-100 pb-8">
                            <p className="text-slate-600 leading-relaxed text-lg">
                                <span className="text-brand-blue font-bold">粵港外勞事務所</span>（以下簡稱「我們」）非常重視您的個人隱私。本政策旨在說明我們如何收集、使用、披露及保護您的個人資料。當您訪問本網站或使用我們的服務時，即表示您同意本政策所述的慣例。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">1. 收集個人資料的類別</h2>
                            <p className="text-slate-600 mb-4">我們可能收集的個人資料包括但不限於：</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                <li><strong>基本資料：</strong> 姓名、性別、出生日期、國籍。</li>
                                <li><strong>聯絡資料：</strong> 電話號碼、電郵地址、通訊地址。</li>
                                <li><strong>身分證明：</strong> 香港身份證號碼、護照號碼及相關複印件（僅在辦理相關勞務申請時收集）。</li>
                                <li><strong>技術數據：</strong> IP 地址、瀏覽器類型、訪問時間及在網站上的活動記錄。</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">2. 收集資料的目的</h2>
                            <p className="text-slate-600 mb-4">我們收集您的個人資料將用於以下用途：</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                <li>提供、處理及管理您所申請的各項服務（如外勞申請、顧問服務）。</li>
                                <li>回答您的查詢、提供技術支援或發送行政通知。</li>
                                <li>遵守香港法律法規及政府部門（如勞工處、入境處）的要求。</li>
                                <li>在取得您同意的情況下，向您發送推廣資訊及最新服務消息。</li>
                                <li>改善我們的網站運作及進行內部統計分析。</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">3. 資料的披露與轉移</h2>
                            <p className="text-slate-600 mb-4">我們承諾會對您的個人資料保密，但在以下情況下，我們可能會向第三方披露資料：</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                <li><strong>政府機構：</strong> 根據法律要求向香港勞工處、入境處或其他執法部門提交必要資料。</li>
                                <li><strong>服務供應商：</strong> 提供 IT 支援、支付處理或物流服務的第三方合作夥伴（他們必須遵守保密協議）。</li>
                                <li><strong>法律要求：</strong> 為了保護我們的合法權益，或在法律程序中必須披露時。</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">4. 個人資料的保安</h2>
                            <p className="text-slate-600 leading-relaxed">
                                我們採取多種保安措施（包括加密技術、物理訪問限制等）以防止您的個人資料遺失、被竊取或未經授權的存取。然而，互聯網傳輸並非百分之百安全，我們無法保證絕對的安全性。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">5. 資料保留期間</h2>
                            <p className="text-slate-600 leading-relaxed">
                                我們僅在實現收集目的所需的時間內保留您的個人資料。除非法律另有規定，否則當資料不再需要時，我們會採取合理步驟將其銷毀或匿名化。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">6. 查閱及更正資料的權利</h2>
                            <p className="text-slate-600 mb-4">根據《個人資料（私隱）條例》，您有權：</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                <li>查詢我們是否持有您的個人資料。</li>
                                <li>要求查閱及獲取相關資料的副本。</li>
                                <li>要求更正任何不準確的資料。</li>
                                <li>隨時撤回您對接收促銷資訊的同意。</li>
                            </ul>
                            <p className="text-slate-600 mt-4">
                                如需行使上述權利，請透過下方聯絡方式與我們的資料保護主任聯絡。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">7. 直接促銷</h2>
                            <p className="text-slate-600 leading-relaxed">
                                如果您不希望接收我們的任何直接促銷通訊，請隨時點擊電郵中的「退訂」連結，或直接聯絡我們。我們在未經您同意前，不會將您的個人資料用於促銷目的。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">8. Cookie 的使用</h2>
                            <p className="text-slate-600 leading-relaxed">
                                我們的網站使用 Cookie 以提升用戶體驗。您可以透過瀏覽器設定拒絕 Cookie，但這可能會導致網站部分功能無法正常運作。
                            </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">9. 聯絡我們</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                如果您對本政策有任何疑問，請聯繫：
                            </p>
                            <div className="space-y-2 text-slate-700">
                                <p><strong>名稱：</strong> 粵港外勞事務所</p>
                                <p><strong>電郵：</strong> ZEROWONG5@GMAIL.COM</p>
                                <p><strong>電話：</strong> +852 6692 5445</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/">
                            <button className="bg-brand-blue hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold transition-all">
                                返回首頁
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
