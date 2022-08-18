import { Zone } from "../../models/zone"

type Props = {
    zones: Zone[]
}

export async function getStaticProps() {
    const response = await fetch('https://6249cac1852fe6ebf8801ef7.mockapi.io/api/v1/zones');
    const zones = await response.json();
    return { props: { zones: zones } }
}

const Zones = ({ zones }: Props) => {
    return (<div>
        <ul>
            {
                zones.map((zone) => {
                    return (
                        <li> 
                            {zone.name}</li>
                    )
                })
            }
        </ul>
    </div>)
}

export default Zones;