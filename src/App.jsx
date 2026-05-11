import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "Java", cat: "lang" }, { name: "Python", cat: "lang" },
  { name: "SQL", cat: "lang" }, { name: "HTML/CSS", cat: "lang" },
  { name: "JavaScript", cat: "lang" }, { name: "React.js", cat: "framework" },
  { name: "Django", cat: "framework" }, { name: "REST APIs", cat: "framework" },
  { name: "Selenium", cat: "testing" }, { name: "TestNG", cat: "testing" },
  { name: "POM", cat: "testing" }, { name: "Manual Testing", cat: "testing" },
  { name: "API Testing", cat: "testing" }, { name: "Automation Testing", cat: "testing" },
  { name: "Regression Testing", cat: "testing" }, { name: "Functional Testing", cat: "testing" },
  { name: "Test Case Design", cat: "testing" }, { name: "JIRA", cat: "tools" },
  { name: "Postman", cat: "tools" }, { name: "JMeter", cat: "tools" },
  { name: "Git", cat: "tools" }, { name: "GitHub", cat: "tools" },
];

const projects = [
  {
    title: "Santa Chatroom Automation Testing",
    description: "Performed automation testing for Santa Chatroom web application using Selenium WebDriver with Java, TestNG, and Page Object Model (POM). Designed and executed automated test cases for authentication, messaging, UI validations, and chat functionalities. Conducted regression and smoke testing while collaborating with developers.",
    tech: ["Java", "Selenium", "TestNG", "POM", "JIRA"],
    icon: "🤖",
  },
  {
    title: "E-Commerce Python Full Stack Application",
    description: "Developed a dynamic e-commerce web application with frontend and backend integration. Implemented user authentication, product management, shopping cart, and order functionalities using Django, React.js, SQL, HTML, CSS, and JavaScript.",
    tech: ["Python", "Django", "React.js", "SQL", "JavaScript"],
    icon: "🛒",
  },
];

const certifications = [
  { title: "Web Design & Development", org: "Internship Studios", icon: "🌐" },
  { title: "Python Full Stack Training", org: "HIEE Empowering Engineers Pvt. Ltd.", icon: "🐍" },
  { title: "GitHub Copilot Certification", org: "VStand4U Solutions", icon: "🤝" },
];

const catColors = {
  lang: { light: "#e0f2fe", dark: "#0c4a6e", text: "#0369a1" },
  framework: { light: "#f0fdf4", dark: "#14532d", text: "#15803d" },
  testing: { light: "#fdf4ff", dark: "#4a044e", text: "#a21caf" },
  tools: { light: "#fff7ed", dark: "#431407", text: "#c2410c" },
};

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      style={{
        position: "fixed",
        top: "20px",
        right: "24px",
        zIndex: 100,
        width: "52px",
        height: "28px",
        borderRadius: "999px",
        border: dark ? "1.5px solid #38bdf8" : "1.5px solid #94a3b8",
        background: dark ? "#0f172a" : "#f1f5f9",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "2px",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: dark ? "#38bdf8" : "#f59e0b",
          transform: dark ? "translateX(24px)" : "translateX(0)",
          transition: "transform 0.3s ease, background 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          lineHeight: 1,
        }}
      >
        {dark ? "🌙" : "☀️"}
      </div>
    </button>
  );
}

