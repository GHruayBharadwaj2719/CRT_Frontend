import React from 'react';

/* Emoji icons (safe) */
const TrendingUp = () => <span>📈</span>;
const Target = () => <span>🎯</span>;

interface Lesson {
  id: string;
}

interface Category {
  id: string;
  name: string;
}

interface ProgressControllerProps {
  completedLessons: Record<string, boolean>;
  categories: Category[];
  allLessons: (catId: string) => Lesson[];
}

const ProgressController: React.FC<ProgressControllerProps> = ({
  completedLessons,
  categories,
  allLessons
}) => {
  /* ---------- CATEGORY PROGRESS ---------- */
  const categoryProgress = categories.map(cat => {
    const lessons = allLessons(cat.id);
    const total = lessons.length;

    const completed = lessons.filter(
      l => completedLessons[l.id]
    ).length;

    const percentage =
      total === 0 ? 0 : Math.round((completed / total) * 100);

    return {
      id: cat.id,
      name: cat.name,
      total,
      completed,
      percentage
    };
  });

  /* ---------- OVERALL ---------- */
  const overallTotal = categoryProgress.reduce(
    (sum, c) => sum + c.total,
    0
  );

  const overallCompleted = categoryProgress.reduce(
    (sum, c) => sum + c.completed,
    0
  );

  const overallPercentage =
    overallTotal === 0
      ? 0
      : Math.round((overallCompleted / overallTotal) * 100);

  /* ---------- COLOR ---------- */
  const barColor = (p: number) => {
    if (p < 25) return 'bg-red-400';
    if (p < 50) return 'bg-yellow-400';
    if (p < 75) return 'bg-blue-400';
    return 'bg-green-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8 border">

      {/* OVERALL */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <TrendingUp /> Overall Progress
          </h2>
          <span className="text-xl font-bold text-blue-600">
            {overallPercentage}%
          </span>
        </div>

        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${barColor(overallPercentage)}`}
            style={{ width: `${overallPercentage}%` }}
          />
        </div>

        <p className="text-sm text-gray-600 mt-2">
          {overallCompleted} / {overallTotal} topics completed
        </p>
      </div>

      {/* CATEGORY */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Target /> Category Progress
        </h3>

        <div className="space-y-4">
          {categoryProgress.map(cat => (
            <div key={cat.id}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{cat.name}</span>
                <span className="text-gray-600">
                  {cat.completed}/{cat.total} ({cat.percentage}%)
                </span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${barColor(cat.percentage)}`}
                  style={{ width: `${cat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProgressController;
