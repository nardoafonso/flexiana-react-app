import React from "react";
export default class User extends React.Component{
    render(){
        return (
            <div className="col col-md-4">
                <div className="card" style={{width:"100%",margin:"3px", boxShadow:"1px 1px #ccc"}}>
                    <div className="card-body">
                        <img style={{height:"100px",borderRadius:"50%", marginRight:"10px"}} src={this.props.avatar} alt="user avatar" />
                        <span>{this.props.login}</span>
                    </div>
                </div>
            </div>
        );
    }
}