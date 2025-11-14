# 🔬 Research Section 設計指南

## 📋 設計靈感

完全參考您提供的「Career」設計圖片，打造了一個全屏沉浸式的研究成果展示區塊。

---

## ✨ 核心特色

### **全屏背景圖片設計**
```
┌─────────────────────────────────────────────────────────┐
│  [我們的研究成果]                                頂部標題│
│                                                          │
│  ┌──────────────────────────────────────────┐          │
│  │ RESEARCH ACHIEVEMENTS                     │  左側內容│
│  │                                           │          │
│  │ [大標題]                                  │          │
│  │ 深度學習在產業的應用                       │          │
│  │                                           │          │
│  │ Deep Learning Applications in Industry    │          │
│  │                                           │          │
│  │ [詳細描述段落...]                         │          │
│  │                                           │          │
│  │ [查看活動按鈕]                            │          │
│  └──────────────────────────────────────────┘          │
│                                                          │
│  ┌──────────────────────────────────────────┐  底部標籤│
│  │ [深度學習在產業的應用] [金融數據研究]     │          │
│  │ [AI應用在電子商務] [自然語言與圖神經]     │          │
│  │ [醫療相關專案]                            │          │
│  └──────────────────────────────────────────┘          │
│                                        [背景圖片漸層遮罩]│
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 組件特點

### **1. 背景圖片系統**

**動態切換背景：**
```tsx
✅ 每個研究主題有專屬背景圖
✅ 切換時淡入淡出效果（0.6秒）
✅ 深色漸層遮罩（左深右淺）
✅ 從 95% 不透明到 50% 不透明
✅ AnimatePresence 控制平滑過渡
```

**漸層遮罩公式：**
```tsx
background: 'linear-gradient(to right, 
  rgba(2, 6, 23, 0.95) 0%,     // 左側深色
  rgba(2, 6, 23, 0.75) 50%,    // 中間漸變
  rgba(2, 6, 23, 0.5) 100%     // 右側淺色
)',
```

---

### **2. 頂部標題區域**

**設計特點：**
```
位置：absolute top-12（距離頂部 48px）
對齊：left-1/2 -translate-x-1/2（水平置中）
文字：我們的研究成果
樣式：白色、300 字重、0.1em 字距
動畫：從上方淡入（-30 → 0）
```

---

### **3. 主要內容區域（左側）**

**包含元素：**
```
1. 小標籤 "RESEARCH ACHIEVEMENTS"
   - 青色（cyan-400）
   - 11px 字體
   - 0.2em 字距

2. 主標題（動態切換）
   - clamp(42px, 6vw, 64px)
   - 600 字重
   - 白色
   - 切換時淡入淡出

3. 英文副標題
   - 16px 青色（cyan-300）
   - 0.05em 字距

4. 詳細描述段落
   - 15px 字體
   - 白色 80% 透明度
   - 1.8 行高
   - 依序淡入（每段延遲 0.1s）

5. 查看活動按鈕
   - 透明邊框
   - 懸停時青色漸變滑入
   - 文字變為 cyan-300
```

**最大寬度限制：**
```tsx
max-w-3xl  // 48rem / 768px
防止文字過長影響閱讀
```

---

### **4. 底部標籤導航**

**設計樣式（參考圖片）：**
```
佈局：flex flex-wrap gap-6 lg:gap-8
位置：底部（pt-16 距離內容區）

每個標籤：
├─ 文字：15px, 400 字重
├─ 顏色：
│  ├─ 啟用：白色
│  └─ 未啟用：白色 50% 透明度
├─ 下劃線：
│  ├─ 啟用：青色漸變（cyan-400 → blue-500）
│  └─ 懸停：白色 30% 透明度
└─ 動畫：
   ├─ 懸停向上移動（y: -4）
   └─ 下劃線展開（scaleX: 0 → 1）
