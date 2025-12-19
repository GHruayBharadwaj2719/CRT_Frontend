import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLessons } from "../services/lessonServices";
import { API_ENDPOINTS } from "../config/api";
import {
  BookOpen,
  Moon,
  Sun,
  User,
  Menu,
  Code,
  Brain,
  Calculator,
  MessageSquare,
  X,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Edit,
  Save,
  Eye,
  EyeOff
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
}

interface PopupState {
  isOpen: boolean;
  type: "notes" | "problems" | null;
  lesson: Lesson | null;
}

interface ConfirmPopup {
  isOpen: boolean;
  title: string;
  message: string;
  type: "warning" | "danger" | "info";
  onConfirm: () => void;
}

interface Toast {
  message: string;
  type: "success" | "error" | "info" | "warning";
}

interface ProfileForm {
  fullName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
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

  const [displayName, setDisplayName] = useState(localStorage.getItem("fullName") || "User");

  /* ---------- STATE ---------- */
  const [selectedCategory, setSelectedCategory] = useState("coding");
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<Toast | null>(null);
  const [popup, setPopup] = useState<PopupState>({
    isOpen: false,
    type: null,
    lesson: null
  });
  const [confirmPopup, setConfirmPopup] = useState<ConfirmPopup>({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
    onConfirm: () => {}
  });
  const [isLoading, setIsLoading] = useState(false);

