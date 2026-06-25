import { useState, useEffect, useRef } from "react";
import santaBrowserImg from "./assets/images.jpg"
console.log(santaBrowserImg);
import outreachImg from "./assets/outReachPipeline1.jpg"
console.log(outreachImg);
import seleniumImg from "./assets/SeleniumTestNG.webp"
console.log(seleniumImg);
import splitBillImg from "./assets/splitTheBill2.png"
console.log(splitBillImg);

import {
    FaJava,
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaAws, FaCheckCircle
} from "react-icons/fa";

import {
    SiJavascript,
    SiSpringboot,
    SiHibernate,
    SiMysql,
    SiPostgresql,
    SiSelenium,
    SiPostman,
    SiJira,
    SiIntellijidea,
    SiEclipseide
} from "react-icons/si";

import {FaVial} from "react-icons/fa";
import {FaRegCheckCircle} from "react-icons/fa";

/* ──────────────────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────────────────── */

// Each skill carries its own brand color + a tiny inline SVG mark.
// Icons are intentionally simple geometric/letterform marks (not traced logos)
// to avoid any trademark/copyright reproduction issues, while still reading
// instantly as "that technology" via color + initials + shape language.
const skills = [
    // Programming
    { name: "Java", icon: FaJava, cat: "programming" },
    { name: "Python", icon: FaPython, cat: "programming" },
    { name: "JavaScript", icon: SiJavascript, cat: "programming" },

    // Frontend
    { name: "React.js", icon: FaReact, cat: "frontend" },
    { name: "HTML5", icon: FaHtml5, cat: "frontend" },
    { name: "CSS3", icon: FaCss3Alt, cat: "frontend" },
    { name: "Bootstrap", icon: FaBootstrap, cat: "frontend" },

    // Backend
    { name: "Spring Boot", icon: SiSpringboot, cat: "backend" },
    { name: "Spring MVC", icon: SiSpringboot, cat: "backend" },
    { name: "Hibernate ORM", icon: SiHibernate, cat: "backend" },
    { name: "REST APIs", icon: SiSpringboot, cat: "backend" },

    // Database
    { name: "MySQL", icon: SiMysql, cat: "database" },
    { name: "PostgreSQL", icon: SiPostgresql, cat: "database" },

    // Automation
    { name: "Selenium WebDriver", icon: SiSelenium, cat: "automation" },
    { name: "TestNG", icon: FaVial, cat: "automation" },
    { name: "Page Object Model", icon: FaCheckCircle, cat: "automation" },
    { name: "REST Assured", icon: SiPostman, cat: "automation" },

    // Tools
    { name: "Postman", icon: SiPostman, cat: "tools" },
    { name: "JIRA", icon: SiJira, cat: "tools" },
    { name: "IntelliJ IDEA", icon: SiIntellijidea, cat: "tools" },
    { name: "Eclipse IDE", icon: SiEclipseide, cat: "tools" },

    // Version Control
    { name: "Git", icon: FaGitAlt, cat: "version" },
    { name: "GitHub", icon: FaGithub, cat: "version" },

    // Cloud
    { name: "Amazon Web Services", icon: FaAws, cat: "cloud" }
];

const catLabels = {
    programming: "Programming Languages",
    frontend: "Frontend Development",
    backend: "Backend Development",
    database: "Databases",
    automation: "Automation Testing",
    tools: "Tools & Platforms",
    version: "Version Control",
    cloud: "Cloud"
};

