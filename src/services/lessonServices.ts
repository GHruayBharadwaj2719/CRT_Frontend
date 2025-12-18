import { API_ENDPOINTS } from "../config/api";

export const fetchLessons = async (category: string) => {
  const res = await fetch(API_ENDPOINTS.LESSONS_BY_CATEGORY(category));
  if (!res.ok) {
    throw new Error("Failed to fetch lessons");
  }
  return res.json();
};
