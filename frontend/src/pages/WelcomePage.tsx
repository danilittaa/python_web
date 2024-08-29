import Header from "@/components/layout/Header";

function App() {
  return (
    <body className="text-gray-600">
      <Header />
      <main className="py-20 px-64">
        <div id="about-us">
          <p className="absolute top-40 left-44 text-[50px] text-gray-600 w-[700px]">
            Ми надаємо найкращі рішення для{" "}
            <span className="text-blue-400">
              моніторингу та організації медичних показників
            </span>{" "}
            для спортсменів
          </p>
          <img
            className="w-[500px] h-[500px] absolute right-40 top-40 z-[-1]"
            src="images/sport.png"
            alt="sport"
          />
        </div>

        <div id="services" className="mt-[700px]">
          <p className="text-5xl text-center">Послуги:</p>
          <ul className="text-2xl list-disc mt-11 flex flex-col gap-5">
            <li>Моніторинг здоров'я</li>
            <li>Планування тренування</li>
            <li>Відстеження прогресу</li>
            <li>Комунікація між спортсменами та тренерами</li>
          </ul>
        </div>
      </main>
      <footer
        id="#ontacts"
        className="bg-blue-400 py-9 px-20 flex flex-col gap-5 text-white"
      >
        <a href="mailto:mail@gmail.com">mail@gmail.com</a>
        <p>+380123456789</p>
      </footer>
    </body>
  );
}

export default App;
