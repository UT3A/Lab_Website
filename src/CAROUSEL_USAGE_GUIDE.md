# 🎠 Premium 輪播圖使用指南

## 📋 概述

已為 Premium 網站創建了兩個高級輪播圖組件，具備豐富的動畫效果和互動功能。

---

## 🎯 兩種版本對比

### **PremiumCarousel** - 全屏版本
```tsx
✨ 特點：
- 全屏高度（100vh）
- 超大標題（96px）
- 豐富的視覺效果
- 完整的控制界面
- 適合作為首頁焦點

📐 尺寸：
- 高度：100vh
- 標題：96px
- 內容寬度：max-w-4xl
```

### **PremiumCarouselCompact** - 緊湊版本
```tsx
✨ 特點：
- 適中高度（70vh）
- 較小標題（72px）
- 簡潔的界面
- 底部控制欄
- 適合內容區塊

📐 尺寸：
- 高度：70vh
- 標題：72px
- 內容寬度：max-w-[900px]
```

---

## 🎨 動畫效果清單

### **1. 幻燈片切換動畫**

**全屏版本：**
```tsx
- 滑動方向：x: ±1000px
- 縮放：scale: 0.8 → 1 → 0.8
- 模糊：blur: 10px → 0px → 10px
- 透明度：opacity: 0 → 1 → 0
- 彈性過渡：Spring 物理動畫
```

**緊湊版本：**
```tsx
- 滑動方向：x: ±100%
- 透明度：opacity: 0 → 1 → 0
- 簡潔過渡：Spring 動畫
```

### **2. 背景動畫**
```
✨ 動態漸變背景（根據當前幻燈片變化）
✨ 徑向漸變從中心擴散
✨ 30 個浮動粒子（全屏版）
✨ 網格背景圖案
```

### **3. 文字進場動畫**
```
時序：
0.2s - 小標籤淡入（向上移動 20px）
0.3s - 副標題淡入（向上移動 20px）
0.4s - 主標題淡入（向上移動 30px）
0.5s - 描述文字淡入（向上移動 20px）
0.6s - CTA 按鈕淡入（向上移動 20px）
```

### **4. 互動動畫**

**按鈕懸停：**
```tsx
- 箭頭按鈕：scale: 1.1 + 背景變亮
- CTA 按鈕：scale: 1.05 + 閃光效果
- 點指示器：scale: 1.2
```

**拖動切換：**
```tsx
- 支持左右拖動
- 拖動超過 50px 觸發切換
- 彈性回彈效果
```

### **5. 進度指示器**

**全屏版本 - 進度條：**
```tsx
- 當前幻燈片：寬度 64px，動畫填充
- 其他幻燈片：寬度 32px
- 已完成：白色填充
- 未完成：半透明背景
- 6 秒線性填充動畫
```

**緊湊版本 - 圓形進度：**
```tsx
- 圓形描邊進度
- 360° 順時針填充
- 5 秒線性動畫
- 實時更新（50ms 間隔）
```

---

## 🚀 使用方法

### **方案 1：使用全屏版本替換 Hero**

```tsx
import { PremiumCarousel } from './components/PremiumCarousel';

export default function PremiumApp() {
  return (
    <div className="min-h-screen bg-black">
      <PremiumNavigation />
      
      {/* 使用輪播圖替換 Hero */}
      <PremiumCarousel />
      
      <PremiumStatsSection />
      {/* ... 其他組件 */}
    </div>
  );
}
```

### **方案 2：兩者並存**

```tsx
export default function PremiumApp() {
  return (
    <div className="min-h-screen bg-black">
      <PremiumNavigation />
      
      {/* 輪播圖作為首屏 */}
      <PremiumCarousel />
      
      {/* 保留原 Hero 作為第二屏 */}
      <PremiumHeroSection />
      
      {/* ... 其他組件 */}
    </div>
  );
}
```

### **方案 3：使用緊湊版本**

```tsx
export default function PremiumApp() {
  return (
    <div className="min-h-screen bg-black">
      <PremiumNavigation />
      
      {/* 緊湊輪播圖 */}
      <PremiumCarouselCompact />
      
      <PremiumStatsSection />
      {/* ... 其他組件 */}
    </div>
  );
}
```

