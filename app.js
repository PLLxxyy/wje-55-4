// ==================== 情绪词库 ====================
const EMOTIONS = [
  { name: '孤独', color: '#6B7280', category: '哀伤' },
  { name: '雀跃', color: '#F59E0B', category: '喜悦' },
  { name: '慵懒', color: '#A78BFA', category: '平静' },
  { name: '惆怅', color: '#6366F1', category: '哀伤' },
  { name: '狂喜', color: '#EF4444', category: '喜悦' },
  { name: '淡然', color: '#10B981', category: '平静' },
  { name: '思念', color: '#EC4899', category: '思念' },
  { name: '愤怒', color: '#DC2626', category: '愤怒' },
  { name: '宁静', color: '#06B6D4', category: '平静' },
  { name: '忧伤', color: '#8B5CF6', category: '哀伤' },
  { name: '欣喜', color: '#14B8A6', category: '喜悦' },
  { name: '焦虑', color: '#F97316', category: '焦虑' },
];

// ==================== 俳句词库（按音节和情绪分类）====================
// 5音节词库（第一句）
const SYLLABLES_5 = {
  nature: [
    '樱花随风落', '月色浸寒窗', '晨露沾草尖', '秋风扫落叶',
    '春水向东流', '晚霞染红天', '繁星点点闪', '孤雁向南飞',
    '细雨润无声', '白雪覆青山', '蝉鸣夏日长', '霜落寒江静',
    '云深不知处', '潮起又潮落', '风轻云也淡', '月是故乡明',
    '空山新雨后', '清泉石上流', '大漠孤烟直', '长河落日圆'
  ],
  emotion: {
    '孤独': ['孤灯照清影', '独酌月光寒', '空房余旧味', '形影自相怜'],
    '雀跃': ['心头小鹿撞', '欢歌绕耳边', '笑靥如花开', '起舞弄清影'],
    '慵懒': ['日高犹未起', '闲卧听风声', '慢品一盏茶', '慵梳半帘卷'],
    '惆怅': ['举杯邀明月', '低眉思往事', '轻叹无人解', '泪眼问花飞'],
    '狂喜': ['把酒问青天', '欢喜不自禁', '心花怒放开', '快意写春秋'],
    '淡然': ['闲看云卷舒', '静听花开花', '一笑泯恩仇', '淡看世间事'],
    '思念': ['望月思故人', '千里共婵娟', '忆君心似水', '家书抵万金'],
    '愤怒': ['怒发冲冠时', '拍案向天笑', '恨不乘风去', '气贯长虹间'],
    '宁静': ['静坐听松涛', '心定如止水', '空山闻鸟语', '深院锁清秋'],
    '忧伤': ['黯然销魂处', '愁肠已百结', '泪洒青衫湿', '无言独上楼'],
    '欣喜': ['忽见柳暗花', '春风得意时', '喜上眉梢头', '乐在山水间'],
    '焦虑': ['辗转难入眠', '心乱如麻团', '坐立难自安', '愁云惨淡间']
  }
};

