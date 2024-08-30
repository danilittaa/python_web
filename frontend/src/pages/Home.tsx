const Home = () => {
  const role = localStorage.getItem("role");
  return (
    <>
      <p>home</p>
      <p>
        role: <span>{role}</span>
      </p>
    </>
  );
};

export default Home;
