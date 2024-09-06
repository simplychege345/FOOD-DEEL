// Define the API URL as a constant, consider using environment variables for better flexibility
const API_URL = 'http://127.0.0.1:8000/api/johnc/';

/**
 * Fetches food items from the API.
 * 
 * @returns {Promise<any[]>} A promise resolving to an array of food items, or an empty array if the request fails.
 */
export const fetchFoodItems = async () => {
    try {
        // Use fetch with await for clarity
        const response = await fetch(API_URL);

        // Check if the response is OK
        if (!response.ok) {
            // Consider logging the status text for more detailed error messages
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        // Attempt to parse the response as JSON
        const data = await response.json();

        // Return the parsed data
        return data;
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Failed to fetch food items:', error);

        // Return an empty array to signify failure, consider throwing the error instead
        return [];
    }
};