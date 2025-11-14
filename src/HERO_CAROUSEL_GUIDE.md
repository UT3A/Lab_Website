# 🎠 Hero Carousel 輪播圖指南

## 📋 設計靈感

基於您提供的參考圖片設計，結合 FAIM 實驗室的極簡高級質感風格。

---

## ✨ 核心特色

### **視覺設計**
```
📸 大背景圖片（全寬漸變遮罩）
🎴 右側重疊卡片設計（3張）
📝 左側文字內容區域
🔘 底部控制欄
📰 右下角新聞徽章
```

### **動畫效果**
```
✅ 背景圖片淡入淡出
✅ 文字內容滑動切換
✅ 卡片層疊動畫
✅ 卡片懸停效果（放大 + 旋轉歸零）
✅ 按鈕懸停放大
✅ 進度條動畫指示器
```

---

## 🎨 佈局結構

```
┌─────────────────────────────────────────────────────┐
│  導航欄                                               │
├─────────────────────────────────────────────────────┤
│                                                       │
│  [大背景圖片]                                         │
│                                                       │
│  左側文字內容          右側重疊卡片                    │
│  ┌─────────────┐      ┌───┐                         │
│  │ [標籤]      │      │ 3 │                         │
│  │ 主標題      │    ┌───┐                           │
│  │ 副標題      │    │ 2 │                           │
│  │ 描述文字    │  ┌───┐                             │
│  │ [按鈕]      │  │ 1 │                             │
│  └─────────────┘  └───┘                             │
│                                                       │
│  [◄] [►] [●●●]                    [📰 最新消息]      │
└─────────────────────────────────────────────────────┘
```

---

## 🎯 組件特點

### **1. 背景圖片層**
```tsx
✨ 全屏覆蓋
✨ 淡入淡出切換（0.7s）
✨ 左深右淺漸變遮罩
✨ 確保文字可讀性
```

### **2. 左側文字內容**
```tsx
組件順序（帶延遲）：
0.2s - 標籤徽章淡入
0.3s - 主標題淡入
0.4s - 副標題淡入
0.5s - 描述文字淡入
0.6s - CTA 按鈕淡入

滑動效果：
- 進入：從右側滑入（x: 1000px）
- 退出：向左側滑出（x: -1000px）
- 彈性動畫：Spring 物理效果
```

### **3. 右側卡片堆疊**
```tsx
卡片樣式：
- 尺寸：280px × 350px
- 圓角：16px
- 陰影：shadow-2xl
- 邊框：半透明白色
- 玻璃效果：backdrop-blur

卡片位置：
- 卡片 1：right: 0px,    top: 0px,   rotate: 0deg
- 卡片 2：right: 120px,  top: 50px,  rotate: 3deg
- 卡片 3：right: 240px,  top: 100px, rotate: 6deg

動畫時序：
- 延遲：0.3s, 0.4s, 0.5s
- 彈簧動畫
- 懸停時：放大 1.05 倍 + 旋轉歸零
```

### **4. 控制欄（底部左側）**
```tsx
包含元素：
[◄] 上一張按鈕
[►] 下一張按鈕
[●━━ ● ●] 進度指示器
[01 / 03] 計數器

樣式：
- 玻璃擬態背景
- 圓形按鈕（48px）
- 懸停放大效果
- 當前指示器延長為 32px
```

### **5. 新聞徽章（底部右側）**
```tsx
內容：
- 脈動藍點
- "最新消息 News"
- 日期 + 簡短描述

樣式：
- 玻璃背景（blur: 20px）
- 半透明邊框
- 1 秒延遲淡入
```

---

## 📊 幻燈片數據結構

```tsx
interface CarouselSlide {
  id: number;              // 唯一識別碼
  mainTitle: string;       // 主標題（中文）
  subTitle: string;        // 副標題
  description: string;     // 詳細描述
  tag: string;             // 分類標籤
  mainImage: string;       // 背景大圖 URL
  cardImages: string[];    // 右側卡片圖片陣列（3張）
}
```

### **當前幻燈片內容**

#### **幻燈片 1：前沿材料研究**
```
標籤：最新研究
主標題：前沿材料研究
副標題：探索未來科技的無限可能
背景圖：實驗室研究照片
卡片：顯微鏡 + 科技抽象 + 工作空間
```

#### **幻燈片 2：奈米科技創新**
```
標籤：核心技術
主標題：奈米科技創新
副標題：微觀世界中的巨大突破
背景圖：顯微鏡照片
卡片：科技抽象 + 工作空間 + 實驗室
```

