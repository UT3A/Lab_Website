# 📸 Activity Gallery 設計指南

## 📋 設計靈感

完全參考您提供的「體驗活動 Activity」設計圖片，打造了一個紫粉色系的活動相簿區塊。

---

## ✨ 核心特色

### **卡片式活動展示**
```
┌─────────────────────────────────────────────────────────┐
│  ━━ 體驗活動                                             │
│                                                          │
│  Activity                                [HAPPY ELD]    │
│  (紫粉漸變大標題)                      (裝飾文字)        │
│                                                          │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │ [圖片] │  │ [圖片] │  │ [圖片] │  │ [圖片] │        │
│  │        │  │        │  │        │  │        │        │
│  │ 👥📊⏰  │  │ 👥📊⏰  │  │ 👥📊⏰  │  │ 👥📊⏰  │        │
│  │ 標題   │  │ 標題   │  │ 標題   │  │ 標題   │        │
│  │ 描述   │  │ 描述   │  │ 描述   │  │ 描述   │        │
│  └────────┘  └────────┘  └────────┘  └────────┘        │
│                                                          │
│                     ━━━━━━━━━                           │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 組件特點

### **1. 標題區域**

**中文標題帶左側線條：**
```tsx
━━ 體驗活動

樣式：
- 左側線條：48px 寬度，紫色漸變
- 字體：clamp(18px, 2.5vw, 24px)
- 字重：400
- 顏色：白色 90% 透明度
- 字距：0.1em
- 動畫：線條從左展開（0.8s，延遲 0.2s）
```

**英文大標題：**
```tsx
Activity

樣式：
- 字體：clamp(56px, 8vw, 96px)
- 字重：600
- 顏色：紫粉漸變（purple → pink）
- 漸變：#a855f7 → #ec4899
- 行高：1
- 字距：-0.02em（緊密）
- 動畫：淡入上升（延遲 0.3s）
```

**裝飾文字 "HAPPY ELD"：**
```tsx
位置：右上角（absolute）
旋轉：-12 度
字體：72px
字重：700
顏色：紫色 5% 透明度（背景裝飾）
僅桌面端顯示（hidden lg:block）
動畫：淡入旋轉（延遲 0.5s）
```

---

### **2. 活動卡片設計**

**佈局：**
```
網格：1 列（移動端）→ 2 列（平板）→ 4 列（桌面）
間距：24px（gap-6）
卡片總數：4 張
```

**每張卡片結構：**
```tsx
┌─────────────────────┐
│  [活動圖片 4:3]     │  ← 懸停放大 110%
│                     │
├─────────────────────┤
│ 👥 189已參加         │  ← 統計資訊
│ ⭐ 4.8  ⏰ 3小時    │
│                     │
│ 青銀淨灘活動         │  ← 活動標題
│                     │
│ 想要為大自然盡一     │  ← 描述文字
│ 份心力...           │
└─────────────────────┘
```

---

### **3. 卡片詳細設計**

#### **圖片區域**

```tsx
尺寸比例：aspect-[4/3]（寬高比 4:3）
溢出：hidden
圖片：
├─ 過渡：transform 0.5s
├─ 懸停：scale 110%（放大效果）
└─ 物件適配：object-cover

漸層遮罩（底部）：
├─ 位置：absolute inset-0
├─ 漸變：透明 → 黑色 60%
└─ 方向：從上到下
```

#### **統計資訊列**

```tsx
佈局：flex gap-4
字體：12px

1. 參與人數：
   ├─ 圖標：Users（紫色 400）
   ├─ 容器：紫色 10% 背景 + 20% 邊框
   └─ 文字：「189已參加」白色 60%

2. 評分：
   ├─ 圖標：Star（黃色填充）
   └─ 數字：白色 80%

3. 時長：
   ├─ 圖標：Clock（青色）
   └─ 文字：白色 60%
```

#### **標題**

```tsx
字體：18px
字重：500
顏色：白色 100%
行高：1.4
```

#### **描述文字**

```tsx
字體：13px
字重：300
顏色：白色 50%
行高：1.6
```

---

### **4. 活動數據**

#### **活動 1：青銀淨灘活動**
```
參與人數：189 人
評分：4.8 ⭐
時長：3 小時
描述：想要為大自然盡一份心力
圖片：戶外團隊活動
```

#### **活動 2：橋起做拉麵**
```
參與人數：27 人
評分：5.0 ⭐
時長：2 小時
描述：與孩子們一起做拉麵是一件相當有趣的事
圖片：工作坊協作
```

#### **活動 3：油漆共遊教學**
```
參與人數：62 人
評分：4.9 ⭐
時長：2 小時
描述：我們邀請到了專業的油漆工人，來教我們的油漆共
圖片：會議研討
```

#### **活動 4：學會基礎醫療觀念**
```
參與人數：58 人
評分：4.7 ⭐
時長：3 小時
描述：在家時，總自己檢測一些疾病嗎，不用怕！我們來
圖片：小組學習
```

---

## 🎬 動畫時間軸

### **進入動畫序列**
```
時間軸：
0.0s ━━━ 頁面進入視窗檢測

