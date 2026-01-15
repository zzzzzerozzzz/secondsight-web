---
description: 如何為網站添加新的 SEO 文章
---

# 添加新文章工作流程

此工作流程用於在網站的 Blog 系統中添加新的 SEO 優化文章。

## 步驟 1: 準備工作
1. 確定文章的 **Slug** (網址路徑，例如 `how-to-hire-foreign-labor`)
2. 準備文章的 **標題**、**摘要**、**分類** 和 **圖片**
3. 如果有新圖片，將其放入 `public/` 目錄

## 步驟 2: 更新文章列表數據
編輯 `app/blog/page.tsx` 文件，在 `articles` 數組中添加新文章的對象：

```typescript
{
  id: <新ID>,
  slug: "<文章-slug>",
  title: "<文章標題>",
  excerpt: "<文章摘要>",
  category: "<分類>",
  readTime: "<閱讀時間>",
  date: "<日期>",
  image: "/<圖片文件名>",
  featured: <true/false>,
},
```

## 步驟 3: 創建文章詳情頁面
1. 在 `app/blog/` 下創建一個新文件夾，名稱為文章的 Slug：`app/blog/<文章-slug>/`
2. 在該文件夾中創建 `page.tsx`
3. 複製以下模板代碼並填入內容：

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

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
                <分類名稱>
              </span>
              <span className="flex items-center text-slate-500">
                <Calendar className="w-4 h-4 mr-2" />
                <日期>
              </span>
              <span className="flex items-center text-slate-500">
                <Clock className="w-4 h-4 mr-2" />
                <閱讀時間>
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-brand-blue leading-tight mb-8">
              <文章標題>
            </h1>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
              <Image 
                src="/<圖片路徑>" 
                alt="<圖片描述>" 
                fill 
                className="object-cover"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-8 border-l-4 border-brand-gold pl-6 italic">
              <導言段落>
            </p>

            {/* 在這裡撰寫文章正文，使用 h2, h3, p, ul, li 等 HTML 標籤 */}
            
            <h2 className="text-2xl font-bold text-brand-blue mt-12 mb-6">章節標題</h2>
            <p>段落內容...</p>

            {/* ... 更多內容 ... */}

          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-slate-500 text-sm flex items-center mr-2">
                <Tag className="w-4 h-4 mr-1" /> 標籤：
              </span>
              {["標籤1", "標籤2"].map(tag => (
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
```

## 步驟 4: 測試與發布
1. 在本地運行 `npm run dev` 並訪問 `/blog` 確認新文章出現
2. 點擊進入文章頁面確認內容顯示正常
3. 執行 git 命令提交更改：
   - `git add .`
   - `git commit -m "Add new article: <文章標題>"`
   - `git push`
