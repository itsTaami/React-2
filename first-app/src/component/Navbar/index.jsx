import "./Navbar.css";
import "../../component/global.css";

const NavItems = [
  { name: "Portfolio", link: "#", className: "NavItem" },

  { name: "Blog", link: "#", className: "NavItem" },

  { name: "CV", link: "#", className: "NavItem" },

  { name: "Store", link: "#", className: "NavItem" },

  { name: "Freelance", link: "#", className: "NavItem" },

  { name: "About Me", link: "#", className: "NavItem" },

  { name: "Contact", link: "#", className: "NavItem" },
];
export const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="navbar">
        <div className="left">
          <img src="/images/Logo.svg" alt="" />
          <img src="/images/Hire Me.svg" alt="" />
        </div>
        <div className="right">
          {NavItems.map((item) => {
            return (
              <a href="{item.link}" className="{item.className}">
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
