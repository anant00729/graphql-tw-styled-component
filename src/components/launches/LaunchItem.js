import React, { useContext } from "react";
import { MissionsItem, ShowDetailsButton } from "./styles";
import Paper from "@material-ui/core/Paper";
import { GlobalContext } from "../../context/GlobalContext";

function LaunchItem({ _d, index }) {
  const {
    launch_success,
    mission_name,
    links: { mission_patch_small },
    launch_year,
  } = _d;

  const { handleModalClick } = useContext(GlobalContext);
  const handleClick = () => {
    handleModalClick(true, _d, index);
  };

  return (
    <Paper className="mx-3 sm:mx-0">
      <MissionsItem launchSuccess={launch_success}>
        {mission_patch_small && (
          <img src={mission_patch_small} alt="mission-item" />
        )}
        <label id="mission-name">{mission_name}</label>
        <div id="cta-wrapper">
          <label id="mission-year">{launch_year}</label>
          <ShowDetailsButton
            variant="contained"
            color="primary"
            onClick={() => _d && handleClick()}
          >
            Show Details
          </ShowDetailsButton>
        </div>
      </MissionsItem>
    </Paper>
  );
}

export default React.memo(LaunchItem);
