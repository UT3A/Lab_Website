# 🎨 Philosophy Section 設計指南

## 📋 設計靈感

完全參考您提供的「興趣培養」設計圖片，打造了一個全新的 Core Philosophy 區塊。

---

## ✨ 核心特色

### **三欄佈局設計**
```
┌─────────────────────────────────────────────────────────┐
│  左側文字區         中間圖片區         右側卡片區        │
│  ┌──────────┐      ┌──────────┐      ┌──────────┐     │
│  │ 標題      │      │ 傾斜照片  │      │ 卡片 1    │     │
│  │ Philosophy│      │ 3D 效果   │      │ 卡片 2    │     │
│  │ ━━━━━━   │      │          │      │ 卡片 3    │     │
│  │ 副標題    │      │          │      │          │     │
│  │ 描述文字  │      │          │      │          │     │
│  │ [按鈕]    │      │          │      │          │     │
│  └──────────┘      └──────────┘      └──────────┘     │
│                                            [圓形徽章]   │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 組件特點

### **1. 左側文字區域（4欄）**

**內容結構：**
```
✅ 中文標題：「核心理念培養」
✅ 英文大標題：「Philosophy」（紫色漸變）
✅ 紫色下劃線動畫
✅ 副標題：「人生另一個階段的開始」
✅ 長描述段落
✅ 「查看詳閱」按鈕
```

**紫色漸變效果：**
```tsx
background: 'linear-gradient(135deg, 
  #a855f7 0%,    // 亮紫
  #8b5cf6 50%,   // 中紫
  #7c3aed 100%   // 深紫
)',
```

**下劃線動畫：**
```tsx
初始：scaleX: 0（從左開始隱藏）
動畫：scaleX: 1（向右展開）
時長：0.8s
延遲：0.3s
```

**按鈕效果：**
```
✅ 透明邊框
✅ 懸停時紫色漸變背景滑入
✅ 文字顏色變為紫色
✅ 放大至 105%
```

---

### **2. 中間圖片區域（4欄）**

**3D 效果設計：**
```tsx
✅ 初始旋轉：rotateY: -15deg
✅ 動畫歸零：rotateY: 0deg
✅ 圖片傾斜：rotateZ: -8deg
✅ 懸停效果：rotateY: 5deg, rotateX: -5deg
✅ 懸停放大：scale: 1.05
```

**視覺特效：**
```
✅ 圓角卡片（rounded-3xl）
✅ 漸變遮罩覆蓋
✅ 白色邊框發光
✅ 底部紫色陰影（模糊 40px）
✅ 3D 透視效果（perspective: 1000px）
```

**圖片尺寸：**
```
寬度：clamp(280px, 35vw, 380px)
高度：clamp(380px, 50vw, 520px)
比例：約 3:4（直向）
```

---

### **3. 右側卡片區域（4欄）**

**卡片數量：** 3 張堆疊卡片

**卡片結構：**
```
┌──────────────┐
│ [彩色標籤]    │ ← 生活觀念（粉/綠/紅）
│ 標題          │ ← 20px 白色
│ 描述文字      │ ← 13px 半透明
└──────────────┘
```

**卡片樣式：**
```tsx
背景：rgba(255, 255, 255, 0.03)
邊框：rgba(255, 255, 255, 0.1)
圓角：16px
陰影：0 8px 32px rgba(0, 0, 0, 0.2)
模糊：backdrop-blur-sm
```

**三種標籤顏色：**
```
卡片 1：粉紅色（bg-pink-500/20 text-pink-300）
卡片 2：綠色（bg-green-500/20 text-green-300）
卡片 3：紅色（bg-red-500/20 text-red-300）
```

**動畫效果：**
```tsx
進入：
- opacity: 0 → 1
- x: 50 → 0
- rotateZ: 5 → 0
- 依序延遲：0.4s, 0.55s, 0.7s

