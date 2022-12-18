import React, { useState, useContext } from 'react';
import sublinks from '../data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    /* Creating a state variable called isSidebarOpen and setting it to false. */
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    /* Creating a state variable called isSubmenuOpen and setting it to false. */
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    /* Creating a state variable called location and setting it to an empty object. */
    const [location, setLocation] = useState({});
    /* Creating a state variable called page and setting it to an empty object. */
    const [page, setPage] = useState({ page: '', links: [] });

    /**
     * When the openSidebar function is called, the setIsSidebarOpen function is called with the
     * argument of true.
     */
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    /**
     * When the user clicks the close button, the sidebar should close.
     */
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    /**
     * When the user clicks on a link, find the corresponding sublink and open the submenu.
     * @param text - the text of the link that was clicked
     * @param coordinates - {x: number, y: number}
     */
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    /**
     * When the user clicks on the document, close the submenu.
     */
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    /* Returning the AppContext.Provider with the value of the state variables. */
    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
                location,
                page,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

/**
 * This function returns the value of the AppContext object, which is the global state object.
 * @returns The useContext hook is being used to return the AppContext.
 */
export const useGlobalContext = () => {
    return useContext(AppContext);
};
