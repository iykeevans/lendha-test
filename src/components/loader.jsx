import React from "react";

import Logo from "../logo.svg";

export default function Loader() {
  return (
    <div className="flex flex-column items-center justify-center h-screen w-full">
      <img src={Logo} alt="logo" className="App-logo" />
      <span>Loading...</span>
    </div>
  );
}