// 7音节词库（第二句）
const SYLLABLES_7 = {
  nature: [
    '小桥流水人家如画', '古道西风瘦马嘶鸣', '杨柳岸晓风残月冷',
    '梧桐更兼细雨绵绵', '春江潮水连海平阔', '海上明月共潮而生',
    '岁岁年年花开花落', '年年岁岁人各不同', '人生代代无穷已矣',
    '江月年年只望相似', '不知江月待何人归', '但见长江送水东流',
    '白云一片去悠悠哉', '青枫浦上不胜愁绪', '谁家今夜扁舟子游',
    '何处相思明月楼上', '可怜楼上月独徘徊', '应照离人妆镜台前',
    '玉户帘中卷不去矣', '捣衣砧上拂还来时'
  ],
  emotion: {
    '孤独': ['独在异乡为异客兮', '每逢佳节倍思亲友', '举杯消愁愁更愁矣', '抽刀断水水更自流'],
    '雀跃': ['春风得意马蹄疾疾', '一日看尽长安花开', '漫卷诗书喜欲狂矣', '青春作伴好还乡关'],
    '慵懒': ['云鬓花颜金步摇曳', '芙蓉帐暖春宵苦短', '春寒赐浴华清池边', '温泉水滑洗凝脂肤'],
    '惆怅': ['问君能有几多愁绪', '恰似一江春水向东', '此情无计可消除矣', '才下眉头却上心头'],
    '狂喜': ['仰天大笑出门去也', '我辈岂是蓬蒿之人', '天生我材必有用矣', '千金散尽还复而来'],
    '淡然': ['采菊东篱悠然见山', '心远地自偏安一隅', '不以物喜不以己悲', '先天下之忧而忧矣'],
    '思念': ['衣带渐宽终不悔矣', '为伊消得人憔悴损', '两情若是久长之时', '又岂在朝朝暮暮间'],
    '愤怒': ['怒发冲冠凭栏处兮', '潇潇雨歇抬望眼矣', '三十功名尘与土耳', '八千里路云和月兮'],
    '宁静': ['非淡泊无以明志矣', '非宁静无以致远兮', '静以修身俭以养德', '苟全性命于乱世兮'],
    '忧伤': ['寻寻觅觅冷冷清清', '凄凄惨惨戚戚然然', '乍暖还寒时候最难', '将息三杯两盏淡酒'],
    '欣喜': ['好雨知时节当春乃', '发生随风潜入夜矣', '润物细无声野径云', '俱黑江船火独明兮'],
    '焦虑': ['白发三千丈缘愁似', '个长不知明镜里兮', '何处得秋霜抽刀断', '水水更流举杯消愁']
  }
};

// 5音节词库（第三句）
const SYLLABLES_5_END = {
  nature: [
    '花落知多少', '天地一沙鸥', '明月照高楼', '相思枫叶丹',
    '岁月催人老', '青春不再来', '生死两茫茫', '千里共婵娟',
    '何处是归程', '风雪夜归人', '鸟鸣山更幽', '落日故人情',
    '浮云游子意', '海内存知己', '天涯若比邻', '欲穷千里目',
    '更上一层楼', '会当凌绝顶', '一览众山小', '明月松间照'
  ],
  emotion: {
    '孤独': ['寂寞无人问', '寒夜独自凉', '孤影自相惜', '梦醒泪满巾'],
    '雀跃': ['乐在不言中', '欢歌笑语盈', '心花怒放时', '快意人生事'],
    '慵懒': ['梦里不知身', '一晌贪欢醉', '悠闲度年华', '岁月静好哉'],
    '惆怅': ['无语泪先流', '往事不堪首', '浮生若梦兮', '聚散两依依'],
    '狂喜': ['今日乐相乐', '别后莫相忘', '快意须尽欢', '莫使金樽空'],
    '淡然': ['心远地自偏', '悠然见南山', '岁月本悠长', '心安即是归'],
    '思念': ['思君令人老', '岁月忽已晚', '相见时难别', '亦难东风残'],
    '愤怒': ['恨不生双翅', '直上九重天', '壮志饥餐胡', '虏肉笑谈渴'],
    '宁静': ['云淡风轻近', '午天傍花随', '柳过前川时', '人不识余心'],
    '忧伤': ['愁肠已寸断', '往事已成空', '还如一梦中', '多情应笑我'],
    '欣喜': ['人间好时节', '花好月圆夜', '春风得意时', '喜气盈门楣'],
    '焦虑': ['心乱如丝麻', '辗转到天明', '何日是归期', '愁思渺茫茫']
  }
};

