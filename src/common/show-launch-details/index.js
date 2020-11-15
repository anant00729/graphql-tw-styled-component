import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../../context/GlobalContext";
import { ShowDetailsContainer } from "./styles";
import Paper from "@material-ui/core/Paper";
import ArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function ShowDetailsModal() {
  const classes = useStyles();
  const {
    isModalOpen,
    handleModalClick,
    launch,
    currentModalLaunchIndex,
    onNextLaunchClick,
  } = useContext(GlobalContext);

  const handleClose = () => {
    handleModalClick(false);
  };

  const handleRightClick = () => {
    onNextLaunchClick(currentModalLaunchIndex, false);
  };

  const handleLeftClick = () => {
    onNextLaunchClick(currentModalLaunchIndex, true);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      onNextLaunchClick(currentModalLaunchIndex, false);
    } else if (e.keyCode === 37) {
      onNextLaunchClick(currentModalLaunchIndex, true);
    }
  };

  return Object.keys(launch).length ? (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isModalOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalOpen}>
        <Paper
          className="flex"
          style={{ outline: "none", borderRadius: "12px" }}
          onKeyDown={handleKeyDown}
        >
          <ShowDetailsContainer>
            <div id="arrow-container" onClick={handleLeftClick}>
              <ArrowLeftIcon />
            </div>

            <div id="content-container">
              <img
                src={launch?.links?.mission_patch_small}
                alt="mission-item"
              />
              <h2>{launch?.mission_name}</h2>
              <h2 id="details">{launch?.details}</h2>
            </div>
            <div id="arrow-container" onClick={handleRightClick}>
              <ArrowRightIcon />
            </div>
          </ShowDetailsContainer>
        </Paper>
      </Fade>
    </Modal>
  ) : null;
}

export default ShowDetailsModal;
