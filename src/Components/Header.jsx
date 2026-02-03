import logo from "../assets/logos.svg";
import "../App.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} alt="SkillSwap logo" />
        <span>SkillSwap</span>
      </div>
    </header>
  );
};

export default Header;