const projects = [
    {
        title: "Santa Browser — Cross-Platform QA",
        category:"Functional Testing",
        image:santaBrowserImg,
        status:"Completed",
        points: [
            "Performed end-to-end QA testing across Desktop, Android and iOS platforms.",
            "Executed Functional, Smoke, Sanity, Regression and System Testing.",
            "Performed API Testing and database validation.",
            "Tracked network traffic using Proxyman, Charles and Requestly.",
            "Monitored logs and crash reports using Grafana and Redash."
        ],
        tech: ["Functional Testing", "API Testing", "Regression Testing", "Proxyman", "Grafana"],
    },
    {
    title: "Split Bill Calculator",
    category:  "Full Stack Development",
    image:splitBillImg,
    status:"Completed",
    points: [
        "Developed a full-stack bill splitting application.",
        "Implemented member management and expense distribution.",
        "Integrated QR code generation for direct payments.",
        "Built REST APIs using Spring Boot and Hibernate.",
        "Designed responsive frontend using React.js."
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "Supabase (PostgreSQL)", "REST APIs", "React.js"],
    github:"https://github.com/balajiers/Split-The-Bill-Calculator",
    live: "https://split-the-bill-calculator-front-end.vercel.app/",
    },
{
    title: "Automated Cold Outreach Pipeline",
    category: "Automation",
    image: outreachImg,
    status:"Completed",
    points: [
        "Built a fully automated 4-stage lead generation pipeline.",
        "Integrated Ocean.io, Prospeo, Hunter.io and Brevo APIs.",
        "Handled authentication, pagination and rate limits.",
        "Implemented modular architecture with isolated error handling.",
        "Automated personalized outreach with zero manual intervention."
    ],
    tech: ["Java 17", "Maven", "Jackson", "REST APIs"],
},
    {
        title: "Calley CRM — Selenium Automation Suite",
        category: "Test Automation Framework",
        image:seleniumImg,
        status:"Completed",
        points: [
            "Automated Registration, Login and Agent workflows.",
            "Implemented Page Object Model architecture.",
            "Built data-driven framework using properties files.",
            "Handled dynamic popups, dropdowns and file uploads.",
            "Used TestNG priorities and dependencies for flow execution."
        ],
        tech: ["Selenium", "Java", "TestNG", "POM"],
        github: "https://github.com/balajiers/MachineTestTaskCSTech",
    },

];

const certifications = [
    { title: "Web Design & Development", org: "Internship Studios", icon: "globe" },
    { title: "Python Full Stack Training", org: "HIEE Empowering Engineers Pvt. Ltd.", icon: "py" },
    { title: "GitHub Copilot Certification", org: "VStand4U Solutions", icon: "spark" },
];

/* ──────────────────────────────────────────────────────────
   ICONS — minimal inline SVG set, stroke-based, currentColor
   ────────────────────────────────────────────────────────── */

