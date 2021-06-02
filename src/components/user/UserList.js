import React from "react";
import User from './User';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList:this.props.users
        };
    }
    
    handleChange = (event)=>{
        let filteredList = this.props.users.filter(user => user.login.includes(event.target.value))
        this.setState({userList:filteredList});
    }

    render() {
        return (
            <div>
                <div className="">
                    <input type="text" className="form-control mb-4" placeholder="Contributor Name" onChange={this.handleChange}/>
                </div>

                <div className="row">
                    {this.state.userList.map((user) => (
                    <User
                        key={user.login}
                        login={user.login}
                        avatar={user.avatar_url}
                    />
                    ))}
                </div>
            </div>
        );
    }
}