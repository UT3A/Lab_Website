# 👥 團隊成員輪播組件指南

## 📋 設計概念

基於您提供的參考圖片，創建了一個獨特的團隊展示設計：
- **上方**：教授大卡片（固定顯示）
- **下方**：團隊成員小卡片（自動滑動）

---

## ✨ 核心特色

### **視覺設計**
```
👤 教授大卡片（特殊樣式 + 發光效果）
🎴 成員卡片（堆疊滑動）
📝 左側文字介紹區域
🎨 玻璃擬態效果
✨ 漸變邊框與光暈
```

### **動畫效果**
```
✅ 卡片自動滑動（4 秒間隔）
✅ 卡片淡入淡出切換
✅ 懸停放大效果
✅ 滑動指示器動畫
✅ 教授卡片發光脈衝
```

---

## 🎨 佈局結構

```
┌────────────────────────────────────────────────────┐
│  左側文字區域              右側卡片區域              │
│  ┌──────────────┐         ┌──────────────────────┐│
│  │ 標籤         │         │  [教授大卡片]         ││
│  │ 團隊成員     │         │  ┌────────────────┐  ││
│  │ 描述文字     │         │  │  照片 + 資訊    │  ││
│  │              │         │  │  專長標籤       │  ││
│  │ [統計數據]   │         │  │  聯絡方式       │  ││
│  │  1教授       │         │  └────────────────┘  ││
│  │  2博士生     │         │                       ││
│  │  6+碩士生    │         │  [成員卡片滑動區]    ││
│  │              │         │  ┌───┐ ┌───┐ ┌───┐  ││
│  │ [◄][►][●●●] │         │  │ 1 │ │ 2 │ │ 3 │  ││
│  └──────────────┘         │  └───┘ └───┘ └───┘  ││
│                            └──────────────────────┘│
└────────────────────────────────────────────────────┘
```

---

## 🎯 組件特點

### **1. 教授卡片（頂部）**

**樣式特色：**
```tsx
✨ 大尺寸卡片（橫向佈局）
✨ 藍色漸變背景
✨ 發光邊框（3px cyan）
✨ 外層光暈效果
✨ 玻璃擬態（backdrop-blur: 20px）
```

**包含資訊：**
```
- 大頭照（128×128px，圓角）
- 姓名（中英文）
- 職稱
- 詳細介紹
- 專長標籤（3-5個）
- 聯絡信箱
```

**動畫效果：**
```tsx
✅ 照片懸停放大（scale: 1.05）
✅ 發光效果脈衝
✅ 標籤懸停變色
```

---

### **2. 成員卡片（滑動區）**

**佈局設計：**
```
桌面端（≥1024px）：同時顯示 3 張卡片
平板端（768-1024px）：同時顯示 2 張卡片
移動端（<768px）：同時顯示 1 張卡片
```

**卡片樣式：**
```tsx
尺寸：95% / visibleCards
高度：400-450px
圓角：12px
背景：半透明白色（3% opacity）
邊框：白色 10% opacity
模糊：backdrop-blur(10px)
```

**卡片結構：**
```
┌─────────────┐
│  [照片區]   │ ← 56% 高度
│             │   + 漸變遮罩
├─────────────┤
│ 姓名        │
│ 職稱        │
│ 描述        │
│ [專長標籤]  │
│ [聯絡圖示]  │
└─────────────┘
```

**滑動動畫：**
```tsx
進入：opacity: 0 → 1, x: 100 → 0, scale: 0.9 → 1
退出：opacity: 1 → 0, x: 0 → -100, scale: 1 → 0.9
延遲：第1張 0s, 第2張 0.1s, 第3張 0.2s
懸停：scale: 1 → 1.05, zIndex: 999
```

---

### **3. 左側控制區**

**文字內容：**
```tsx
- 小標籤："OUR TEAM"
- 大標題："團隊成員"
- 描述段落
- 統計數據（3個方塊）
  * 1 教授
  * 2 博士生
  * 6+ 碩士生
```

