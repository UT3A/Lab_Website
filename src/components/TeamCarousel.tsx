import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Mail, X } from 'lucide-react'; 
import { ImageWithFallback } from './figma/ImageWithFallback';


interface TeamMember {
  id: number;
  name: string;
  nameEn: string;
  title: string;
  role: string;
  image: string;
  email?: string;
  expertise: string[];
  description: string;
}

// 教授資料
const professor: TeamMember = {
  id: 0,
  name: '鄭麗珍 教授',
  nameEn: 'Prof. Cheng',
  title: '實驗室主持人',
  role: 'Principal Investigator',
  image: 'src/img/teacher.jpg',
  email: 'jessicacheng@ntut.edu.tw',
  expertise: ['機器學習與數據分析', '數位金融', '智慧行銷', '社群運算', '企業智慧'],
  description: '專注於人工智慧技術應用於財務或是行銷與管理領域,成立目的訓練學生成為資料科學家。',
};

// 團隊成員資料
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: '陳博士',
    nameEn: 'Dr. Chen',
    title: '博士後研究員',
    role: 'Postdoctoral Researcher',
    image: 'https://images.unsplash.com/photo-1644335364661-e83f9eca34f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaGVyJTIwbGFib3JhdG9yeSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc4MjcxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'chen@faim.edu.tw',
    expertise: ['機器學習與數據分析'],
    description: '機器學習與數據分析',
  },
  {
    id: 2,
    name: '李研究員',
    nameEn: 'Lee',
    title: '博士生',
    role: 'PhD Student',
    image: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhc2lhbiUyMHNjaWVudGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc4MjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'lee@faim.edu.tw',
    expertise: ['數位金融'],
    description: '數位金融',
  },
  {
    id: 3,
    name: '張同學',
    nameEn: 'Chang',
    title: '碩士生',
    role: 'Master Student',
    image: 'https://images.unsplash.com/photo-1758685848368-7ff986985e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdHVkZW50JTIwcmVzZWFyY2hlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc4MjcxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    expertise: ['智慧行銷'],
    description: '智慧行銷',
  },
  {
    id: 4,
    name: '林同學',
    nameEn: 'Lin',
    title: '碩士生',
    role: 'Master Student',
    image: 'https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx5b3VuZyUyMHNjaWVudGlzdCUyMHRlYW18ZW58MXx8fHwxNzYwNzgyNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    expertise: ['社群運算'],
    description: '社群運算',
  },
  {
    id: 5,
    name: '黃同學',
    nameEn: 'Huang',
    title: '碩士生',
    role: 'Master Student',
    image: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxncmFkdWF0ZSUyMHN0dWRlbnQlMjBzY2llbmNlfGVufDF8fHx8MTc2MDc4MjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    expertise: ['企業智慧'],
    description: '企業智慧',
  },
  {
    id: 6,
    name: '呂同學',
    nameEn: 'Lu',
    title: '碩士生',
    role: 'Master Student',
    image: 'img/114/114EP8002_呂芯穎.jpg',
    expertise: ['前端設計', 'Python', '系統分析'],
    description: `我畢業於中原大學資管系，對大數據和人工智慧有興趣，也有做過相關專題。
大學時比較擅長系統分析，平常的興趣是攝影、運動、拼樂高、看貓咪吃飯。
如果找不到人去寵物展可以找我一起去！！`,
  },
];

// 模態框組件 (根據圖片重新設計樣式)
interface MemberDetailModalProps {
  member: TeamMember;
  onClose: () => void;
}