---

## ⚙️ 自定義配置

### **修改幻燈片內容**

**位置：** `/components/PremiumCarousel.tsx` 第 7-44 行

```tsx
const slides: CarouselSlide[] = [
  {
    id: 1,
    title: '您的主標題',              // 大標題
    subtitle: 'Your Subtitle',        // 英文副標題
    description: '詳細描述文字...',    // 描述段落
    label: 'BREAKTHROUGH',            // 小標籤
    gradientFrom: 'rgba(14, 165, 233, 0.1)',  // 漸變起始色
    gradientTo: 'rgba(6, 182, 212, 0.05)',    // 漸變結束色
  },
  // 添加更多幻燈片...
];
```

### **調整自動播放速度**

**全屏版本：**
```tsx
// 第 115 行
const interval = setInterval(() => {
  nextSlide();
}, 6000);  // 修改此處（毫秒）
```

**緊湊版本：**
```tsx
// 第 71 行
const duration = 5000; // 修改此處（毫秒）
```

### **修改粒子數量**

```tsx
// 第 158 行
{Array.from({ length: 30 }).map((_, i) => (
  // 修改 30 為其他數字
```

### **調整動畫時長**

```tsx
// 第 211 行
transition={{
  x: { type: 'spring', stiffness: 300, damping: 30 },
  opacity: { duration: 0.5 },  // 修改淡入淡出速度
  scale: { duration: 0.5 },    // 修改縮放速度
  filter: { duration: 0.5 },   // 修改模糊速度
}}
```

### **更改顏色主題**

```tsx
// 按鈕樣式（第 267 行）
style={{
  backgroundColor: 'rgba(255,255,255,0.05)',  // 背景色
  border: '1px solid rgba(255,255,255,0.1)',  // 邊框色
  backdropFilter: 'blur(10px)',               // 模糊效果
}}
```

---

## 🎛️ 控制功能

### **鍵盤快捷鍵**
```
← 左箭頭：上一張
→ 右箭頭：下一張
```

### **鼠標操作**
```
拖動：左右拖動切換幻燈片
懸停：暫停自動播放
點擊箭頭：手動切換
點擊指示器：跳轉到指定幻燈片
```

### **觸控支持**
```
滑動：左右滑動切換
點擊：與鼠標操作相同
```

---

## 📱 響應式設計

### **桌面端（> 1024px）**
```
✅ 全尺寸顯示
✅ 所有動畫效果
✅ 完整控制界面
✅ 粒子背景
```

### **平板端（768px - 1024px）**
```
📱 調整字體大小
📱 減少粒子數量
📱 簡化部分動畫
📱 保留核心功能
```

### **移動端（< 768px）**
建議自定義：
```tsx
// 添加響應式樣式
<h2
  className="text-6xl md:text-8xl lg:text-[96px]"
  style={{
    fontSize: window.innerWidth < 768 ? '48px' : '96px',
  }}
>
```

---

## 🎨 顏色方案建議

### **科技藍色系**
```tsx
gradientFrom: 'rgba(14, 165, 233, 0.1)',   // 天藍
gradientTo: 'rgba(6, 182, 212, 0.05)',     // 青色
```

### **紫色系**
```tsx
gradientFrom: 'rgba(99, 102, 241, 0.1)',   // 靛藍
gradientTo: 'rgba(139, 92, 246, 0.05)',    // 紫色
```

### **綠色系**
```tsx
gradientFrom: 'rgba(16, 185, 129, 0.1)',   // 翠綠
gradientTo: 'rgba(5, 150, 105, 0.05)',     // 深綠
```

### **粉色系**
```tsx
gradientFrom: 'rgba(236, 72, 153, 0.1)',   // 粉紅
gradientTo: 'rgba(219, 39, 119, 0.05)',    // 玫瑰
```

### **金色系**
```tsx
gradientFrom: 'rgba(245, 158, 11, 0.1)',   // 琥珀
gradientTo: 'rgba(217, 119, 6, 0.05)',     // 橙金
```

