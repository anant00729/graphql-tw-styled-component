import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { appActions } from "./AppActions";
import PropTypes from "prop-types";

// Init State of chatbot
const initialStateOfChatbot = {
  isModalOpen: false,
  launch: {},
  currentModalLaunchIndex: 0,
  launchList: [],
};

// Create global context
export const GlobalContext = createContext({ ...initialStateOfChatbot });

export const GlobalProvider = ({ children }) => {
  const [appStates, dispatch] = useReducer(AppReducer, initialStateOfChatbot);

  return (
    <GlobalContext.Provider
      value={{
        ...appStates,
        ...appActions(dispatch),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.object,
};
