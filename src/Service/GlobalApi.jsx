const BASE_URL = 'https://places.googleapis.com/v1/places:searchText';
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GEMINI_API_KEY,
        'X-Goog-FieldMask':[
            'places.photos',
            'places.displayName',
            'places.id',

        ]
}
}

export const GetPlaceDetails=(data)=>axios.post(BASE_URL, data, config)
