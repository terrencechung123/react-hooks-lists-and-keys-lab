import React from "react";

function NavBar() {
  const links = [
    "home",
    "about",
    "projects"
  ];
  const listLinks = links.map((link)=>
  <a key={link} href={"#"+link} >
    {link}
    </a>
  );
  return (
    <nav>
    {listLinks}
    </nav>)
}

export default NavBar;