#### **幻燈片 3：永續能源方案**
```
標籤：綠色科技
主標題：永續能源方案
副標題：為地球創造綠色未來
背景圖：科技抽象照片
卡片：實驗室 + 顯微鏡 + 工作空間
```

---

## 🎬 動畫時間軸

```
時間軸（每次切換）：
0.0s ━━━ 用戶點擊或自動切換觸發
0.0s     ├─ 背景圖片開始淡出
0.0s     ├─ 文字內容開始滑出
0.0s     └─ 卡片淡出

0.0s ━━━ 新內容開始進入
0.2s ━━━ 標籤徽章淡入
0.3s ━━━ 主標題淡入 + 第一張卡片入場
0.4s ━━━ 副標題淡入 + 第二張卡片入場
0.5s ━━━ 描述淡入 + 第三張卡片入場
0.6s ━━━ CTA 按鈕淡入
0.7s ━━━ 背景圖片完全切換

1.0s ━━━ 所有動畫完成
...
6.0s ━━━ 自動切換到下一張
```

---

## 🛠️ 自定義指南

### **修改幻燈片內容**

**位置：** `/components/HeroCarousel.tsx` 第 13-79 行

```tsx
const slides: CarouselSlide[] = [
  {
    id: 1,
    mainTitle: '您的標題',
    subTitle: '您的副標題',
    description: '您的描述文字...',
    tag: '標籤名稱',
    mainImage: 'https://您的圖片URL',
    cardImages: [
      'https://卡片1圖片URL',
      'https://卡片2圖片URL',
      'https://卡片3圖片URL',
    ],
  },
  // 添加更多幻燈片...
];
```

### **調整卡片數量**

**增加卡片到 4 張：**
```tsx
// 1. 在 cardImages 中添加第 4 張圖片
cardImages: [
  'url1', 'url2', 'url3', 'url4'  // 添加第 4 張
],

// 2. 調整卡片位置間距（第 283 行）
right: `${index * 100}px`,  // 改為 100px 間距
```

**減少卡片到 2 張：**
```tsx
// 只在 cardImages 中保留 2 張圖片
cardImages: ['url1', 'url2'],

// 調整間距（第 283 行）
right: `${index * 150}px`,  // 增大間距
```

### **修改卡片尺寸**

```tsx
// 第 279-281 行
style={{
  width: '320px',   // 改為更大
  height: '400px',  // 改為更高
  // ...
}}
```

### **更改自動播放速度**

```tsx
// 第 90 行
const interval = setInterval(nextSlide, 8000);  // 改為 8 秒
```

### **調整漸變遮罩**

```tsx
// 第 125-127 行
background: 'linear-gradient(to right, 
  rgba(2, 6, 23, 0.98) 0%,      // 左側更暗
  rgba(2, 6, 23, 0.90) 40%,     // 中間
  rgba(2, 6, 23, 0.3) 70%,      // 右側更亮
  rgba(2, 6, 23, 0.1) 100%      // 最右側幾乎透明
)',
```

### **修改標籤顏色**

```tsx
// 第 156-160 行
style={{
  background: 'rgba(16, 185, 129, 0.1)',      // 綠色背景
  border: '1px solid rgba(16, 185, 129, 0.3)', // 綠色邊框
  color: 'rgba(110, 231, 183, 1)',            // 綠色文字
}}
```

### **調整卡片懸停效果**

```tsx
// 第 296-301 行
whileHover={{
  scale: 1.1,      // 改為放大 10%
  rotate: -5,      // 反向旋轉
  y: -20,          // 向上移動
  zIndex: 999,
  transition: { duration: 0.2 },  // 更快的動畫
}}
```

---

## 📱 響應式設計

### **桌面端（> 1024px）**
```
✅ 完整佈局：文字 + 卡片
✅ 卡片完全展示（3張重疊）
✅ 所有控制元素
```

### **平板端（768px - 1024px）**
```
📱 隱藏卡片堆疊（lg:block）
📱 文字居中顯示
📱 減小字體尺寸
```

### **移動端（< 768px）**
```
📱 僅顯示文字內容
📱 背���圖片暗化
📱 簡化控制欄
📱 隱藏計數器和新聞徽章
```

---

## 🎨 配色方案

### **當前使用**
```
背景：slate-950 (#020617)
主要：白色 (#ffffff)
強調：cyan-400 (#22d3ee)
玻璃效果：rgba(255, 255, 255, 0.05)
邊框：rgba(255, 255, 255, 0.1)
```

### **可選配色**

**藍色科技風：**
```tsx
background: 'rgba(14, 165, 233, 0.1)',
border: '1px solid rgba(14, 165, 233, 0.3)',
color: 'rgba(125, 211, 252, 1)',
```

