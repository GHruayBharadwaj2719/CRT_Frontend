import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLessons } from "../services/lessonServices";
import {
  BookOpen,
  Moon,
  Sun,
  User,
  Menu,
  Code,
  Brain,
  Calculator,
  MessageSquare
} from "lucide-react";
import "../styles/dashboard.css";

/* ---------- TYPES ---------- */
interface Link {
  name: string;
  url: string;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  notes?: Record<string, Link[]>;
  problems?: Link[];
  showNotes?: boolean;
  showProblems?: boolean;
}

/* ---------- CATEGORIES ---------- */
const categories = [
  { id: "coding", name: "Coding & DSA", icon: <Code size={18} />, total: 21 },
  { id: "quant", name: "Quantitative", icon: <Calculator size={18} />, total: 8 },
  { id: "reasoning", name: "Reasoning", icon: <Brain size={18} />, total: 8 },
  { id: "communication", name: "Communication", icon: <MessageSquare size={18} />, total: 8 }
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  /* ---------- AUTH ---------- */
  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      navigate("/signin", { replace: true });
    }
  }, [navigate]);

  const fullName = localStorage.getItem("fullName") || "User";

  /* ---------- STATE ---------- */
  const [selectedCategory, setSelectedCategory] = useState("coding");
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);

  /* ---------- FETCH LESSONS ---------- */
  useEffect(() => {
    fetchLessons(selectedCategory)
      .then(data =>
        setLessons(
          data.map((l: Lesson) => ({
            ...l,
            showNotes: false,
            showProblems: false
          }))
        )
      )
      .catch(err => console.error("Lesson fetch failed:", err));
  }, [selectedCategory]);

  /* ---------- PROGRESS (IMAGE-1 STYLE) ---------- */

  // overall progress (all categories combined – static totals)
  const overallTotal = categories.reduce((sum, c) => sum + c.total, 0);
  const overallCompleted = Object.values(completedLessons).filter(Boolean).length;
  const overallPercent =
    overallTotal === 0 ? 0 : Math.round((overallCompleted / overallTotal) * 100);

  // category progress
  const categoryProgress = categories.map(cat => {
    const completed =
      selectedCategory === cat.id
        ? lessons.filter(l => completedLessons[l.id]).length
        : 0;

    const percent =
      cat.total === 0 ? 0 : Math.round((completed / cat.total) * 100);

    return { ...cat, completed, percent };
  });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin", { replace: true });
  };

  return (
    <div className={`dashboard-root ${darkMode ? "dark" : ""}`}>
      {/* ================= SIDEBAR ================= */}
      <aside className={`sidebar ${sidebarOpen ? "expanded" : "collapsed"}`}>
        <div className="sidebar-header">
          <span className="logo">PlacementPrep</span>
          <button className="icon-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={18} />
          </button>
        </div>

        {categories.map(cat => (
          <button
            key={cat.id}
            className={`sidebar-link ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span className="icon">{cat.icon}</span>
            {sidebarOpen && <span>{cat.name}</span>}
          </button>
        ))}
      </aside>

      {/* ================= MAIN ================= */}
      <main className={`main-content ${sidebarOpen ? "" : "collapsed"}`}>
        {/* ================= HEADER ================= */}
        <header className="dashboard-header">
          <h1 className="dashboard-title">
            <BookOpen size={20} /> Dashboard
          </h1>

          <div className="header-actions">
            <button className="icon-btn" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="profile">
              <button className="icon-btn" onClick={() => setProfileOpen(!profileOpen)}>
                <User size={18} />
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  <p className="profile-name">{fullName}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <div className="dashboard-container">

          {/* ================= PROGRESS (IMAGE-1) ================= */}
          <div className="progress-card">
            <div className="progress-header">
              <h2>📊 Overall Progress</h2>
              <span className="progress-percent">{overallPercent}%</span>
            </div>

            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${overallPercent}%` }}
              />
            </div>

            <p className="progress-sub">
              {overallCompleted} / {overallTotal} topics completed
            </p>

            <h3 className="category-title">🎯 Category Progress</h3>

            {categoryProgress.map(cat => (
              <div key={cat.id} className="category-row">
                <div className="category-label">
                  <span>{cat.name}</span>
                  <span>
                    {cat.completed}/{cat.total} ({cat.percent}%)
                  </span>
                </div>

                <div className="progress-bar-bg small">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${cat.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* LANGUAGE SELECT → ONLY CODING */}
          {selectedCategory === "coding" && (
            <select
              className="language-select"
              value={selectedLanguage}
              onChange={e => setSelectedLanguage(e.target.value)}
            >
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
              <option value="javascript">JavaScript</option>
              <option value="c">C</option>
            </select>
          )}

          {/* ================= LESSONS ================= */}
          <div className="lesson-grid">
            {lessons.map(lesson => (
              <div key={lesson.id} className="lesson-card">
                <h3>{lesson.title}</h3>
                <p className="lesson-duration">{lesson.duration}</p>

                <button
                  className={`complete-btn ${completedLessons[lesson.id] ? "done" : ""}`}
                  onClick={() =>
                    setCompletedLessons(prev => ({
                      ...prev,
                      [lesson.id]: !prev[lesson.id]
                    }))
                  }
                >
                  {completedLessons[lesson.id]
                    ? "Completed ✓"
                    : "Mark as Complete"}
                </button>

                <div className="lesson-secondary-actions">
                  {selectedCategory === "coding" && lesson.notes && (
                    <button
                      className="toggle-btn"
                      onClick={() =>
                        setLessons(prev =>
                          prev.map(l =>
                            l.id === lesson.id
                              ? { ...l, showNotes: !l.showNotes }
                              : l
                          )
                        )
                      }
                    >
                      📘 Notes
                    </button>
                  )}

                  {lesson.problems && lesson.problems.length > 0 && (
                    <button
                      className="toggle-btn secondary"
                      onClick={() =>
                        setLessons(prev =>
                          prev.map(l =>
                            l.id === lesson.id
                              ? { ...l, showProblems: !l.showProblems }
                              : l
                          )
                        )
                      }
                    >
                      🧠 Practice Problems
                    </button>
                  )}
                </div>

                {selectedCategory === "coding" && lesson.showNotes && (
                  <div className="lesson-links">
                    {lesson.notes?.[selectedLanguage]?.length ? (
                      lesson.notes[selectedLanguage].map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noreferrer">
                          🔗 {link.name}
                        </a>
                      ))
                    ) : (
                      <p>No notes for {selectedLanguage.toUpperCase()}</p>
                    )}
                  </div>
                )}

                {lesson.showProblems && lesson.problems && (
                  <div className="lesson-links">
                    {lesson.problems.map((p, i) => (
                      <a key={i} href={p.url} target="_blank" rel="noreferrer">
                        🧠 {p.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
