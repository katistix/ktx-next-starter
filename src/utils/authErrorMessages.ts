import { useEffect } from "react";
import toast from "react-hot-toast";

export const getErrorMessage = (errorCode: string) => {
    switch (errorCode) {
        case "OAuthAccountNotLinked":
            return "Account not linked. Try another method.";
        default:
            return "An unknown error occurred.";
    }
};


/**
 * Custom hook to display a toast message if there is an error in the URL.
 */
export const useAuthErrorToast = () => {
    useEffect(() => {
        // Get the error from the URL
        const error = new URLSearchParams(window.location.search).get("error");
        // If there is an error, show it
        if (error) {
            const readableError = getErrorMessage(error);
            toast.error(readableError);
        }
    }, []);
}