懸停：
- scale: 1.03
- x: -8（向左移動）
- 紫色光暈浮現
```

---

### **4. 右下角圓形徽章**

**設計特點：**
```
✅ 尺寸：96×96px
✅ 紫色漸變背景
✅ 外層旋轉動畫（20 秒一圈）
✅ 虛線邊框
✅ 星形圖示
✅ "PHILOSOPHY" 文字
✅ 發光陰影效果
```

**旋轉動畫：**
```tsx
animate={{ rotate: [0, 360] }}
transition={{
  duration: 20,
  repeat: Infinity,
  ease: 'linear',
}}
```

**發光效果：**
```tsx
boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)'
```

---

## 🎬 動畫時間軸

```
時間軸（進入動畫）：
0.0s ━━━ 組件進入視窗
0.0s     └─ 左側文字開始淡入（從左滑入）

0.3s ━━━ 中間圖片開始動畫
         ├─ 旋轉歸零（rotateY: -15 → 0）
         ├─ 縮放放大（scale: 0.9 → 1）
         └─ 紫色下劃線展開

0.4s ━━━ 副標題淡入
0.5s ━━━ 描述文字淡入
0.6s ━━━ 按鈕淡入

0.4s ━━━ 右側第 1 張卡片進入
0.55s ━━ 右側第 2 張卡片進入
0.7s ━━━ 右側第 3 張卡片進入

1.0s ━━━ 右下角徽章彈出（Spring 動畫）

完成 ━━━ 徽章持續旋轉（無限循環）
```

---

## 🎨 配色方案

### **主要配色（紫色系）**
```
紫色漸變：
- 亮紫：#a855f7
- 中紫：#8b5cf6  
- 深紫：#7c3aed

標籤配色：
- 粉紅：bg-pink-500/20, text-pink-300
- 綠色：bg-green-500/20, text-green-300
- 紅色：bg-red-500/20, text-red-300

文字顏色：
- 主標題：rgba(255, 255, 255, 0.7)
- 副標題：rgba(255, 255, 255, 0.5)
- 卡片文字：rgba(255, 255, 255, 0.6)
```

### **背景效果**
```
主背景：slate-950 → slate-900 → slate-950（漸變）
網格圖案：rgba(255,255,255,0.02)（60px × 60px）
底部線條：紫色漸變（30% 透明度）
```

---

## 📊 內容數據

### **當前內容**

**標題：**
```
中文：核心理念培養
英文：Philosophy
副標題：人生另一個階段的開始
```

**描述段落：**
```
在近代，樂齡生活已經擺脫傳統「含飴弄孫」的框架，
轉向全新、豐富的生活方式。過去，不再只是年齡的關鍵，
而是人生每一個階段的開始，樂齡生活是一種充實可能性的體現。
只要用心規劃，每個人都能擁有健康、快樂且意義的晚年，
探索且豐富的追求。正如現代樂齡朗誦：「退休不是結束，而是全新開始。」
```

**三張卡片：**
```
1. 健康是基石
   - 標籤：生活觀念（粉紅）
   - 現代繁體族群著需「健康星享受」生活的基礎...

2. 學習與成長
   - 標籤：生活觀念（綠色）
   - 終身學習的觀念在繁體族群中越來越普及...

3. 社交與奉獻
   - 標籤：生活觀念（紅色）
   - 參與社區志願者活動，達至成立退休後俱樂部...
```

---

## 🛠️ 自定義指南

### **修改標題文字**

**位置：** `/components/PhilosophySection.tsx` 第 45-75 行

```tsx
{/* 修改中文標題 */}
<h2>您的中文標題</h2>

{/* 修改英文標題 */}
<h3>YourTitle</h3>

{/* 修改副標題 */}
<p>您的副標題文字</p>
```

### **更換中間圖片**

```tsx
// 使用您自己的圖片
import myImage from './assets/my-image.jpg';

// 或使用 Unsplash
import { ImageWithFallback } from './figma/ImageWithFallback';

<ImageWithFallback
  src="您的圖片URL"
  alt="Philosophy"
