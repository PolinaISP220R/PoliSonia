import { useParams } from "react-router-dom"

export default function Users () {
    const param = useParams()
    console.log(param);
    
    return(
        // /users/1
        <>
        <div className="one_users">
            <h1>Пользователь под номером </h1>{param.id}
        </div>
        </>
    )
}