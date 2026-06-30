// ===== SHARED APP UTILITIES =====

const App = {
  lang: localStorage.getItem('spf_lang') || 'ar',
  user: JSON.parse(localStorage.getItem('spf_user') || 'null'),

  init() {
    this.applyLang();
    this.bindLangToggle();
    this.renderUserChip();
    this.markActiveNav();
  },

  applyLang() {
    document.body.classList.toggle('ltr', this.lang === 'en');
    document.body.classList.toggle('rtl', this.lang === 'ar');
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = this.lang === 'ar' ? 'EN' : 'ع';
  },

  bindLangToggle() {
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', () => {
      this.lang = this.lang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('spf_lang', this.lang);
      this.applyLang();
    });
  },

  t(ar, en) {
    return this.lang === 'ar' ? ar : en;
  },

  login(name_ar, name_en, role) {
    const user = { name_ar, name_en, role, loginTime: Date.now() };
    localStorage.setItem('spf_user', JSON.stringify(user));
    this.user = user;
  },

  logout() {
    localStorage.removeItem('spf_user');
    window.location.href = 'index.html';
  },

  requireAuth() {
    if (!this.user) window.location.href = 'index.html';
  },

  renderUserChip() {
    const nameEl = document.getElementById('userName');
    const roleEl = document.getElementById('userRole');
    const avatarEl = document.getElementById('userAvatar');
    if (!this.user) return;
    const name = this.t(this.user.name_ar, this.user.name_en);
    if (nameEl) nameEl.textContent = name;
    if (roleEl) roleEl.textContent = this.t(
      this.user.role === 'admin' ? 'مدير النظام' : 'مقدم خدمة',
      this.user.role === 'admin' ? 'Admin' : 'Service Agent'
    );
    if (avatarEl) avatarEl.textContent = (name || '?')[0];
  },

  markActiveNav() {
    const page = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
  },

  getProgress() {
    return JSON.parse(localStorage.getItem('spf_progress') || '{}');
  },

  setProgress(key, val) {
    const p = this.getProgress();
    p[key] = val;
    localStorage.setItem('spf_progress', JSON.stringify(p));
  },

  getQuizResults() {
    return JSON.parse(localStorage.getItem('spf_quiz_results') || '{}');
  },

  saveQuizResult(quizId, score, total) {
    const r = this.getQuizResults();
    if (!r[quizId]) r[quizId] = [];
    r[quizId].push({ score, total, date: new Date().toLocaleDateString('ar-OM') });
    localStorage.setItem('spf_quiz_results', JSON.stringify(r));
  },

  getLastQuizScore(quizId) {
    const r = this.getQuizResults();
    const arr = r[quizId];
    if (!arr || !arr.length) return null;
    return arr[arr.length - 1];
  }
};

// Sidebar builder
function buildSidebar(activePage) {
  const user = App.user;
  const isAdmin = user && user.role === 'admin';
  const navItems = [
    { page: 'dashboard.html', icon: 'fa-home', ar: 'الرئيسية', en: 'Dashboard' },
    { page: 'laws.html', icon: 'fa-book', ar: 'القوانين والأنظمة', en: 'Laws & Regulations' },
    { page: 'quiz.html', icon: 'fa-question-circle', ar: 'الاختبارات', en: 'Quizzes', badge: '5' },
    { page: 'training.html', icon: 'fa-graduation-cap', ar: 'البرامج التدريبية', en: 'Training Programs' },
    { page: 'knowledge.html', icon: 'fa-database', ar: 'قاعدة المعرفة', en: 'Knowledge Base' },
    ...(isAdmin ? [{ page: 'admin.html', icon: 'fa-cog', ar: 'لوحة الإدارة', en: 'Admin Panel' }] : [])
  ];

  return `
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-icon">🛡️</div>
      <div class="logo-text">
        <h2 class="ar-text">صندوق الحماية الاجتماعية</h2>
        <h2 class="en-text">Social Protection Fund</h2>
        <p class="ar-text">منصة التعلم</p>
        <p class="en-text">Learning Platform</p>
      </div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-group">
        <div class="nav-label ar-text">القائمة الرئيسية</div>
        <div class="nav-label en-text">MAIN MENU</div>
        ${navItems.map(item => `
          <a href="${item.page}" class="nav-item ${activePage === item.page ? 'active' : ''}" data-page="${item.page}">
            <i class="fas ${item.icon}"></i>
            <span class="ar-text">${item.ar}</span>
            <span class="en-text">${item.en}</span>
            ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
          </a>`).join('')}
      </div>
    </nav>
    <div class="sidebar-footer">
      <div class="user-chip">
        <div class="avatar" id="userAvatar">${user ? (App.lang === 'ar' ? user.name_ar : user.name_en)[0] : '?'}</div>
        <div class="user-info">
          <div class="user-name" id="userName">${user ? (App.lang === 'ar' ? user.name_ar : user.name_en) : ''}</div>
          <div class="user-role" id="userRole">${user ? (user.role === 'admin' ? (App.lang === 'ar' ? 'مدير النظام' : 'Admin') : (App.lang === 'ar' ? 'مقدم خدمة' : 'Service Agent')) : ''}</div>
        </div>
        <span class="logout-btn" onclick="App.logout()" title="تسجيل الخروج"><i class="fas fa-sign-out-alt"></i></span>
      </div>
    </div>
  </aside>`;
}

function buildTopbar(title_ar, title_en) {
  return `
  <header class="topbar">
    <h1 class="topbar-title">
      <span class="ar-text">${title_ar}</span>
      <span class="en-text">${title_en}</span>
    </h1>
    <div class="topbar-actions">
      <button class="lang-toggle" id="langToggle">EN</button>
      <div class="notif-btn"><i class="fas fa-bell"></i><span class="notif-dot"></span></div>
    </div>
  </header>`;
}
