
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceCardNew from "./components/ServiceCardNew";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-navy/10">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-brand-blue text-sm font-semibold tracking-wide backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                專業 • 誠信 • 高效
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-brand-blue leading-[1.1] tracking-tight">
                <span className="text-gradient-dual">
                  粵港跨境勞務領航者
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                我們致力於為企業提供全方位的跨境人力資源解決方案，解決人才短缺難題，助力企業通往全球。
                <br className="my-2" />
                <span className="text-base text-slate-500 block mt-2">
                  由 20 年中港集團營運總監領銜。我們不只交付人力名額，更憑藉實戰 SOP 與崗前培訓，為您的企業注入即戰力與盈利效能。
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-6">
                <Link href="/apply">
                  <button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-brand-blue/30 transition-all flex items-center justify-center gap-3 group">
                    開始申請 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                    了解更多
                  </button>
                </Link>
              </div>

              <div className="pt-10 flex gap-12 border-t border-slate-200/60 mt-2">
                <div>
                  <div className="text-3xl font-bold text-brand-gold">20<span className="text-xl">+</span></div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">年行業經驗</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-blue">10k<span className="text-brand-gold text-xl">+</span></div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">成功案例</div>
                </div>
              </div>
            </div>

            {/* Right: Visual Container */}
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/10 to-brand-navy/10 rounded-[2rem] blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-500 group-hover:rotate-1">
                <div className="aspect-[4/3] relative bg-slate-100">
                  <Image
                    src="/hero.png"
                    alt="Global Connection"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Exclusive Process Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className="inline-block relative mb-6 group">
              {/* Glow Effect Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              <div className="relative bg-white px-8 py-4 rounded-lg shadow-sm border border-slate-100 ring-1 ring-slate-900/5">
                <h2 className="text-3xl lg:text-5xl font-bold text-brand-blue tracking-tight">
                  獨家優勢：
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600 ml-2">
                    全流程人才培訓體系
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              我們提供的不僅是外勞名額，更是一套完整的崗位適應與技能提升方案，<br className="hidden md:block" />
              確保員工到港即刻上手，大幅降低企業培訓成本。
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-brand-gold/50 to-blue-100 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto border-4 border-white shadow-sm">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-2">崗位調研</h3>
                <p className="text-sm text-brand-gold font-bold text-center mb-3 uppercase tracking-wider">約 3 天</p>
                <p className="text-slate-600 text-sm text-center">
                  深入企業前線，了解實際工作流程與要求，確保人崗精準匹配。
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto border-4 border-white shadow-sm">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-2">制定SOP章程</h3>
                <p className="text-sm text-brand-gold font-bold text-center mb-3 uppercase tracking-wider">定制化</p>
                <p className="text-slate-600 text-sm text-center">
                  編寫員工手冊、拍攝教學視頻及課堂指導教材，建立標準化作業程序。
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto border-4 border-white shadow-sm">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-2">崗前深度指導</h3>
                <p className="text-sm text-brand-gold font-bold text-center mb-3 uppercase tracking-wider">到港前 2 個月</p>
                <p className="text-slate-600 text-sm text-center">
                  提前進駐內地培訓基地，讓員工未到港先熟手，縮短適應期。
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto border-4 border-white shadow-sm">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-2">實習期跟進</h3>
                <p className="text-sm text-brand-blue font-bold text-center mb-3 uppercase tracking-wider">到港後</p>
                <p className="text-slate-600 text-sm text-center">
                  持續跟進員工實習表現，提供必要的心理輔導與工作反饋，確保穩定留任。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder / Consultant Introduction Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-gold/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-brand-blue/5 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Profile Image & Stats */}
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/20 via-brand-blue/10 to-brand-gold/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="aspect-[4/5] relative">
                    {/* Partnership Image */}
                    <Image
                      src="/founder-handshake.png"
                      alt="專業合作夥伴 - 粵港外勞事務所"
                      fill
                      className="object-cover object-center"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent"></div>
                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-lg font-semibold">Zero Wong</p>
                      <p className="text-sm text-white/80">創辦人 & 首席顧問</p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -right-6 top-8 bg-white rounded-xl shadow-lg p-4 border border-slate-100 transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-brand-gold">25<span className="text-lg">+</span></div>
                  <div className="text-xs text-slate-500 font-medium">年營運管理</div>
                </div>

                <div className="absolute -left-6 bottom-24 bg-white rounded-xl shadow-lg p-4 border border-slate-100 transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-brand-blue">20<span className="text-lg">+</span></div>
                  <div className="text-xs text-slate-500 font-medium">合作品牌</div>
                </div>

                <div className="absolute -right-4 bottom-8 bg-gradient-to-r from-brand-blue to-brand-navy rounded-xl shadow-lg p-4 transform hover:scale-105 transition-transform">
                  <div className="text-sm font-bold text-white">NLP 高級執行師</div>
                  <div className="text-xs text-white/70">認證資質</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                關於創辦人
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue leading-tight">
                25 年營運總監轉身：<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">
                  解決餐飲與零售業的「人才荒」
                </span>
              </h2>

              {/* Personal Story */}
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  我是 <span className="font-semibold text-brand-blue">Zero Wong</span>，在餐飲產業深耕 <span className="font-semibold">25 年</span>，從基層侍應一路做到管理逾 <span className="font-semibold">200 人團隊</span>的營運總監。
                </p>
                <p className="text-lg italic border-l-4 border-brand-gold pl-4 py-2 bg-slate-50 rounded-r-lg">
                  「我深刻體會過『有生意沒人做』的焦慮，也經歷過無數次人力短缺對營運帶來的衝擊——因為我曾在那個位置，整整 25 年。」
                </p>
                <p>
                  憑藉在內地深厚的管理與招聘經驗，加上 <span className="font-semibold text-brand-blue">NLP 高級執行師</span>的心理洞察力，我創辦了粵港外勞事務所。過去曾為超過 <span className="font-semibold">20 個知名品牌</span>提供人力資源解決方案。
                </p>
              </div>

              {/* Core Competencies */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-bold text-slate-800">我不只是幫你輸入勞工，我更懂如何：</h3>

                <div className="grid gap-4">
                  {/* Competency 1 */}
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <svg className="w-6 h-6 text-brand-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">精準篩選</h4>
                      <p className="text-sm text-slate-600">用管理者的眼光，為你挑選最能落地的實戰人才，確保人崗匹配。</p>
                    </div>
                  </div>

                  {/* Competency 2 */}
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-all">
                      <svg className="w-6 h-6 text-brand-gold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">穩定留人</h4>
                      <p className="text-sm text-slate-600">利用 NLP 溝通心法與管理體系，全方位心理輔導，大幅降低外勞流失率。</p>
                    </div>
                  </div>

                  {/* Competency 3 */}
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <svg className="w-6 h-6 text-brand-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">合規管理</h4>
                      <p className="text-sm text-slate-600">結合內地與香港的文化差異，建立和諧的勞資關係，規避法律風險。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-xl font-semibold text-brand-blue">
                  我不只是中介，<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">
                    我是你最懂營運的人力資源戰略夥伴。
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16 max-w-4xl">
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
              bgImage="/hero.png" // Placeholder, ideally use a conference image
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

      {/* Footer */}
      <Footer />
    </div>
  );
}


