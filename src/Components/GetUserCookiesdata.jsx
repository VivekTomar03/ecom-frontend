export const getUserDataFromCookies = () => {
    // Get the cookie string
    const cookieString = document.cookie;

    // Split the cookie string into an array of individual cookies
    const cookies = cookieString.split(';');

    // Iterate over the cookies to find the one containing user data
    for (let cookie of cookies) {
        // Trim any leading or trailing whitespace
        cookie = cookie.trim();

        // Check if the cookie starts with 'userData='
        if (cookie.startsWith('userData=') ) {
            // Extract the value part of the cookie
            const userDataString = cookie.substring('userData='.length);

            // Parse the JSON string to get the user data object
            const userData = JSON?.parse(userDataString);

            return userData;
        }
    }

    // If no 'userData' cookie is found, return null or handle accordingly
    return null;
};

// Example usage

export const getUserDataFromCookiesdata = () => {
    // Get the cookie string
    const cookieString = document.cookie;

    // Split the cookie string into an array of individual cookies
    const cookies = cookieString.split(';');

    // Iterate over the cookies to find the one containing user data
    for (let cookie of cookies) {
        // Trim any leading or trailing whitespace
        cookie = cookie.trim();

        // Check if the cookie starts with 'userData='
        if (cookie.startsWith('userDataLogin=') ) {
            // Extract the value part of the cookie
            const userDataString = cookie.substring('userDataLogin='.length);

            // Parse the JSON string to get the user data object
            const userDataLogin = JSON?.parse(userDataString);

            return userDataLogin;
        }
    }

    // If no 'userData' cookie is found, return null or handle accordingly
    return null;
};