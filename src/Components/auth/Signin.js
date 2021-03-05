import React, { Component } from 'react';

class Signin extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="signin">
                <form onSubmit={this.handleSubmit} className="figninForm">
                    <h3>SIGN IN</h3>

                    <div className="inputField">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="inputField">
                    <button className="signinBtn">LOGIN</button>
                    </div>
                </form>                
            </div>
        )
    }
}

export default Signin;
