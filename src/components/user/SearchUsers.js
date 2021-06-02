import React, { useEffect, useState } from "react";
import UserList from "./UserList";

export default function SearchUsers() {
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        fetch(`https://api.github.com/repos/facebook/react/contributors`,{method:"GET"})
        .then(response => response.json())
        .then(resp=>{
            setLoading(false);
            setUserList(resp);
        }).catch(err =>{
            setLoading(false);
            alert("Erro:" + err.message)
            console.log(err);
        });
    },[]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Facebook React Search Contributors</h1>
                </div>
            </div>
            <div className="row">
                {loading ? <div className="spinner-border m-5" role="status"></div> : null}
            </div>
            {userList.length ? <UserList users={userList} /> : null}
        </div>
    );
}
