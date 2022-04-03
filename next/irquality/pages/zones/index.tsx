import { Zone } from "../../models/zone"

type Props = {
    items: Zone[]
}

export async function getStaticProps() {
    const zones = await fetch('https://6249cac1852fe6ebf8801ef7.mockapi.io/api/v1/zones');
    return { props: { zones } }
}

const Zones = ({ items }: Props) => (
    <div>
        <ul>
            {
                items.map((zone) => {
                    return (
                        <li> {zone.name}</li>
                    )
                })
            }

        </ul>
    </div>
)

export default Zones;