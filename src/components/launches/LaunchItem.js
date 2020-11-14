import React from "react";
import { MissionsItem } from "./styles";

function LaunchItem({
  _d: {
    launch_success,
    mission_name,
    links: { mission_patch_small },
    launch_year,
  },
}) {
  return (
    <MissionsItem launchSuccess={launch_success}>
      {mission_patch_small && (
        <img src={mission_patch_small} alt="mission-item" />
      )}
      <label id="mission-name">{mission_name}</label>
      <label id="mission-year">{launch_year}</label>
    </MissionsItem>
  );
}

export default React.memo(LaunchItem);
