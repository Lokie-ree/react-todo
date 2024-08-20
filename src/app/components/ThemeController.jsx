import React from "react";
import { FaAtom } from "react-icons/fa";

const ThemeController = () => {
  return (
    <div className="dropdown dropdown-left">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-accent btn-circle bg-accent text-accent-content"
      >
        <FaAtom className="text-xl" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-30 p-2 shadow-2xl"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            value="default"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Pastel"
            value="pastel"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Halloween"
            value="halloween"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Forest"
            value="forest"
          />
        </li>
      </ul>
    </div>
  );
};

export default ThemeController;
