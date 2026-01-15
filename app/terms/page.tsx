"use client";

import Link from "next/link";
import { FileText, AlertCircle, Scale } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-10 bg-gradient-to-b from-blue-50 via-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center text-brand-blue mx-auto mb-8 transform -rotate-6 hover:rotate-0 transition-all duration-500">
                            <Scale className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                            服務條款
                        </h1>
                        <p className="text-lg text-slate-600 mb-2">
                            使用我們的服務前，請仔細閱讀以下條款
                        </p>
                        <p className="text-sm text-slate-400">最後更新日期：2026年1月10日</p>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 space-y-10">
                        <div className="border-b border-slate-100 pb-8">
                            <p className="text-slate-600 leading-relaxed text-lg">
                                <span className="text-brand-blue font-bold">粵港外勞事務所</span>根據以下條款提供服務。使用本公司服務，即表示您同意受本條款約束。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">1. 服務範圍</h2>
                            <p className="text-slate-600 mb-4">本公司提供以下專業顧問及代辦服務：</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                <li><strong>外地勞工輸入申請：</strong>包括但不限於「補充勞工優化計劃」及各行業輸入勞工計劃。</li>
                                <li><strong>簽證及工作許可代辦：</strong>辦理粵港兩地工作證、受聘簽證及相關續期手續。</li>
                                <li><strong>跨境人力資源諮詢：</strong>提供合規性分析、薪酬建議及招聘解決方案。</li>
                                <li><strong>輔助服務：</strong>相關申請文件的翻譯、公證及認證對接服務。</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">2. 客戶義務與責任</h2>
                            <p className="text-slate-600 mb-4">客戶在使用本公司服務時，承諾並同意：</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                <li>提供真實、準確且完整的資料與文件；若因虛假陳述引致法律責任，本公司概不負責。</li>
                                <li>及時回應本公司的查詢，並按要求補充政府部門所需的額外文件。</li>
                                <li>嚴格遵守香港《僱傭條例》及相關入境條例，承諾合法聘用及對待外籍勞工。</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">3. 費用與支付條款</h2>
                            <div className="space-y-4 text-slate-600 ml-2">
                                <p><strong>3.1 服務費用：</strong>總金額根據服務內容及複雜程度釐定，具體金額以雙方簽署的《服務合約》或報價單為準。</p>

                                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-brand-blue my-4">
                                    <p className="font-bold text-brand-blue mb-2">3.2 支付流程：</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li><strong>預繳訂金：</strong>於向勞工處正式遞交申請資料後，客戶須按每名申請勞工預繳 <strong>港幣 1,000 元</strong> 作為訂金。</li>
                                        <li><strong>費用抵扣：</strong>上述預繳之訂金將於整個服務項目的總費用結算時，全數從中扣除。</li>
                                        <li><strong>餘額結清：</strong>餘下之服務費用，按合約約定之進度或服務完成時支付。</li>
                                    </ul>
                                </div>

                                <p><strong>3.3 第三方費用：</strong>政府規費（如：僱員再培訓徵款 Levy）、簽證費、政府手續費、翻譯及公證費等，均由客戶實報實銷，不包含在上述訂金或服務費內。</p>
                                <p><strong>3.4 逾期補償：</strong>如逾期支付任何款項，本公司保留按年利率 5% 索取利息或暫停後續申請流程的權利。</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">4. 退款政策</h2>
                            <div className="space-y-4 text-slate-600 ml-2">
                                <p><strong>4.1 服務啟動前：</strong>客戶如欲取消服務，本公司將退還已繳款項，但需扣除不超過總費用 10% 的行政處理費。</p>
                                <p><strong>4.2 服務進行中：</strong>若服務已啟動，本公司將按已完成的工作量（工時或階段）結算費用，已產生的行政支出與第三方費用恕不退還。</p>
                                <p><strong>4.3 申請失敗：</strong>如因本公司行政疏失導致申請被拒，本公司將全額退還該部分的服務費。</p>
                                <p><strong>4.4 不予退款情況：</strong>因政府政策突發變動、客戶提供虛假/不完整資料、或政府部門最終行使審批裁決權而導致的失敗，本公司恕不退款。</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">5. 服務時限與免責</h2>
                            <p className="text-slate-600 leading-relaxed">
                                服務時限受政府部門處理速度及政策環境影響。本公司承諾盡力縮短處理時間，但不對政府部門的審批結果及所需時間作出保證。如因公務延誤或政策調整導致時限超預期，本公司不承擔任何賠償責任。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">6. 私隱保障與保密</h2>
                            <p className="text-slate-600 mb-4">本公司嚴格遵守香港法例第 486 章《個人資料（私隱）條例》：</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                <li>客戶資料僅用於提供相關申請服務。</li>
                                <li>未經客戶書面同意，本公司不會向第三方披露任何隱私資料（法律要求或政府審核所需除外）。</li>
                                <li>服務結束後，文件將按法律規定保存，期滿後將安全銷毀。</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">7. 責任限制</h2>
                            <p className="text-slate-600 mb-4">本公司之責任僅限於提供專業的諮詢與申請代辦服務，不對以下情況承擔責任：</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                <li>政府部門最終的審批結果（如拒絕批出配額或簽證）。</li>
                                <li>客戶提供虛假資料導致的任何刑事或民事後果。</li>
                                <li>外勞到港後的個人行為表現或勞資雙方的後續糾紛。</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">8. 服務之終止</h2>
                            <p className="text-slate-600 mb-4">發生以下情況時，本公司有權立即終止服務且不予退款：</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                <li>客戶提供偽造文件或試圖從事違法僱傭活動。</li>
                                <li>客戶拖欠任何款項超過 30 天。</li>
                                <li>客戶嚴重違反本條款或香港相關法律法規。</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">9. 爭議解決</h2>
                            <p className="text-slate-600 leading-relaxed">
                                如對本服務有任何爭議，雙方應優先通過友好協商解決。若協商不成，任何一方可向香港法院提起訴訟，或提交雙方同意的香港仲裁機構進行仲裁。
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">10. 條款修改</h2>
                            <p className="text-slate-600 leading-relaxed">
                                本公司保留隨時修改本服務條款的權利。修訂後的條款將公佈於官方平台，自公佈之日起對後續服務生效。繼續使用本公司服務即表示客戶接受修訂後的條款。
                            </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-bold text-brand-blue mb-4">聯繫我們</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                如對本服務條款有任何疑問，請聯繫：
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
