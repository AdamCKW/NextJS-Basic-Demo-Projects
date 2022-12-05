import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

/**
 * The AppProvider function is a React component that returns a React Context Provider.
 *
 * The Provider is a component that makes the Context object available to all the components in the
 * component tree.
 *
 * The Provider takes a value prop, which is where you define the Context object.
 *
 * The Provider also takes a children prop, which is where you define the components that will have
 * access to the Context object.
 *
 * The Provider is wrapped around the components that will have access to the Context object.
 *
 *
 * The Provider is wrapped
 * @returns The AppProvider is returning the AppContext.Provider.
 */
const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isModalOpen,
                openModal,
                closeModal,
                openSidebar,
                closeSidebar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// custom hook
/**
 * This function returns the value of the AppContext object, which is the global state object.
 * @returns The useContext hook is being used to return the AppContext.
 */
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