// ==================== 情绪图片提示词库 ====================
const IMAGE_PROMPTS = {
  '孤独': 'lonely serene landscape, misty mountains at dusk, solitary tree, ink wash painting style, muted colors, peaceful solitude atmosphere',
  '雀跃': 'joyful vibrant scene, cherry blossoms falling in spring breeze, golden sunlight, warm colors, butterflies dancing, cheerful atmosphere',
  '慵懒': 'lazy cozy afternoon, soft warm sunlight through curtains, gentle breeze, lavender and cream tones, peaceful relaxation mood',
  '惆怅': 'melancholic autumn scene, falling ginkgo leaves, misty lake at twilight, cool blue and purple tones, poetic sadness',
  '狂喜': 'triumphant sunrise over mountains, golden rays bursting through clouds, vibrant warm colors, majestic and uplifting',
  '淡然': 'zen garden with raked sand, bamboo grove, soft morning mist, minimalist composition, peaceful and meditative',
  '思念': 'full moon over calm lake, willow tree gently swaying, silver moonlight, dreamy and nostalgic atmosphere',
  '愤怒': 'dramatic storm clouds gathering, powerful ocean waves crashing, dark and intense colors, raw energy expression',
  '宁静': 'still forest at dawn, light filtering through trees, soft greens and blues, ethereal calm, peaceful sanctuary',
  '忧伤': 'gentle rain on window, dimly lit room, sad blue tones, melancholic reflection, poetic sorrow',
  '欣喜': 'sunrise over blossoming orchard, dewdrops glistening, fresh green and pink tones, hopeful and uplifting',
  '焦虑': 'turbulent sky at twilight, swirling clouds, restless energy, muted oranges and grays, tense and unsettled'
};

// 默认通用提示词
const DEFAULT_IMAGE_PROMPT = 'serene artistic landscape, poetic atmosphere, beautiful nature scene, soft lighting, elegant composition';

// ==================== 视觉风格定义 ====================
const STYLE_THEMES = {
  ink: {
    name: '水墨',
    overlay: 'linear-gradient(135deg, rgba(20,20,20,0.7) 0%, rgba(60,60,60,0.4) 100%)',
    textColor: '#F5F5F5',
    fontFamily: '"Noto Serif SC", "Songti SC", serif',
    shadow: '2px 2px 8px rgba(0,0,0,0.6)',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
  },
  warm: {
    name: '暖调',
    overlay: 'linear-gradient(135deg, rgba(139,69,19,0.6) 0%, rgba(255,140,0,0.3) 100%)',
    textColor: '#FFF8E7',
    fontFamily: '"Noto Serif SC", "Songti SC", serif',
    shadow: '2px 2px 10px rgba(139,69,19,0.7)',
    bg: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)'
  },
  cool: {
    name: '冷调',
    overlay: 'linear-gradient(135deg, rgba(25,25,112,0.6) 0%, rgba(64,224,208,0.3) 100%)',
    textColor: '#E6F7FF',
    fontFamily: '"Noto Serif SC", "Songti SC", serif',
    shadow: '2px 2px 10px rgba(25,25,112,0.7)',
    bg: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)'
  },
  vintage: {
    name: '复古',
    overlay: 'linear-gradient(135deg, rgba(101,67,33,0.65) 0%, rgba(184,134,11,0.35) 100%)',
    textColor: '#F5E6D3',
    fontFamily: '"Noto Serif SC", "Kaiti SC", serif',
    shadow: '2px 2px 12px rgba(101,67,33,0.8)',
    bg: 'linear-gradient(135deg, #c79081 0%, #dfa579 100%)'
  },
  minimal: {
    name: '极简',
    overlay: 'linear-gradient(135deg, rgba(245,245,245,0.85) 0%, rgba(230,230,230,0.7) 100%)',
    textColor: '#1a1a1a',
    fontFamily: '"Noto Sans SC", "PingFang SC", sans-serif',
    shadow: '1px 1px 6px rgba(0,0,0,0.15)',
    bg: 'linear-gradient(135deg, #fafafa 0%, #e8e8e8 100%)'
  }
};

