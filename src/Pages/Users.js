import { useParams } from 'react-router-dom'

export default function Users() {

    const { userid } = useParams()

    console.log(userid)

    return <div>hello {userid}</div>
}