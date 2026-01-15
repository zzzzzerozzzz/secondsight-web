# 粵港外勞事務所網站 - 2026/01/13 更新日誌

## 1. 🎯 專案目標 (Objective)

本次更新的主要目標是提升部落格內容的專業度，並解決網站視覺與功能上的細節問題。

- **核心任務**：更新 4 篇「Zero 專家課」文章內容與圖片。
- **技術優化**：修復 UI 顯示問題、配置 Favicon、優化代碼結構。

---

## 2. 📝 執行流程 (Workflow)

### 2.1 內容重寫

針對以下 4 個主題進行了深度內容創作，結合 NLP 概念與 Zero Wong 的 25 年經驗：

1. **外勞成本分析** (`foreign-labor-cost-analysis`)
2. **餐飲業人手荒** (`restaurant-industry-labor-shortage-solution`)
3. **外勞面試技巧** (`foreign-labor-interview-tips`)
4. **法規合規指南** (`labor-law-compliance-guide`)

### 2.2 頁面開發

- 為每篇文章創建了獨立的 `page.tsx`。
- 更新全局部落格列表 `app/blog/page.tsx`，同步標題、摘要、分類與日期。
- 圖片資源統一管理於 `public/` 目錄。

### 2.3 視覺與功能修復

- **按鈕修復**：解決 Link 與 Button 嵌套導致的問題。
- **樣式修復**：解決自定義顏色變量失效導致的「白字隱形」問題。
- **SEO 優化**：配置全局 Favicon 與 Open Graph 圖片。

---

## 3. 🐛 問題記錄與解決方案 (Troubleshooting Log)

### 🔴 問題一：CTA 按鈕區塊「白字隱形」

**症狀**：
文章底部的「預約諮詢」區塊背景變成白色，導致原本白色的文字和透明按鈕完全看不見。

**原因**：
使用了 Tailwind CSS 的自定義顏色變量 `brand-navy` 和 `brand-blue`，但可能未正確載入或配置，導致背景樣式 `bg-gradient-to-br from-brand-navy to-brand-blue` 失效，瀏覽器回退到默認（通常是透明或白色）。

**✅ 解決方案**：
改用 Tailwind 內建的標準顏色系統 (`slate-900`)，確保穩定性。

```tsx
// ❌ 修改前 (有風險)
<div className="bg-gradient-to-br from-brand-navy to-brand-blue ...">

// ✅ 修改後 (穩定)
<div className="bg-slate-900 ...">
```

---

### 🔴 問題二：按鈕點擊無效 / Hydration Error

**症狀**：
點擊「預約諮詢」按鈕有時無反應，或控制台出現 HTML 嵌套錯誤警告。

**原因**：
在 `next/link` 組件內部嵌套了 `<button>` 標籤。這在 HTML 規範中是不合法的（`<a>` 不能包含 `<button>`），且在 Next.js 客戶端渲染時會導致問題。

**✅ 解決方案**：
移除 `<button>` 標籤，將按鈕樣式直接寫在 `<Link>` 標籤上。

```tsx
// ❌ 修改前
<Link href="/contact">
    <button className="bg-brand-gold px-8 py-3 rounded-lg ...">
        預約諮詢
    </button>
</Link>

// ✅ 修改後
<Link 
    href="/contact"
    className="bg-brand-gold px-8 py-3 rounded-lg inline-block ..."
>
    預約諮詢
</Link>
```

---

### 🔴 問題三：Favicon 未顯示

**症狀**：
瀏覽器分頁標籤顯示預設的地球圖示，而非品牌 LOGO。

**原因**：
`app/layout.tsx` 中缺少 `icons` Metadata 配置。

**✅ 解決方案**：
在 Root Layout 的 metadata 對象中加入 `icons` 設置。

```tsx
export const metadata: Metadata = {
  // ... 其他設置
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};
```

---

## 4. 📂 關鍵檔案清單 (File Structure)

- **全局配置**
  - `app/layout.tsx`: 網站入口，含 Metadata、Font、Favicon。
  - `app/globals.css`: 全局樣式。

- **部落格系統**
  - `app/blog/page.tsx`: 文章列表頁 (數據源)。
  - `app/blog/[slug]/page.tsx`: 文章單頁 (如 `foreign-labor-cost-analysis/page.tsx`)。

- **靜態資源**
  - `public/`: 存放所有圖片 (logo.jpg, blog-*.png)。

---

## 5. 🚀 未來維護建議 (Maintenance)

1. **新增文章流程**：
    - 準備圖片 -> 放入 `public/`。
    - 複製現有文章的 `page.tsx` -> 修改內容。
    - 更新 `app/blog/page.tsx` 列表。

2. **系統升級** (Roadmap)：
    - 目前是「硬編碼」(Hard-coded) 形式。
    - 未來建議引入 **MDX** 或 **Headless CMS** (如 Contentful)，讓內容管理更輕鬆，無需每次都修改代碼。
