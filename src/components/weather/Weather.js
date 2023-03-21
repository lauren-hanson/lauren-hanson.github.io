import { useState, useEffect, useRef } from 'react'
import ReactWeather, { useVisualCrossing } from 'react-open-weather';
import { getDestinationByTrip } from "../../managers/TripManager"

export const Weather = () => {

    const [destinations, setDestinations] = useState([])
    const [lat, setLat] = useState({})
    const [lon, setLon] = useState({})

    const { data, isLoading, errorMessage } = useVisualCrossing({
        key: 'KHNCLCMYLD4CM6AQM65ZMZZAQ',
        lat: '',
        lon: '',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    })

    useEffect(() => {
        getDestinationByTrip().then((destArray) => { setDestinations(destArray) })
    })

    const handleChange = (event) => {
        event.preventDefault()

        setLat(destinations.destination.latitude)
        setLon(destinations.destination.longitude)
    }

    const customStyles = {
        fontFamily: 'Roboto Mono',
        gradientStart: '#0181C2',
        gradientMid: '#04A7F9',
        gradientEnd: '#4BC4F7',
        locationFontColor: '#FFF',
        todayTempFontColor: '#FFF',
        todayDateFontColor: '#B5DEF4',
        todayRangeFontColor: '#B5DEF4',
        todayDescFontColor: '#B5DEF4',
        todayInfoFontColor: '#B5DEF4',
        todayIconColor: '#FFF',
        forecastBackgroundColor: '#FFF',
        forecastSeparatorColor: '#DDD',
        forecastDateColor: '#777',
        forecastDescColor: '#777',
        forecastRangeColor: '#777',
        forecastIconColor: '#4BC4F7',
    };


    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Nashville"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
            theme={customStyles}
        />
    );
};