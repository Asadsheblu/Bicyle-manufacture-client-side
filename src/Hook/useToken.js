import { useEffect, useState } from "react"

const useToken=(user)=>{
    const [token,setToken]=useState('')
    useEffect(()=>{
        const email=user?.user?.email
        console.log(email);
        const currentUser={email:email}
        if(email){
            fetch(`https://bicyle-manufacture-server-side.onrender.com/user/${email}`,{
                method:"PUT",
                    headers:{
                        "content-type":"application/json"
                    },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{console.log(data)
            const accessToken=data.token
            
                localStorage.setItem("accessToken",accessToken)
            setToken(accessToken)
        })
        }
    },[user])
    return (token)
}
export default useToken