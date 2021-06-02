import React from 'react';

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

function Respository({full_name, description, homepage, html_url,stargazers_count,contributors_url,getContributors}) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{full_name}</h4>
                <p className="card-text">{description}</p>
                <button onClick={() => openInNewTab(html_url)} className="btn btn-primary">Go to repo</button>
                { homepage ? <button onClick={() => openInNewTab(homepage)} className="btn btn-primary">Go to project site</button> : null}
                <button onClick={() =>{getContributors(contributors_url)}} className="btn btn-primary">See Contributors</button>
                <p> &#9733; {stargazers_count}</p>
            </div>
        </div>
    )
}

export default Respository;