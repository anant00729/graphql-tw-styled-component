import {
  OPEN_MODAL,
  CLOSE_MODAL,
  LEFT_CLICK,
  RIGHT_CLICK,
  SAVE_LAUNCH_LIST,
} from "./AppTypes";

export const appActions = (dispatch) => ({
  handleModalClick: (isOpen, _d = {}, index = 0) => {
    let data = { _d, isOpen, index };
    dispatch({
      type: isOpen ? CLOSE_MODAL : OPEN_MODAL,
      payload: data,
    });
  },
  onNextLaunchClick: (index = 0, isLeft = false) => {
    let data = { index };
    data.index = isLeft ? index - 1 : index + 1;
    dispatch({
      type: isLeft ? LEFT_CLICK : RIGHT_CLICK,
      payload: data,
    });
  },
  saveLaunchList: (list = []) => {
    let data = { list };
    dispatch({
      type: SAVE_LAUNCH_LIST,
      payload: data,
    });
  },
});
