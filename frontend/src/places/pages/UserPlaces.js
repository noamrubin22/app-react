import React from "react";
import { useParams} from "react-router-dom"

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [{
    id: "p1",
    title: "Empire State Building",
    description: "Famous sky scraper in the world",
    imageUrl: "https://www.tripsavvy.com/thmb/iyspJOwO3zsWsOWtERqo3cWrSHE=/2576x2576/smart/filters:no_upscale()/empire-state-building-at-sunset-171080501-59f9d0c6d088c000102668bb.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: { lat: 40.7484405, lng:-73.9878531},
    creator: "u1"
},
{
    id: "p2",
    title: "Empire State Building",
    description: "Famous sky scraper in the world",
    imageUrl: "https://www.tripsavvy.com/thmb/iyspJOwO3zsWsOWtERqo3cWrSHE=/2576x2576/smart/filters:no_upscale()/empire-state-building-at-sunset-171080501-59f9d0c6d088c000102668bb.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: { lat: 40.7484405, lng:-73.9878531},
    creator: "u2"
},
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
