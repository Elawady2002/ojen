// ─────────────────────────────────────────────────────────────────────────────
// JOURNEY DATA
// ─────────────────────────────────────────────────────────────────────────────
const journeysData = [
  {
    id: 'eq-mastery',
    title: 'EQ Mastery',
    img: 'assets/cards/EQ Mastery.png',
    color: '#8E362D',
    duration: '30 يوماً',
    tagline: 'الذكاء العاطفي القيادي',
    goals: [
      'فهم المشاعر وإدارتها بذكاء',
      'بناء علاقات مهنية قوية',
      'التحكم في الانفعالات تحت الضغط',
      'تحفيز الذات والآخرين بفعالية'
    ],
    sections: {
      target:   { title: 'الفئة المستهدفة', content: 'القادة والمدراء والراغبين في تحسين مهاراتهم في التعامل مع الآخرين.' },
      outcomes: { title: 'مخرجات البرنامج', content: 'تحسن ملحوظ في جودة العلاقات والقيادة وزيادة الوعي الذاتي.' },
      content:  { title: 'محتوى الرحلة',    content: 'محاضرات مسجلة، تطبيقات عملية يومية، ومنتديات نقاش.' },
      pillars:  { title: 'محاور البرنامج',  content: 'الوعي الذاتي، إدارة الذات، الوعي الاجتماعي، وإدارة العلاقات.' }
    }
  },
  {
    id: 'customer-delight',
    title: 'Customer Delight',
    img: 'assets/cards/CUSTOMER DELIGHT.png',
    color: '#05B2EC',
    duration: '30 يوماً',
    tagline: 'إسعاد العملاء المستدام',
    goals: [
      'فهم احتياجات العملاء العميقة',
      'تصميم تجارب عملاء لا تُنسى',
      'التعامل مع الشكاوى باحترافية',
      'بناء ثقافة خدمة العملاء في المؤسسة'
    ],
    sections: {
      target:   { title: 'الفئة المستهدفة', content: 'فرق المبيعات وخدمة العملاء ومدراء العمليات.' },
      outcomes: { title: 'مخرجات البرنامج', content: 'زيادة معدل رضا العملاء وولائهم للعلامة التجارية.' },
      content:  { title: 'محتوى الرحلة',    content: 'سيناريوهات واقعية، تدريبات على حل المشكلات، ونماذج عالمية.' },
      pillars:  { title: 'محاور البرنامج',  content: 'سيكولوجية العميل، تصميم الرحلة، التواصل الفعال، والتميز في الخدمة.' }
    }
  },
  {
    id: 'speak-to-lead',
    title: 'Speak to Lead',
    img: 'assets/cards/SPEAK TO LEAD.png',
    color: '#98E5FF',
    duration: '30 يوماً',
    tagline: 'رحلة التطور القيادي',
    goals: [
      'بناء أسلوب تواصل قوي واثق ومؤثر',
      'رفع القدرة على الإقناع وصناعة تأثير إيجابي',
      'تحسين الذكاء العاطفي في الحوار',
      'تطوير جودة الإصغاء وبناء علاقة مع المستمع',
      'إدارة التوتر والمواقف الحساسة بذكاء',
      'استخدام نبرة الصوت ولغة الجسد بدقة'
    ],
    sections: {
      target:   { title: 'الفئة المستهدفة', content: 'القادة، المدراء، رواد الأعمال، وكل من يسعى لتطوير مهارات تواصل قيادية استثنائية.' },
      outcomes: { title: 'مخرجات البرنامج', content: 'القدرة على الحديث بثقة أمام الجمهور، إقناع الفريق، حل النزاعات، وبناء حضور قيادي قوي.' },
      content:  { title: 'محتوى الرحلة',    content: '30 يوماً من التدريب المكتف، جلسات حية، تدريبات عملية، ومتابعة دقيقة للأداء.' },
      pillars:  { title: 'محاور البرنامج',  content: 'الحوار القيادي، لغة الجسد، بناء الكاريزما، إدارة المشاعر، وفنون الإقناع.' }
    }
  },
  {
    id: 'loyalty-30',
    title: 'Employee Loyalty',
    img: 'assets/cards/EMPLOYEE LOYALTY 30 DAYS.png',
    color: '#A28BF5',
    duration: '30 يوماً',
    tagline: 'بناء الانتماء المؤسسي - المستوى الأول',
    goals: [
      'فهم دوافع الموظفين الحديثة',
      'تصميم برامج تقدير ومكافأة فعالة',
      'بناء ثقة متبادلة بين الإدارة والموظفين',
      'تقليل معدل دوران العمالة'
    ],
    sections: {
      target:   { title: 'الفئة المستهدفة', content: 'موارد البشرية والمدراء التنفيذيين والمشرفين.' },
      outcomes: { title: 'مخرجات البرنامج', content: 'بيئة عمل أكثر استقراراً وانتاجية مع موظفين مخلصين.' },
      content:  { title: 'محتوى الرحلة',    content: 'أدوات قياس الولاء، خطط عمل تنفيذية، وأفضل الممارسات.' },
      pillars:  { title: 'محاور البرنامج',  content: 'الثقافة المؤسسية، القيادة الخادمة، التحفيز، والاتصال الداخلي.' }
    }
  },
  {
    id: 'onboarding-excellence',
    title: 'Employee Onboarding',
    img: 'assets/cards/EMPLOYEE ONBOARDING.png',
    color: '#C17733',
    duration: '30 يوماً',
    tagline: 'الاندماج السريع والفعال',
    goals: [
      'تصميم رحلة الموظف الجديد (Days 1-90)',
      'توفير كل الأدوات اللازمة للنجاح المبكر',
      'تسريع الوقت اللازم للوصول للكفاءة الإنتاجية',
      'تقليل التوتر المرتبط بالبداية الجديدة'
    ],
    sections: {
      target:   { title: 'الفئة المستهدفة', content: 'فرق العمل ومدراء الأقسام وفريق التوظيف.' },
      outcomes: { title: 'مخرجات البرنامج', content: 'عملية استقبال سلسة تزيد من حماس الموظفين للعمل.' },
      content:  { title: 'محتوى الرحلة',    content: 'قوائم مراجعة، نماذج رسائل ترحيب، وبرامج إرشاد.' },
      pillars:  { title: 'محاور البرنامج',  content: 'ما قبل الوصول، اليوم الأول، الأسبوع الأول، وفترة التجربة.' }
    }
  },
  {
    id: 'leadership-habits',
    title: 'Leadership Journey Habits',
    img: 'assets/cards/LEDERSHIP JOURNEY HABITS 90 DAYS.png',
    color: '#936F5A',
    duration: '90 يوماً',
    tagline: 'عادات القادة المتميزين',
    goals: [
      'تحديد العادات القيادية المؤثرة',
      'بناء روتين يومي يدعم القيادة',
      'التخلص من العادات القيادية السلبية',
      'قياس مدى ثبات وتأثير العادة'
    ],
    sections: {
      target:   { title: 'الفئة المستهدفة', content: 'القادة الحاليين والطموحين لبناء شخصية قيادية صلبة.' },
      outcomes: { title: 'مخرجات البرنامج', content: 'تحول في السلوك اليومي يؤدي لنتائج قيادية استثنائية.' },
      content:  { title: 'محتوى الرحلة',    content: 'مفكرة عادات، جلسات متابعة، وتمارين تثبيت السلوك.' },
      pillars:  { title: 'محاور البرنامج',  content: 'الانضباط الذاتي، ترتيب الأولويات، قيادة الفريق، والتفكير المستمر.' }
    }
  },
  {
    id: 'loyalty-90',
    title: 'ولاء الموظفين (90 يوم)',
    img: 'assets/cards/EMPLOYEE LOYALTY 90 DAYS.png',
    color: '#A28BF5',
    duration: '90 يوم',
    tagline: 'الاندماج المؤسسي العميق - المستوى المتقدم',
    goals: [
      'القيادة المؤثرة: تطوير قادة يلهمون فريقهم ويصنعون ولاءً مؤسسياً حقيقياً.',
      'استراتيجية الحفاظ على المواهب: تنفيذ أنظمة طويلة الأمد لتقليل تسرب الكفاءات ورفع الاستقرار.',
      'المشاركة والتقدير: بناء ثقافة عمل قائمة على التقدير والاعتراف بقيمة الموظف.',
      'الإدارة المتناغمة: إتقان منهجيات القيادة الإنسانية والتعاطف لتحقيق الأهداف المشتركة.'
    ],
    sections: {
      target:   { title: 'الفئة المستهدفة', content: 'قادة الفرق والمشاريع الساعين لتقليل دوران الموظفين، شركاء أعمال الموارد البشرية، والمدراء التنفيذيون المهتمون ببناء ثقافة مؤسسية جذابة.' },
      outcomes: { title: 'الأثر المؤسسي',   content: 'زيادة الإنتاجية من خلال رفع الروح المعنوية، جذب أفضل المواهب، وبناء روابط مهنية مستدامة تصمد أمام التحديات.' }
    }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r
    ? `${parseInt(r[1], 16)}, ${parseInt(r[2], 16)}, ${parseInt(r[3], 16)}`
    : '197, 160, 89';
}

// SVG icons (Lucide-compatible paths)
const icons = {
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  trendingUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
};

// ─────────────────────────────────────────────────────────────────────────────
// RENDER CARDS
// ─────────────────────────────────────────────────────────────────────────────
function renderCards() {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;

  grid.innerHTML = journeysData.map((journey, index) => {
    const colorRgb = hexToRgb(journey.color);
    const outcomeText = journey.sections?.outcomes?.content ?? '';
    const focusText = journey.goals[0] ?? journey.tagline ?? '';
    const delay = index % 4;

    return `
      <div class="jg-card-slot" data-delay="${delay}" data-id="${journey.id}">
        <div
          class="jc-outer"
          data-id="${journey.id}"
          style="--theme-color:${journey.color}; --theme-rgb:${colorRgb};"
        >
          <div class="jc-flipper" data-flipper>
            <div class="jc-face jc-front">
              <img src="${journey.img}" alt="${journey.title}" class="jc-img" loading="lazy" />
              <div class="jc-shine"></div>
            </div>
            <div class="jc-face jc-back">
              <div class="jc-back-inner">
                <div class="jc-back-header">
                  <span class="jc-back-tag">${journey.tagline}</span>
                  <h3 class="jc-back-title" style="color:var(--theme-color)">${journey.title}</h3>
                </div>
                <div class="jc-back-stats">
                  <div class="jc-stat-item">
                    <span class="jc-stat-label">المدة</span>
                    <span class="jc-stat-value">${journey.duration}</span>
                  </div>
                  <div class="jc-stat-item">
                    <span class="jc-stat-label">التركيز</span>
                    <span class="jc-stat-value">${focusText}</span>
                  </div>
                  <div class="jc-stat-item">
                    <span class="jc-stat-label">الأثر</span>
                    <span class="jc-stat-value" style="font-size:0.75rem;opacity:0.7">${outcomeText}</span>
                  </div>
                </div>
                <div class="jc-back-cta">
                  <button class="jc-cta-btn" data-journey-id="${journey.id}">اكتشف الرحلة</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// SIDEBAR
// ─────────────────────────────────────────────────────────────────────────────
function openSidebar(journey) {
  const { title, tagline, color, duration, goals = [], sections = {} } = journey;

  const goalsHTML = goals.length
    ? `<div class="jsb-section">
        <div class="jsb-section-label">${icons.target}<span>الأهداف</span></div>
        <ul class="jsb-goals">
          ${goals.map(g => `
            <li class="jsb-goal-item">
              <span class="jsb-goal-dot" style="background:${color}"></span>
              ${g}
            </li>`).join('')}
        </ul>
      </div>`
    : '';

  const targetHTML = sections?.target
    ? `<div class="jsb-section">
        <div class="jsb-section-label">${icons.users}<span>${sections.target.title}</span></div>
        <p class="jsb-section-text">${sections.target.content}</p>
      </div>`
    : '';

  const pillarsHTML = sections?.pillars
    ? `<div class="jsb-section">
        <div class="jsb-section-label">${icons.layers}<span>${sections.pillars.title}</span></div>
        <p class="jsb-section-text">${sections.pillars.content}</p>
      </div>`
    : '';

  const outcomesHTML = sections?.outcomes
    ? `<div class="jsb-section">
        <div class="jsb-section-label">${icons.trendingUp}<span>${sections.outcomes.title}</span></div>
        <p class="jsb-section-text">${sections.outcomes.content}</p>
      </div>`
    : '';

  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = `
    <div class="jsb-wrap">
      <div class="jsb-card">
        <div class="jsb-topbar" style="background:linear-gradient(90deg,transparent,${color},transparent)"></div>

        <button class="jsb-close" id="jsb-close" aria-label="إغلاق">
          ${icons.x}
        </button>

        <div class="jsb-header">
          <div class="jsb-tag">
            <span class="jsb-tag-dot" style="background:${color}"></span>
            <span class="jsb-tag-text">${tagline}</span>
          </div>
          <h2 class="jsb-title" style="color:${color}">${title}</h2>
          <div class="jsb-duration">
            ${icons.clock}
            <span>${duration}</span>
          </div>
        </div>

        <div class="jsb-divider" style="background:linear-gradient(90deg,transparent,${color}44,transparent)"></div>

        <div class="jsb-body">
          ${targetHTML}
          ${goalsHTML}
          ${pillarsHTML}
          ${outcomesHTML}
        </div>

        <div class="jsb-cta">
          <button class="jsb-cta-btn" style="background:${color};box-shadow:0 6px 20px rgba(0,0,0,0.35)">
            سجّل الآن في البرنامج
          </button>
        </div>
      </div>
    </div>
  `;

  sidebar.hidden = false;
  document.getElementById('backdrop').hidden = false;
  document.body.style.overflow = 'hidden';

  document.getElementById('jsb-close').addEventListener('click', closeSidebar);
}

function closeSidebar() {
  document.getElementById('sidebar').hidden = true;
  document.getElementById('backdrop').hidden = true;
  document.body.style.overflow = '';
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD FLIP (mobile only — desktop uses CSS :hover)
// ─────────────────────────────────────────────────────────────────────────────
let flippedCardId = null;

function handleCardClick(e) {
  // Don't flip if clicking the CTA button
  if (e.target.closest('.jc-cta-btn')) return;

  const outer = e.currentTarget;
  const id = outer.dataset.id;
  const flipper = outer.querySelector('[data-flipper]');

  if (flippedCardId === id) {
    flipper.classList.remove('is-flipped');
    flippedCardId = null;
  } else {
    // Unflip previously flipped card
    if (flippedCardId) {
      const prev = document.querySelector(`.jc-outer[data-id="${flippedCardId}"] [data-flipper]`);
      if (prev) prev.classList.remove('is-flipped');
    }
    flipper.classList.add('is-flipped');
    flippedCardId = id;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// INTERSECTION OBSERVER (card entrance animations)
// ─────────────────────────────────────────────────────────────────────────────
function initCardAnimations() {
  const slots = document.querySelectorAll('.jg-card-slot');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-40px' });

  slots.forEach(slot => observer.observe(slot));
}

// ─────────────────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Render cards
  renderCards();
  initCardAnimations();

  // Card click events (delegation on grid)
  const grid = document.getElementById('cards-grid');
  grid.addEventListener('click', (e) => {
    // CTA button → open sidebar
    const ctaBtn = e.target.closest('.jc-cta-btn');
    if (ctaBtn) {
      e.stopPropagation();
      const id = ctaBtn.dataset.journeyId;
      const journey = journeysData.find(j => j.id === id);
      if (journey) openSidebar(journey);
      return;
    }

    // Card click → flip (mobile)
    const outer = e.target.closest('.jc-outer');
    if (outer) handleCardClick({ currentTarget: outer, target: e.target });
  });

  // Backdrop click → close sidebar
  document.getElementById('backdrop').addEventListener('click', closeSidebar);

  // Escape key → close sidebar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });
});