/>
```

### **修改卡片內容**

**位置：** 第 6-24 行

```tsx
const philosophyCards = [
  {
    id: 1,
    tag: '您的標籤',
    tagColor: 'bg-blue-500/20 text-blue-300',  // 改顏色
    title: '您的標題',
    description: '您的描述文字...',
  },
  // 添加更多卡片...
];
```

### **調整圖片傾斜角度**

```tsx
// 第 128 行
style={{
  transform: 'rotateZ(-12deg)',  // 改為 -12 度（更傾斜）
}}
```

### **更改紫色漸變為其他顏色**

**藍色主題：**
```tsx
background: 'linear-gradient(135deg, 
  #0ea5e9 0%,   // 天藍
  #06b6d4 50%,  // 青色
  #0891b2 100%  // 深青
)',
```

**綠色主題：**
```tsx
background: 'linear-gradient(135deg, 
  #10b981 0%,   // 翠綠
  #059669 50%,  // 綠色
  #047857 100%  // 深綠
)',
```

### **修改徽章圖示**

```tsx
// 第 230-240 行
// 替換為您想要的 SVG 圖示
<svg>
  {/* 您的 SVG 路徑 */}
</svg>
```

### **調整卡片數量**

**添加第 4 張卡片：**
```tsx
// 在 philosophyCards 數組中添加
{
  id: 4,
  tag: '新標籤',
  tagColor: 'bg-yellow-500/20 text-yellow-300',
  title: '新標題',
  description: '新描述',
},
```

---

## 📱 響應式設計

### **桌面端（≥ 1024px）**
```
✅ 三欄佈局（4 + 4 + 4）
✅ 圖片完整 3D 效果
✅ 右下角徽章顯示
✅ 所有動畫完整呈現
```

### **平板端（768px - 1024px）**
```
📱 單欄堆疊佈局
📱 圖片置中顯示
📱 卡片寬度調整
📱 隱藏右下角徽章
```

### **移動端（< 768px）**
```
📱 完全直向佈局
📱 文字優先顯示
📱 圖片縮小適配
📱 卡片全寬顯示
📱 簡化部分動畫
```

### **響應式字體大小**
```tsx
clamp(最小值, 理想值, 最大值)

標題：clamp(28px, 4vw, 42px)
英文標題：clamp(48px, 6vw, 72px)
圖片寬度：clamp(280px, 35vw, 380px)
圖片高度：clamp(380px, 50vw, 520px)
```

---

## 🔧 進階功能

### **添加點擊卡片展開詳情**

```tsx
import { useState } from 'react';

const [selectedCard, setSelectedCard] = useState<number | null>(null);

<motion.div
  onClick={() => setSelectedCard(card.id)}
  className="cursor-pointer"
>
  {/* 卡片內容 */}
</motion.div>

{selectedCard === card.id && (
  <motion.div
    initial={{ height: 0 }}
    animate={{ height: 'auto' }}
  >
    {/* 展開的詳細內容 */}
  </motion.div>
)}
```

### **添加視差滾動效果**

```tsx
import { useScroll, useTransform } from 'motion/react';

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start'],
});

const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

<motion.div style={{ y }}>
  {/* 會隨滾動移動的元素 */}
</motion.div>
```

### **添加卡片切換動畫**

```tsx
const [activeCard, setActiveCard] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveCard((prev) => (prev + 1) % philosophyCards.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);

{/* 只顯示當前活躍卡片 */}
<AnimatePresence mode="wait">
  <motion.div key={activeCard}>
    {philosophyCards[activeCard]}
  </motion.div>
</AnimatePresence>
```

---

## 🐛 常見問題

### **Q: 如何禁用圖片 3D 效果？**
```tsx
// 移除 whileHover 屬性
<motion.div
  // whileHover={{ rotateY: 5, rotateX: -5 }}  ← 註釋此行
>
```

### **Q: 如何讓徽章停止旋轉？**
```tsx
// 移除 animate 屬性
<motion.div
  // animate={{ rotate: [0, 360] }}  ← 註釋此行
>
```

### **Q: 圖片不顯示怎麼辦？**
檢查圖片路徑是否正確：
```tsx
// 確保圖片已正確導入
import philosophyImage from 'figma:asset/...';