**導航控制：**
```tsx
[◄] 上一張按鈕
[►] 下一張按鈕
[━━━ ● ●] 進度指示器

樣式：
- 圓形按鈕（48px）
- 玻璃背景
- 懸停時藍色發光
- 當前指示器延長至 24px
```

---

## 📊 數據結構

### **團隊成員介面**
```tsx
interface TeamMember {
  id: number;          // 唯一識別碼
  name: string;        // 中文姓名
  nameEn: string;      // 英文姓名
  title: string;       // 職稱（中文）
  role: string;        // 角色（英文）
  image: string;       // 照片 URL
  email?: string;      // 電子郵件（可選）
  expertise: string[]; // 專長領域陣列
  description: string; // 個人簡介
}
```

### **當前成員資料**

**教授：**
```tsx
{
  name: '王教授',
  role: 'Principal Investigator',
  expertise: ['奈米材料', '量子計算', '永續能源'],
  description: '致力於前沿材料科學研究...',
}
```

**團隊成員（6位）：**
```
1. 陳博士 - 博士後研究員 - 材料合成、表面科學
2. 李研究員 - 博士生 - 光電材料、量子點
3. 張同學 - 碩士生 - 能源材料、電池技術
4. 林同學 - 碩士生 - 催化材料、綠色化學
5. 黃同學 - 碩士生 - 生醫材料、奈米醫學
6. 吳同學 - 碩士生 - 感測材料、IoT 應用
```

---

## 🎬 動畫時間軸

### **滑動切換動畫**
```
時間軸（每 4 秒）：
0.0s ━━━ 觸發滑動
0.0s     ├─ 舊卡片開始退出（向左滑出）
0.0s     └─ 新卡片開始進入（從右滑入）

0.0s ━━━ 第1張卡片動畫
0.1s ━━━ 第2張卡片動畫（延遲 0.1s）
0.2s ━━━ 第3張卡片動畫（延遲 0.2s）

0.5s ━━━ 所有卡片完成動畫
...
4.0s ━━━ 自動切換到下一組
```

### **懸停互動**
```
懸停時：
- 卡片放大至 105%
- 提升至最上層（z-index: 999）
- 動畫時長：0.3s
- 緩動函數：ease-out
```

---

## 🛠️ 自定義指南

### **修改教授資訊**

**位置：** `/components/TeamCarousel.tsx` 第 19-28 行

```tsx
const professor: TeamMember = {
  id: 0,
  name: '您的教授姓名',
  nameEn: 'Prof. YourName',
  title: '實驗室主持人',
  role: 'Principal Investigator',
  image: '教授照片URL',
  email: 'professor@example.com',
  expertise: ['專長1', '專長2', '專長3'],
  description: '教授的詳細介紹...',
};
```

### **添加/修改團隊成員**

**位置：** `/components/TeamCarousel.tsx` 第 31-86 行

```tsx
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '新成員姓名',
    nameEn: 'NewMember',
    title: '職稱',
    role: 'Role in English',
    image: '照片URL',
    email: 'email@example.com',
    expertise: ['專長1', '專長2'],
    description: '簡介文字',
  },
  // 添加更多成員...
];
```

### **調整滑動速度**

```tsx
// 第 93 行
const interval = setInterval(nextSlide, 6000);  // 改為 6 秒
```

### **修改同時顯示的卡片數量**

```tsx
// 第 102-111 行
const handleResize = () => {
  if (window.innerWidth < 768) {
    setVisibleCards(1);     // 移動端：1 張
  } else if (window.innerWidth < 1024) {
    setVisibleCards(2);     // 平板端：2 張
  } else {
    setVisibleCards(4);     // 桌面端：改為 4 張
  }
};
```

### **更改教授卡片顏色主題**

```tsx
// 第 265-268 行
style={{
  background: 'linear-gradient(135deg, 
    rgba(139, 92, 246, 0.1),      // 紫色
    rgba(124, 58, 237, 0.05)      // 深紫
  )',
  border: '1px solid rgba(139, 92, 246, 0.2)',
}}
```

### **調整成員卡片高度**

