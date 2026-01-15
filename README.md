# 粵港外勞事務所 - 官方網站專案

本專案是「粵港外勞事務所」的官方網站源代碼。這是一個基於 Next.js 構建的現代化響應式網站，旨在為香港僱主提供專業的跨境勞務解決方案。

## 🌐 網站資訊

| 網站名稱 | 端口 (Port) | 描述 |
|---------|-------------|------|
| **粵港外勞事務所** | `:3004` | 跨境勞務中介、外勞申請服務、SEO 文章中心 |

---

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev -- -p 3004
```

---

## 📝 內容管理 (適用於粵港外勞事務所)

目前網站採用 **手動代碼管理** 方式。

### 如何新增 SEO 文章

詳細步驟請參考工作流程文件： `.agent/workflows/add-new-article.md`

**簡要流程：**

1. 準備文章內容與圖片（放入 `public/`）。
2. 在 `app/blog/page.tsx` 的 `articles` 列表中添加文章數據。
3. 複製並創建新頁面： `app/blog/[文章-slug]/page.tsx`。

### 圖片資源

* 所有靜態圖片存放在 `public/` 目錄。
* 創辦人圖片：`public/founder.png` (舊) / `public/founder-handshake.png` (新)。

---

## 🛠️ 技術架構

* **框架**: Next.js 13+ (App Router)
* **語言**: TypeScript
* **樣式**: Tailwind CSS
* **部署**: Vercel (連接 GitHub 自動部署)
* **SEO**:
  * 內建 Metadata API
  * Google Search Console 驗證已集成 (`app/layout.tsx`)

### 目錄結構

```
web/
├── app/
│   ├── blog/           # 文章系統 (列表與詳情頁)
│   ├── components/     # 共用組件 (Navbar, Footer 等)
│   ├── services/       # 服務頁面
│   ├── layout.tsx      # 全局佈局 (含 GSC 驗證碼)
│   └── page.tsx        # 首頁 (含創辦人與核心服務)
├── public/             # 靜態資源 (圖片)
└── .agent/workflows/   # AI 助手工作流程指南
```

---

## 📦 部署指南

本專案已配置為推送到 GitHub `main` 分支時自動觸發 Vercel 部署。

**更新線上網站步驟：**

1. **保存更改**：

    ```bash
    git add .
    git commit -m "更新說明..."
    ```

2. **推送到遠端**：

    ```bash
    git push origin main
    ```

    *(如果遇到衝突，且確定本地版本為準，可使用 `git push origin main --force`)*

3. **驗證**：
    推送後約 2-5 分鐘，訪問線上網址檢查更新。

---

## 📅 未來優化建議 (Roadmap)

隨著文章數量增加，目前的「手動複製代碼」方式將變得難以維護。建議未來升級為：

1. **MDX 系統**：將文章寫成 `.md` 文件，自動生成頁面。
2. **Headless CMS**：引入 Contentful 或 Strapi 後台，實現「無代碼」發文。

---

## 📊 項目進度追蹤 (Project Status)

### 當前版本：v2.0 (2026-01-13)

| 功能模組 | 狀態 | 備註 |
|----------|------|------|
| 首頁 Hero Section | ✅ 完成 | 含創辦人介紹、核心服務展示 |
| 導航欄 (Navbar) | ✅ 完成 | 響應式設計，含移動端漢堡菜單 |
| 頁腳 (Footer) | ✅ 完成 | 含 WhatsApp 浮動按鈕 |
| 服務頁面 (/services) | ✅ 完成 | 外勞申請流程說明 |
| 聯絡頁面 (/contact) | ✅ 完成 | 含表單與 WhatsApp 連結 |
| 關於我們 (/about) | ✅ 完成 | Zero Wong 創辦人故事 |
| 文章系統 (/blog) | ✅ 完成 | 10 篇 SEO 文章 |
| Google Search Console | ✅ 完成 | 驗證碼已集成 |
| Favicon | ✅ 完成 | 使用 logo.jpg |
| Open Graph (社交分享) | ✅ 完成 | 已配置 |

### 文章清單 (Blog Articles)

| ID | Slug | 標題 | 類別 | 狀態 |
|----|------|------|------|------|
| 104 | employer-guide-injury-sick-leave-mistakes | 工傷與病假的「雷區」 | Zero專欄 | ✅ |
| 103 | employer-guide-3-steps-dismissal-calculator | 解僱「三部曲」計算機 | 實戰指南 | ✅ |
| 102 | negotiation-settlement-psychology | 談判和解的心理學 | Zero專欄 | ✅ |
| 101 | mpf-offsetting-prevention-guide | 強積金對沖防範指南 | 法規合規 | ✅ |
| 100 | employer-guide-theft-summary-dismissal | 員工盜竊即時解僱 | Zero專欄 | ✅ |
| 99 | employer-guide-dismissal-laws-2026 | 2026年解僱法例更新 | 法規合規 | ✅ |
| 3 | foreign-labor-cost-analysis | 香港聘用外勞成本全面分析 | Zero專欄 | ✅ |
| 4 | restaurant-industry-labor-shortage-solution | 餐飲業人手荒解決方案 | 行業專題 | ✅ |
| 5 | foreign-labor-interview-tips | 外勞面試技巧 | 招聘技巧 | ✅ |
| 6 | labor-law-compliance-guide | 香港外勞僱傭法規全攻略 | 法規合規 | ✅ |

---

## 🐛 問題記錄與解決方案 (Troubleshooting Log)

### 2026-01-13：CTA 按鈕區塊顯示異常

**問題描述：**
4 篇新建的 Zero 專家課文章（ID 3, 4, 5, 6）底部的 CTA 區塊出現以下問題：

1. 背景變成白色（原本應為深藍色漸變）
2. 白色文字在白色背景上「隱形」
3. 透明邊框按鈕無法看見

**根本原因：**

* 使用了自定義 Tailwind 顏色變量 `brand-navy` 和 `brand-blue`
* 這些變量可能未在 Tailwind 配置中正確定義，或 CSS 變量載入順序問題
* `bg-gradient-to-br from-brand-navy to-brand-blue` 無法正確渲染

**解決方案：**
將背景類名從自定義變量改為 Tailwind 內建顏色：

```tsx
// 修改前
<div className="bg-gradient-to-br from-brand-navy to-brand-blue ...">