// ==================== 状态管理 ====================
let currentEmotion = '';
let currentHaiku = { line1: '', line2: '', line3: '' };
let currentStyle = 'ink';
let currentImageUrl = '';
let favorites = JSON.parse(localStorage.getItem('haikuFavorites') || '[]');

// ==================== 工具函数 ====================
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function countSyllables(text) {
  return text.replace(/[^\u4e00-\u9fa5]/g, '').length;
}

function getEmotionCategory(emotion) {
  const found = EMOTIONS.find(e => e.name === emotion);
  return found ? found.category : null;
}

// ==================== 俳句生成 ====================
function generateHaiku(emotion) {
  let line1Options = SYLLABLES_5.nature.slice();
  let line2Options = SYLLABLES_7.nature.slice();
  let line3Options = SYLLABLES_5_END.nature.slice();
  
  if (SYLLABLES_5.emotion[emotion]) {
    line1Options = line1Options.concat(SYLLABLES_5.emotion[emotion]);
  }
  if (SYLLABLES_7.emotion[emotion]) {
    line2Options = line2Options.concat(SYLLABLES_7.emotion[emotion]);
  }
  if (SYLLABLES_5_END.emotion[emotion]) {
    line3Options = line3Options.concat(SYLLABLES_5_END.emotion[emotion]);
  }
  
  let line1, line2, line3;
  let attempts = 0;
  const maxAttempts = 20;
  
  do {
    line1 = getRandomItem(line1Options);
    line2 = getRandomItem(line2Options);
    line3 = getRandomItem(line3Options);
    attempts++;
  } while (
    (line1 === currentHaiku.line1 || line2 === currentHaiku.line2 || line3 === currentHaiku.line3) && 
    attempts < maxAttempts
  );
  
  currentHaiku = { line1, line2, line3 };
  return currentHaiku;
}