```tsx
// 第 423 行
<div className="relative h-[500px] md:h-[550px]">
  {/* 改為更高 */}
</div>
```

### **修改標籤顏色**

```tsx
// 專長標籤 - 教授卡片（第 338-345 行）
style={{
  background: 'rgba(16, 185, 129, 0.15)',  // 綠色背景
  color: 'rgba(110, 231, 183, 1)',         // 綠色文字
  border: '1px solid rgba(16, 185, 129, 0.3)',
}}

// 專長標籤 - 成員卡片（第 513-519 行）
style={{
  background: 'rgba(99, 102, 241, 0.1)',   // 紫色背景
  color: 'rgba(165, 180, 252, 1)',         // 紫色文字
}}
```

---

## 📱 響應式設計

### **桌面端（≥ 1024px）**
```
✅ 完整左右佈局
✅ 顯示 3 張成員卡片
✅ 教授卡片橫向佈局
✅ 所有統計數據
```

### **平板端（768px - 1024px）**
```
📱 顯示 2 張成員卡片
📱 教授卡片保持橫向
📱 減小字體尺寸
```

### **移動端（< 768px）**
```
📱 顯示 1 張成員卡片
📱 教授卡片改為直向
📱 文字區域在上方
📱 縮小間距
```

---

## 🎨 配色方案

### **當前配色（科技藍）**
```
教授卡片：
- 背景：rgba(14, 165, 233, 0.1) → rgba(6, 182, 212, 0.05)
- 邊框：rgba(14, 165, 233, 0.2)
- 照片邊框：rgba(14, 165, 233, 0.5)
- 光暈：rgba(14, 165, 233, 0.3)
- 標籤：rgba(14, 165, 233, 0.15)

成員卡片：
- 背景：rgba(255, 255, 255, 0.03)
- 邊框：rgba(255, 255, 255, 0.1)
- 標籤：rgba(255, 255, 255, 0.05)

按鈕懸停：
- 背景：rgba(14, 165, 233, 0.2)
- 邊框：rgba(14, 165, 233, 0.5)
```

### **可選配色方案**

**紫色學術風：**
```tsx
教授卡片：
background: 'linear-gradient(135deg, 
  rgba(139, 92, 246, 0.1), 
  rgba(124, 58, 237, 0.05)
)',
border: '1px solid rgba(139, 92, 246, 0.2)',
```

**綠色環保風：**
```tsx
教授卡片：
background: 'linear-gradient(135deg, 
  rgba(16, 185, 129, 0.1), 
  rgba(5, 150, 105, 0.05)
)',
border: '1px solid rgba(16, 185, 129, 0.2)',
```

---

## 🔧 進階功能

### **添加社交媒體連結**

```tsx
// 1. 擴展 TeamMember 介面
interface TeamMember {
  // ... 現有屬性
  linkedin?: string;
  github?: string;
  scholar?: string;
}

// 2. 在卡片中顯示
import { Linkedin, Github } from 'lucide-react';

<div className="flex items-center gap-3">
  {member.linkedin && (
    <a href={member.linkedin}>
      <Linkedin className="w-4 h-4" />
    </a>
  )}
  {member.github && (
    <a href={member.github}>
      <Github className="w-4 h-4" />
    </a>
  )}
</div>
```

### **添加成員詳細頁面**

```tsx
// 使用 React Router 或 Modal
const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

<motion.div
  onClick={() => setSelectedMember(member)}
  className="cursor-pointer"
>
  {/* 卡片內容 */}
</motion.div>

{selectedMember && (
  <MemberDetailModal 
    member={selectedMember} 
    onClose={() => setSelectedMember(null)}
  />
)}
```

### **添加成員搜尋/篩選**

```tsx
const [filter, setFilter] = useState<string>('all');

const filteredMembers = teamMembers.filter(member => {
  if (filter === 'all') return true;
  return member.role === filter;
});

<select onChange={(e) => setFilter(e.target.value)}>
  <option value="all">全部成員</option>
  <option value="PhD Student">博士生</option>
  <option value="Master Student">碩士生</option>
</select>
```

---

## 🐛 常見問題

