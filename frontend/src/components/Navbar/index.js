import "./index.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1 className="logo">DineEase</h1>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservation">Reservation</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
      </ul>

      <button className="our-menu-btn">Our Menu</button>
    </nav>
  );
};

export default Navbar;
