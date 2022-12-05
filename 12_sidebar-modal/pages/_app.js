import '../styles/globals.css';
import { AppProvider } from '../components/context';

/**
 * The MyApp function is a wrapper for the entire application. It takes in a Component and pageProps as
 * props and returns a component that is wrapped in the AppProvider component
 * @returns The AppProvider is being returned with the Component and pageProps.
 */
function MyApp({ Component, pageProps }) {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
}

export default MyApp;