const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ member, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // 背景使用柔和的暗色半透明，覆蓋原來的藍色背景
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose} 
    >
      <motion.div
        initial={{ y: 50, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: -50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        // 模態框主體：淺色背景，圓角，陰影
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        style={{
            minHeight: '400px', // 確保足夠高度
            width:'1000px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            backgroundColor: 'white',
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* 關閉按鈕 - 放在右上角，白色背景下使用深色圖標 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors p-1"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          
          {/* 左側：圖片與基本資訊 (淺色背景) */}
          <div className="w-full md:w-1/3 p-6 flex flex-col items-center bg-white border-r border-slate-100/50">
            
            {/* 圖片 - 矩形圓角 */}
            <div className="rounded-lg overflow-hidden mb-4" 
            style={{
              width: '100%',
              height: 'auto', 
              aspectRatio: '1 / 1',
              maxHeight: '384px', 
              maxWidth: '384px',
              margin: '0 auto 1rem',
              }}
>
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* 姓名 */}
            <h3 className="font-semibold mt-2"
              style={{ color: 'white', fontSize: '30px'}}
              >
              {member.name}
            </h3>
            
            {/* 角色/職位 */}
            <p className="text-base text-slate-500 mb-4"
            style={{ color: 'white' }}
            >
              {member.title || member.role} 
            </p>
            
            {/* 專業技能 Tags */}
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {member.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: '#E0F7FA', // 淺青色背景
                    color: '#00798B',       // 深青色文字
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* 右側：詳細介紹與聯絡方式 (白色背景) */}
          <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
            
            <div className="space-y-6">
                {/* 標題：研究與簡介 */}
                <h4 className="text-xl font-medium text-slate-800 pb-2 border-b border-slate-200">
                  研究與簡介
                </h4>
                
                {/* 詳細描述 */}
                <p
                  className="text-slate-700 text-base leading-relaxed"
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {member.description}
                </p>
            </div>


            {/* 底部：近期成果 / 聯絡方式 */}
            {member.email && (
                <div className="pt-6 border-t border-slate-200 mt-6">
                    <h4 className="text-lg font-medium text-slate-800 mb-3">
                        近期成果
                    </h4>
                    <ul className='list-disc list-inside space-y-2 text-slate-600 text-sm'>
                        {/* 這裡我們將聯絡信箱作為一個項目顯示，如同圖中所示 */}
                        <li className='flex items-start'>
                            <span className="inline-block mr-2">
                                {/* MAIL : T114EP8002@ntut.org.tw */}
                                MAIL : {member.email}
                            </span>
                        </li>
                        {/* 您可以在這裡新增更多項目，例如近期發表的論文或專題 */}
                    </ul>
                </div>
            )}
            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  }, []);

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // 響應式調整可見卡片數量
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 獲取可見的成員卡片
  const getVisibleMembers = () => {
    const members = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      members.push(teamMembers[index]);
    }
    return members;
  };

  // 點擊卡片處理函數
  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  // 關閉模態框處理函數
  const closeModal = () => {
    setSelectedMember(null);
  };


  return (
    <section id="team" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text Content & Controls */}
          <div className="space-y-8 lg:sticky lg:top-32">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                <span
                  className="text-cyan-400 tracking-widest"
                  style={{ fontSize: '11px', letterSpacing: '0.2em' }}
                >
                  OUR TEAM
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h2
                className="text-white"
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 200,
                  lineHeight: 1.2,
                  letterSpacing: '-1px',
                }}
              >
                團隊成員
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 300,
                  color: '#01579B',
                  lineHeight: 1.8,
                }}
              >
                我們是一群充滿熱情的研究者，致力於將各種深度學習、人工智慧的技術應用在解決各種產業實務問題上。
                在這裡，團隊合作與創新思維是我們的核心價值。
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: '1', label: '教授' },
                { number: '1', label: '博士生' },
                { number: '10+', label: '碩士生' },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div
                    style={{
                      fontSize: '42px',
                      fontWeight: 200,
                      color: '#3b82ebff',
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: '#01579B',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 pt-8"
            >
              <motion.button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  borderColor: 'rgba(14, 165, 233, 0.5)',
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  borderColor: 'rgba(14, 165, 233, 0.5)',
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.button>

              <div className="ml-4 flex items-center gap-2">
                {teamMembers.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: index === currentIndex ? '24px' : '6px',
                        height: '6px',
                        background:
                          index === currentIndex
                            ? 'rgba(14, 165, 233, 1)'
                            : 'rgba(255, 255, 255, 0.2)',
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Team Cards */}
          <div className="relative">
            {/* Professor Card - Top */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.05))',
                  border: '1px solid rgba(14, 165, 233, 0.2)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="p-8 flex flex-col md:flex-row gap-6 items-center">
                  {/* Professor Image */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="w-32 h-32 rounded-2xl overflow-hidden"
                      style={{
                        border: '3px solid rgba(14, 165, 233, 0.5)',
                        boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)',
                      }}
                    >
                      <ImageWithFallback
                        src={professor.image}
                        alt={professor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2), transparent)',
                        filter: 'blur(20px)',
                        zIndex: -1,
                      }}
                    />
                  </motion.div>

                  {/* Professor Info */}
                  <div className="flex-1 space-y-3 text-center md:text-left">
                    <div>
                      <h3
                        style={{
                          fontSize: '28px',
                          fontWeight: 300,
                          color: '#0277BD',
                          marginBottom: '4px',
                        }}
                      >
                        {professor.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'rgba(14, 165, 233, 0.8)',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {professor.role}
                      </p>
                    </div>

                    <p
                      style={{
                        fontSize: '13px',
                        color: '#0277BD',
                        lineHeight: 1.7,
                      }}
                    >
                      {professor.description}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {professor.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            background: 'rgba(255, 255, 255, 0.64)',
                            color: '#0277BD',
                            border: '1px solid rgba(14, 165, 233, 0.3)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Contact */}
                    {professor.email && (
                      <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
                        <a
                          href={`mailto:${professor.email}`}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          style={{ fontSize: '12px' }}
                        >
                          <Mail className="w-4 h-4" />
                          聯絡信箱
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Members Cards - Sliding */}
            <div className="relative h-[400px] md:h-[450px]">
              <AnimatePresence mode="popLayout">
                {getVisibleMembers().map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="absolute cursor-pointer" 
                    onClick={() => handleCardClick(member)} 
                    style={{
                      left: `${index * (100 / visibleCards)}%`,
                      width: `${95 / visibleCards}%`,
                      zIndex: visibleCards - index,
                    }}
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                      },
                    }}
                    exit={{ opacity: 0, x: -100, scale: 0.9 }}
                    whileHover={{
                      scale: 1.05,
                      zIndex: 999,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div
                      className="rounded-xl overflow-hidden h-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {/* Member Image */}
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(180deg, transparent 0%, rgba(2, 6, 23, 0.9) 100%)',
                          }}
                        />
                      </div>

                      {/* Member Info */}
                      <div className="p-6 space-y-3">
                        <div>
                          <h4
                            style={{
                              fontSize: '20px',
                              fontWeight: 400,
                              color: '#0277bd',
                            }}
                          >
                            {member.name}
                          </h4>
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'rgba(173, 0, 0, 1)',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {member.role}
                          </p>
                        </div>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 rounded text-xs"
                              style={{
                                background: '#034E7C',
                                color: '#E0EEF7',
                                fontSize: '10px',
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* 這裡縮短顯示描述，引導用戶點擊 */}
                        <p
                          style={{
                            fontSize: '12px',
                            color: '#01579B',
                            lineHeight: 1.6,
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 2, 
                            WebkitBoxOrient: 'vertical',
                          }}
                          title={member.description} 
                        >
                          {member.description}
                        </p>
                        <p className='text-cyan-400 text-xs mt-1'>
                            ...點擊查看詳情
                        </p>

                        {/* Contact Icon */}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            onClick={(e) => e.stopPropagation()} 
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors pt-2"
                            style={{ fontSize: '11px' }}
                          >
                            <Mail className="w-3 h-3" />
                            聯絡
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* 詳細資料模態框 (新增) */}
      <AnimatePresence>
        {selectedMember && (
          <MemberDetailModal member={selectedMember} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}