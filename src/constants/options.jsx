export const SelectTravelList=[
    {
        id:1,
        title:"just me",
        desc:"A solo traveler in exploration",
        icon: '🎧',
        people:"1"
    },
    {
        id:2,
        title:"A Couple",
        desc:"Two Travelers in tandem",
        icon: '🥂',
        people:"2 People"
    },
    {
        id:3,
        title:"Family",
        desc:"A group fun loving family",
        icon: '🏡',
        people:"3 to 5 people"
    },
    {
        id:4,
        title:"Friends",
        desc:"A bunch of thrill-seekers",
        icon: '⛴️',
        people:"5 to 10 people"
    },
]

export const SelectBudgetOptions=[
    {
        id: 1,
        title: "Budget",
        desc: "Affordable options for budget-conscious travelers",
        icon: '💵',
    },
    {
        id: 2,
        title: "Mid-range",
        desc: "Comfortable choices for a balanced experience",
        icon: '💰',
    },
    {
        id: 3,
        title: "Luxury",
        desc: "Premium experiences for those who seek the best",
        icon: '💸',
    }
]

export const AI_Prompt= "Generate a Travel Plan for Location: {Location} for {Duration} days for {People} with a {Budget} budget, Give me a hotel options list with HotelName, HotelAddress, Price, HotelImageURL, GeoCoordinates, rating, description (atleast 4 hotels) and suggest itinerary with PlaceName, PlaceDetails, PlaceImageURL, GeoCoordinates, TicketPricing, BestTime each of the location for {Duration} days with each day under a Plan object as Activities in a structured and valid JSON format do not change the terms as mentioned above."