import { useEffect, useState } from "react"

export default function Users () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com')
            .then(data => {
                //console.log(data.data)
                setUsers(data.data)
                //удачно
        })
        .cathc(e => {
            //когда произошла ошибка
            console.log('Ошибка', e.massage);
        })
        
    })
    return(
        <>
        <div className="one_users">
           <h1>Один Пользователь</h1> 
        </div>
        </>
    )

}