```

**標籤切換動畫：**
```tsx
點擊標籤：
1. 背景圖片淡出 → 淡入（0.6s）
2. 內容區域淡出 → 淡入（0.5s）
3. 描述段落依序淡入（每段延遲 0.1s）
4. 下劃線切換（0.3s）
```

---

## 📊 研究主題數據

### **5 個研究主題**

#### **1. 深度學習在產業的應用**
```tsx
{
  id: 'deep-learning',
  label: '深度學習在產業的應用',
  title: '深度學習在產業的應用',
  subtitle: 'Deep Learning Applications in Industry',
  content: [
    '參與科技部數位經濟多年期計畫...',
    '已經協助多種產業導入人工智慧技術...',
  ],
  image: '背景圖片URL',
}
```

#### **2. 金融數據研究**
```tsx
{
  id: 'finance',
  label: '金融數據研究',
  content: [
    '金融數據可以區分為量化的股價資料...',
    '本研究室致力於不同領域問題...',
    '目前有科技部產學...',
    '也有大專生科技部計畫...',
    '例如:強化式學習建構適性化理財機器人模型。',
  ],
}
```

#### **3. AI 應用在電子商務產業**
```tsx
{
  id: 'ecommerce',
  label: 'AI 應用在電子商務產業',
  content: [
    '隨著電子商務平台成為顧客消費的主要管道...',
    '包含網頁端各類瀏覽行為的收集...',
    '這些大量且多樣化的消費者資訊...',
    '協助產業依照不同行銷需求導入AI技術...',
  ],
}
```

#### **4. 自然語言應用與圖神經網路**
```tsx
{
  id: 'nlp',
  label: '自然語言應用與圖神經網路',
  content: [
    '自然語言相關研究透過深度學習開創一個新的視野',
    '目前英文的語意分析與翻譯都已成熟...',
    '探究最新的自然語言語意模型之外...',
    '協助行銷部門改善產品設計或顧客服務...',
    '這一兩年更結合最新圖神經網路技術...',
  ],
}
```

#### **5. 醫療相關專案**
```tsx
{
  id: 'medical',
  label: '醫療相關專案',
  content: [
    '主要在自然語言技術或行為分析於相關的醫療專科',
    '目前與長庚醫院老年身心科醫師合作...',
    '期望改善長輩身心健康相關研究',
  ],
}
```

---

## 🎬 動畫時間軸

### **初始載入動畫**
```
時間軸（進入視窗）：
0.0s ━━━ 頁面進入視窗檢測
0.0s     ├─ 內容區域開始淡入（從左滑入）

0.2s ━━━ 頂部標題淡入（從上方）

0.4s ━━━ 底部標籤區域淡入
0.5s ━━━ 第1個標籤動畫
0.6s ━━━ 第2個標籤動畫
0.7s ━━━ 第3個標籤動畫
0.8s ━━━ 第4個標籤動畫
0.9s ━━━ 第5個標籤動畫

完成 ━━━ 所有元素已顯示，等待互動
```

### **標籤切換動畫**
```
用戶點擊標籤：
0.0s ━━━ 觸發切換
0.0s     ├─ 背景圖片開始淡出
0.0s     └─ 內容開始淡出（向上移動）

0.3s ━━━ 下劃線移動到新位置

0.6s ━━━ 背景圖片完成切換
0.6s     ├─ 新背景圖片淡入
0.6s     └─ 新內容開始淡入（從下方）

0.7s ━━━ 第1段描述淡入
0.8s ━━━ 第2段描述淡入
0.9s ━━━ 第3段描述淡入（如有）

1.0s ━━━ 切換完成
```

### **懸停互動**
```
標籤懸停：
- 向上移動 4px
- 白色下劃線展開（0.3s）

按鈕懸停：
- 放大至 105%
- 青色漸變滑入（從左到右）
- 文字變為 cyan-300
```

---

## 🎨 配色方案

### **主要配色（青色系）**
```
背景遮罩：
- 深色基底：rgba(2, 6, 23, ...)
- 漸層：95% → 75% → 50% 透明度

文字顏色：
- 主標題：白色
- 副標題：cyan-300（#67e8f9）
- 標籤：cyan-400（#22d3ee）
- 描述：白色 80% 透明度

下劃線：
- 啟用：cyan-400 → blue-500 漸變
- 懸停：白色 30% 透明度

按鈕：
- 邊框：白色 20% 透明度
- 懸停背景：cyan-500/20 → blue-500/20
```

### **背景圖片遮罩**
```
頂部：透明
左側：95% 深色（確保文字可讀）
中間：75% 深色（平滑過渡）
右側：50% 深色（顯示更多背景）
底部：漸層至 slate-950（與下一區塊銜接）
```

---

## 🛠️ 自定義指南

### **添加新研究主題**

**位置：** `/components/ResearchSection.tsx` 第 8-62 行

```tsx
const researchTopics: ResearchTopic[] = [
  // ... 現有主題
  {
    id: 'new-topic',
    label: '新研究主題',
    title: '新研究主題的完整標題',
    subtitle: 'English Subtitle',
    content: [
      '第一段描述...',
      '第二段描述...',
      // 可以有多段
    ],
    image: '背景圖片URL',
  },
];
```

### **修改現有主題內容**

```tsx
// 找到對應的主題 ID 並修改
{
  id: 'deep-learning',  // 不要改 ID
  label: '新的標籤文字',
  title: '新的標題',
  subtitle: 'New Subtitle',
  content: [
    '更新後的內容...',
  ],
  image: '新的背景圖片',
}
```

### **更換背景圖片**

**方法 1：使用 Unsplash**
```tsx
import { unsplash_tool } from '...';

