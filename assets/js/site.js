(function () {
  const page = document.body.dataset.page || "home";
  const nav = [
    ["home", "Home", "index.html"],
    ["cv", "CV", "cv.html"],
    ["talks", "Talks", "talks.html"],
    ["research", "Research", "research.html"],
    ["publications", "Publications", "publications.html"]
  ];

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `
      <a class="skip-link" href="#main-content">Skip to main content</a>
      <header class="masthead">
        <div class="masthead__inner">
          <a class="site-title" href="index.html">Dr. Wang Warren Chen</a>
          <button class="nav-toggle" type="button" aria-controls="site-navigation" aria-expanded="false" aria-label="Toggle navigation"><span></span></button>
          <nav class="site-nav" id="site-navigation" aria-label="Primary navigation">
            <ul>${nav.map(([key, label, href]) => `<li><a href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}</ul>
          </nav>
        </div>
      </header>`;

    const toggle = header.querySelector(".nav-toggle");
    const menu = header.querySelector(".site-nav");
    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const profile = document.querySelector("[data-profile]");
  if (profile) {
    const icon = {
      email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z"/><path d="m4 6 8 7 8-7"/></svg>',
      scholar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11.2V16c3.5 2.7 8.5 2.7 12 0v-4.8"/><path d="M22 9v6"/></svg>',
      research: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/><path d="M7.5 15h9"/></svg>',
      github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5v-2.2c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v3.1A10 10 0 0 0 12 2Z"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.1M11 17v-7M11 13c.7-2 5-2.2 5 1v3"/></svg>',
      xhs: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23zM20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5A3.5 3.5 0 0 1 20 23z"/></svg>'
    };
    profile.innerHTML = `
      <div class="profile__sticky">
        <img class="profile__photo" src="assets/images/me.jpg" alt="Dr. Wang Warren Chen in doctoral graduation dress" width="1600" height="1066">
        <h2 class="profile__name">Dr. Wang Warren Chen</h2>
        <p class="profile__role">Machine Learning Engineer<br><a href="https://www.tiktok.com/" target="_blank" rel="noopener">TikTok</a>, Singapore</p>
        <address class="profile__address">One Raffles Quay<br>South Tower<br>Singapore 048583</address>
        <ul class="profile__links" aria-label="Profile links">
          <li><a href="mailto:wchen22@connect.hku.hk"><span class="profile__icon">${icon.email}</span>Email</a></li>
          <li><a href="https://scholar.google.com/citations?hl=en&amp;user=iPIsozUAAAAJ" target="_blank" rel="noopener"><span class="profile__icon">${icon.scholar}</span>Google Scholar</a></li>
          <li><a href="https://www.researchgate.net/profile/Wang-Chen-82" target="_blank" rel="noopener"><span class="profile__icon">${icon.research}</span>ResearchGate</a></li>
          <li><a href="https://github.com/WangWarrenChen" target="_blank" rel="noopener"><span class="profile__icon profile__icon--github">${icon.github}</span>GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/wang-chen-b4a17b2a0/" target="_blank" rel="noopener"><span class="profile__icon profile__icon--linkedin">${icon.linkedin}</span>LinkedIn</a></li>
          <li><a href="https://orcid.org/0009-0009-5128-7316" target="_blank" rel="me noopener"><span class="profile__icon profile__icon--orcid" aria-hidden="true">iD</span>ORCID</a></li>
          <li><a href="https://www.xiaohongshu.com/user/profile/63956a570000000026006c44" target="_blank" rel="noopener"><span class="profile__icon">${icon.xhs}</span>Xiaohongshu</a></li>
        </ul>
      </div>`;
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `<footer class="footer"><div class="footer__inner">&copy; 2026 Dr. Wang Warren Chen. Built for GitHub Pages.</div></footer>`;
  }
})();