0.0s ━━━ 標題區域開始
0.2s ━━━ 左側線條展開
0.3s ━━━ 英文標題淡入
0.5s ━━━ 裝飾文字「HAPPY ELD」淡入旋轉

0.4s ━━━ 第1張卡片淡入上升
0.5s ━━━ 第2張卡片淡入上升
0.6s ━━━ 第3張卡片淡入上升
0.7s ━━━ 第4張卡片淡入上升

1.0s ━━━ 底部裝飾線展開

完成 ━━━ 等待互動
```

### **懸停互動**
```
卡片懸停：
├─ 整體向上移動 8px
├─ 圖片放大至 110%
├─ 紫色光暈從右下角浮現
└─ 過渡時長：0.3s / 0.5s

圖片過渡：
├─ transform: 0.5s（較慢）
└─ 創造平滑放大效果
```

---

## 🎨 配色方案

### **主要配色（紫粉色系）**

```
標題漸變：
- 起點：#a855f7（purple-500）
- 終點：#ec4899（pink-500）

統計圖標顏色：
- 參與人數：purple-400（#c084fc）
- 評分：yellow-400（#facc15）
- 時長：cyan-400（#22d3ee）

卡片邊框：
- 背景：rgba(255, 255, 255, 0.03)
- 邊框：rgba(255, 255, 255, 0.1)

光暈效果：
- 背景光暈：rgba(168, 85, 247, 0.08)（紫色）
- 懸停光暈：rgba(168, 85, 247, 0.15)（紫色）

文字顏色：
- 標題：白色 100%
- 統計數據：白色 60-80%
- 描述：白色 50%
```

### **裝飾元素**

```
頂部線條：
- 寬度：48px（w-12）
- 高度：1px（h-px）
- 顏色：紫色漸變 → 透明

底部線條：
- 寬度：100%
- 高度：1px
- 顏色：透明 → 紫色 30% → 透明
```

---

## 🛠️ 自定義指南

### **添加新活動**

**位置：** `/components/ActivityGallery.tsx` 第 9-49 行

```tsx
const activities: Activity[] = [
  // ... 現有活動
  {
    id: 5,
    title: '您的活動標題',
    participants: 100,
    rating: 4.5,
    duration: '2小時',
    image: '圖片URL',
  },
];

// 別忘了在描述區塊添加對應文字（第 165-168 行）
{activity.id === 5 && '您的活動描述...'}
```

### **更改活動內容**

```tsx
// 找到對應的活動 ID 並修改
{
  id: 1,
  title: '新的活動標題',
  participants: 200,  // 更新參與人數
  rating: 5.0,        // 更新評分
  duration: '4小時',   // 更新時長
  image: '新圖片URL',
}
```

### **更改主色調為藍色**

**標題漸變：**
```tsx
// 第 99 行
background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
// cyan-500 → blue-500
```

**圖標和容器：**
```tsx
// 參與人數容器（第 138-142 行）
background: 'rgba(14, 165, 233, 0.1)',
border: '1px solid rgba(14, 165, 233, 0.2)',

// 圖標顏色
className="text-cyan-400"
```

**光暈效果：**
```tsx
// 背景光暈（第 66 行）
bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_50%)]

// 懸停光暈（第 173 行）
rgba(14, 165, 233, 0.15)
```

### **調整卡片網格**

**3 列桌面端：**
```tsx
// 第 109 行
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

**5 列桌面端（更緊密）：**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
```

### **移除裝飾文字**

**註釋掉：** 第 101-117 行

```tsx
{/* 
<motion.div>
  HAPPY ELD
</motion.div>
*/}
```

### **更改圖片比例**

**方形圖片（1:1）：**
```tsx
// 第 119 行
<div className="relative aspect-square overflow-hidden">
```

**寬屏圖片（16:9）：**
```tsx
<div className="relative aspect-video overflow-hidden">
```

---

## 📱 響應式設計

### **桌面端（≥ 1024px）**
```
✅ 4 列網格
✅ 顯示「HAPPY ELD」裝飾
✅ 完整懸停動畫
✅ 卡片間距 24px
```

### **平板端（640px - 1024px）**
```
📱 2 列網格
📱 隱藏裝飾文字
📱 保留懸停效果
📱 卡片間距 24px
```

### **移動端（< 640px）**
```
📱 1 列網格
📱 卡片全寬顯示
📱 簡化懸停效果
📱 標題字體自動縮小
```

### **響應式字體大小**

```tsx
中文標題：clamp(18px, 2.5vw, 24px)
- 移動端：18px
- 平板端：根據視窗
- 桌面端：24px

英文標題：clamp(56px, 8vw, 96px)
- 移動端：56px
- 平板端：根據視窗
- 桌面端：96px
```

---

## 🔧 進階功能

### **添加活動詳情彈窗**

```tsx
import { useState } from 'react';

const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

// 卡片點擊
<motion.div
  onClick={() => setSelectedActivity(activity)}
  className="cursor-pointer"
