import './App.css';
import Map from './components/Map';
import React, {useEffect, useState} from "react";

function App() {
    const [ currentLocationDetails, setCurrentLocationDetails ] = useState(null);

    useEffect(()=> {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let data = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
                setCurrentLocationDetails(data);
            },function(error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            });
        } else {
            console.log("Not Available");
        }
    }, [])

  return (
    <div className="App">
        { currentLocationDetails &&
            <div>
                <Map currentLocationDetails={currentLocationDetails} />
            </div>
        }
    </div>
  );
}

export default App;