// ==================== 背景图片生成 ====================
function getBackgroundImageUrl(emotion, style) {
  const basePrompt = IMAGE_PROMPTS[emotion] || DEFAULT_IMAGE_PROMPT;
  const styleModifiers = {
    ink: 'ink wash painting, traditional Chinese art, sumi-e style,',
    warm: 'warm color palette, golden hour lighting, nostalgic photography,',
    cool: 'cool tones, cinematic lighting, atmospheric photography,',
    vintage: 'vintage film photography, faded colors, retro aesthetic,',
    minimal: 'minimalist composition, negative space, clean aesthetic,'
  };
  
  const fullPrompt = `${styleModifiers[style] || ''} ${basePrompt}`;
  const encodedPrompt = encodeURIComponent(fullPrompt);
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodedPrompt}&image_size=square_hd`;
}

// ==================== 情绪轮盘渲染 ====================
function renderEmotionWheel() {
  const segmentsGroup = document.getElementById('wheelSegments');
  segmentsGroup.innerHTML = '';
  
  const centerX = 150;
  const centerY = 150;
  const outerRadius = 140;
  const innerRadius = 45;
  const segmentAngle = (2 * Math.PI) / EMOTIONS.length;
  
  EMOTIONS.forEach((emotion, index) => {
    const startAngle = index * segmentAngle - Math.PI / 2;
    const endAngle = startAngle + segmentAngle;
    
    const x1 = centerX + innerRadius * Math.cos(startAngle);
    const y1 = centerY + innerRadius * Math.sin(startAngle);
    const x2 = centerX + outerRadius * Math.cos(startAngle);
    const y2 = centerY + outerRadius * Math.sin(startAngle);
    const x3 = centerX + outerRadius * Math.cos(endAngle);
    const y3 = centerY + outerRadius * Math.sin(endAngle);
    const x4 = centerX + innerRadius * Math.cos(endAngle);
    const y4 = centerY + innerRadius * Math.sin(endAngle);
    
    const largeArcFlag = segmentAngle > Math.PI ? 1 : 0;
    
    const pathData = `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1} Z`;
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('fill', emotion.color);
    path.setAttribute('data-emotion', emotion.name);
    path.setAttribute('class', 'wheel-segment');
    path.style.cursor = 'pointer';
    path.style.transition = 'all 0.3s ease';
    path.style.opacity = '0.85';
    
    path.addEventListener('mouseenter', () => {
      path.style.opacity = '1';
      path.style.filter = 'brightness(1.2)';
    });
    
    path.addEventListener('mouseleave', () => {
      path.style.opacity = '0.85';
      path.style.filter = 'none';
    });
    
    path.addEventListener('click', () => {
      selectEmotion(emotion.name);
    });
    
    segmentsGroup.appendChild(path);
    
    const midAngle = startAngle + segmentAngle / 2;
    const textRadius = (innerRadius + outerRadius) / 2;
    const textX = centerX + textRadius * Math.cos(midAngle);
    const textY = centerY + textRadius * Math.sin(midAngle);
    
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', textX);
    text.setAttribute('y', textY);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('fill', '#ffffff');
    text.setAttribute('font-size', '14');
    text.setAttribute('font-weight', '500');
    text.setAttribute('class', 'wheel-text');
    text.style.pointerEvents = 'none';
    text.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';
    text.textContent = emotion.name;
    
    segmentsGroup.appendChild(text);
  });
}

// ==================== 情绪选择 ====================
function selectEmotion(emotion) {
  currentEmotion = emotion;
  document.getElementById('emotionInput').value = emotion;
  document.getElementById('selectedEmotion').textContent = `${emotion} · 俳句`;
  generateAndDisplay();
}

// ==================== 生成并显示 ====================
function generateAndDisplay() {
  if (!currentEmotion) {
    alert('请先选择或输入一个情绪词');
    return;
  }
  
  const haiku = generateHaiku(currentEmotion);
  
  document.getElementById('line1').textContent = haiku.line1;
  document.getElementById('line2').textContent = haiku.line2;
  document.getElementById('line3').textContent = haiku.line3;
  
  updatePreview();
}

// ==================== 更新预览 ====================
function updatePreview() {
  const theme = STYLE_THEMES[currentStyle];
  
  document.getElementById('previewLine1').textContent = currentHaiku.line1 || '——';
  document.getElementById('previewLine2').textContent = currentHaiku.line2 || '——';
  document.getElementById('previewLine3').textContent = currentHaiku.line3 || '——';
  document.getElementById('previewEmotion').textContent = currentEmotion ? `「${currentEmotion}」` : '';
  
  const previewCard = document.getElementById('previewCard');
  const previewOverlay = document.getElementById('previewOverlay');
  const previewContent = document.querySelector('.preview-content');
  
  currentImageUrl = getBackgroundImageUrl(currentEmotion || '宁静', currentStyle);
  
  const previewBg = document.getElementById('previewBg');
  previewBg.style.backgroundImage = `url('${currentImageUrl}'), ${theme.bg}`;
  previewOverlay.style.background = theme.overlay;
  previewContent.style.color = theme.textColor;
  previewContent.style.fontFamily = theme.fontFamily;
  
  previewCard.style.boxShadow = theme.shadow;
  
  updateFavoriteButton();
}

// ==================== Canvas 下载 ====================
function downloadCard() {
  const canvas = document.getElementById('downloadCanvas');
  const ctx = canvas.getContext('2d');
  
  const width = 800;
  const height = 1000;
  canvas.width = width;
  canvas.height = height;
  
  const theme = STYLE_THEMES[currentStyle];
  
  const img = new Image();
  img.crossOrigin = 'anonymous';
  
  img.onload = function() {
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, width, height);
    
    if (img.complete && img.naturalWidth > 0) {
      ctx.globalAlpha = 0.7;
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = width / height;
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (imgAspect > canvasAspect) {
        drawHeight = height;
        drawWidth = height * imgAspect;
        offsetX = (width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = width;
        drawHeight = width / imgAspect;
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      }
      
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.globalAlpha = 1;
    }
    
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    const colorStops = theme.overlay.match(/rgba?\([^)]+\)/g) || ['rgba(0,0,0,0.7)', 'rgba(60,60,60,0.4)'];
    gradient.addColorStop(0, colorStops[0]);
    gradient.addColorStop(1, colorStops[1] || colorStops[0]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = theme.textColor;
    ctx.font = `400 42px ${theme.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    const centerY = height / 2;
    
    if (currentHaiku.line1) {
      ctx.fillText(currentHaiku.line1, width / 2, centerY - 100);
    }
    if (currentHaiku.line2) {
      ctx.fillText(currentHaiku.line2, width / 2, centerY);
    }
    if (currentHaiku.line3) {
      ctx.fillText(currentHaiku.line3, width / 2, centerY + 100);
    }
    
    if (currentEmotion) {
      ctx.shadowBlur = 4;
      ctx.font = `300 28px ${theme.fontFamily}`;
      ctx.globalAlpha = 0.9;
      ctx.fillText(`「${currentEmotion}」`, width / 2, centerY + 180);
    }
    
    ctx.globalAlpha = 0.6;
    ctx.font = '200 20px serif';
    ctx.fillText('俳句 · 五七五 · 一期一会', width / 2, height - 60);
    
    ctx.shadowColor = 'transparent';
    ctx.globalAlpha = 1;
    
    const link = document.createElement('a');
    link.download = `俳句_${currentEmotion || 'poem'}_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  
  img.onerror = function() {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    const bgColors = theme.bg.match(/#[a-fA-F0-9]{6}/g) || ['#1a1a2e', '#16213e'];
    gradient.addColorStop(0, bgColors[0]);
    gradient.addColorStop(1, bgColors[1] || bgColors[0]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    const overlayGradient = ctx.createLinearGradient(0, 0, width, height);
    const colorStops = theme.overlay.match(/rgba?\([^)]+\)/g) || ['rgba(0,0,0,0.7)', 'rgba(60,60,60,0.4)'];
    overlayGradient.addColorStop(0, colorStops[0]);
    overlayGradient.addColorStop(1, colorStops[1] || colorStops[0]);
    ctx.fillStyle = overlayGradient;
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = theme.textColor;
    ctx.font = `400 42px ${theme.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    const centerY = height / 2;
    if (currentHaiku.line1) ctx.fillText(currentHaiku.line1, width / 2, centerY - 100);
    if (currentHaiku.line2) ctx.fillText(currentHaiku.line2, width / 2, centerY);
    if (currentHaiku.line3) ctx.fillText(currentHaiku.line3, width / 2, centerY + 100);
    
    if (currentEmotion) {
      ctx.font = `300 28px ${theme.fontFamily}`;
      ctx.fillText(`「${currentEmotion}」`, width / 2, centerY + 180);
    }
    
    ctx.globalAlpha = 0.6;
    ctx.font = '200 20px serif';
    ctx.fillText('俳句 · 五七五 · 一期一会', width / 2, height - 60);
    
    const link = document.createElement('a');
    link.download = `俳句_${currentEmotion || 'poem'}_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  
  img.src = currentImageUrl;
}

// ==================== 收藏功能 ====================
function toggleFavorite() {
  if (!currentHaiku.line1) return;
  
  const favoriteItem = {
    id: Date.now(),
    emotion: currentEmotion,
    haiku: { ...currentHaiku },
    style: currentStyle,
    imageUrl: currentImageUrl,
    timestamp: new Date().toISOString()
  };
  
  const existingIndex = favorites.findIndex(f => 
    f.haiku.line1 === currentHaiku.line1 && 
    f.haiku.line2 === currentHaiku.line2 && 
    f.haiku.line3 === currentHaiku.line3
  );
  
  if (existingIndex >= 0) {
    favorites.splice(existingIndex, 1);
  } else {
    favorites.unshift(favoriteItem);
  }
  
  localStorage.setItem('haikuFavorites', JSON.stringify(favorites));
  updateFavoriteButton();
  renderFavorites();
}

function updateFavoriteButton() {
  const btn = document.getElementById('favoriteBtn');
  const isFavorited = favorites.some(f => 
    f.haiku.line1 === currentHaiku.line1 && 
    f.haiku.line2 === currentHaiku.line2 && 
    f.haiku.line3 === currentHaiku.line3 &&
    f.haiku.line1
  );
  
  btn.innerHTML = isFavorited ? '❤ 已收藏' : '♡ 收藏';
}

function renderFavorites() {
  const container = document.getElementById('favoritesList');
  
  if (favorites.length === 0) {
    container.innerHTML = '<p class="empty-favorites">还没有收藏的俳句</p>';
    return;
  }
  
  container.innerHTML = favorites.map(fav => `
    <div class="favorite-item" data-id="${fav.id}">
      <div class="favorite-haiku">
        <p>${fav.haiku.line1}</p>
        <p>${fav.haiku.line2}</p>
        <p>${fav.haiku.line3}</p>
        <span class="favorite-emotion">「${fav.emotion}」</span>
      </div>
      <div class="favorite-actions">
        <button class="icon-btn load-favorite" title="加载此俳句">📜</button>
        <button class="icon-btn delete-favorite" title="删除收藏">🗑</button>
      </div>
    </div>
  `).join('');
  
  container.querySelectorAll('.load-favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.closest('.favorite-item').dataset.id);
      loadFavorite(id);
    });
  });
  
  container.querySelectorAll('.delete-favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.closest('.favorite-item').dataset.id);
      deleteFavorite(id);
    });
  });
}

function loadFavorite(id) {
  const fav = favorites.find(f => f.id === id);
  if (fav) {
    currentEmotion = fav.emotion;
    currentHaiku = { ...fav.haiku };
    currentStyle = fav.style;
    currentImageUrl = fav.imageUrl;
    
    document.getElementById('emotionInput').value = fav.emotion;
    document.getElementById('selectedEmotion').textContent = `${fav.emotion} · 俳句`;
    document.getElementById('line1').textContent = fav.haiku.line1;
    document.getElementById('line2').textContent = fav.haiku.line2;
    document.getElementById('line3').textContent = fav.haiku.line3;
    
    document.querySelectorAll('.style-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.style === fav.style);
    });
    
    updatePreview();
  }
}

function deleteFavorite(id) {
  favorites = favorites.filter(f => f.id !== id);
  localStorage.setItem('haikuFavorites', JSON.stringify(favorites));
  updateFavoriteButton();
  renderFavorites();
}

// ==================== 事件绑定 ====================
function initEventListeners() {
  document.getElementById('generateBtn').addEventListener('click', () => {
    const inputEmotion = document.getElementById('emotionInput').value.trim();
    if (inputEmotion) {
      currentEmotion = inputEmotion;
      document.getElementById('selectedEmotion').textContent = `${inputEmotion} · 俳句`;
    }
    generateAndDisplay();
  });
  
  document.getElementById('emotionInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const inputEmotion = e.target.value.trim();
      if (inputEmotion) {
        currentEmotion = inputEmotion;
        document.getElementById('selectedEmotion').textContent = `${inputEmotion} · 俳句`;
        generateAndDisplay();
      }
    }
  });
  
  document.getElementById('regenerateBtn').addEventListener('click', generateAndDisplay);
  
  document.getElementById('favoriteBtn').addEventListener('click', toggleFavorite);
  
  document.getElementById('downloadBtn').addEventListener('click', downloadCard);
  
  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStyle = btn.dataset.style;
      updatePreview();
    });
  });
}

// ==================== 初始化 ====================
function init() {
  renderEmotionWheel();
  initEventListeners();
  renderFavorites();
  updatePreview();
}

document.addEventListener('DOMContentLoaded', init);
