import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
// import { TripByTag } from "./TripByTag"
import { getPublicTrips, getSearchedTrips } from "../../managers/TripManager"
import { HumanDate } from "../utils/HumanDate";
import "./Trip.css"

export const AllTrips = ({ token }) => {
    const [trips, setTrips] = useState([])
    const [filteredTrips, setFilteredTrips] = useState([])
    // const [selectedTag, setSelectedTag] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        getPublicTrips().then((tripData) => setTrips(tripData))
        setFilteredTrips(trips)
    }, [])

    // useEffect(() => {
    //     if (selectedTag === 0) {
    //         setFilteredTrips(trips)
    //     } else if (selectedTag !== 0) {
    //         const filteredCopy = trips.filter(
    //             (trip) => trip.tag.id === parseInt(selectedTag)
    //         )
    //         setFilteredTrips(filteredCopy)
    //     }

    // }, [trips, selectedTag])

    return (
        <>
            {/* <TripByTag setSelectedTag={setSelectedTag} /> */}
            <div key={`trip--${trips.id}`}>
                <div className="allTripList">
                    {trips.map((trip) => {
                        return <>
                            <Link
                                style={{ textDecoration: "none", color: "inherit" }}
                                to={`/trips/${trip?.id}`}
                                className="hover"
                            >
                                <div className="allTripContainer">

                                    <div class="tripSubtitle">{trip.title}</div>

                                    <img src={trip.image_url} alt="Image 1" className="allTripBoxImage"></img>


                                    <Link style={{ textDecoration: "none", color: "inherit" }}
                                        to={`/travelers/${trip?.traveler?.id}`}>
                                        <div className=" tripLabel">{trip.traveler.full_name}</div>
                                    </Link>



                                    <span style={{ margin: 0, padding: 0 }}>
                                        <HumanDate date={trip.publication_date} />
                                    </span>

                                    <div className="tags">
                                        {trip.tag.map((t) => (
                                            <ol key={t.id} className="tagList"> {t.type} </ol>))}
                                    </div>


                                    <hr className="hr"></hr>
                                </div>
                            </Link>

                        </>
                    })}</div>
            </div >

        </>)
}