>
  {/* 卡片內容 */}
</motion.div>

// 彈窗
{selectedActivity && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-slate-900 p-8 rounded-2xl max-w-2xl">
      <h3>{selectedActivity.title}</h3>
      <img src={selectedActivity.image} alt="" />
      <p>詳細資訊...</p>
      <button onClick={() => setSelectedActivity(null)}>
        關閉
      </button>
    </div>
  </div>
)}
```

### **添加「查看更多」按鈕**

```tsx
// 在卡片網格下方添加
<div className="mt-12 text-center">
  <motion.button
    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    查看所有活動
  </motion.button>
</div>
```

### **添加篩選功能**

```tsx
const [filter, setFilter] = useState<'all' | 'workshop' | 'outdoor'>('all');

const filteredActivities = activities.filter(activity => {
  if (filter === 'all') return true;
  // 添加篩選邏輯
});

// 篩選按鈕
<div className="flex gap-4 mb-8">
  <button onClick={() => setFilter('all')}>全部</button>
  <button onClick={() => setFilter('workshop')}>工作坊</button>
  <button onClick={() => setFilter('outdoor')}>戶外活動</button>
</div>
```

### **添加報名按鈕**

```tsx
// 在每張卡片底部添加
<motion.button
  className="w-full mt-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-300"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  立即報名
</motion.button>
```

---

## 🐛 常見問題

### **Q: 如何更改卡片數量？**
只需在 `activities` 陣列中添加或刪除項目即可。網格會自動調整。

### **Q: 圖片載入慢怎麼辦？**
```tsx
// 添加骨架屏
{!imageLoaded && (
  <div className="absolute inset-0 bg-slate-800 animate-pulse" />
)}
```

### **Q: 如何禁用懸停動畫？**
```tsx
// 移除 whileHover
<motion.div
  // whileHover={{ y: -8 }}  ← 刪除這行
>
```

### **Q: 如何讓卡片更緊湊？**
```tsx
// 減小內距（第 128 行）
<div className="p-3 space-y-3">  // 改為 p-3

// 減小圖片高度
<div className="relative aspect-[16/9]">  // 改為更寬
```

### **Q: 評分星星如何改為半星？**
```tsx
// 使用條件渲染
{activity.rating % 1 !== 0 ? (
  <StarHalf className="w-3 h-3 text-yellow-400 fill-yellow-400" />
) : (
  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
)}
```

---

## 📈 性能優化

### **已實施的優化**
```
✅ useInView 懶加載
✅ GPU 加速動畫（transform, opacity）
✅ 圖片延遲載入
✅ 簡化的卡片結構
✅ 優化的動畫時序
```

### **進一步優化建議**

```tsx
// 1. 圖片懶加載
<ImageWithFallback
  loading="lazy"
  src={activity.image}
/>

// 2. 虛擬滾動（如果活動很多）
import { useVirtual } from 'react-virtual';

// 3. 圖片壓縮
使用 WebP 格式
優化圖片尺寸（建議 800×600）
```

---

## ✨ 與參考圖片的對比

### **完全還原的元素**
```
✅ 紫粉色漸變標題
✅ 「HAPPY ELD」裝飾文字（旋轉）
✅ 左側線條標題設計
✅ 4 列卡片佈局
✅ 圖片 + 統計 + 標題 + 描述結構
✅ 參與人數、評分、時長圖標
```

### **增強功能**
```
⭐ 流暢的進入動畫
⭐ 圖片懸停放大效果
⭐ 卡片懸停上升
⭐ 紫色光暈特效
⭐ 響應式完美適配
⭐ 底部裝飾線動畫
```

---

## 🎯 使用建議

### **適合展示內容：**
```
✅ 實驗室活動相簿
✅ 工作坊記錄
✅ 團隊建設活動
✅ 學術會議
✅ 產學合作
```

### **內容撰寫建議：**
```
📝 標題：簡潔有力（≤ 8 個字）
📝 描述：吸引人（20-40 字）
📸 圖片：高質量橫向圖片（建議 800×600）
📊 評分：真實反饋（1.0 - 5.0）
👥 參與人數：實際數據
⏰ 時長：明確時間
```

---

## ✅ 總結

這個 Activity Gallery 完美重現了參考圖片的設計，並添加了：

**視覺設計**  
✅ 紫粉色漸變主題  
✅ 左側線條標題設計  
✅ 旋轉裝飾文字  
✅ 4 列卡片網格  

**互動效果**  
✅ 10+ 個流暢動畫  
✅ 卡片懸停上升  
✅ 圖片放大效果  
✅ 光暈特效  

**資訊架構**  
✅ 清晰的統計資訊  
✅ 易讀的標題描述  
✅ 吸引人的活動圖片  

**響應式設計**  
✅ 完美適配所有設備  
✅ 流暢的動畫系統  

---

**版本**: 1.0.0  
**創建日期**: 2025-01-18  
**參考設計**: 體驗活動 Activity 區塊  
**相容性**: FAIM Lab Website
