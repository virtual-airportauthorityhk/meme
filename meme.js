// 名言
const quotesData = [
  {
    text: "古顾菇~",
    author: "超骑的MC世界"
  },
  {
    text: "本人已死，有事烧纸；小事招魂，大事挖坟；偷我贡品，死了没坟。",
    author: "电音汽水"
  },
  {
    text: "我家旁边有棵树，我是废物你记住。",
    author: "秋樹"
  },
  {
    text: "影宝宝！",
    author: "CZ8042"
  },
  {
    text: "f**k you every day!",
    author: "CZ3705"
  },
  {
    text: "厚如我🥵🥵🥵",
    author: "da_bian❂"
  },
  {
    text: "南娘是CZ1930",
    author: "WENSLEYCHING."
  },
  {
    text: "南凉是CZ6902",
    author: "CZ3705"
  },
  {
    text: "那78不是啊",
    author: "狞笑者"
  },
  {
    text: "老子明天就写报纸污蔑你们",
    author: "冒充者"
  },
  {
    text: "我怕他搞我啊",
    author: "少爷"
  },
  {
    text: "我直接给你航司查封",
    author: "虚拟南航集团董事长"
  },
  {
    text: "重庆航空宣布倒闭",
    author: "DerTigerTyp"
  },
  {
    text: "别干了和我干",
    author: "岚栖Luminary"
  },
  {
    text: "打断加一死全家",
    author: "FJNS连飞平台"
  },
  {
    text: "我没有浮木",
    author: "Simple阿葉"
  },
  {
    text: "对吧?",
    author: "寒暮"
  },
  {
    text: "有啥问题？有问题都得给我憋着。",
    author: "心瘾^"
  },
  {
    text: "那龙局**的死哪去了",
    author: "DY承仔"
  },
  {
    text: "**的，谁给我改成厕所管理员了？",
    author: "龍鳯尘白"
  },
  {
    text: "把**都扔你们脸上",
    author: "龍鳯尘白"
  },
  {
    text: "东水卿月不在我就是无敌的",
    author: "泠灀💫lingshuang420"
  },
  {
    text: "我在考虑要不要发给主席看",
    author: "汐玥玥玥喵～"
  },
  {
    text: "CNM",
    author: "龍鳯尘白"
  },
  {
    text: "别挑战底线，我好说话但不好惹。",
    author: "黯殇"
  },
  {
    text: "颗秒",
    author: "魔铠镇心神"
  },
  {
    text: "啥黑丝不黑丝的，我压根就不爱看（兄弟，记得私信发我）",
    author: "龍鳯尘白"
  },
  {
    text: "你一天谁*的多？我一天最多21次",
    author: "龍鳯尘白"
  },
  {
    text: "不活跃的全部*死",
    author: "荔椿🍋·Lichee"
  },
  {
    text: "九元航空群主要在一个月时间内上600人穿女装",
    author: "bxy"
  },
  {
    text: "女装去了",
    author: "翻云又覆雨"
  },
  {
    text: "那能给我看眼女装吗",
    author: "翻云又覆雨"
  },
  {
    text: "当年误闯南天门，乱拳打死文化人",
    author: "王斩"
  }
];

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
  loadQuotes();
  setupScrollEffects();
  setupTechEffects();
});

// 加载名言到页面
function loadQuotes() {
  const quotesList = document.getElementById('quotesList');

  quotesData.forEach((quote, index) => {
    const quoteCard = createQuoteCard(quote, index);
    quotesList.appendChild(quoteCard);
  });
}

// 创建名言卡片元素
function createQuoteCard(quote, index) {
  const card = document.createElement('div');
  card.className = 'quote-card';
  card.setAttribute('data-index', index);

  card.innerHTML = `
    <div class="quote-text">${quote.text}</div>
    <div class="quote-author">—— ${quote.author}</div>
  `;

  // 添加科技感点击事件
  card.addEventListener('click', function () {
    // 科技感点击反馈
    card.style.transform = 'translateX(10px) scale(0.98)';
    card.style.borderColor = 'var(--cyber-cyan)';

    // 复制名言到剪贴板
    copyQuoteToClipboard(quote);

    setTimeout(() => {
      card.style.transform = '';
      card.style.borderColor = '';
    }, 200);
  });

  // 添加悬停科技效果
  card.addEventListener('mouseenter', function () {
    createTechRipple(this, event);
  });

  return card;
}

// 复制名言到剪贴板
async function copyQuoteToClipboard(quote) {
  const text = `"${quote.text}" —— ${quote.author}`;

  try {
    await navigator.clipboard.writeText(text);
    showTechNotification('名言已复制到剪贴板');
  } catch (err) {
    console.log('复制失败:', err);
  }
}