function Icon({ name, size = 22, color = "currentColor" }) {
    const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
    switch (name) {
        case "duke": return <svg {...p}><circle cx="12" cy="9" r="4" /><path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M9 8.5c.5-1 1.5-1 2-.3M15 8.5c-.5-1-1.5-1-2-.3" /></svg>;
        case "py": return <svg {...p}><path d="M12 3c-3 0-5 1-5 4v2h5v1H5c-2 0-3 1.5-3 4s1 4 3 4h2v-2.5c0-2 1-3.5 3-3.5h4c2 0 3-1.5 3-3.5V7c0-3-2-4-5-4z" /><circle cx="9" cy="6" r="0.6" fill={color} /><circle cx="15" cy="18" r="0.6" fill={color} /></svg>;
        case "db": return <svg {...p}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></svg>;
        case "code": return <svg {...p}><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" /></svg>;
        case "js": return <svg {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 13.5v2.3c0 1-1 1.5-2 .8M15 13v4c0 .8-.6 1-1.5 1s-1.5-.4-1.5-1.2" /></svg>;
        case "atom": return <svg {...p}><circle cx="12" cy="12" r="1.8" fill={color} /><ellipse cx="12" cy="12" rx="9" ry="3.6" /><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" /></svg>;
        case "django": return <svg {...p}><path d="M10 4h3v13c0 2-1.3 3-3.5 3" /><path d="M14 9c1 0 4 .4 4 4s-3 4-4 4" /></svg>;
        case "api": return <svg {...p}><rect x="3" y="9" width="6" height="6" rx="1" /><rect x="15" y="9" width="6" height="6" rx="1" /><path d="M9 12h6" /></svg>;
        case "selenium": return <svg {...p}><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3.5 2" /></svg>;
        case "check": return <svg {...p}><path d="M5 13l4 4 10-10" /></svg>;
        case "layers": return <svg {...p}><path d="M12 4l8 4-8 4-8-4 8-4z" /><path d="M4 12l8 4 8-4M4 16l8 4 8-4" /></svg>;
        case "search": return <svg {...p}><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5L21 21" /></svg>;
        case "bolt": return <svg {...p}><path d="M12 3L5 14h6l-1 7 8-11h-6l1-7z" /></svg>;
        case "refresh": return <svg {...p}><path d="M4 4v6h6M20 20v-6h-6" /><path d="M5 14a8 8 0 0014 4M19 10A8 8 0 005 6" /></svg>;
        case "doc": return <svg {...p}><path d="M7 3h7l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" /><path d="M14 3v4h4M9 13h6M9 16h6" /></svg>;
        case "jira": return <svg {...p}><path d="M12 4l7 7-3.5 3.5L12 11l-3.5 3.5L5 11l7-7z" /><path d="M12 11l3.5 3.5L12 18l-3.5-3.5L12 11z" /></svg>;
        case "postman": return <svg {...p}><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg>;
        case "gauge": return <svg {...p}><path d="M4 14a8 8 0 0116 0" /><path d="M12 14l4-4" /><circle cx="12" cy="14" r="1" fill={color} /></svg>;
        case "git": return <svg {...p}><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="9" r="2" /><path d="M6 8v8M6 8c0 4 4 1 12 1" /></svg>;
        case "github": return <svg {...p}><path d="M12 3a9 9 0 00-2.8 17.6c.5.1.6-.2.6-.5v-1.7c-2.5.3-3-1.2-3.2-1.7-.2-.4-.8-1.5-1.4-1.8-.5-.3-.4-.6 0-.6.6 0 1.6.6 2.2 1.6.7 1.2 1.7.9 2.1.7.1-.5.3-.9.6-1.2-2.1-.2-4.3-1-4.3-4.4 0-1 .3-1.7.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .8-.2 2.6 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.2.1 2.4.6.7.9 1.4.9 2.4 0 3.4-2.2 4.2-4.3 4.4.3.3.6.9.6 1.7v2.3c0 .3.1.6.6.5A9 9 0 0012 3z" /></svg>;
        case "bug": return <svg {...p}><rect x="8" y="9" width="8" height="9" rx="4" /><path d="M9 9c0-2 1.3-3 3-3s3 1 3 3M5 12H3M21 12h-2M6 17l-2 2M18 17l2 2M6 9L4.5 7.5M18 9l1.5-1.5" /></svg>;
        case "cart": return <svg {...p}><circle cx="9" cy="20" r="1" fill={color} /><circle cx="17" cy="20" r="1" fill={color} /><path d="M3 4h2l2.4 11.5a1.5 1.5 0 001.5 1.2h7.5a1.5 1.5 0 001.5-1.2L20 8H6" /></svg>;
        case "bill": return <svg {...p}><path d="M6 3h12v18l-2.5-1.5L13 21l-2.5-1.5L8 21l-2-1.5V3z" /><path d="M9 8h6M9 11.5h6" /><path d="M9.5 15l1.3 1.3L13.5 14" /></svg>;
        case "globe": return <svg {...p}><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4a11 11 0 010 16 11 11 0 010-16z" /></svg>;
        case "spark": return <svg {...p}><path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6.5 6.5l1.5 1.5M16 16l1.5 1.5M17.5 6.5L16 8M8 16l-1.5 1.5" /><circle cx="12" cy="12" r="3" /></svg>;
        case "mail": return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 6l9 7 9-7" /></svg>;
        case "phone": return <svg {...p}><path d="M5 4h4l1.5 4.5L8 10.5a11 11 0 006 6l1.5-2.5L20 15v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" /></svg>;
        case "pin": return <svg {...p}><path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.3" /></svg>;
        case "arrow": return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
        default: return null;
    }
}

/* ──────────────────────────────────────────────────────────
   HOOKS / SMALL HELPERS
   ────────────────────────────────────────────────────────── */

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

/* ──────────────────────────────────────────────────────────
   NAV / THEME TOGGLE
   ────────────────────────────────────────────────────────── */

function ThemeToggle({ dark, setDark }) {
    return (
        <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            style={{
                position: "fixed", top: "20px", right: "24px", zIndex: 100,
                width: "52px", height: "28px", borderRadius: "999px",
                border: dark ? "1.5px solid #38bdf8" : "1.5px solid #94a3b8",
                background: dark ? "#0f172a" : "#f1f5f9",
                cursor: "pointer", display: "flex", alignItems: "center", padding: "2px",
                transition: "all 0.3s ease",
            }}
        >
            <div style={{
                width: "22px", height: "22px", borderRadius: "50%",
                background: dark ? "#38bdf8" : "#f59e0b",
                transform: dark ? "translateX(24px)" : "translateX(0)",
                transition: "transform 0.3s ease, background 0.3s ease",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "12px", lineHeight: 1,
            }}>
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
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 99,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 32px",
            backdropFilter: "blur(16px)",
            background: dark ? "rgba(2,6,23,0.78)" : "rgba(248,250,252,0.85)",
            borderBottom: dark ? "1px solid rgba(56,189,248,0.15)" : "1px solid rgba(148,163,184,0.2)",
            transition: "background 0.3s ease, border-color 0.3s ease",
        }}>
      <span style={{
          fontWeight: 800, fontSize: "1rem", letterSpacing: "0.02em",
          color: dark ? "#e2e8f0" : "#1e293b", fontFamily: "'Sora', sans-serif",
      }}>
        &lt;Balaji.dev/&gt;
      </span>
            <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center" }}>
                {sections.map((s) => (
                    <button
                        key={s}
                        onClick={() => scrollTo(s)}
                        style={{
                            padding: "6px 14px", borderRadius: "999px", border: "none",
                            background: active === s ? (dark ? "#38bdf8" : "#0ea5e9") : "transparent",
                            color: active === s ? "#fff" : (dark ? "#94a3b8" : "#475569"),
                            fontSize: "13px", fontWeight: active === s ? 600 : 400,
                            cursor: "pointer", transition: "all 0.2s ease",
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

/* ──────────────────────────────────────────────────────────
   MAIN
   ────────────────────────────────────────────────────────── */

export default function Portfolio() {
    const [dark, setDark] = useState(true);

    const bg = dark ? "#020617" : "#f8fafc";
    const bg2 = dark ? "#0f172a" : "#ffffff";
    const text = dark ? "#e2e8f0" : "#1e293b";
    const muted = dark ? "#94a3b8" : "#64748b";
    const accent = dark ? "#38bdf8" : "#0ea5e9";
    const border = dark ? "rgba(56,189,248,0.18)" : "rgba(14,165,233,0.2)";

    // Contact form state
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    // 1) Sign up free at https://formspree.io
    // 2) Create a form, copy the endpoint it gives you (looks like https://formspree.io/f/xxxxxxxx)
    // 3) Paste it below, replacing the placeholder.
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrewgybb";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
            setStatus("error");
            return;
        }
        setStatus("sending");
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json", "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("sent");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const inputStyle = {
        width: "100%",
        padding: "12px 14px",
        borderRadius: 10,
        border: `1px solid ${border}`,
        background: dark ? "#020617" : "#f8fafc",
        color: text,
        fontFamily: "'Sora', sans-serif",
        fontSize: "0.92rem",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color 0.2s",
    };

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
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "120px 8% 60px",
                    background: dark ? "#0f172a" : "#f8fafc",
                    position: "relative",
                    overflow: "hidden",
                    flexWrap: "wrap",
                }}
            >
                {/* LEFT SIDE */}
                <div
                    style={{
                        flex: "1",
                        minWidth: "320px",
                        zIndex: 2,
                    }}
                >
                    <h1
                        style={{
                            fontSize: "clamp(3rem,6vw,5rem)",
                            fontWeight: "800",
                            lineHeight: 1.1,
                            marginBottom: "10px",
                        }}
                    >
                        Hi, I am Balaji
                    </h1>

                    <h2
                        style={{
                            fontSize: "clamp(2rem,4vw,4rem)",
                            color: accent,
                            fontWeight: "800",
                            marginBottom: "20px",
                        }}
                    >
                        QA Engineer
                    </h2>

                    <p
                        style={{
                            maxWidth: "600px",
                            color: muted,
                            lineHeight: 1.8,
                            marginBottom: "30px",
                        }}
                    >
                        I am a QA Engineer and Automation Tester with hands-on
                        experience in Selenium, Java, TestNG, API Testing,
                        SQL, JIRA and Full Stack Development.
                    </p>

                    {/* Social Icons */}
                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            marginBottom: "30px",
                        }}
                    >
                        <a
                            href="https://github.com/balajiers"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon name="github" size={28} color={text} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/balaji-bandari-3a7084320/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon name="jira" size={28} color={text} />
                        </a>
                    </div>

                    {/* Resume Button */}
                    <a
                        href="/Balaji_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            background: accent,
                            color: "#fff",
                            padding: "14px 40px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            fontWeight: "600",
                        }}
                    >
                        Resume
                    </a>
                </div>

                {/* RIGHT SIDE */}
                <div
                    style={{
                        flex: "1",
                        minWidth: "320px",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                    }}
                >
                    <img
                        src="/undraw_programming_j1zw.svg"
                        alt="Developer Illustration"
                        style={{
                            width: "100%",
                            maxWidth: "550px",
                        }}
                    />
                </div>
            </section>

            {/* ── SKILLS — icon-card grid ── */}
            <section id="skills" style={{ padding: "80px 24px", background: bg2 }}>
                <FadeIn><SectionTitle title="Skills" subtitle="Tools and technologies I work with" accent={accent} /></FadeIn>

                <div style={{ maxWidth: 1040, margin: "0 auto" }}>
                    {Object.entries(catLabels).map(([cat, label], ci) => {
                        const items = skills.filter((s) => s.cat === cat);
                        return (
                            <FadeIn key={cat} delay={ci * 0.08}>
                                <div style={{ marginBottom: 36 }}>
                                    <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: 16 }}>
                                        {label}
                                    </p>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                                        {items.map((sk, i) => (
                                            <SkillCard key={sk.name} skill={sk} dark={dark} bg={bg} border={border} text={text} delay={i * 0.04} />
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
                <div style={{ marginTop: "50px" }}>
                    <h3
                        style={{
                            color: accent,
                            textAlign: "center",
                            marginBottom: "25px",
                            fontSize: "1.3rem"
                        }}
                    >
                        Manual Testing Expertise
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "12px",
                            maxWidth: "1000px",
                            margin: "0 auto"
                        }}
                    >
                        {[
                            "Test Planning",
                            "Test Case Design",
                            "Test Execution",
                            "Functional Testing",
                            "Smoke Testing",
                            "Sanity Testing",
                            "Regression Testing",
                            "Retesting",
                            "Integration Testing",
                            "System Testing",
                            "UAT",
                            "Compatibility Testing",
                            "Cross-Browser Testing",
                            "API Testing",
                            "Defect Tracking"
                        ].map((item) => (
                            <span
                                key={item}
                                style={{
                                    padding: "10px 16px",
                                    borderRadius: "999px",
                                    background: dark
                                        ? "rgba(56,189,248,0.1)"
                                        : "#e0f2fe",
                                    color: accent,
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    border: `1px solid ${accent}20`
                                }}
                            >
        {item}
      </span>
                        ))}
                    </div>
                </div>
            </section>

            <section id="experience" style={{ padding: "80px 24px", background: bg }}>
                <FadeIn>
                    <SectionTitle title="Experience" accent={accent} />
                </FadeIn>

                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <FadeIn delay={0.1}>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "140px 1fr",
                                gap: "30px",
                                alignItems: "start",
                            }}
                        >
                            {/* Timeline */}
                            <div style={{ textAlign: "right" }}>
                                <p
                                    style={{
                                        color: accent,
                                        fontWeight: 700,
                                        margin: 0,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    Dec 2025
                                </p>
                                <p
                                    style={{
                                        color: muted,
                                        marginTop: 4,
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    May 2026
                                </p>
                            </div>

                            {/* Content */}
                            <div
                                style={{
                                    position: "relative",
                                    paddingLeft: "30px",
                                    borderLeft: `2px solid ${accent}`,
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "-8px",
                                        top: 5,
                                        width: 14,
                                        height: 14,
                                        borderRadius: "50%",
                                        background: accent,
                                    }}
                                />

                                <h3
                                    style={{
                                        margin: 0,
                                        color: text,
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    QA Intern
                                </h3>

                                <p
                                    style={{
                                        color: accent,
                                        marginTop: 8,
                                        marginBottom: 20,
                                        fontWeight: 600,
                                    }}
                                >
                                    Digital Space • Hyderabad
                                </p>

                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: "20px 0",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "14px",
                                    }}
                                >
                                    {[
                                        "Designed and executed test cases for web applications.",
                                        "Performed Functional, Smoke, Sanity, Regression and API Testing.",
                                        "Developed Selenium WebDriver automation scripts using Java and TestNG.",
                                        "Validated REST APIs using Postman.",
                                        "Logged, tracked and verified defects using JIRA.",
                                        "Worked closely with developers in Agile sprint cycles."
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "12px",
                                                color: muted,
                                                lineHeight: 1.7,
                                            }}
                                        >
            <span
                style={{
                    color: accent,
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "1"
                }}
            >
                ✓
            </span>

                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 10,
                                        marginTop: 20,
                                    }}
                                >
                                    {[
                                        "Selenium",
                                        "Java",
                                        "TestNG",
                                        "Postman",
                                        "REST APIs",
                                        "JIRA",
                                        "Agile",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            style={{
                                                padding: "8px 14px",
                                                borderRadius: "999px",
                                                background: dark
                                                    ? "rgba(56,189,248,0.1)"
                                                    : "#e0f2fe",
                                                color: accent,
                                                fontSize: 13,
                                                fontWeight: 500,
                                            }}
                                        >
                                {item}
                            </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── PROJECTS ── */}
            <section id="projects" style={{ padding: "80px 24px", background: bg2 }}>
                <FadeIn>
                    <SectionTitle
                        title="Projects"
                        subtitle="Things I've Built & Tested"
                        accent={accent}
                    />
                </FadeIn>

                <div
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
                        gap: 24,
                        alignItems: "stretch",
                    }}
                >
                    {projects.map((p, i) => (
                        <FadeIn key={p.title} delay={i * 0.15}>
                            <div
                                style={{
                                    background: bg,
                                    border: `1px solid ${border}`,
                                    borderRadius: 24,
                                    padding: "30px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "all 0.3s ease",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.boxShadow = dark
                                        ? "0 20px 40px rgba(56,189,248,0.12)"
                                        : "0 20px 40px rgba(14,165,233,0.15)";
                                    // e.currentTarget.style.boxShadow =
                                    //     "0 20px 40px rgba(14,165,233,0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                {/* Image */}

                                <div
                                    style={{
                                        width: "100%",
                                        height: 210,
                                        overflow: "hidden",
                                        borderRadius: 16,
                                        marginBottom: 20,
                                        border: `1px solid ${border}`,
                                        background: dark ? "#111827" : "#f8fafc",
                                    }}
                                >
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            padding:"0px",
                                        }}
                                    />
                                </div>

                                {/* Title */}
                                <div style={{ marginBottom: 18 }}>

    <span
        style={{
            display: "inline-block",
            padding: "5px 12px",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 600,
            background: dark
                ? "rgba(56,189,248,0.12)"
                : "#e0f2fe",
            color: accent,
            marginBottom: 12
        }}
    >
        {p.category}
    </span>

                                    <h3
                                        style={{
                                            fontSize: "1.5rem",
                                            fontWeight: 800,
                                            color: text,
                                            margin: 0,
                                            lineHeight: 1.4
                                        }}
                                    >
                                        {p.title}
                                    </h3>

                                </div>

                                {/* Bullet Description */}
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        minHeight: 220,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 12,
                                    }}
                                >
                                    {p.points.map((point) => (
                                        <li
                                            key={point}
                                            style={{
                                                display: "flex",
                                                gap: 10,
                                                color: muted,
                                                lineHeight: 1.6,
                                                fontSize: "0.92rem",
                                            }}
                                        >
                                <span
                                    style={{
                                        color: accent,
                                        fontWeight: 700,
                                        marginTop: 1,
                                    }}
                                >
                                    ✓
                                </span>

                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div
                                    style={{
                                        marginTop: "auto",
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 8,
                                        paddingTop: 20,
                                    }}
                                >
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            style={{
                                                fontSize: 12,
                                                padding: "6px 12px",
                                                borderRadius: 999,
                                                background: dark
                                                    ? "rgba(56,189,248,0.1)"
                                                    : "#f0f9ff",
                                                color: accent,
                                                fontWeight: 500,
                                            }}
                                        >
                                {t}
                            </span>
                                    ))}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 12,
                                        marginTop: 20
                                    }}
                                >
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                padding: "10px 16px",
                                                borderRadius: 12,
                                                border: `1px solid ${border}`,
                                                color: text,
                                                textDecoration: "none",
                                                fontSize: 14
                                            }}
                                        >
                                            GitHub →
                                        </a>
                                    )}

                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                padding: "10px 16px",
                                                borderRadius: 12,
                                                background: accent,
                                                color: "#fff",
                                                textDecoration: "none",
                                                fontSize: 14
                                            }}
                                        >
                                            Live Demo →
                                        </a>
                                    )}
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
                                background: bg2, border: `1px solid ${border}`, borderRadius: 16, padding: "24px 28px",
                                display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
                            }}>
                                <div>
                                    <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: text, margin: "0 0 4px" }}>{e.degree}</h3>
                                    <p style={{ color: muted, fontSize: "0.875rem", margin: 0 }}>{e.school} · {e.years}</p>
                                </div>
                                <span style={{ padding: "6px 16px", borderRadius: 999, fontWeight: 700, fontSize: "0.875rem", background: dark ? "rgba(56,189,248,0.12)" : "#e0f2fe", color: accent }}>
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
                            <div
                                style={{ background: bg, border: `1px solid ${border}`, borderRadius: 18, padding: "28px 24px", textAlign: "center", transition: "all 0.3s ease" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <div style={{
                                    width: 52, height: 52, borderRadius: "50%", margin: "0 auto 14px",
                                    background: dark ? "rgba(56,189,248,0.1)" : "#f0f9ff",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <Icon name={c.icon} size={26} color={accent} />
                                </div>
                                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: text, marginBottom: 8, lineHeight: 1.4 }}>{c.title}</h3>
                                <p style={{ fontSize: "0.8rem", color: muted, margin: 0 }}>{c.org}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* ── CONTACT — two-column, real form ── */}
            <section id="contact" style={{ padding: "80px 24px 100px", background: bg }}>
                <FadeIn><SectionTitle title="Get In Touch" accent={accent} /></FadeIn>

                <div style={{
                    maxWidth: 980, margin: "0 auto", display: "grid",
                    gridTemplateColumns: "1.3fr 1fr", gap: 48,
                }}
                     className="contact-grid"
                >
                    <style>{`
            @media (max-width: 800px) {
              .contact-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

                    {/* Form */}
                    <FadeIn delay={0.1}>
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <p style={{ color: muted, lineHeight: 1.7, marginBottom: 8 }}>
                                Open to full-time roles in QA Engineering, SDET, and Full Stack Development.
                                Send a message and I'll get back to you directly.
                            </p>

                            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: text }}>
                                Name
                                <input
                                    required type="text" value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Your name"
                                    style={{ ...inputStyle, marginTop: 6 }}
                                />
                            </label>

                            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: text }}>
                                Email
                                <input
                                    required type="email" value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    placeholder="you@example.com"
                                    style={{ ...inputStyle, marginTop: 6 }}
                                />
                            </label>

                            <label style={{ fontSize: "0.85rem", fontWeight: 600, color: text }}>
                                Message
                                <textarea
                                    required rows={5} value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    placeholder="What's on your mind?"
                                    style={{ ...inputStyle, marginTop: 6, resize: "vertical", fontFamily: "'Sora', sans-serif" }}
                                />
                            </label>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                style={{
                                    marginTop: 6, padding: "13px 28px", borderRadius: 10, border: "none",
                                    background: accent, color: "#fff", fontWeight: 600, fontSize: "0.92rem",
                                    cursor: status === "sending" ? "wait" : "pointer",
                                    fontFamily: "'Sora', sans-serif", transition: "opacity 0.2s",
                                    opacity: status === "sending" ? 0.7 : 1,
                                }}
                            >
                                {status === "sending" ? "Sending…" : "Send Message"}
                            </button>

                            {status === "sent" && (
                                <p style={{ color: "#22c55e", fontSize: "0.85rem", margin: 0 }}>
                                    Thanks — your message has been sent. I'll reply soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p style={{ color: "#f87171", fontSize: "0.85rem", margin: 0 }}>
                                    Something went wrong. You can also email me directly below.
                                </p>
                            )}
                        </form>
                    </FadeIn>

                    {/* Direct info */}
                    <FadeIn delay={0.2}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                            <ContactInfoBlock icon="mail" label="Email" value="balajiers19@gmail.com" href="mailto:balajiers19@gmail.com" accent={accent} muted={muted} text={text} />
                            <ContactInfoBlock icon="phone" label="Phone" value="+91 93477 17409" href="tel:+919347717409" accent={accent} muted={muted} text={text} />
                            <div>
                                <p style={{ fontSize: "0.85rem", fontWeight: 700, color: text, marginBottom: 10 }}>Social</p>
                                <div style={{ display: "flex", gap: 10 }}>
                                    {[
                                        { icon: "github", href: "https://github.com/balajiers" },
                                        { icon: "jira", href: "https://www.linkedin.com/in/balaji-bandari-3a7084320/" },
                                    ].map((s) => (
                                        <a
                                            key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                                            style={{
                                                width: 40, height: 40, borderRadius: 10, border: `1px solid ${border}`,
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                color: muted, transition: "all 0.2s",
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = accent; e.currentTarget.style.borderColor = accent; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = muted; e.currentTarget.style.borderColor = border; }}
                                        >
                                            <Icon name={s.icon} size={18} color="currentColor" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                    <p style={{ color: dark ? "rgba(148,163,184,0.35)" : "rgba(100,116,139,0.4)", fontSize: "0.8rem", marginTop: 64, textAlign: "center" }}>
                        Designed & built with ♥ · Bandari Balaji © 2026
                    </p>
                </FadeIn>
            </section>
        </div>
    );
}

/* ──────────────────────────────────────────────────────────
   SHARED PIECES
   ────────────────────────────────────────────────────────── */

function SectionTitle({ title, subtitle, accent }) {
    return (
        <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, margin: "0 0 8px" }}>{title}</h2>
            {subtitle && <p style={{ color: accent, fontWeight: 500, fontSize: "0.95rem", margin: "0 0 12px" }}>{subtitle}</p>}
            <div style={{ width: 48, height: 3, background: accent, borderRadius: 999, margin: subtitle ? "0 auto" : "12px auto 0" }} />
        </div>
    );
}
function SkillCard({ skill, dark }) {
    const Icon = skill.icon;

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: dark ? "#ffffff" : "#ffffff",
                padding: "18px",
                borderRadius: "10px",
                minHeight: "80px",
                transition: "0.3s",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
            }}
        >
            <Icon size={34} />

            <span
                style={{
                    color: "#222",
                    fontWeight: 500,
                    fontSize: "15px"
                }}
            >
        {skill.name}
      </span>
        </div>
    );
}

function ContactInfoBlock({ icon, label, value, href, accent, muted, text }) {
    return (
        <div>
            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: text, marginBottom: 8 }}>{label}</p>
            <a
                href={href}
                style={{ display: "flex", alignItems: "center", gap: 10, color: muted, textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = muted; }}
            >
                <Icon name={icon} size={18} color="currentColor" />
                {value}
            </a>
        </div>
    );
}