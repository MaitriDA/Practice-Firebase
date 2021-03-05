import React, { Component } from 'react';

class CreateProject extends Component {
    state={
        title:'',
        content:''
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
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <div className="inputField">
                        <label htmlFor="password">Content</label>
                        <textarea id="content" onChange={this.handleChange}/> 
                    </div>
                    <div className="inputField">
                    <button className="signinBtn">SUBMIT</button>
                    </div>
                </form>                
            </div>
        )
    }
}

export default CreateProject;