import LogoIcon from "./lib/icons/logoIcon";

function App() {
  return (
    <body className="text-gray-600">
      <header className="w-full flex justify-between items-center px-20 py-4 shadow-md fixed bg-white/30 backdrop-blur-[3px] z-[2]">
        <div className="flex gap-3">
          <LogoIcon />
          <p className="text-blue-400">FitMonitor</p>
        </div>
        <nav className="flex gap-4 text-gray-600">
          <a href="#about-us" className="hover:underline hover:text-blue-400">
            Про нас
          </a>
          <a href="#services" className="hover:underline hover:text-blue-400">
            Послуги
          </a>
          <a href="#contacts" className="hover:underline hover:text-blue-400">
            Контакти
          </a>
        </nav>
      </header>
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
