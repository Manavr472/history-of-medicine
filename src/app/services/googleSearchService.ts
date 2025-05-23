import axios from 'axios';

const GOOGLE_SEARCH_API_URL = 'https://www.googleapis.com/customsearch/v1';

export const fetchGoogleSearchResults = async (query: string): Promise<{ title: string; link: string }[]> => {
    try {
        const response = await axios.get(GOOGLE_SEARCH_API_URL, {
            params: {
                q: query,
                key: 'AIzaSyAGHw00B32dpYBvsWjL497d8LrYpSlTY7Y', // Replace with your actual API key
                cx: '006b46308ec074ac7' // Replace with your actual search engine ID
            }
        });
        const data = response.data as { items: { title: string; link: string }[] }; // Explicitly type response.data
        return data.items; // Assuming the API returns items in this structure
    } catch (error) {
        console.error('Error fetching search results:', error);
        throw error;
    }
};