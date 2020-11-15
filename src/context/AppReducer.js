import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SAVE_LAUNCH_LIST,
  LEFT_CLICK,
  RIGHT_CLICK,
} from "./AppTypes";

const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLOSE_MODAL:
    case OPEN_MODAL: {
      return {
        ...state,
        isModalOpen: payload?.isOpen,
        launch: payload?._d,
        currentModalLaunchIndex: payload?.index,
      };
    }

    case SAVE_LAUNCH_LIST: {
      return {
        ...state,
        launchList: payload?.list,
      };
    }

    case LEFT_CLICK:
    case RIGHT_CLICK: {
      debugger;
      let { launchList, launch, currentModalLaunchIndex } = state;
      debugger;
      if (launchList[payload?.index]) {
        launch = launchList[payload?.index];
        currentModalLaunchIndex = payload?.index;
      }
      return {
        ...state,
        launch,
        currentModalLaunchIndex,
      };
    }

    default:
      return state;
  }
};
export default AppReducer;
