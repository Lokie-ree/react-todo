"use client";

import React from "react";
import ThemeController from "./ThemeController";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center m-4 p-4 bg-primary rounded-xl">
        <h1 className="text-2xl text-primary-content font-bold">
          Randall's To-Do App
        </h1>
        <ThemeController />
      </header>
    </>
  );
};

export default Header;