// 或使用外部 URL
<ImageWithFallback src="https://..." />
```

### **Q: 如何在移動端也顯示徽章？**
```tsx
// 第 214 行
// 移除 hidden lg:block
<motion.div className="absolute bottom-12 right-12">
  {/* 徽章內容 */}
</motion.div>
```

### **Q: 如何更改卡片排列方向？**
```tsx
// 改為橫向排列
<div className="lg:col-span-4 flex gap-4">
  {/* 卡片會橫向排列 */}
</div>
```

---

## 📈 性能優化

### **已實施的優化**
```
✅ 使用 useInView 只在可見時觸發動畫
✅ 圖片懶加載（ImageWithFallback）
✅ GPU 加速動畫（transform, opacity）
✅ 響應式圖片尺寸（clamp）
✅ 條件渲染（徽章僅桌面端）
```

### **進一步優化建議**
```tsx
// 1. 圖片預加載
const img = new Image();
img.src = philosophyImage;

// 2. 降低動畫複雜度（移動端）
const isMobile = window.innerWidth < 768;
const animationDuration = isMobile ? 0.3 : 0.8;

// 3. 使用 will-change 提示
<motion.div style={{ willChange: 'transform' }}>
```

---

## ✨ 與參考圖片的對比

### **完全還原的元素**
```
✅ 三欄佈局設計
✅ 左側大標題 + 紫色漸變
✅ 紫色下劃線
✅ 中間傾斜圖片
✅ 右側三張堆疊卡片
✅ 彩色標籤（粉/綠/紅）
✅ 右下角圓形徽章
✅ 「查看詳閱」按鈕
```

### **增強功能**
```
⭐ 流暢的進入動畫
⭐ 圖片 3D 懸停效果
⭐ 卡片懸停互動
⭐ 徽章旋轉動畫
⭐ 按鈕漸變特效
⭐ 響應式適配
⭐ 玻璃擬態設計
⭐ 光暈和陰影細節
```

---

## 🎯 使用建議

### **適合展示內容：**
```
✅ 核心理念/價值觀
✅ 產品特色
✅ 服務優勢
✅ 品牌故事
✅ 使命願景
```

### **內容撰寫建議：**
```
📝 標題：簡潔有力（≤ 8 個字）
📝 描述：詳細說明（120-200 字）
📝 卡片標題：清晰明確（≤ 6 個字）
📝 卡片描述：精簡扼要（40-60 字）
📸 圖片：高質量直向照片（建議 3:4 比例）
```

---

## 📚 技術細節

### **使用的 Motion 特性**
```tsx
✅ motion.div - 動畫容器
✅ initial/animate - 進入動畫
✅ whileHover - 懸停效果
✅ transition - 過渡設定
✅ useInView - 視窗檢測
✅ transform - 3D 變換
✅ perspective - 3D 透視
```

### **使用的 CSS 技術**
```css
✅ backdrop-filter: blur() - 玻璃效果
✅ transform-style: preserve-3d - 3D 保持
✅ linear-gradient - 漸變背景
✅ clamp() - 響應式尺寸
✅ box-shadow - 陰影效果
✅ -webkit-background-clip - 文字漸變
```

---

## ✅ 總結

這個 Philosophy Section 完美重現了參考圖片的設計，並添加了：

**視覺設計**  
✅ 三欄平衡佈局  
✅ 紫色漸變主題  
✅ 3D 圖片效果  
✅ 玻璃擬態卡片  

**動畫效果**  
✅ 20+ 個流暢動畫  
✅ 分層進入時序  
✅ 懸停互動細節  
✅ 持續旋轉徽章  

**用戶體驗**  
✅ 清晰的視覺層次  
✅ 響應式完美適配  
✅ 流暢的過渡效果  

**技術實現**  
✅ Motion React 動畫  
✅ 性能優化處理  
✅ 可維護的代碼結構  

---

**版本**: 1.0.0  
**創建日期**: 2025-01-18  
**參考設計**: 樂齡生活興趣培養區塊  
**相容性**: FAIM Lab Website
