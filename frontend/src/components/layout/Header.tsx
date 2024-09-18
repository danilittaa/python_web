import LogoIcon from "@/lib/icons/logoIcon";
import SignInPopup from "../popups/SignInPopup";
import SignUpPopup from "../popups/SignUpPopup";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLoggedIn = localStorage.getItem("user");
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center px-20 py-4 shadow-md fixed bg-white/30 backdrop-blur-[3px] z-[2]">
      <div className="flex gap-3">
        <LogoIcon />
        <p className="text-blue-400">FitMonitor</p>
      </div>
      <div className="flex gap-14 items-center">
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
        <div className="space-x-5">
          {isLoggedIn ? (
            <button
              onClick={() => navigate("/home")}
              className="border border-gray-400 px-5 py-2 hover:bg-blue-400 hover:text-white"
            >
              Ввійти
            </button>
          ) : (
            <SignInPopup>
              <button className="border border-gray-400 px-5 py-2 hover:bg-blue-400 hover:text-white">
                Ввійти
              </button>
            </SignInPopup>
          )}
          <SignUpPopup>
            <button className="hover:text-blue-400">Створити акаунт</button>
          </SignUpPopup>
        </div>
      </div>
    </header>
  );
};

export default Header;