// 搜尋適合的圖片
const image = await unsplash_tool('research laboratory');
```

**方法 2：使用本地圖片**
```tsx
import myImage from './assets/research.jpg';

{
  image: myImage,
}
```

### **調整遮罩透明度**

```tsx
// 第 95-97 行
background: 'linear-gradient(to right, 
  rgba(2, 6, 23, 0.98) 0%,    // 更深（0.95 → 0.98）
  rgba(2, 6, 23, 0.80) 50%,   // 更深（0.75 → 0.80）
  rgba(2, 6, 23, 0.60) 100%   // 更深（0.5 → 0.60）
)',
```

### **修改標籤樣式**

**更改字體大小：**
```tsx
// 第 288 行
style={{
  fontSize: '17px',  // 改為更大（原 15px）
  fontWeight: 500,   // 改為粗體（原 400）
}}
```

**更改下劃線顏色：**
```tsx
// 第 296-304 行
<motion.div
  className="bg-gradient-to-r from-purple-400 to-pink-500"  // 改為紫粉漸變
/>
```

### **調整內容區域寬度**

```tsx
// 第 137 行
<div className="max-w-4xl space-y-8">  // 改為更寬（原 max-w-3xl）
```

### **更改動畫速度**

**背景切換速度：**
```tsx
// 第 81 行
transition={{ duration: 1.0 }}  // 改為更慢（原 0.6）
```

**標籤下劃線速度：**
```tsx
// 第 304 行
transition={{ duration: 0.5 }}  // 改為更慢（原 0.3）
```

---

## 📱 響應式設計

### **桌面端（≥ 1024px）**
```
✅ 全屏背景圖片
✅ 左側內容區域（max-w-3xl）
✅ 底部標籤橫向排列（gap-8）
✅ 所有動畫完整呈現
```

### **平板端（768px - 1024px）**
```
📱 背景圖片維持全屏
📱 內容區域縮小（max-w-2xl）
📱 標籤間距減小（gap-6）
📱 字體尺寸自動縮放（clamp）
```

### **移動端（< 768px）**
```
📱 內容區域更窄（max-w-xl）
📱 標籤換行顯示（flex-wrap）
📱 標題字體縮小（clamp 最小值）
📱 按鈕全寬顯示
```

### **響應式字體大小**
```tsx
標題：clamp(42px, 6vw, 64px)
- 移動端：42px
- 平板端：根據視窗寬度
- 桌面端：64px（最大）

頂部標題：clamp(24px, 3vw, 36px)
- 移動端：24px
- 桌面端：36px
```

---

## 🔧 進階功能

### **添加鍵盤導航**

```tsx
import { useEffect } from 'react';

useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      // 切換到上一個主題
      const currentIdx = researchTopics.findIndex(t => t.id === activeTopic);
      const prevIdx = (currentIdx - 1 + researchTopics.length) % researchTopics.length;
      setActiveTopic(researchTopics[prevIdx].id);
    } else if (e.key === 'ArrowRight') {
      // 切換到下一個主題
      const currentIdx = researchTopics.findIndex(t => t.id === activeTopic);
      const nextIdx = (currentIdx + 1) % researchTopics.length;
      setActiveTopic(researchTopics[nextIdx].id);
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [activeTopic]);
```

### **添加自動輪播**

```tsx
useEffect(() => {
  const interval = setInterval(() => {
    const currentIdx = researchTopics.findIndex(t => t.id === activeTopic);
    const nextIdx = (currentIdx + 1) % researchTopics.length;
    setActiveTopic(researchTopics[nextIdx].id);
  }, 8000); // 每 8 秒切換

  return () => clearInterval(interval);
}, [activeTopic]);
```

### **添加進度指示器**

```tsx
// 在標籤下方添加
<div className="flex gap-2 mt-4">
  {researchTopics.map((topic) => (
    <div
      key={topic.id}
      className={`h-1 rounded-full transition-all ${
        activeTopic === topic.id
          ? 'w-8 bg-cyan-400'
          : 'w-2 bg-white/20'
      }`}
    />
  ))}
</div>
```

### **添加滑動手勢（移動端）**

```tsx
import { useGesture } from '@use-gesture/react';

const bind = useGesture({
  onSwipeLeft: () => {
    // 切換到下一個主題
  },
  onSwipeRight: () => {
    // 切換到上一個主題
  },
});

<div {...bind()}>
  {/* 內容 */}
</div>
```

---

## 🐛 常見問題

### **Q: 背景圖片載入慢怎麼辦？**
```tsx
// 預加載所有圖片
useEffect(() => {
  researchTopics.forEach(topic => {
    const img = new Image();
    img.src = topic.image;
  });
}, []);
```

### **Q: 如何讓文字更清晰？**
增加遮罩透明度：
```tsx
rgba(2, 6, 23, 0.98) 0%,  // 改為更深
```

或添加文字陰影：
```tsx
textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
```

### **Q: 如何禁用標籤切換動畫？**
```tsx
// 移除 AnimatePresence
<div key={currentTopic.id}>
  {/* 內容 */}
