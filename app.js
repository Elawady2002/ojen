// ─────────────────────────────────────────────────────────────────────────────
// LANGUAGE SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('ojen-lang') || 'ar';

const translations = {
  ar: {
    'nav.home':             'الرئيسية',
    'nav.about':            'عن المنصة',
    'nav.solutions':        'الحلول',
    'nav.journeys':         'رحلات التطور',
    'nav.blog':             'المدونة',
    'nav.contact':          'تواصل معنا',
    'auth.register':        'تسجيل',
    'auth.login':           'تسجيل الدخول',
    'support.label':        'هل تحتاج مساعدة؟ اتصل بنا:',
    'hero.title':           'رحلات التطور',
    'hero.sub':             'اكتشف رحلتك نحو القمة من خلال برامجنا التدريبية المكثفة والمصممة خصيصاً لتطوير مهاراتك القيادية.',
    'card.duration':        'المدة',
    'card.focus':           'التركيز',
    'card.impact':          'الأثر',
    'card.explore':         'اكتشف الرحلة',
    'sidebar.plans':        'خطط الاشتراك',
    'plan.basic':           'أساسي',
    'plan.premium':         'مميز',
    'plan.basicDesc':       'وصول كامل للمحتوى الأساسي طوال فترة البرنامج',
    'plan.premDesc':        'كل المحتوى الأساسي + جلسة تدريب خاصة كل 30 يوم',
    'plan.basicF1':         'بطاقات تدريبية يومية',
    'plan.basicF2':         'تمارين عملية',
    'plan.basicF3':         'محتوى كامل للرحلة',
    'plan.premF1':          'كل محتوى الباقة الأساسية',
    'plan.premF2':          'جلسة خاصة / 30 يوم',
    'plan.premF3':          'دعم ذو أولوية',
    'sidebar.cta':          'سجّل الآن في البرنامج',
    'footer.emailLabel':    'إرسال بريد إلكتروني',
    'footer.qLabel':        'هل لديك أي سؤال؟',
    'footer.newsletter':    'النشرة الإخبارية',
    'footer.newsletterSub': 'اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات',
    'footer.emailInput':    'أدخل بريدك الإلكتروني',
    'footer.subscribeBtn':  'اشتراك',
    'footer.payTitle':      'طرق الدفع',
    'footer.legal':         'قانوني',
    'footer.privacy':       'سياسة الخصوصية',
    'footer.terms':         'الشروط والاحكام',
    'footer.faq':           'الأسئلة الشائعة',
    'footer.contactLink':   'تواصل معنا',
    'footer.quickLinks':    'روابط سريعة',
    'footer.journeysLink':  'رحلات التطور',
    'footer.aboutLink':     'عن المنصة',
    'footer.solutionsLink': 'الحلول',
    'footer.blogLink':      'المدونة',
    'footer.about':         'من نحن',
    'footer.aboutText':     'أوجن - خبراء جودة الحياة المؤسسية - هي مؤسسة خدمات مهنية مقرها الإمارات، متخصصة في جودة الحياة المؤسسية، والتطوير المؤسسي، وتنمية رأس المال البشري.',
    'footer.copyright':     'جميع الحقوق محفوظة © Ojen 2026',
    'lang.switch':          'EN',
    'card.eq-mastery.tagline':              'الذكاء العاطفي القيادي',
    'card.eq-mastery.duration':             '30 يوماً',
    'card.eq-mastery.focus':               'فهم المشاعر وإدارتها بذكاء',
    'card.eq-mastery.impact':              'تحسن ملحوظ في جودة العلاقات والقيادة وزيادة الوعي الذاتي.',
    'card.customer-delight.tagline':        'إسعاد العملاء المستدام',
    'card.customer-delight.duration':       '30 يوماً',
    'card.customer-delight.focus':         'فهم احتياجات العملاء العميقة',
    'card.customer-delight.impact':        'زيادة معدل رضا العملاء وولائهم للعلامة التجارية.',
    'card.speak-to-lead.tagline':           'رحلة التطور القيادي',
    'card.speak-to-lead.duration':          '30 يوماً',
    'card.speak-to-lead.focus':            'بناء أسلوب تواصل قوي واثق ومؤثر',
    'card.speak-to-lead.impact':           'القدرة على الحديث بثقة أمام الجمهور وبناء حضور قيادي قوي.',
    'card.loyalty-30.tagline':              'بناء الانتماء المؤسسي - المستوى الأول',
    'card.loyalty-30.duration':             '30 يوماً',
    'card.loyalty-30.focus':               'فهم دوافع الموظفين الحديثة',
    'card.loyalty-30.impact':              'بيئة عمل أكثر استقراراً وانتاجية مع موظفين مخلصين.',
    'card.onboarding-excellence.tagline':   'الاندماج السريع والفعال',
    'card.onboarding-excellence.duration':  '30 يوماً',
    'card.onboarding-excellence.focus':    'تصميم رحلة الموظف الجديد (Days 1-90)',
    'card.onboarding-excellence.impact':   'عملية استقبال سلسة تزيد من حماس الموظفين للعمل.',
    'card.leadership-habits.tagline':       'عادات القادة المتميزين',
    'card.leadership-habits.duration':      '90 يوماً',
    'card.leadership-habits.focus':        'تحديد العادات القيادية المؤثرة',
    'card.leadership-habits.impact':       'تحول في السلوك اليومي يؤدي لنتائج قيادية استثنائية.',
    'card.loyalty-90.tagline':              'الاندماج المؤسسي العميق - المستوى المتقدم',
    'card.loyalty-90.duration':             '90 يوم',
    'card.loyalty-90.focus':               'القيادة المؤثرة: تطوير قادة يلهمون فريقهم ويصنعون ولاءً مؤسسياً حقيقياً.',
    'card.loyalty-90.impact':              'زيادة الإنتاجية من خلال رفع الروح المعنوية وبناء روابط مهنية مستدامة.',
  },
  en: {
    'nav.home':             'Home',
    'nav.about':            'About',
    'nav.solutions':        'Solutions',
    'nav.journeys':         'Journeys',
    'nav.blog':             'Blog',
    'nav.contact':          'Contact Us',
    'auth.register':        'Sign Up',
    'auth.login':           'Log In',
    'support.label':        'Need help? Call us:',
    'hero.title':           'Development Journeys',
    'hero.sub':             'Discover your path to the top through our intensive training programs designed to develop your leadership skills.',
    'card.duration':        'Duration',
    'card.focus':           'Focus',
    'card.impact':          'Impact',
    'card.explore':         'Explore Journey',
    'sidebar.plans':        'Subscription Plans',
    'plan.basic':           'Basic',
    'plan.premium':         'Premium',
    'plan.basicDesc':       'Full access to core content throughout the program',
    'plan.premDesc':        'All basic content + private coaching session every 30 days',
    'plan.basicF1':         'Daily training cards',
    'plan.basicF2':         'Practical exercises',
    'plan.basicF3':         'Full journey content',
    'plan.premF1':          'All basic plan content',
    'plan.premF2':          'Private session / 30 days',
    'plan.premF3':          'Priority support',
    'sidebar.cta':          'Register Now',
    'footer.emailLabel':    'Send an Email',
    'footer.qLabel':        'Have any questions?',
    'footer.newsletter':    'Newsletter',
    'footer.newsletterSub': 'Subscribe to our newsletter for the latest updates',
    'footer.emailInput':    'Enter your email',
    'footer.subscribeBtn':  'Subscribe',
    'footer.payTitle':      'Payment Methods',
    'footer.legal':         'Legal',
    'footer.privacy':       'Privacy Policy',
    'footer.terms':         'Terms & Conditions',
    'footer.faq':           'FAQ',
    'footer.contactLink':   'Contact Us',
    'footer.quickLinks':    'Quick Links',
    'footer.journeysLink':  'Journeys',
    'footer.aboutLink':     'About',
    'footer.solutionsLink': 'Solutions',
    'footer.blogLink':      'Blog',
    'footer.about':         'About Us',
    'footer.aboutText':     'Ojen - Corporate Life Quality Experts - is a professional services institution based in the UAE, specializing in corporate life quality, institutional development, and human capital development.',
    'footer.copyright':     '© Ojen 2026 All Rights Reserved',
    'lang.switch':          'عربي',
    'card.eq-mastery.tagline':              'Leadership Emotional Intelligence',
    'card.eq-mastery.duration':             '30 Days',
    'card.eq-mastery.focus':               'Understand and manage emotions intelligently',
    'card.eq-mastery.impact':              'Noticeable improvement in relationship quality, leadership, and self-awareness.',
    'card.customer-delight.tagline':        'Sustainable Customer Happiness',
    'card.customer-delight.duration':       '30 Days',
    'card.customer-delight.focus':         'Understand deep customer needs',
    'card.customer-delight.impact':        'Increased customer satisfaction rate and brand loyalty.',
    'card.speak-to-lead.tagline':           'Leadership Development Journey',
    'card.speak-to-lead.duration':          '30 Days',
    'card.speak-to-lead.focus':            'Build a strong, confident, and impactful communication style',
    'card.speak-to-lead.impact':           'Ability to speak confidently in public and build a strong leadership presence.',
    'card.loyalty-30.tagline':              'Building Institutional Belonging — Level 1',
    'card.loyalty-30.duration':             '30 Days',
    'card.loyalty-30.focus':               'Understand modern employee motivations',
    'card.loyalty-30.impact':              'A more stable and productive work environment with loyal employees.',
    'card.onboarding-excellence.tagline':   'Fast and Effective Integration',
    'card.onboarding-excellence.duration':  '30 Days',
    'card.onboarding-excellence.focus':    'Design the new employee journey (Days 1–90)',
    'card.onboarding-excellence.impact':   'A smooth onboarding process that boosts employee enthusiasm.',
    'card.leadership-habits.tagline':       'Habits of Outstanding Leaders',
    'card.leadership-habits.duration':      '90 Days',
    'card.leadership-habits.focus':        'Identify impactful leadership habits',
    'card.leadership-habits.impact':       'Behavioral transformation leading to exceptional leadership results.',
    'card.loyalty-90.tagline':              'Deep Institutional Integration — Advanced Level',
    'card.loyalty-90.duration':             '90 Days',
    'card.loyalty-90.focus':               'Influential Leadership: Develop leaders who inspire their team and create genuine institutional loyalty.',
    'card.loyalty-90.impact':              'Increased productivity through elevated morale and building sustainable professional bonds.',
  }
};

