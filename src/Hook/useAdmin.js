import { useEffect, useState } from "react"

const useAdmin=user=>{
    const [admin,setAdmin]=useState(false)
    const [adminLOading,setAdminLoading]=useState(true)
    useEffect(()=>{
        const email=user?.email
        if(email){
            fetch(`https://fathomless-stream-52257.herokuapp.com/admin/${email}`,{
                method:"GET",
                headers:{
                    "content-type":"application/json",
                    authorization:`Bearer ${localStorage.getItem("accessToken")}`
                }
               
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data.admin)
                setAdmin(data.admin)
                
            
            })
        }
    },[user])
    return [admin,adminLOading]
}
export default useAdmin