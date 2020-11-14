import React from "react";
import { AppBar } from "./styles";

function Header() {
  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/SpaceX_Crew-1_logo.png/645px-SpaceX_Crew-1_logo.png";
  return (
    <AppBar>
      <img src={imgUrl} alt="logo" />
      <label>Space X</label>
    </AppBar>
  );
}

export default React.memo(Header);