// 修改後
<div className="bg-slate-900 ...">
```

**受影響文件：**

* `app/blog/foreign-labor-interview-tips/page.tsx`
* `app/blog/labor-law-compliance-guide/page.tsx`
* `app/blog/restaurant-industry-labor-shortage-solution/page.tsx`
* `app/blog/foreign-labor-cost-analysis/page.tsx`

---

### 2026-01-13：Link 嵌套 Button 問題

**問題描述：**
CTA 按鈕點擊無效或樣式異常。

**根本原因：**
Next.js 的 `<Link>` 組件內部嵌套了 `<button>` 標籤，這在某些情況下會導致：

* Hydration Error
* 點擊事件無法正確觸發
* 樣式無法正確應用

**解決方案：**
將樣式直接應用於 `<Link>` 組件，移除內部的 `<button>`：

```tsx
// 修改前
<Link href="/contact">
  <button className="bg-brand-gold ...">預約諮詢</button>
</Link>

// 修改後
<Link 
  href="/contact"
  className="bg-brand-gold ... inline-block"
>
  預約諮詢
</Link>
```

---

### 2026-01-14：部落格文章圖片優化

**更新描述：**
為 4 篇「Zero 專家課」系列文章替換為專業的主題圖片，提升視覺質感與內容相關性。

**執行內容：**

1. **圖片生成**：使用 DALL-E 3 為以下文章生成專業圖片：
   * `foreign-labor-cost-analysis`：成本分析主題（計算機、港幣、報表、香港天際線）
   * `restaurant-industry-labor-shortage-solution`：餐飲業人手荒（現代餐廳廚房、多元團隊）
   * `foreign-labor-interview-tips`：面試技巧（面試場景結合 NLP 抽象元素）
   * `labor-law-compliance-guide`：法規合規（法律天平、保護盾牌、合約文件）

2. **文件管理**：
   * 將生成的圖片複製到 `public/` 目錄
   * 重新命名為語義化檔名：
     * `blog-cost-analysis-2026.png`
     * `blog-restaurant-labor.png`
     * `blog-interview-nlp.png`
     * `blog-law-compliance.png`

3. **代碼更新**：
   * 修改 `app/blog/page.tsx` 中對應文章的 `image` 屬性
   * 更新圖片路徑指向新檔案

**部署狀態：**

* ✅ 代碼已提交：`git commit -m "feat: 更新部落格文章圖片與內容優化"`
* ✅ 已推送至遠端：`git push origin main`
* 🚀 Vercel 自動部署中（預計 2-5 分鐘完成）

**受影響文件：**

* `app/blog/page.tsx` (更新文章數據)
* `public/blog-cost-analysis-2026.png` (新增)
* `public/blog-restaurant-labor.png` (新增)
* `public/blog-interview-nlp.png` (新增)
* `public/blog-law-compliance.png` (新增)

---

## 🤖 AI 快速參考 (AI Quick Reference)

> **給下一位 AI 助手的備忘錄**

### 項目概述

這是「粵港外勞事務所」的官方網站，專注於為香港僱主提供外勞招聘服務。創辦人 Zero Wong 擁有 25 年餐飲管理經驗和 NLP 執行師資格。

### 關鍵文件位置

| 文件/目錄 | 用途 |
|-----------|------|
| `app/layout.tsx` | 全局佈局、Metadata、Favicon、GSC 驗證 |
| `app/page.tsx` | 首頁 |
| `app/blog/page.tsx` | 文章列表頁（含所有文章數據） |
| `app/blog/[slug]/page.tsx` | 各文章詳情頁 |
| `app/components/` | 共用組件 (Navbar, Footer, WhatsAppButton) |
| `public/` | 所有靜態圖片 |

### 常見任務

1. **新增文章**：參考 `.agent/workflows/add-new-article.md`
2. **更新 Favicon**：替換 `public/logo.jpg` 或修改 `app/layout.tsx` 的 `icons` 設置
3. **修改導航**：編輯 `app/components/Navbar.tsx`

### 注意事項

* ⚠️ 避免使用 `brand-navy`, `brand-blue` 等自定義顏色變量於關鍵可視區塊

* ⚠️ Next.js Link 組件內不要嵌套 button 標籤
* ✅ 優先使用 Tailwind 內建顏色（如 `slate-900`, `blue-600`）
* ✅ 文章圖片統一放在 `public/` 目錄，以 `blog-*.jpg/png` 命名

### 當前待辦（如有）

* [ ] 考慮將文章系統升級為 MDX

* [ ] 優化圖片為 WebP 格式以提升載入速度
* [ ] 新增更多行業專題文章

---

*最後更新時間：2026-01-14 09:11*
