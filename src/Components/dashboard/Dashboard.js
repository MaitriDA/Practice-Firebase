import React,{Component} from 'react';
import ProjectList from '../projects/projectList';
import Notification from './Notification';
import './Dashboard.css';
import {connect} from 'react-redux';


class Dashboard extends Component{
    render(){
        console.log(this.props)
        return(
            <div className="dashboard">
                <div className="row">
                    <div className="ProjectList"><ProjectList/></div>
                    <div className="NotificationList"><Notification/></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      projects: state.project.projects  
    }
}

export default connect(mapStateToProps)(Dashboard);