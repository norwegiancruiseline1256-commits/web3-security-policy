* {
  box-sizing: border-box;
}

:root {
  --bg: #06131d;
  --bg-soft: #0d1f2a;
  --panel: rgba(12, 25, 35, 0.9);
  --panel-strong: rgba(9, 19, 27, 0.96);
  --line: rgba(122, 198, 255, 0.2);
  --text: #edf7ff;
  --muted: #b4c0cb;
  --green: #53f5af;
  --cyan: #6ae7ff;
  --purple: #a78bfa;
  --yellow: #ffd166;
  --shadow: 0 24px 70px rgba(9, 15, 22, 0.65);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at 15% 20%, rgba(96, 169, 255, 0.22), transparent 32%),
    radial-gradient(circle at 80% 15%, rgba(91, 233, 180, 0.18), transparent 20%),
    linear-gradient(135deg, var(--bg) 0%, #071824 40%, #020b12 100%);
  color: var(--text);
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px 40px;
  position: relative;
  z-index: 1;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(7, 20, 28, 0.72);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
  position: sticky;
  top: 16px;
  z-index: 30;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.brand-mark {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: linear-gradient(135deg, rgba(82, 245, 175, 0.2), rgba(106, 231, 255, 0.3));
  color: var(--green);
  border: 1px solid rgba(83, 245, 175, 0.4);
  box-shadow: 0 0 18px rgba(83, 245, 175, 0.2);
}

.nav {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.96rem;
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--text);
}

.nav-button {
  border: 1px solid rgba(106, 231, 255, 0.4);
  background: linear-gradient(135deg, rgba(106, 231, 255, 0.12), rgba(167, 139, 250, 0.12));
  color: var(--text);
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}

.hero {
  display: grid;
  grid-template-columns: 1.6fr 0.9fr;
  align-items: center;
  gap: 42px;
  padding: 72px 0 28px;
}

.eyebrow {
  display: inline-block;
  margin: 0 0 14px;
  color: var(--cyan);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.76rem;
  font-weight: 700;
}

.hero-copy h1 {
  font-size: clamp(2.5rem, 5vw, 4.6rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
  margin: 0;
}

.lead {
  max-width: 640px;
  margin-top: 18px;
  font-size: 1.09rem;
  line-height: 1.75;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--green), #7ef0d0);
  color: #041610;
  box-shadow: 0 10px 26px rgba(83, 245, 175, 0.25);
}

.secondary-btn {
  color: var(--text);
  border: 1px solid rgba(106, 231, 255, 0.35);
  background: rgba(255, 255, 255, 0.02);
}

.primary-btn:hover,
.secondary-btn:hover,
.nav-button:hover {
  transform: translateY(-1px);
}

.status-list {
  list-style: none;
  padding: 0;
  margin: 26px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.status-list li {
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid rgba(83, 245, 175, 0.34);
  background: rgba(83, 245, 175, 0.06);
  color: #dffef2;
  font-size: 0.86rem;
}

.hero-panel {
  border: 1px solid var(--line);
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(12, 27, 38, 0.96), rgba(9, 15, 22, 0.92));
  padding: 22px;
  box-shadow: var(--shadow);
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: var(--muted);
  font-weight: 600;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.green {
  background: var(--green);
  box-shadow: 0 0 16px rgba(83, 245, 175, 0.9);
}

.metric-card,
.policy-tile {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 16px 18px;
  margin-bottom: 14px;
}

.metric-card span,
.tile-label {
  display: block;
  color: var(--muted);
  margin-bottom: 5px;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.metric-card strong,
.policy-tile strong {
  font-size: 1.12rem;
}

.content-section {
  margin-top: 38px;
  padding: 28px 0 10px;
}

.section-heading {
  margin-bottom: 18px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.05em;
}

.text-box,
.list-box {
  border: 1px solid var(--line);
  background: rgba(8, 19, 27, 0.85);
  border-radius: 22px;
  padding: 26px 28px;
  box-shadow: var(--shadow);
}

.text-box p,
.list-box p {
  margin: 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.info-card {
  padding: 24px 20px;
  border-radius: 20px;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(10, 24, 34, 0.9), rgba(8, 17, 23, 0.88));
  box-shadow: var(--shadow);
}

.card-icon {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(83, 245, 175, 0.15), rgba(106, 231, 255, 0.16));
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.info-card h3 {
  margin: 0 0 10px;
  font-size: 1.1rem;
}

.info-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.split-section {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 22px;
  align-items: center;
}

.list-box ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
}

.list-box li {
  position: relative;
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.7;
}

.list-box li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 12px rgba(83, 245, 175, 0.7);
}

.warning-box {
  border-color: rgba(255, 209, 102, 0.35);
  background: rgba(45, 35, 11, 0.4);
}

.warning-box p {
  color: #f7e9b6;
}

.footer {
  margin-top: 36px;
  padding: 26px 0 8px;
  color: var(--muted);
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

@media (max-width: 980px) {
  .hero,
  .split-section,
  .card-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .page-shell {
    padding-left: 16px;
    padding-right: 16px;
  }

  .topbar {
    padding: 14px 16px;
  }

  .nav {
    gap: 10px 16px;
  }

  .nav a {
    font-size: 0.82rem;
  }

  .hero {
    padding-top: 48px;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
  }
}































































