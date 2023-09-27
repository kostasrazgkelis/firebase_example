import React, { useState, useEffect } from 'react'; 
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";

function FireStore() {
    const [user, setUser] = useState("");
    
    useEffect(() =>{
        getDocs(collection(db, "user")).then((snapShot) => {
            snapShot.forEach((doc) => {
                // console.log(doc.id, doc.data());
                console.log(doc.data());
                setUser(doc.data());
              });
        })
    }, []);

    return (
        <>
            <div>FireStore</div>
            {Object.keys(user).length >0? 
                <>
                    <div>user is present</div> 
                    <div>Name: {user.name}</div>
                    <div>Name: {user.phone}</div>

                </>
                :
                <div>No data to present</div>
            }
        </>
    )
}

export default FireStore