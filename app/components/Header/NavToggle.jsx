"use client";
import { useState } from "react";

const NavToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`nav-toggle ${isToggled ? "toggled" : ""}`}
      aria-expanded={isToggled}
      aria-controls="menu-list"
      aria-label="navigation menu"
    >
      <span class="icon-menu"></span>
    </button>
  );
};

export default NavToggle;