**綠色環保風：**
```tsx
background: 'rgba(16, 185, 129, 0.1)',
border: '1px solid rgba(16, 185, 129, 0.3)',
color: 'rgba(110, 231, 183, 1)',
```

**紫色創新風：**
```tsx
background: 'rgba(139, 92, 246, 0.1)',
border: '1px solid rgba(139, 92, 246, 0.3)',
color: 'rgba(196, 181, 253, 1)',
```

---

## 🔧 性能優化建議

### **已實施的優化**
```
✅ AnimatePresence mode="wait" 避免重複渲染
✅ 使用 transform 代替 position 動畫
✅ 圖片懶加載（ImageWithFallback）
✅ useCallback 防止不必要的重新渲染
✅ 條件渲染（lg:hidden/lg:block）
```

### **進一步優化**
```tsx
// 1. 預加載下一張幻燈片圖片
useEffect(() => {
  const nextIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[nextIndex];
  const img = new Image();
  img.src = nextSlide.mainImage;
}, [currentIndex]);

// 2. 使用 Intersection Observer
const [isVisible, setIsVisible] = useState(false);
// 只在輪播圖可見時播放動畫

// 3. 降低移動端動畫複雜度
const isMobile = window.innerWidth < 768;
const animationDuration = isMobile ? 0.3 : 0.6;
```

---

## 🐛 常見問題

### **Q: 卡片在移動端不顯示？**
A: 這是設計的響應式行為。卡片在 `lg:` 斷點（1024px）以下會隱藏。如需在移動端顯示，移除 `hidden lg:block` 類。

### **Q: 如何禁用自動播放？**
```tsx
// 註釋掉第 88-91 行
// useEffect(() => {
//   const interval = setInterval(nextSlide, 6000);
//   return () => clearInterval(interval);
// }, [nextSlide]);
```

### **Q: 如何添加暫停功能？**
```tsx
const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return;  // 添加這行
  const interval = setInterval(nextSlide, 6000);
  return () => clearInterval(interval);
}, [nextSlide, isPaused]);  // 添加 isPaused 依賴

// 添加暫停按鈕
<button onClick={() => setIsPaused(!isPaused)}>
  {isPaused ? '播放' : '暫停'}
</button>
```

### **Q: 如何更換圖片源？**
使用 Unsplash Tool 或自己的圖片：
```tsx
// 方法 1：使用本地圖片
import myImage from './assets/my-image.jpg';
mainImage: myImage,

// 方法 2：使用 Unsplash
// 在代碼中調用 unsplash_tool 獲取 URL
```

### **Q: 卡片重疊順序如何調整？**
```tsx
// 第 285 行
zIndex: currentSlide.cardImages.length - index,
// 改為：
zIndex: index,  // 反轉順序（第一張在最上）
```

---

## 📚 與參考圖片的對比

### **相同之處**
```
✅ 左側文字 + 右側卡片佈局
✅ 重疊卡片設計
✅ 底部控制欄
✅ 大背景圖片
✅ 新聞/通知徽章
✅ 箭頭按鈕
```

### **增強功能**
```
⭐ 流暢的 Spring 物理動畫
⭐ 卡片懸停互動效果
⭐ 玻璃擬態設計語言
⭐ 更細緻的文字分層動畫
⭐ 響應式適配
⭐ 鍵盤導航支持
```

---

## 🎯 使用場景

### **適合展示：**
```
✅ 研究項目亮點
✅ 最新研究成果
✅ 實驗室設施
✅ 團隊活動
✅ 重要公告
```

### **內容建議：**
```
📝 簡潔有力的標題（≤ 8 個字）
📝 描述性副標題（≤ 15 個字）
📝 詳細說明（≤ 80 個字）
📸 高質量圖片（建議 1920×1080）
📸 卡片圖片（建議 800×1000）
```

---

## ✨ 總結

這個 Hero Carousel 組件完美結合了：

**視覺設計**  
✅ 參考圖片的卡片重疊風格  
✅ 極簡高級質感  
✅ 玻璃擬態效果  

**動畫效果**  
✅ 15+ 個流暢動畫  
✅ Spring 物理彈性  
✅ 分層時序設計  

**用戶體驗**  
✅ 自動播放  
✅ 手動控制  
✅ 響應式適配  

**性能優化**  
✅ GPU 加速  
✅ 條件渲染  
✅ 懶加載圖片  

---

**版本**: 1.0.0  
**創建日期**: 2025-01-18  
**參考設計**: 樂齡生活網站輪播圖  
**相容性**: FAIM Lab Website