// 科技感通知
function showTechNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: rgba(0, 212, 255, 0.1);
    border: 1px solid var(--cyber-cyan);
    color: var(--cyber-cyan);
    padding: 12px 20px;
    border-radius: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
    backdrop-filter: blur(10px);
    transform: translateX(100%);
    transition: all 0.3s ease;
  `;

  notification.textContent = `> ${message}`;
  document.body.appendChild(notification);

  // 显示动画
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // 自动消失
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}

// 科技感波纹效果
function createTechRipple(element, event) {
  const ripple = document.createElement('div');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${event.clientX - rect.left - size / 2}px;
    top: ${event.clientY - rect.top - size / 2}px;
    background: radial-gradient(circle, var(--cyber-cyan) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: techRipple 0.6s ease-out;
    z-index: 1;
  `;

  element.style.position = 'relative';
  element.appendChild(ripple);

  setTimeout(() => {
    element.removeChild(ripple);
  }, 600);
}

// 添加波纹动画CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes techRipple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// 设置滚动效果
function setupScrollEffects() {
  // 导航栏滚动效果
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 滚动时导航栏背景透明度变化
    if (scrollTop > 50) {
      navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      navbar.style.boxShadow = '0 0 30px rgba(138, 99, 210, 0.6)';
    } else {
      navbar.style.background = 'rgba(10, 10, 10, 0.9)';
      navbar.style.boxShadow = 'var(--glow-primary)';
    }

    // 粒子背景速度控制
    const particleElements = document.querySelectorAll('.particle');
    const scrollProgress = scrollTop / window.innerHeight;

    particleElements.forEach((particle, index) => {
      const speed = (index + 1) * 0.1;
      particle.style.animationDuration = `${8 + scrollProgress * 4 + speed}s`;
    });

    lastScrollTop = scrollTop;
  });

  // 名言卡片进入视窗动画
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, observerOptions);

  // 观察所有名言卡片
  document.querySelectorAll('.quote-card').forEach(card => {
    observer.observe(card);
  });
}

// 设置科技感特效
function setupTechEffects() {
  // 终端闪烁效果
  const terminalContent = document.querySelector('.terminal-content');
  if (terminalContent) {
    setInterval(() => {
      const lines = terminalContent.querySelectorAll('.terminal-line');
      lines.forEach((line, index) => {
        if (index < lines.length - 1) {
          line.style.opacity = '0.7';
          setTimeout(() => {
            line.style.opacity = '1';
          }, 100);
        }
      });
    }, 3000);
  }

  // 动态粒子创建
  setInterval(() => {
    createDynamicParticle();
  }, 8000);

  // 统计数据计数动画
  animateStats();
}

// 动态粒子
function createDynamicParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';

  const startX = Math.random() * window.innerWidth;
  const endX = Math.random() * window.innerWidth;
  const startY = window.innerHeight + 10;
  const endY = -10;

  particle.style.cssText = `
    left: ${startX}px;
    top: ${startY}px;
    animation: float ${6 + Math.random() * 4}s linear forwards;
  `;

  document.querySelector('.particles-background').appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

// 统计数据计数动画
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
      }
    });
  });

  stats.forEach(stat => observer.observe(stat));
}

// 数字计数动画
function animateNumber(element) {
  const finalValue = element.textContent;
  const isPercentage = finalValue.includes('+');
  const numericValue = parseInt(finalValue.replace(/\D/g, ''));

  let currentValue = 0;
  const increment = numericValue / 50;

  const timer = setInterval(() => {
    currentValue += increment;
    if (currentValue >= numericValue) {
      currentValue = numericValue;
      clearInterval(timer);
    }

    if (isPercentage) {
      element.textContent = Math.floor(currentValue) + '+';
    } else if (finalValue.includes('/')) {
      element.textContent = finalValue; // 24/7 特殊处理
    } else {
      element.textContent = Math.floor(currentValue);
    }
  }, 40);
}

// 添加新名言的函数（可用于后续扩展）
function addQuote(text, author) {
  const newQuote = { text, author };
  quotesData.push(newQuote);

  const quoteCard = createQuoteCard(newQuote, quotesData.length - 1);
  const quotesList = document.getElementById('quotesList');
  quotesList.appendChild(quoteCard);
}

// 搜索功能（预留接口）
function searchQuotes(keyword) {
  return quotesData.filter(quote =>
    quote.text.includes(keyword) || quote.author.includes(keyword)
  );
}

// 随机名言功能
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  return quotesData[randomIndex];
}

// 导出功能供后续使用
window.MemeQuotes = {
  addQuote,
  searchQuotes,
  getRandomQuote,
  quotesData
};