import React, { Component } from 'react';

class Signup extends Component {
    state={
        firstName:'',
        lastName:'',
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
                    <h3>SIGN UP</h3>

                    <div className="inputField">
                        <label htmlFor="fisrtName">First Name</label>
                        <input type="text" id="fisrtName" onChange={this.handleChange}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="inputField">
                    <button className="signinBtn">SIGN UP</button>
                    </div>
                </form>                
            </div>
        )
    }
}

export default Signup;
