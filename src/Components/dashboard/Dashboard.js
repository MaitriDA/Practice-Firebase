import React,{Component} from 'react';
import ProjectList from '../projects/projectList';
import Notification from './Notification';
import './Dashboard.css';

class Dashboard extends Component{
    render(){
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

export default Dashboard;