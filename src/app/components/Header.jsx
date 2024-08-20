"use client";

import React from "react";
import ThemeController from "./ThemeController";

const Header = () => {
  return (
    <header className="max-w-screen flex justify-between items-center p-3 mt-4 mr-3 ml-3 bg-primary rounded-xl">
      <h1 className="text-2xl text-primary-content font-bold">Todo App</h1>
      <ThemeController />
    </header>
  );
};

export default Header;