function t(key) {
  return (translations[currentLang] || translations.ar)[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = t(el.dataset.i18n);
    if (text) el.textContent = text;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const text = t(el.dataset.i18nPlaceholder);
    if (text) el.placeholder = text;
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ojen-lang', lang);
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations();
  // Re-render open sidebar in new language
  const sidebar = document.getElementById('sidebar');
  if (!sidebar.hidden && sidebar.dataset.journeyId) {
    const journey = journeysData.find(j => j.id === sidebar.dataset.journeyId);
    if (journey) openSidebar(journey);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// JOURNEY DATA  (bilingual)
// ─────────────────────────────────────────────────────────────────────────────
const journeysData = [
  {
    id: 'eq-mastery',
    img: 'assets/cards/EQ Mastery.png',
    color: '#8E362D',
    ar: {
      title: 'EQ Mastery',
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
    en: {
      title: 'EQ Mastery',
      duration: '30 Days',
      tagline: 'Leadership Emotional Intelligence',
      goals: [
        'Understand and manage emotions intelligently',
        'Build strong professional relationships',
        'Control reactions under pressure',
        'Motivate yourself and others effectively'
      ],
      sections: {
        target:   { title: 'Target Audience', content: 'Leaders, managers, and those looking to improve interpersonal skills.' },
        outcomes: { title: 'Program Outcomes', content: 'Noticeable improvement in relationship quality, leadership, and self-awareness.' },
        content:  { title: 'Journey Content',  content: 'Recorded lectures, daily practical applications, and discussion forums.' },
        pillars:  { title: 'Program Pillars',  content: 'Self-awareness, self-management, social awareness, and relationship management.' }
      }
    }
  },
  {
    id: 'customer-delight',
    img: 'assets/cards/CUSTOMER DELIGHT.png',
    color: '#05B2EC',
    ar: {
      title: 'Customer Delight',
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
    en: {
      title: 'Customer Delight',
      duration: '30 Days',
      tagline: 'Sustainable Customer Happiness',
      goals: [
        'Understand deep customer needs',
        'Design unforgettable customer experiences',
        'Handle complaints professionally',
        'Build a customer service culture in the organization'
      ],
      sections: {
        target:   { title: 'Target Audience', content: 'Sales teams, customer service, and operations managers.' },
        outcomes: { title: 'Program Outcomes', content: 'Increased customer satisfaction rate and brand loyalty.' },
        content:  { title: 'Journey Content',  content: 'Real-world scenarios, problem-solving exercises, and global models.' },
        pillars:  { title: 'Program Pillars',  content: 'Customer psychology, journey design, effective communication, and service excellence.' }
      }
    }
  },
  {
    id: 'speak-to-lead',
    img: 'assets/cards/SPEAK TO LEAD.png',
    color: '#98E5FF',
    ar: {
      title: 'Speak to Lead',
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
        content:  { title: 'محتوى الرحلة',    content: '30 يوماً من التدريب المكثف، جلسات حية، تدريبات عملية، ومتابعة دقيقة للأداء.' },
        pillars:  { title: 'محاور البرنامج',  content: 'الحوار القيادي، لغة الجسد، بناء الكاريزما، إدارة المشاعر، وفنون الإقناع.' }
      }
    },
    en: {
      title: 'Speak to Lead',
      duration: '30 Days',
      tagline: 'Leadership Development Journey',
      goals: [
        'Build a strong, confident, and impactful communication style',
        'Enhance persuasion and create positive influence',
        'Improve emotional intelligence in dialogue',
        'Develop listening quality and build rapport with the audience',
        'Manage tension and sensitive situations intelligently',
        'Use voice tone and body language precisely'
      ],
      sections: {
        target:   { title: 'Target Audience', content: 'Leaders, managers, entrepreneurs, and anyone seeking to develop exceptional leadership communication skills.' },
        outcomes: { title: 'Program Outcomes', content: 'Ability to speak confidently in public, persuade the team, resolve conflicts, and build a strong leadership presence.' },
        content:  { title: 'Journey Content',  content: '30 days of intensive training, live sessions, practical exercises, and precise performance tracking.' },
        pillars:  { title: 'Program Pillars',  content: 'Leadership dialogue, body language, building charisma, emotion management, and the art of persuasion.' }
      }
    }
  },
  {
    id: 'loyalty-30',
    img: 'assets/cards/EMPLOYEE LOYALTY 30 DAYS.png',
    color: '#A28BF5',
    ar: {
      title: 'Employee Loyalty',
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
    en: {
      title: 'Employee Loyalty',
      duration: '30 Days',
      tagline: 'Building Institutional Belonging — Level 1',
      goals: [
        'Understand modern employee motivations',
        'Design effective recognition and reward programs',
        'Build mutual trust between management and employees',
        'Reduce employee turnover rate'
      ],
      sections: {
        target:   { title: 'Target Audience', content: 'HR professionals, executive managers, and supervisors.' },
        outcomes: { title: 'Program Outcomes', content: 'A more stable and productive work environment with loyal employees.' },
        content:  { title: 'Journey Content',  content: 'Loyalty measurement tools, executive action plans, and best practices.' },
        pillars:  { title: 'Program Pillars',  content: 'Corporate culture, servant leadership, motivation, and internal communication.' }
      }
    }
  },
  {
    id: 'onboarding-excellence',
    img: 'assets/cards/EMPLOYEE ONBOARDING.png',
    color: '#C17733',
    ar: {
      title: 'Employee Onboarding',
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
    en: {
      title: 'Employee Onboarding',
      duration: '30 Days',
      tagline: 'Fast and Effective Integration',
      goals: [
        'Design the new employee journey (Days 1–90)',
        'Provide all tools necessary for early success',
        'Accelerate the time to reach productive efficiency',
        'Reduce tension associated with new beginnings'
      ],
      sections: {
        target:   { title: 'Target Audience', content: 'Teams, department managers, and recruitment staff.' },
        outcomes: { title: 'Program Outcomes', content: 'A smooth onboarding process that boosts employee enthusiasm.' },
        content:  { title: 'Journey Content',  content: 'Checklists, welcome message templates, and mentorship programs.' },
        pillars:  { title: 'Program Pillars',  content: 'Pre-arrival, first day, first week, and probation period.' }
      }
    }
  },
  {
    id: 'leadership-habits',
    img: 'assets/cards/LEDERSHIP JOURNEY HABITS 90 DAYS.png',
    color: '#936F5A',
    ar: {
      title: 'Leadership Journey Habits',
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
    en: {
      title: 'Leadership Journey Habits',
      duration: '90 Days',
      tagline: 'Habits of Outstanding Leaders',
      goals: [
        'Identify impactful leadership habits',
        'Build a daily routine that supports leadership',
        'Eliminate negative leadership habits',
        'Measure habit stability and impact'
      ],
      sections: {
        target:   { title: 'Target Audience', content: 'Current and aspiring leaders seeking to build a solid leadership character.' },
        outcomes: { title: 'Program Outcomes', content: 'Behavioral transformation leading to exceptional leadership results.' },
        content:  { title: 'Journey Content',  content: 'Habit journal, follow-up sessions, and behavior reinforcement exercises.' },
        pillars:  { title: 'Program Pillars',  content: 'Self-discipline, priority setting, team leadership, and continuous thinking.' }
      }
    }
  },
  {
    id: 'loyalty-90',
    img: 'assets/cards/EMPLOYEE LOYALTY 90 DAYS.png',
    color: '#A28BF5',
    ar: {
      title: 'Employee Loyalty (90 Days)',
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
    },
    en: {
      title: 'Employee Loyalty (90 Days)',
      duration: '90 Days',
      tagline: 'Deep Institutional Integration — Advanced Level',
      goals: [
        'Influential Leadership: Develop leaders who inspire their team and create genuine institutional loyalty.',
        'Talent Retention Strategy: Implement long-term systems to reduce talent drain and raise stability.',
        'Engagement & Recognition: Build a work culture based on appreciation and recognizing employee value.',
        'Harmonious Management: Master human leadership methodologies and empathy to achieve shared goals.'
      ],
      sections: {
        target:   { title: 'Target Audience', content: 'Team and project leaders seeking to reduce employee turnover, HR business partners, and executive managers interested in building an attractive institutional culture.' },
        outcomes: { title: 'Institutional Impact', content: 'Increased productivity through elevated morale, attracting top talent, and building sustainable professional bonds that withstand challenges.' }
      }
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

// Get localized journey fields
function jl(journey) {
  return journey[currentLang] || journey.ar;
}

// SVG icons
const icons = {
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  trendingUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  creditCard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

// ─────────────────────────────────────────────────────────────────────────────
// SIDEBAR
// ─────────────────────────────────────────────────────────────────────────────
function openSidebar(journey) {
  const loc = jl(journey);
  const { color } = journey;
  const colorRgb = hexToRgb(color);
  const { title, tagline, duration, goals = [], sections = {} } = loc;

  const goalsHTML = goals.length
    ? `<div class="jsb-section">
        <div class="jsb-section-label">${icons.target}<span>${t('card.focus') === 'التركيز' ? 'الأهداف' : 'Goals'}</span></div>
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

  const plansHTML = `
    <div class="jsb-section">
      <div class="jsb-section-label">${icons.creditCard}<span>${t('sidebar.plans')}</span></div>
      <div class="jsb-plans-grid">

        <div class="jsb-plan-card jsb-plan-basic" data-plan="basic" role="button" tabindex="0" style="--plan-color:${color}; --plan-rgb:${colorRgb}">
          <div class="jsb-plan-check-wrap">${icons.check}</div>
          <span class="jsb-plan-badge jsb-plan-badge--basic">${t('plan.basic')}</span>
          <p class="jsb-plan-desc">${t('plan.basicDesc')}</p>
          <ul class="jsb-plan-features">
            <li>${t('plan.basicF1')}</li>
            <li>${t('plan.basicF2')}</li>
            <li>${t('plan.basicF3')}</li>
          </ul>
        </div>

        <div class="jsb-plan-card jsb-plan-premium" data-plan="premium" role="button" tabindex="0" style="--plan-color:${color}; --plan-rgb:${colorRgb}">
          <div class="jsb-plan-check-wrap">${icons.check}</div>
          <span class="jsb-plan-badge jsb-plan-badge--premium">${t('plan.premium')}</span>
          <p class="jsb-plan-desc">${t('plan.premDesc')}</p>
          <ul class="jsb-plan-features">
            <li>${t('plan.premF1')}</li>
            <li>${t('plan.premF2')}</li>
            <li>${t('plan.premF3')}</li>
          </ul>
        </div>

      </div>
    </div>
  `;

  const sidebar = document.getElementById('sidebar');
  sidebar.dataset.journeyId = journey.id;
  sidebar.innerHTML = `
    <div class="jsb-wrap">
      <div class="jsb-card">
        <div class="jsb-topbar" style="background:linear-gradient(90deg,transparent,${color},transparent)"></div>

        <button class="jsb-close" id="jsb-close" aria-label="Close">
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
          ${plansHTML}
        </div>

        <div class="jsb-cta">
          <button class="jsb-cta-btn" style="background:${color};box-shadow:0 6px 20px rgba(0,0,0,0.35)">
            ${t('sidebar.cta')}
          </button>
        </div>
      </div>
    </div>
  `;

  sidebar.hidden = false;
  document.getElementById('backdrop').hidden = false;
  document.body.style.overflow = 'hidden';

  document.getElementById('jsb-close').addEventListener('click', closeSidebar);

  // Plan selection
  let selectedPlan = null;
  const planCards = sidebar.querySelectorAll('.jsb-plan-card[data-plan]');
  const ctaBtn = sidebar.querySelector('.jsb-cta-btn');

  planCards.forEach(card => {
    card.addEventListener('click', () => {
      planCards.forEach(c => c.classList.remove('is-selected'));
      card.classList.add('is-selected');
      selectedPlan = card.dataset.plan;
      ctaBtn.dataset.selectedPlan = selectedPlan;
    });
  });

  ctaBtn.addEventListener('click', () => {
    if (!selectedPlan) {
      planCards.forEach(c => c.classList.add('no-plan-shake'));
      setTimeout(() => planCards.forEach(c => c.classList.remove('no-plan-shake')), 500);
      return;
    }
    console.log('Register with plan:', selectedPlan, 'journey:', journey.id);
  });
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
  if (e.target.closest('.jc-cta-btn')) return;

  const outer = e.currentTarget;
  const id = outer.dataset.id;
  const flipper = outer.querySelector('[data-flipper]');

  if (flippedCardId === id) {
    flipper.classList.remove('is-flipped');
    flippedCardId = null;
  } else {
    if (flippedCardId) {
      const prev = document.querySelector(`.jc-outer[data-id="${flippedCardId}"] [data-flipper]`);
      if (prev) prev.classList.remove('is-flipped');
    }
    flipper.classList.add('is-flipped');
    flippedCardId = id;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// INTERSECTION OBSERVER
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
  // Apply saved language on load
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  applyTranslations();

  initCardAnimations();

  // Language switcher
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
      initCardAnimations();
    });
    langSwitcher.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        langSwitcher.click();
      }
    });
  }

  // Card click events
  const grid = document.getElementById('cards-grid');
  grid.addEventListener('click', (e) => {
    const ctaBtn = e.target.closest('.jc-cta-btn');
    if (ctaBtn) {
      e.stopPropagation();
      const id = ctaBtn.dataset.journeyId;
      const journey = journeysData.find(j => j.id === id);
      if (journey) openSidebar(journey);
      return;
    }

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
