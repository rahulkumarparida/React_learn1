import { useParams } from "react-router-dom"

export default function Products(){
    let {id} = useParams()
    return <div>
        <h2>Product List</h2>
        <p>Showing Products for {id} </p>
    </div>
}