function NavBar({ dark }) {
  const sections = ["Home", "Skills", "Experience", "Projects", "Education", "Certifications", "Contact"];
  const [active, setActive] = useState("Home");
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        display: "flex",
        justifyContent: "center",
        padding: "12px 0",
        backdropFilter: "blur(16px)",
        background: dark ? "rgba(2,6,23,0.75)" : "rgba(248,250,252,0.8)",
        borderBottom: dark ? "1px solid rgba(56,189,248,0.15)" : "1px solid rgba(148,163,184,0.2)",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center" }}>
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            style={{
              padding: "6px 14px",
              borderRadius: "999px",
              border: "none",
              background: active === s
                ? dark ? "#38bdf8" : "#0ea5e9"
                : "transparent",
              color: active === s
                ? "#fff"
                : dark ? "#94a3b8" : "#475569",
              fontSize: "13px",
              fontWeight: active === s ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.2s ease",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  const bg = dark ? "#020617" : "#f8fafc";
  const bg2 = dark ? "#0f172a" : "#ffffff";
  const text = dark ? "#e2e8f0" : "#1e293b";
  const muted = dark ? "#94a3b8" : "#64748b";
  const accent = dark ? "#38bdf8" : "#0ea5e9";
  const border = dark ? "rgba(56,189,248,0.18)" : "rgba(14,165,233,0.2)";

  return (
    <div style={{ background: bg, color: text, fontFamily: "'Sora', sans-serif", minHeight: "100vh", transition: "all 0.3s ease" }}>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <NavBar dark={dark} />
      <ThemeToggle dark={dark} setDark={setDark} />

      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "100px 24px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          {[
            { size: 500, x: "-10%", y: "-15%", color: dark ? "rgba(56,189,248,0.07)" : "rgba(14,165,233,0.08)", dur: "8s" },
            { size: 400, x: "60%", y: "30%", color: dark ? "rgba(99,102,241,0.06)" : "rgba(99,102,241,0.07)", dur: "12s" },
            { size: 300, x: "20%", y: "60%", color: dark ? "rgba(56,189,248,0.05)" : "rgba(14,165,233,0.05)", dur: "10s" },
          ].map((o, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: o.size,
                height: o.size,
                borderRadius: "50%",
                background: o.color,
                left: o.x,
                top: o.y,
                filter: "blur(80px)",
                animation: `float${i} ${o.dur} ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>

        <style>{`
          @keyframes float0 { from { transform: translateY(0px) scale(1); } to { transform: translateY(30px) scale(1.05); } }
          @keyframes float1 { from { transform: translateY(0px) scale(1.02); } to { transform: translateY(-25px) scale(1); } }
          @keyframes float2 { from { transform: translateY(0px); } to { transform: translateY(20px); } }
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes ringPulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.08); opacity: 1; } }
        `}</style>

        {/* Profile image with animated ring */}
        <div style={{ position: "relative", marginBottom: "28px", animation: "fadeSlideIn 0.9s ease both" }}>
          <div style={{
            position: "absolute", inset: -6,
            borderRadius: "50%",
            border: `2px solid ${accent}`,
            animation: "ringPulse 3s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", inset: -14,
            borderRadius: "50%",
            border: `1px solid ${dark ? "rgba(56,189,248,0.25)" : "rgba(14,165,233,0.25)"}`,
            animation: "ringPulse 3s ease-in-out infinite 1s",
          }} />
          <img
            src="/profile.png"
            alt="Balaji"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.querySelector(".initials-fallback").style.display = "flex";
            }}
            style={{ width: 160, height: 160, borderRadius: "50%", objectFit: "cover", display: "block" }}
          />
          <div
            className="initials-fallback"
            style={{
              display: "none",
              width: 160, height: 160, borderRadius: "50%",
              background: dark ? "linear-gradient(135deg,#0c4a6e,#1e293b)" : "linear-gradient(135deg,#bae6fd,#e0f2fe)",
              alignItems: "center", justifyContent: "center",
              fontSize: 52, fontWeight: 700, color: accent,
            }}
          >BB</div>
        </div>

        <h1 style={{
          display: "inline-block",
          fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800, margin: "0 0 12px",
          // background: dark
          //   ? "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #a78bfa 100%)"
          //   : "linear-gradient(135deg, #041016 0%, #cac7f7 60%)",
           backgroundClip: "text",
           WebkitBackgroundClip: "text",
            //color: "transparent",
            //WebkitTextFillColor: "transparent",
          animation: "fadeSlideIn 0.9s ease 0.2s both",
        }}>
          Bandari Balaji
        </h1>

        <h2 style={{
          fontSize: "clamp(0.9rem, 2.2vw, 1.25rem)", fontWeight: 400, color: muted,
          margin: "0 0 24px", letterSpacing: "0.02em",
          animation: "fadeSlideIn 0.9s ease 0.35s both",
        }}>
          QA Engineer · SDET · Automation Engineer · Full Stack Developer
        </h2>

        <p style={{
          maxWidth: 680, color: muted, lineHeight: 1.8, fontSize: "1rem",
          animation: "fadeSlideIn 0.9s ease 0.5s both",
        }}>
          Passionate and detail-oriented technology enthusiast with hands-on experience in
          Manual Testing, Automation Testing, API Testing, and Full Stack Development.
          Skilled in Selenium WebDriver with Java, TestNG, REST APIs, Python, Django, and React.js.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 32, animation: "fadeSlideIn 0.9s ease 0.65s both" }}>
          {[
            { label: "GitHub", href: "https://github.com/balajiers", bg: accent },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/balaji-bandari-3a7084320/", bg: "#4f46e5" },
            //{ label: "Contact Me", href: "mailto:balajiers19@gmail.com", bg: "transparent", border: `1.5px solid ${accent}`, color: accent },
          ].map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px 28px", borderRadius: 999,
                background: btn.bg, border: btn.border || "none",
                color: btn.color || "#fff",
                fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                transition: "all 0.25s ease", display: "inline-block",
                fontFamily: "'Sora', sans-serif",
              }}
              onMouseEnter={(e) => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 8px 24px rgba(56,189,248,0.3)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "none"; }}
            >
              {btn.label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 64, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, animation: "fadeSlideIn 1s ease 1s both" }}>
          <span style={{ fontSize: 12, color: muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{
            width: 20, height: 32, borderRadius: 999, border: `1.5px solid ${muted}`,
            display: "flex", justifyContent: "center", paddingTop: 4,
          }}>
            <div style={{
              width: 4, height: 8, borderRadius: 999, background: accent,
              animation: "float0 1.5s ease-in-out infinite",
            }} />
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "80px 24px", background: bg2 }}>
        <FadeIn>
          <SectionTitle title="Skills" accent={accent} />
        </FadeIn>

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {Object.entries(
            skills.reduce((acc, s) => { (acc[s.cat] = acc[s.cat] || []).push(s); return acc; }, {})
          ).map(([cat, items], ci) => (
            <FadeIn key={cat} delay={ci * 0.1}>
              <div style={{ marginBottom: 28 }}>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: 12 }}>
                  {{ lang: "Languages", framework: "Frameworks & APIs", testing: "Testing", tools: "Tools" }[cat]}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((sk, i) => {
                    const c = catColors[cat];
                    return (
                      <SkillPill key={sk.name} name={sk.name} dark={dark} bg={dark ? "rgba(56,189,248,0.08)" : c.light} textColor={dark ? accent : c.text} border={dark ? "rgba(56,189,248,0.25)" : `${c.text}40`} delay={i * 0.04} />
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: "80px 24px", background: bg }}>
        <FadeIn><SectionTitle title="Internship Experience" accent={accent} /></FadeIn>

        <FadeIn delay={0.1}>
          <div
            style={{
              maxWidth: 800, margin: "0 auto",
              background: bg2,
              border: `1px solid ${border}`,
              borderRadius: 24, padding: "40px",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, width: 4, height: "100%",
              background: `linear-gradient(180deg, ${accent}, #818cf8)`,
              borderRadius: "4px 0 0 4px",
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: text, margin: 0 }}>
                QA Intern <span style={{ color: accent }}>@ Digital Space</span>, Hyderabad
              </h3>
              <span style={{
                padding: "4px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                background: dark ? "rgba(56,189,248,0.12)" : "#e0f2fe", color: accent,
                border: `1px solid ${accent}40`,
              }}>
                DEC 2025 – MAY 2026
              </span>
            </div>

            <p style={{ color: muted, lineHeight: 1.85, margin: 0, fontSize: "0.95rem" }}>
              Worked as a QA Intern performing Manual Testing and Automation Testing for web applications.
              Created and executed test cases, identified bugs, validated fixes, and ensured application quality.
              Performed Automation Testing using Selenium WebDriver with Java, TestNG, and Page Object Model (POM).
              Conducted API Testing using Postman and validated REST API responses.
              Participated in regression, smoke, and functional testing while collaborating with developers.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
              {["Selenium", "Java", "TestNG", "Postman", "JIRA"].map((t) => (
                <span key={t} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 999, background: dark ? "rgba(56,189,248,0.1)" : "#f0f9ff", color: accent, fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "80px 24px", background: bg2 }}>
        <FadeIn><SectionTitle title="Projects" accent={accent} /></FadeIn>

        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 24 }}>
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.15}>
              <div
                style={{
                  background: bg,
                  border: `1px solid ${border}`,
                  borderRadius: 20, padding: "32px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = dark ? "0 20px 40px rgba(56,189,248,0.12)" : "0 20px 40px rgba(14,165,233,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: text, marginBottom: 12, lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ color: muted, lineHeight: 1.75, fontSize: "0.9rem", marginBottom: 20 }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 999, background: dark ? "rgba(56,189,248,0.1)" : "#f0f9ff", color: accent, fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" style={{ padding: "80px 24px", background: bg }}>
        <FadeIn><SectionTitle title="Education" accent={accent} /></FadeIn>

        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { degree: "B.Tech – Electrical & Electronics Engineering", school: "GATES Institute of Technology", years: "2022 – 2025", grade: "CGPA: 8.0" },
            { degree: "Diploma – Electrical & Electronics Engineering", school: "Government Polytechnic, Anantapur", years: "2019 – 2022", grade: "CGPA: 7.5" },
            { degree: "X Class", school: "Padmavani High School", years: "2019", grade: "CGPA: 9.8" },
          ].map((e, i) => (
            <FadeIn key={e.degree} delay={i * 0.12}>
              <div style={{
                background: bg2, border: `1px solid ${border}`,
                borderRadius: 16, padding: "24px 28px",
                display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
              }}>
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: text, margin: "0 0 4px" }}>{e.degree}</h3>
                  <p style={{ color: muted, fontSize: "0.875rem", margin: 0 }}>{e.school} · {e.years}</p>
                </div>
                <span style={{
                  padding: "6px 16px", borderRadius: 999, fontWeight: 700, fontSize: "0.875rem",
                  background: dark ? "rgba(56,189,248,0.12)" : "#e0f2fe", color: accent,
                }}>
                  {e.grade}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" style={{ padding: "80px 24px", background: bg2 }}>
        <FadeIn><SectionTitle title="Certifications" accent={accent} /></FadeIn>

        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {certifications.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.12}>
              <div style={{
                background: bg, border: `1px solid ${border}`,
                borderRadius: 18, padding: "28px 24px", textAlign: "center",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = border;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: text, marginBottom: 8, lineHeight: 1.4 }}>{c.title}</h3>
                <p style={{ fontSize: "0.8rem", color: muted, margin: 0 }}>{c.org}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "80px 24px 100px", background: bg, textAlign: "center" }}>
        <FadeIn><SectionTitle title="Get In Touch" accent={accent} /></FadeIn>

        <FadeIn delay={0.1}>
          <p style={{ color: muted, marginBottom: 36, fontSize: "1rem" }}>
            Open to full-time roles in QA Engineering, SDET, and Full Stack Development.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 36 }}>
            {[
              { label: "balajiers19@gmail.com", href: "mailto:balajiers19@gmail.com", icon: "✉️" },
              { label: "+91 9347717409", href: "tel:+919347717409", icon: "📱" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                style={{
                  color: muted, textDecoration: "none", fontSize: "1rem",
                  display: "flex", alignItems: "center", gap: 8,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = muted; }}
              >
                <span>{c.icon}</span> {c.label}
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "https://github.com/balajiers", bg: accent },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/balaji-bandari-3a7084320/", bg: "#4f46e5" },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 32px", borderRadius: 999,
                  background: btn.bg, color: "#fff",
                  fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                  transition: "all 0.25s ease", display: "inline-block",
                  fontFamily: "'Sora', sans-serif",
                }}
                onMouseEnter={(e) => { e.target.style.opacity = "0.85"; e.target.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p style={{ color: dark ? "rgba(148,163,184,0.35)" : "rgba(100,116,139,0.4)", fontSize: "0.8rem", marginTop: 64 }}>
            Designed & built with ♥ · Bandari Balaji © 2026
          </p>
        </FadeIn>
      </section>
    </div>
  );
}

function SectionTitle({ title, accent }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, margin: "0 0 12px" }}>{title}</h2>
      <div style={{ width: 48, height: 3, background: accent, borderRadius: 999, margin: "0 auto" }} />
    </div>
  );
}

function SkillPill({ name, bg, textColor, border, delay }) {
  const [ref, inView] = useInView(0.05);
  return (
    <div
      ref={ref}
      style={{
        padding: "8px 18px", borderRadius: 999, fontSize: "0.85rem", fontWeight: 500,
        background: bg, color: textColor, border: `1px solid ${border}`,
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.85)",
        transition: `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
        cursor: "default",
      }}
    >
      {name}
    </div>
  );
}
