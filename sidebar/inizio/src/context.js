import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setModal] = useState(false);

  const openSideBar = () => setIsSideBarOpen(true);

  const closeSideBar = () => setIsSideBarOpen(false);

  const openModal = () => setModal(true);

  const closeModal = () => setModal(false);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        closeSideBar,
        openSideBar,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
