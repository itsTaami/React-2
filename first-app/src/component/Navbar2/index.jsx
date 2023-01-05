// Content Navbar

import "../../component/global.css";
import "./Navbar2.css";

const Nav2Items = [
  { name: "All", link: "#", className: "Nav2Item" },

  { name: "UI Design", link: "#", className: "Nav2Item" },

  { name: "UX Design", link: "#", className: "Nav2Item" },

  { name: "Product Design", link: "#", className: "Nav2Item" },

  { name: "Articles", link: "#", className: "Nav2Item" },

  { name: "Tutorials", link: "#", className: "Nav2Item" },

  { name: "News", link: "#", className: "Nav2Item" },
];

export const Navbar2 = () => {
  return (
    <div className="Nav2">
      {Nav2Items.map((item) => {
        return (
          <a href="{item.link}" className="{item.className}">
            {item.name}
          </a>
        );
      })}
    </div>
  );
};
