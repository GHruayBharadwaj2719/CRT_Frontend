import React from "react";
import { categories, courses } from "../data/beginnerData";
import "../styles/progress.css";

interface Props {
  completedLessons: Record<string, boolean>;
}

const ProgressOverview: React.FC<Props> = ({ completedLessons }) => {

  const categoryStats = categories.map(cat => {
    const lessons = courses[cat.id] || [];
    const total = lessons.length;
    const completed = lessons.filter(l => completedLessons[l.id]).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    return { ...cat, total, completed, percent };
  });

  const overallTotal = categoryStats.reduce((s, c) => s + c.total, 0);
  const overallCompleted = categoryStats.reduce((s, c) => s + c.completed, 0);
  const overallPercent =
    overallTotal === 0 ? 0 : Math.round((overallCompleted / overallTotal) * 100);

  return (
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

      {categoryStats.map(cat => (
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
  );
};

export default ProgressOverview;
