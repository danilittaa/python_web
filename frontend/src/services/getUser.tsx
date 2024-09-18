const getUser = () => {
  return JSON.parse(localStorage.getItem("user") || "");
};

export { getUser };
