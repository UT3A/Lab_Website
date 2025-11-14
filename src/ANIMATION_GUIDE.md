# 🎬 動畫組件完整指南

## 📋 目錄

1. [按鈕動畫](#按鈕動畫)
2. [卡片動畫](#卡片動畫)
3. [載入動畫](#載入動畫)
4. [彈窗與面板](#彈窗與面板)
5. [輪播組件](#輪播組件)
6. [數據視覺化](#數據視覺化)
7. [使用範例](#使用範例)

---

## 🔘 按鈕動畫

### AnimatedButton

功能齊全的動畫按鈕組件，支持多種變體和狀態。

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost' - 按鈕樣式
- `size`: 'sm' | 'md' | 'lg' - 按鈕大小
- `disabled`: boolean - 禁用狀態
- `loading`: boolean - 載入狀態
- `icon`: ReactNode - 自定義圖標
- `onClick`: () => void - 點擊事件

**特效:**
- ✨ 懸停縮放效果 (scale 1.05)
- ✨ 點擊回饋 (scale 0.95)
- ✨ 波紋擴散效果
- ✨ 閃光動畫 (shimmer effect)
- ✨ 發光光暈
- ✨ 箭頭動畫

**使用範例:**
```tsx
import { AnimatedButton } from './components/AnimatedButton';

// 主要按鈕
<AnimatedButton variant="primary" onClick={handleClick}>
  立即開始
</AnimatedButton>

// 次要按鈕
<AnimatedButton variant="secondary" size="lg">
  了解更多
</AnimatedButton>

// 載入狀態
<AnimatedButton loading={isLoading}>
  提交中...
</AnimatedButton>

// 禁用狀態
<AnimatedButton disabled>
  已完成
</AnimatedButton>
```

### AnimatedIconButton

圖標按鈕，帶有旋轉和縮放效果。

**使用範例:**
```tsx
import { Play } from 'lucide-react';

<AnimatedIconButton 
  icon={<Play className="w-5 h-5" />}
  variant="primary"
  onClick={handlePlay}
/>
```

### AnimatedTextButton

文字連結按鈕，帶有底線動畫效果。

**使用範例:**
```tsx
<AnimatedTextButton onClick={handleLearnMore}>
  了解更多 →
</AnimatedTextButton>
```

---

## 🎴 卡片動畫

### AnimatedCard

通用動畫卡片組件，支持滾動觸發和懸停效果。

**Props:**
- `delay`: number - 進場延遲（秒）
- `hoverScale`: number - 懸停縮放比例（默認 1.02）
- `animateOnScroll`: boolean - 是否啟用滾動觸發動畫

**特效:**
- ✨ 滾動進場動畫 (opacity 0 → 1, translateY 50 → 0)
- ✨ 懸停上浮 (translateY -8px)
- ✨ 懸停縮放
- ✨ 漸變光暈效果
- ✨ 角落發光

**使用範例:**
```tsx
<AnimatedCard delay={0.2} hoverScale={1.05}>
  <div className="p-8 bg-slate-900/50 rounded-3xl">
    <h3>卡片標題</h3>
    <p>卡片內容...</p>
  </div>
</AnimatedCard>
```

### FlipCard

翻轉卡片組件，點擊時 180° 翻轉顯示背面內容。

**使用範例:**
```tsx
<FlipCard
  frontContent={
    <div className="p-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
      前面內容
    </div>
  }
  backContent={
    <div className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-600/20">
      背面內容
    </div>
  }
/>
```

### RevealCard

方向性進場卡片，支持從四個方向進場。

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right' - 進場方向
- `delay`: number - 延遲時間

**使用範例:**
```tsx
<RevealCard direction="left" delay={0.3}>
  <div>從左側滑入的內容</div>
</RevealCard>
```

### StaggeredCards

錯開動畫容器，自動為子元素添加遞增延遲。

**使用範例:**
```tsx
<StaggeredCards className="grid grid-cols-3 gap-6">
  <Card>卡片 1</Card>
  <Card>卡片 2</Card>
  <Card>卡片 3</Card>
</StaggeredCards>
```

---

## ⏳ 載入動畫

### LoadingAnimation

跳動點載入動畫。

```tsx
<LoadingAnimation />
```

### SpinnerAnimation

旋轉圓圈載入動畫。

```tsx
<SpinnerAnimation />
```

### PulseAnimation

脈衝呼吸效果。

```tsx
<PulseAnimation />
```

### ProgressAnimation

進度條動畫。

**Props:**
- `progress`: number (0-100) - 進度百分比

```tsx
<ProgressAnimation progress={65} />
```

### SkeletonLoader

骨架屏載入效果。

```tsx
<SkeletonLoader />
```

---

## 🪟 彈窗與面板

### Modal

彈性動畫彈窗組件。

**Props:**
- `isOpen`: boolean - 是否開啟
- `onClose`: () => void - 關閉回調
- `title`: string - 標題
- `size`: 'sm' | 'md' | 'lg' | 'xl' - 尺寸

**特效:**
- ✨ 背景模糊效果
- ✨ 彈性進場動畫 (elastic ease out)
- ✨ 縮放 + 位移
- ✨ 關閉按鈕旋轉動畫

**使用範例:**
```tsx
const [isOpen, setIsOpen] = useState(false);

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="彈窗標題"
  size="md"
>
  <p>彈窗內容...</p>
  <AnimatedButton onClick={() => setIsOpen(false)}>
    關閉
  </AnimatedButton>
</Modal>
```

### SlidePanel

側邊滑入面板。

**Props:**
- `side`: 'left' | 'right' - 滑入方向

```tsx
<SlidePanel 
  isOpen={isPanelOpen} 
  onClose={() => setPanelOpen(false)}
  side="right"
>
  <div>面板內容...</div>
</SlidePanel>
```

### Toast

通知提示組件。

**Props:**
- `type`: 'success' | 'error' | 'warning' | 'info'
- `message`: string

```tsx
<Toast
  isVisible={showToast}
  message="操作成功！"
  type="success"
  onClose={() => setShowToast(false)}
/>
```

---

## 🎠 輪播組件

### Carousel

全功能輪播組件，支持自動播放、拖拽、指示器。

**Props:**
- `items`: ReactNode[] - 輪播項目陣列
- `autoPlay`: boolean - 是否自動播放
- `interval`: number - 自動播放間隔（毫秒）
- `showControls`: boolean - 顯示左右控制按鈕
- `showIndicators`: boolean - 顯示底部指示器

**特效:**
- ✨ 滑動切換動畫
- ✨ 拖拽手勢支持
- ✨ 進度條顯示
- ✨ 彈簧物理效果

**使用範例:**
```tsx
const slides = [
  <div key="1">Slide 1</div>,
  <div key="2">Slide 2</div>,
  <div key="3">Slide 3</div>,
];

<Carousel 
  items={slides}
  autoPlay={true}
  interval={5000}
  showControls={true}
  showIndicators={true}
/>
```

### Carousel3D

3D 旋轉輪播效果。

```tsx
<Carousel3D items={items} />
```

---

## 📊 數據視覺化

### AnimatedBarChart

動畫長條圖。

**Props:**
- `data`: Array<{label: string, value: number, color?: string}>
- `maxValue`: number - 最大值（可選）
- `animated`: boolean - 是否啟用動畫

**使用範例:**
```tsx
const chartData = [
  { label: 'AI 研究', value: 85, color: 'bg-gradient-to-r from-cyan-400 to-blue-600' },
  { label: '金融科技', value: 72, color: 'bg-gradient-to-r from-blue-500 to-purple-600' },
  { label: '數據科學', value: 68, color: 'bg-gradient-to-r from-purple-500 to-pink-600' },
];

<AnimatedBarChart data={chartData} animated={true} />
```

**特效:**
- ✨ 長條寬度動畫生長
- ✨ 錯開延遲效果
- ✨ 數字淡入
- ✨ 百分比顯示

### AnimatedCounter

數字增長動畫。

**Props:**
- `value`: number - 目標數值
- `duration`: number - 動畫持續時間（秒）
- `suffix`: string - 後綴（如 '+', '%'）
- `prefix`: string - 前綴（如 '$'）

```tsx
<AnimatedCounter value={1250} duration={2} suffix="+" />
// 輸出：0 → 1250+
```

### AnimatedProgressRing

環形進度條。

**Props:**
- `progress`: number (0-100)
- `size`: number - 尺寸（px）
- `strokeWidth`: number - 線條寬度
- `color`: string - 顏色

```tsx
<AnimatedProgressRing 
  progress={75} 
  size={120}
  strokeWidth={8}
  color="#22d3ee"
/>
```

**特效:**
- ✨ 圓環描邊動畫
- ✨ 中心數字增長
- ✨ 漸變色支持

### AnimatedLineChart

動畫折線圖。

**Props:**
- `data`: number[] - 數據陣列
- `height`: number - 圖表高度

```tsx
const lineData = [20, 35, 28, 45, 38, 52, 48, 65];

<AnimatedLineChart data={lineData} height={200} />
```

**特效:**
- ✨ 路徑描繪動畫 (pathLength)
- ✨ 面積漸變填充
- ✨ 數據點錯開出現
- ✨ 漸變色線條

### StatCard

統計數據卡片。

**Props:**
- `value`: number - 數值
- `label`: string - 標籤
- `change`: number - 變化百分比
- `icon`: ReactNode - 圖標
- `delay`: number - 延遲

```tsx
<StatCard
  value={1250}
  label="總用戶數"
  change={12.5}
  icon={<Users className="w-6 h-6" />}
  delay={0.1}
/>
```

---

## 🎯 使用範例

### 完整頁面範例

```tsx
import { AnimatedButton } from './components/AnimatedButton';
import { AnimatedCard, StaggeredCards } from './components/AnimatedCard';
import { AnimatedBarChart, StatCard } from './components/DataVisualization';
import { Modal } from './components/Modal';
import { Carousel } from './components/Carousel';

export function ExamplePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-20 py-20">
      {/* Hero Section with Animated Button */}
      <section className="text-center space-y-8">
        <h1 className="text-6xl">歡迎來到我們的網站</h1>
        <AnimatedButton 
          variant="primary" 
          size="lg"
          onClick={() => setModalOpen(true)}
        >
          立即開始
        </AnimatedButton>
      </section>

      {/* Staggered Cards */}
      <section>
        <StaggeredCards className="grid grid-cols-3 gap-6">
          <AnimatedCard>
            <div className="p-8 bg-slate-900 rounded-2xl">
              <h3>特色 1</h3>
              <p>描述...</p>
            </div>
          </AnimatedCard>
          <AnimatedCard>
            <div className="p-8 bg-slate-900 rounded-2xl">
              <h3>特色 2</h3>
              <p>描述...</p>
            </div>
          </AnimatedCard>
          <AnimatedCard>
            <div className="p-8 bg-slate-900 rounded-2xl">
              <h3>特色 3</h3>
              <p>描述...</p>
            </div>
          </AnimatedCard>
        </StaggeredCards>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-4 gap-6">
          <StatCard value={1250} label="用戶" change={12.5} delay={0} />
          <StatCard value={85} label="完成率" change={5.2} delay={0.1} />
          <StatCard value={342} label="項目" change={-2.1} delay={0.2} />
          <StatCard value={98} label="滿意度" change={8.3} delay={0.3} />
        </div>
      </section>

      {/* Data Visualization */}
      <section>
        <AnimatedBarChart
          data={[
            { label: '項目 A', value: 85 },
            { label: '項目 B', value: 72 },
            { label: '項目 C', value: 68 },
          ]}
        />
      </section>

      {/* Carousel */}
      <section>
        <Carousel
          items={[
            <div key="1">輪播內容 1</div>,
            <div key="2">輪播內容 2</div>,
            <div key="3">輪播內容 3</div>,
          ]}
          autoPlay
          interval={5000}
        />
      </section>

      {/* Modal */}
      <Modal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="歡迎"
        size="md"
      >
        <p>感謝您的訪問！</p>
        <AnimatedButton onClick={() => setModalOpen(false)}>
          關閉
        </AnimatedButton>
      </Modal>
    </div>
  );
}
```

---

## 🎨 動畫參數調整

### 修改動畫持續時間

大部分組件使用 Motion 的 `transition` prop：

```tsx
<motion.div
  transition={{ duration: 0.6 }} // 修改持續時間
>
```

### 修改緩動函數

```tsx
<motion.div
  transition={{ 
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier
  }}
>
```

常用緩動：
- `ease`: 標準緩動
- `easeIn`: 加速
- `easeOut`: 減速
- `easeInOut`: 先加速後減速
- `[0.34, 1.56, 0.64, 1]`: 彈性效果

### 自定義動畫變體

```tsx
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
>
```

---

## 📱 響應式注意事項

所有動畫組件都支持響應式設計：

1. **移動端優化**: 在小屏幕上自動調整動畫強度
2. **性能優化**: 使用 GPU 加速的屬性 (transform, opacity)
3. **減少動態**: 尊重用戶的 `prefers-reduced-motion` 設置

```tsx
// 檢測用戶偏好
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 條件性應用動畫
<motion.div
  animate={prefersReducedMotion ? {} : { scale: 1.1 }}
>
```

---

## ⚡ 性能優化建議

1. **使用 `will-change`**: 提示瀏覽器優化
```tsx
<motion.div style={{ willChange: 'transform' }}>
```

2. **避免大量同時動畫**: 使用錯開延遲
```tsx
{items.map((item, i) => (
  <motion.div key={i} transition={{ delay: i * 0.1 }}>
))}
```

3. **使用 `useInView`**: 僅在可見時觸發動畫
```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<motion.div 
  ref={ref}
  animate={isInView ? { opacity: 1 } : {}}
>
```

4. **優先使用 transform 和 opacity**: 避免觸發 reflow
```tsx
// ✅ 好
<motion.div animate={{ x: 100, opacity: 0.5 }} />

// ❌ 避免
<motion.div animate={{ left: 100, width: 200 }} />
```

---

## 🎓 進階技巧

### 1. 連鎖動畫

```tsx
<motion.div
  animate={{ x: 100 }}
  transition={{ delay: 0 }}
  onAnimationComplete={() => {
    // 第一個動畫完成後觸發第二個
  }}
/>
```

### 2. 手勢控制

```tsx
<motion.div
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
  dragElastic={0.5}
  onDragEnd={(event, info) => {
    if (info.offset.x > 100) {
      // 向右拖拽超過 100px
    }
  }}
/>
```

### 3. SVG 動畫

```tsx
<motion.path
  d="M 0 0 L 100 100"
  stroke="#22d3ee"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 2 }}
/>
```

### 4. 佈局動畫

```tsx
<motion.div layout>
  {items.map(item => (
    <motion.div key={item.id} layout>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 📚 參考資源

- [Motion Documentation](https://motion.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Easing Functions](https://easings.net)
- [Cubic Bezier Generator](https://cubic-bezier.com)

---

## 🐛 疑難排解

### 動畫不流暢

1. 檢查是否使用了非 GPU 加速的屬性
2. 減少同時動畫的元素數量
3. 使用 `will-change` 提示

### 動畫未觸發

1. 確認組件已正確 import
2. 檢查 `isInView` 狀態
3. 驗證 `initial` 和 `animate` props

### 記憶體洩漏

1. 確保清理 event listeners
2. 在組件卸載時停止動畫
3. 使用 `useEffect` cleanup function

---

**版本**: 1.0.0  
**最後更新**: 2025-01-18  
**作者**: FAIM Lab Team
