import React from "react";
import Respository from "./Repository";

export default class RepositoryList extends React.Component{
    render(){
        return (
            <div>
                  {this.props.repositories.map((repos,index) => (
                    <Respository
                        key={index}
                        homepage={repos.homepage}
                        html_url={repos.html_url}
                        full_name={repos.full_name}
                        description={repos.description}
                        contributors_url={repos.contributors_url}
                        stargazers_count={repos.stargazers_count}
                        getContributors={this.props.getContributors}
                    />
                    ))}
            </div>
        )
    }
}