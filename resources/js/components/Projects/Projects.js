import React from "react";

import  Project  from './Project';
import ProjectAdd from "./ProjectAdd";
import User from "../../auth/User";
import { concat } from "lodash";

class Projects extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            projects: null,
            adding: false,
        }
    }

    componentDidMount() {
        fetch("/api/projects")
        .then(res => res.json())
        .then( (result) => {
            this.setState({
                projects: result
            });
        });
    }

    render() {
        let projects = this.state.projects;
        let adding = this.state.adding;
        return (
            <div className="container">
                <div className="banner row justify-content-center">
                    <div className="col-10 col-md-6">
                        <div className="row justify-content-between">
                            <h1>Projects</h1>
                            {User.isLoggedIn() ? 
                            <i className="icon fa-solid fa-plus fa-3x" onClick={() => this.setState({ adding: !adding })}></i> :
                            <></>}
                        </div>
                    </div>
                </div>
                {adding ? <ProjectAdd action="/api/projects" addEvent = {(project) => {
                        this.setState({adding: !adding, projects: projects.concat([project])});
                    }}/> : <></>}
                {projects ? projects.map((project, index) =>
                    <Project project={project} key= {index}/>
                ) : <div></div>}
            </div>);
    }
}
export default Projects;
