import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const Map = () => {
    const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyBChxj3ZIkg7aU47rTwewD63jdz8QGtxC0"});
    //lat and lng of location
    const center = useMemo(() => ({lat: 44.550720, lng: -68.998350}), []);

    const options = {
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
    }

    if(!isLoaded){
        return <div className="loading">Loading...</div>
    }else{
        return(
            <GoogleMap options={options} zoom={13} center={center} mapContainerClassName="map">
                <MarkerF position={center}/>
            </GoogleMap>
        );
    }

}

export default Map;