---

## 🔧 性能優化

### **已實施的優化**

1. **GPU 加速**
```tsx
✅ 使用 transform 而非 position
✅ 使用 opacity 過渡
✅ 使用 will-change 提示
```

2. **條件渲染**
```tsx
✅ AnimatePresence mode="wait"
✅ 只渲染當前幻燈片
✅ 懸停時才顯示完整粒子
```

3. **節流優化**
```tsx
✅ 進度更新限制在 50ms
✅ 拖動事件防抖
✅ 減少重繪次數
```

### **進一步優化建議**

```tsx
// 使用圖片懶加載
<img loading="lazy" />

// 預加載下一張幻燈片
const preloadNext = () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  // 預加載邏輯
};

// 降低移動端粒子數量
const particleCount = isMobile ? 10 : 30;
```

---

## 🐛 常見問題

### **Q: 如何禁用自動播放？**
```tsx
// 注釋掉 useEffect 中的自動播放邏輯
useEffect(() => {
  // if (isPaused) return;
  // const interval = setInterval(() => {
  //   nextSlide();
  // }, 6000);
  // return () => clearInterval(interval);
}, [isPaused, nextSlide]);
```

### **Q: 如何添加更多幻燈片？**
```tsx
// 在 slides 數組中添加新對象
const slides = [
  // ... 現有幻燈片
  {
    id: 5,
    title: '新幻燈片',
    // ... 其他屬性
  },
];
```

### **Q: 如何更改過渡方向？**
```tsx
// 修改 variants 中的 x 值
enter: (direction: number) => ({
  y: direction > 0 ? 500 : -500,  // 改為垂直滑動
  // 或使用 scale 效果
  scale: 0,  // 從中心放大
}),
```

### **Q: 如何添加圖片背景？**
```tsx
// 在幻燈片數據中添加 image 屬性
interface CarouselSlide {
  // ... 現有屬性
  image?: string;
}

// 在組件中渲染
{currentSlide.image && (
  <img 
    src={currentSlide.image} 
    className="absolute inset-0 w-full h-full object-cover opacity-20"
  />
)}
```

---

## ✨ 動畫時序圖

```
時間軸（秒）：
0.0s ━━━ 幻燈片開始切換
0.0s     └─ 舊幻燈片退出動畫開始
0.2s ━━━ 小標籤淡入
0.3s ━━━ 副標題淡入
0.4s ━━━ 主標題淡入
0.5s ━━━ 描述文字淡入
      └─ 舊幻燈片完全消失
0.6s ━━━ CTA 按鈕淡入
1.0s ━━━ 所有動畫完成
...
6.0s ━━━ 自動切換到下一張（如果未暫停）
```

---

## 📚 API 參考

### **PremiumCarousel Props**
```tsx
// 目前為無 props 設計
// 所有配置在組件內部完成
```

### **可擴展 Props 建議**
```tsx
interface PremiumCarouselProps {
  slides?: CarouselSlide[];        // 自定義幻燈片
  autoPlayInterval?: number;       // 自動播放間隔
  showControls?: boolean;          // 顯示控制按鈕
  showProgress?: boolean;          // 顯示進度指示
  enableKeyboard?: boolean;        // 啟用鍵盤控制
  enableDrag?: boolean;            // 啟用拖動
  onSlideChange?: (index: number) => void;  // 切換回調
}
```

---

## 🎬 總結

輪播圖組件包含 **20+ 個動畫效果**：

✅ 幻燈片滑動動畫  
✅ 縮放過渡效果  
✅ 模糊轉場  
✅ 背景漸變變化  
✅ 粒子浮動  
✅ 文字分層淡入  
✅ 按鈕閃光  
✅ 進度條填充  
✅ 懸停效果  
✅ 拖動彈性  

所有動畫都經過精心設計，確保：
- ✨ 流暢的 60fps 性能
- 🎨 符合極簡高級質感
- 📱 響應式適配
- ♿ 可訪問性友好

**版本**: 1.0.0  
**創建日期**: 2025-01-18  
**相容性**: Premium Website v2.0+