</div>
```

### **Q: 如何讓標籤垂直排列？**
```tsx
// 第 254 行
<div className="flex flex-col gap-4">  // 改為 flex-col
```

### **Q: 背景圖片不顯示？**
檢查圖片 URL 是否有效：
```tsx
console.log('Current image:', currentTopic.image);
```

---

## 📈 性能優化

### **已實施的優化**
```
✅ 圖片預加載（避免切換時閃爍）
✅ AnimatePresence mode="wait"（避免重疊）
✅ useInView 懶加載（僅在可見時執行動畫）
✅ GPU 加速動畫（transform, opacity）
✅ 響應式圖片尺寸
```

### **進一步優化建議**
```tsx
// 1. 使用低質量圖片預覽（LQIP）
const [isLoaded, setIsLoaded] = useState(false);

<img
  src={topic.image}
  onLoad={() => setIsLoaded(true)}
  style={{ filter: isLoaded ? 'none' : 'blur(20px)' }}
/>

// 2. 使用 Intersection Observer
const options = {
  rootMargin: '100px',  // 提前 100px 載入
};

// 3. 降低動畫複雜度（移動端）
const isMobile = window.innerWidth < 768;
const animationDuration = isMobile ? 0.3 : 0.6;
```

---

## ✨ 與參考圖片的對比

### **完全還原的元素**
```
✅ 全屏背景圖片設計
✅ 深色漸層遮罩（左深右淺）
✅ 左側內容區域佈局
✅ 底部帶下劃線的標籤導航
✅ 標籤點擊切換效果
✅ 頂部置中標題
✅ 「查看活動」按鈕
```

### **增強功能**
```
⭐ 流暢的背景圖片切換動畫
⭐ 內容依序淡入效果
⭐ 標籤懸停互動
⭐ 按鈕漸變特效
⭐ 響應式適配
⭐ 底部漸層銜接
⭐ 完整的動畫時序控制
```

---

## 🎯 使用建議

### **適合展示內容：**
```
✅ 研究成果展示
✅ 產品系列介紹
✅ 服務類別說明
✅ 案例研究展示
✅ 團隊專案介紹
```

### **內容撰寫建議：**
```
📝 標題：簡潔有力（≤ 12 個字）
📝 副標題：英文對照（提升專業感）
📝 描述：分段呈現（每段 40-80 字）
📝 標籤：精簡標示（≤ 10 個字）
📸 背景圖：高質量橫向圖片（建議 1920×1080）
```

### **圖片選擇建議：**
```
✅ 使用高解析度圖片（≥ 1920px 寬）
✅ 確保左側有較暗的區域（便於閱讀文字）
✅ 避免過於複雜的背景（影響文字辨識）
✅ 統一色調風格（建議冷色調）
✅ 主題相關的視覺內容
```

---

## 📚 技術細節

### **使用的 Motion 特性**
```tsx
✅ AnimatePresence - 進出場動畫
✅ mode="wait" - 等待退出完成再進入
✅ initial/animate/exit - 動畫狀態
✅ whileHover/whileTap - 互動動畫
✅ useInView - 視窗檢測
✅ transition - 過渡控制
```

### **使用的 React 特性**
```tsx
✅ useState - 狀態管理
✅ useRef - DOM 引用
✅ useEffect - 副作用處理
✅ Array.find() - 查找當前主題
```

### **使用的 CSS 技術**
```css
✅ position: absolute - 圖層堆疊
✅ linear-gradient - 漸層遮罩
✅ backdrop-filter - 玻璃效果（按鈕）
✅ clamp() - 響應式尺寸
✅ transform - GPU 加速動畫
```

---

## ✅ 總結

這個 Research Section 完美重現了參考圖片的設計，並添加了：

**視覺設計**  
✅ 全屏沉浸式背景  
✅ 深色漸層遮罩  
✅ 清晰的內容層次  
✅ 帶下劃線的標籤導航  

**動畫效果**  
✅ 15+ 個流暢動畫  
✅ 背景圖片平滑切換  
✅ 內容依序淡入  
✅ 標籤互動細節  

**用戶體驗**  
✅ 直覺的標籤導航  
✅ 響應式完美適配  
✅ 流暢的互動回饋  

**內容架構**  
✅ 5 個研究主題  
✅ 完整的文字描述  
✅ 對應的背景圖片  

---

**版本**: 1.0.0  
**創建日期**: 2025-01-18  
**參考設計**: 樂齡生活 Career 區塊  
**相容性**: FAIM Lab Website
