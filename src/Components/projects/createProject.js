import React, { Component } from 'react';
import {createProject} from '../../Store/Actions/projectsAction';
import {connect} from 'react-redux';

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
        this.props.createProject(this.state)
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

const mapDispatchToProps=(dispatch)=>{
    return{
        createProject:(project)=>dispatch(createProject(project))
    }
}
export default connect(null,mapDispatchToProps)(CreateProject);