### **Q: 如何禁用自動滑動？**
```tsx
// 註釋掉第 91-94 行
// useEffect(() => {
//   const interval = setInterval(nextSlide, 4000);
//   return () => clearInterval(interval);
// }, [nextSlide]);
```

### **Q: 如何更換成員照片？**
使用 Unsplash 或自己的圖片：
```tsx
// 方法 1：本地圖片
import memberPhoto from './assets/member1.jpg';
image: memberPhoto,

// 方法 2：外部 URL
image: 'https://example.com/photo.jpg',
```

### **Q: 卡片重疊順序如何調整？**
```tsx
// 第 449 行
zIndex: visibleCards - index,  // 左側在上
// 改為：
zIndex: index,  // 右側在上
```

### **Q: 如何在移動端顯示教授照片？**
```tsx
// 移除 md:flex-row，改為始終直向
<div className="p-8 flex flex-col gap-6 items-center">
```

### **Q: 如何添加成員加入日期？**
```tsx
// 1. 擴展介面
interface TeamMember {
  // ...
  joinDate?: string;
}

// 2. 顯示在卡片中
<p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>
  加入日期：{member.joinDate}
</p>
```

---

## 📊 性能優化

### **已實施的優化**
```
✅ AnimatePresence mode="popLayout" 避免佈局跳動
✅ useCallback 防止不必要的重新渲染
✅ 圖片懶加載（ImageWithFallback）
✅ 響應式卡片數量調整
✅ GPU 加速動畫（transform/opacity）
```

### **進一步優化建議**
```tsx
// 1. 虛擬化長列表（如果成員超過 20 人）
import { useVirtual } from 'react-virtual';

// 2. 圖片預加載
useEffect(() => {
  teamMembers.forEach(member => {
    const img = new Image();
    img.src = member.image;
  });
}, []);

// 3. 降低移動端動畫複雜度
const animationDuration = isMobile ? 0.3 : 0.5;
```

---

## 🎯 使用場景

### **適合展示：**
```
✅ 實驗室團隊成員
✅ 研究小組陣容
✅ 學術機構人員
✅ 公司團隊介紹
✅ 專案協作成員
```

### **內容建議：**
```
📝 教授介紹：80-150 字
📝 成員介紹：40-80 字
📝 專長標籤：2-5 個
📸 照片尺寸：建議 800×1000（4:5）
📧 提供聯絡方式增加互動性
```

---

## ✨ 與參考圖片的對比

### **相同設計元素**
```
✅ 上方大卡片 + 下方小卡片佈局
✅ 左側文字 + 右側卡片
✅ 卡片滑動展示
✅ 導航控制按鈕
✅ 清晰的視覺層次
```

### **增強功能**
```
⭐ 教授卡片特殊發光效果
⭐ 自動滑動系統
⭐ 響應式卡片數量
⭐ 流暢的 Spring 動畫
⭐ 玻璃擬態設計語言
⭐ 懸停互動細節
⭐ 統計數據展示
```

---

## 📈 擴展建議

### **未來可添加功能**
```
💡 成員詳細資料彈窗
💡 研究成果連結
💡 發表論文列表
💡 個人頁面跳轉
💡 成員分組篩選
💡 搜尋功能
💡 成員相冊展示
💡 視訊介紹嵌入
```

---

## ✅ 總結

這個團隊成員輪播組件完美結合了：

**視覺設計**  
✅ 參考圖片的雙層卡片設計  
✅ 教授特殊突顯處理  
✅ 極簡高級質感  

**動畫效果**  
✅ 12+ 個流暢動畫  
✅ 自動滑動系統  
✅ 懸停互動細節  

**用戶體驗**  
✅ 清晰的視覺層次  
✅ 響應式適配  
✅ 手動/自動控制  

**資訊架構**  
✅ 完整成員資訊  
✅ 專長標籤系統  
✅ 聯絡方式整合  

---

**版本**: 1.0.0  
**創建日期**: 2025-01-18  
**參考設計**: 樂齡生活團隊展示  
**相容性**: FAIM Lab Website