  /* ---------- PROFILE EDIT STATE ---------- */
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileForm, setProfileForm] = useState<ProfileForm>({
    fullName: localStorage.getItem("fullName") || "",
    email: localStorage.getItem("userEmail") || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  /* ---------- TOAST HELPER ---------- */
  const showToast = (message: string, type: Toast["type"] = "info") => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 3000);
  };

  /* ---------- CONFIRM POPUP HELPER ---------- */
  const showConfirm = (
    title: string,
    message: string,
    type: ConfirmPopup["type"],
    onConfirm: () => void
  ) => {
    setConfirmPopup({ isOpen: true, title, message, type, onConfirm });
  };

  const closeConfirm = () => {
    setConfirmPopup(prev => ({ ...prev, isOpen: false }));
  };

  const openPopup = (type: "notes" | "problems", lesson: Lesson) => {
    setPopup({ isOpen: true, type, lesson });
  };

  const closePopup = () => {
    setPopup({ isOpen: false, type: null, lesson: null });
  };

  /* ---------- FETCH LESSONS ---------- */
  useEffect(() => {
    setIsLoading(true);
    fetchLessons(selectedCategory)
      .then(data => {
        setLessons(data);
        showToast(`Loaded ${data.length} lessons`, "success");
      })
      .catch(err => {
        console.error("Lesson fetch failed:", err);
        showToast("Failed to load lessons", "error");
      })
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  /* ---------- LOAD PROGRESS FROM BACKEND OR LOCALSTORAGE ---------- */
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      // First try to load from backend
      fetch(API_ENDPOINTS.GET_PROGRESS(email))
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data?.completedLessons) {
            setCompletedLessons(data.completedLessons);
            // Also save to localStorage as backup
            localStorage.setItem("completedLessons", JSON.stringify(data.completedLessons));
          } else {
            // Fallback to localStorage if backend has no data
            const localProgress = localStorage.getItem("completedLessons");
            if (localProgress) {
              setCompletedLessons(JSON.parse(localProgress));
            }
          }
        })
        .catch(err => {
          console.error("Failed to load progress from backend:", err);
          // Fallback to localStorage
          const localProgress = localStorage.getItem("completedLessons");
          if (localProgress) {
            setCompletedLessons(JSON.parse(localProgress));
          }
        });
    }
  }, []);

  /* ---------- SAVE TO LOCALSTORAGE ON EVERY CHANGE ---------- */
  useEffect(() => {
    if (Object.keys(completedLessons).length > 0) {
      localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
    }
  }, [completedLessons]);

  /* ---------- SAVE PROGRESS TO BACKEND ---------- */
  const saveProgressToBackend = async (newProgress: Record<string, boolean>) => {
    const email = localStorage.getItem("userEmail");
    const token = localStorage.getItem("token");
    if (!email) return;

    // Always save to localStorage first (instant backup)
    localStorage.setItem("completedLessons", JSON.stringify(newProgress));

    // Try to save to backend (but don't fail if backend is unavailable)
    try {
      const res = await fetch(API_ENDPOINTS.SAVE_PROGRESS(email), {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          ...(token && { "Authorization": `Bearer ${token}` })
        },
        body: JSON.stringify({ completedLessons: newProgress })
      });
      
      if (!res.ok) {
        console.warn("Backend save failed, but localStorage backup is saved");
        return null;
      }
      
      return res.json();
    } catch (err) {
      console.warn("Backend unavailable, progress saved to localStorage only", err);
      return null;
    }
  };

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
    showConfirm(
      "Logout",
      "Are you sure you want to logout?",
      "warning",
      () => {
        localStorage.clear();
        showToast("Logged out successfully", "success");
        setTimeout(() => navigate("/signin", { replace: true }), 500);
        closeConfirm();
      }
    );
  };

  /* ---------- PROFILE EDIT HANDLERS ---------- */
  const openProfileModal = () => {
    setProfileForm({
      fullName: localStorage.getItem("fullName") || "",
      email: localStorage.getItem("userEmail") || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setProfileModalOpen(true);
    setProfileOpen(false);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
    setShowCurrentPassword(false);
    setShowNewPassword(false);
  };

  const handleProfileFormChange = (field: keyof ProfileForm, value: string) => {
    setProfileForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = async () => {
    // Validation
    if (!profileForm.fullName.trim()) {
      showToast("Name cannot be empty", "error");
      return;
    }

    if (profileForm.newPassword) {
      if (!profileForm.currentPassword) {
        showToast("Please enter current password to change password", "error");
        return;
      }
      if (profileForm.newPassword.length < 6) {
        showToast("New password must be at least 6 characters", "error");
        return;
      }
      if (profileForm.newPassword !== profileForm.confirmPassword) {
        showToast("New passwords do not match", "error");
        return;
      }
    }

    setIsSavingProfile(true);

    try {
      const updateData: Record<string, string> = {
        fullName: profileForm.fullName,
        email: profileForm.email
      };

      if (profileForm.newPassword) {
        updateData.currentPassword = profileForm.currentPassword;
        updateData.newPassword = profileForm.newPassword;
      }

      const res = await fetch(API_ENDPOINTS.UPDATE_USER, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updateData)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to update profile");
      }

      // Update localStorage
      localStorage.setItem("fullName", profileForm.fullName);
      setDisplayName(profileForm.fullName);
      
      showToast("Profile updated successfully!", "success");
      closeProfileModal();
    } catch (err: any) {
      console.error("Failed to update profile:", err);
      showToast(err.message || "Failed to update profile", "error");
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleResetProgress = () => {
    showConfirm(
      "Reset Progress",
      "This will reset all your progress. This action cannot be undone!",
      "danger",
      async () => {
        setCompletedLessons({});
        localStorage.setItem("completedLessons", JSON.stringify({}));
        await saveProgressToBackend({});
        showToast("Progress has been reset successfully!", "success");
        closeConfirm();
      }
    );
  };

  const handleToggleComplete = async (lessonId: string, lessonTitle: string) => {
    const newValue = !completedLessons[lessonId];
    const newProgress = { ...completedLessons, [lessonId]: newValue };
    setCompletedLessons(newProgress);
    
    // Save to backend (will always save to localStorage as backup)
    await saveProgressToBackend(newProgress);
    
    // Show success toast (progress is saved at least to localStorage)
    if (newValue) {
      showToast(`✅ "${lessonTitle}" marked as complete!`, "success");
    } else {
      showToast(`"${lessonTitle}" marked as incomplete`, "info");
    }
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
            <BookOpen size={20} /> Placement Preparation
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
                  <p className="profile-name">{displayName}</p>
                  <p className="profile-email">{localStorage.getItem("userEmail")}</p>
                  <div className="profile-divider"></div>
                  <button className="profile-btn" onClick={openProfileModal}>
                    <Edit size={16} /> Edit Profile
                  </button>
                  <button className="profile-btn logout" onClick={handleLogout}>
                    Logout
                  </button>
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

            <div className="progress-actions">
              <button className="reset-progress-btn" onClick={handleResetProgress}>
                Reset Progress
              </button>
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
            {isLoading ? (
              <div className="loading-state">Loading lessons...</div>
            ) : lessons.length === 0 ? (
              <div className="empty-state">No lessons found for this category.</div>
            ) : (
              lessons.map(lesson => (
                <div key={lesson.id} className="lesson-card">
                  <h3>{lesson.title}</h3>
                  <p className="lesson-duration">{lesson.duration}</p>

                  <button
                    className={`complete-btn ${completedLessons[lesson.id] ? "done" : ""}`}
                    onClick={() => handleToggleComplete(lesson.id, lesson.title)}
                  >
                    {completedLessons[lesson.id]
                      ? "Completed ✓"
                      : "Mark as Complete"}
                  </button>

                  <div className="lesson-secondary-actions">
                    {selectedCategory === "coding" && lesson.notes && (
                      <button
                        className="toggle-btn"
                        onClick={() => openPopup("notes", lesson)}
                      >
                        📘 Notes
                      </button>
                    )}

                    {lesson.problems && lesson.problems.length > 0 && (
                      <button
                        className="toggle-btn secondary"
                        onClick={() => openPopup("problems", lesson)}
                      >
                        🧠 Practice Problems
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <footer className="dashboard-footer">
          © 2025 PlacementPrep. Created by G Hruday Bharadwaj and Team
        </footer>

        {/* ================= TOAST NOTIFICATION ================= */}
        {toastMessage && (
          <div className={`toast toast-${toastMessage.type}`}>
            <span className="toast-icon">
              {toastMessage.type === "success" && <CheckCircle size={18} />}
              {toastMessage.type === "error" && <XCircle size={18} />}
              {toastMessage.type === "warning" && <AlertTriangle size={18} />}
              {toastMessage.type === "info" && <Info size={18} />}
            </span>
            {toastMessage.message}
          </div>
        )}

        {/* ================= CONFIRM POPUP ================= */}
        {confirmPopup.isOpen && (
          <div className="confirm-overlay" onClick={closeConfirm}>
            <div className={`confirm-modal confirm-${confirmPopup.type}`} onClick={e => e.stopPropagation()}>
              <div className="confirm-icon">
                {confirmPopup.type === "danger" && <AlertTriangle size={48} />}
                {confirmPopup.type === "warning" && <AlertTriangle size={48} />}
                {confirmPopup.type === "info" && <Info size={48} />}
              </div>
              <h3>{confirmPopup.title}</h3>
              <p>{confirmPopup.message}</p>
              <div className="confirm-actions">
                <button className="confirm-cancel-btn" onClick={closeConfirm}>
                  Cancel
                </button>
                <button 
                  className={`confirm-ok-btn ${confirmPopup.type}`}
                  onClick={confirmPopup.onConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= POPUP MODAL ================= */}
        {popup.isOpen && popup.lesson && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-modal" onClick={e => e.stopPropagation()}>
              <div className="popup-header">
                <h3>
                  {popup.type === "notes" ? "📘 Notes" : "🧠 Practice Problems"} - {popup.lesson.title}
                </h3>
                <button className="popup-close-btn" onClick={closePopup}>
                  <X size={20} />
                </button>
              </div>
              <div className="popup-content">
                {popup.type === "notes" && selectedCategory === "coding" && (
                  <>
                    {popup.lesson.notes?.[selectedLanguage]?.length ? (
                      popup.lesson.notes[selectedLanguage].map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="popup-link">
                          🔗 {link.name}
                        </a>
                      ))
                    ) : (
                      <p className="no-content">No notes for {selectedLanguage.toUpperCase()}</p>
                    )}
                  </>
                )}
                {popup.type === "problems" && popup.lesson.problems && (
                  <>
                    {popup.lesson.problems.map((p, i) => (
                      <a key={i} href={p.url} target="_blank" rel="noreferrer" className="popup-link">
                        🧠 {p.name}
                      </a>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= PROFILE EDIT MODAL ================= */}
        {profileModalOpen && (
          <div className="popup-overlay" onClick={closeProfileModal}>
            <div className="profile-modal" onClick={e => e.stopPropagation()}>
              <div className="profile-modal-header">
                <h3><User size={20} /> Edit Profile</h3>
                <button className="popup-close-btn" onClick={closeProfileModal}>
                  <X size={20} />
                </button>
              </div>
              
              <div className="profile-modal-content">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={profileForm.fullName}
                    onChange={e => handleProfileFormChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={e => handleProfileFormChange("email", e.target.value)}
                    placeholder="Enter your email"
                    disabled
                  />
                  <span className="form-hint">Email cannot be changed</span>
                </div>

                <div className="form-divider">
                  <span>Change Password (Optional)</span>
                </div>

                <div className="form-group">
                  <label>Current Password</label>
                  <div className="password-input">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      value={profileForm.currentPassword}
                      onChange={e => handleProfileFormChange("currentPassword", e.target.value)}
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>New Password</label>
                  <div className="password-input">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={profileForm.newPassword}
                      onChange={e => handleProfileFormChange("newPassword", e.target.value)}
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    value={profileForm.confirmPassword}
                    onChange={e => handleProfileFormChange("confirmPassword", e.target.value)}
                    placeholder="Confirm new password"
                  />
                </div>

                <div className="profile-modal-actions">
                  <button className="cancel-btn" onClick={closeProfileModal}>
                    Cancel
                  </button>
                  <button 
                    className="save-btn" 
                    onClick={handleSaveProfile}
                    disabled={isSavingProfile}
                  >
                    {isSavingProfile ? "Saving..." : <><Save size={16} /> Save Changes</>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
