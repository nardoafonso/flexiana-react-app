import React, { useEffect, useState } from "react";
import UserList from "../user/UserList";
import paginate from "../../utils/paginate";
import Pagination from "./Pagination";
import RepositoryList from "./RepositoryList";

export default function SearchRepository(){
    const [value, setValue] = useState("")
    const [contributorsUrl, setContributorsUrl] = useState("");
    const [searchedString, setSearchedString] = useState("");
    const [repositoriesList, setRepositoriesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pager, setPager] = useState({});

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    useEffect(()=>{
        if(searchedString){
            setLoading(true);
            fetch(`https://api.github.com/search/repositories?q=${searchedString}in:name&page=${currentPage}`,{method:"GET"})
            .then(response => response.json())
            .then(resp =>{
                let newPager = paginate(resp.total_count,currentPage,30,10)
                console.log(newPager);
                setLoading(false);
                setRepositoriesList(resp);
                setPager(newPager)
            }).catch(err =>{
                setLoading(false);
                alert("Error: "+ err.message);
                console.log(err);
            })
        }
    },[searchedString, currentPage])

    const setPage = (event, page) =>{
        event.preventDefault();
        setCurrentPage(page);
    }

    useEffect(()=>{
       if(contributorsUrl){
        fetch(contributorsUrl,{method:"GET"})
        .then(response => response.json())
        .then(resp =>{
            setUserList(resp);
        })
        .catch(err =>{
            alert("Erro:" + err.message)
            console.log(err);
        });
       }
    },[contributorsUrl])

    const getRepositoryContributors = (contributors_url) =>{
        setUserList([]);
        setContributorsUrl(contributors_url);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setSearchedString(value);
    }

    return (
        <div className="row">
            <div className={userList.length ? "col-md-6" : "col-md-12"}>
                <form className="form-inline mb-4" onSubmit={handleSubmit}>
                    <input id="repoNameInput" type="text" className="form-control mr-2" placeholder="Repository Name" onChange={handleChange}/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                {loading ? <div className="spinner-border m-5" role="status"></div> : null}
                {repositoriesList.total_count && !loading ? <RepositoryList repositories={repositoriesList.items} getContributors={getRepositoryContributors} /> : null}
                {repositoriesList.total_count && Object.keys(pager).length > 0 ? <Pagination pager={pager} setPage={setPage} /> : null}
            </div>
            {userList.length ? <div className="col-md-6"><UserList users={userList} /></div> : null}
        </div>
    )
}