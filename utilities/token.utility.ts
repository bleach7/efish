export const getToken = () => {
  const token = localStorage.getItem("ACCESS_TOKEN");

  return token;
};

export const setToken = (value: string) => {
  localStorage.setItem("ACCESS_TOKEN", value);
};

export const removeToken = () => {
  localStorage.removeItem("ACCESS_TOKEN");
};
