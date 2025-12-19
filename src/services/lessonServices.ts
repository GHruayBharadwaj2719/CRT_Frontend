import { API_ENDPOINTS } from "../config/api";

export const fetchLessons = async (category: string) => {
  const res = await fetch(API_ENDPOINTS.LESSONS_BY_CATEGORY(category));
  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }
  return res.json();
};

export const saveProgress = async (email: string, completedLessons: Record<string, boolean>) => {
  const res = await fetch(API_ENDPOINTS.SAVE_PROGRESS(email), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completedLessons })
  });
  if (!res.ok) {
    throw new Error("Failed to save progress");
  }
  return res.json();
};

export const getProgress = async (email: string) => {
  const res = await fetch(API_ENDPOINTS.GET_PROGRESS(email));
  if (!res.ok) {
    throw new Error("Failed to get progress");
  }
  return res.json();
};
