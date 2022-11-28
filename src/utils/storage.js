const CATEGORIES_KEY = "CATEGORIES_KEY";

export const setCategoriesStorage = (data) =>
  localStorage.setItem(CATEGORIES_KEY, JSON.stringify(data));

export const getCategoriesStorage = async () => {
  const value = localStorage.getItem(CATEGORIES_KEY);
  return value ? JSON.parse(value) : null
};
