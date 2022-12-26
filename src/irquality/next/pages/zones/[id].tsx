import { Zone } from "@models/zone"
import { 
    Link 
} from 'react-router-dom';

type Props = {
    item?: Zone
    errors?: string
}


export default function getZoneById({ zone }: { zone: Zone }) {
    const response = fetch("https://api.waqi.info/feed/here/?token=7f7dd31fdbcc13a8199017163fa476048599ae22")
    //https://api.waqi.info/feed/here/?token=7f7dd31fdbcc13a8199017163fa476048599ae22

    return (
        <>
            <h3> Air Quality data in your zone</h3>
            <p>
                Name: {zone.name}
            </p>
            <p>
                latitude: {zone.latittude} 
                longitude: {zone.longitude}
            </p>
            <div>
                <Link to={zone.id.toString()}>{zone.name}</Link>
            </div>
        </>
    )
}