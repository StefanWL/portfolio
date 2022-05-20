import React, { Component } from 'react';

import User from "../../auth/User";
import ProjectEdit from './ProjectEdit';
import ProjectDelete from './ProjectDelete';

class Project extends Component {
    static displayName = Project.name;
    constructor (props) {
        super(props);
        this.state = {
            editing: false,
            project: this.props.project,
        }
    }

    render() {
        const project = this.state.project;
        const editing = this.state.editing;
        return (
            <>
                {project ?
                    <div className="project row justify-content-center mt-5 mb-5">
                        <div className="col-10 col-md-6">
                            <div className="row justify-content-between">
                                <h3 className="col-6">{project?.title}</h3>
                                <div className="col-4 d-flex justify-content-end">
                                    {!editing ?
                                    <span className="pt-2">
                                        <a className="pr-2" href={project?.url}>Site</a>
                                        <a className="pr-2" href={project?.repository}>GitHub</a>
                                    </span>
                                     : <></>}
                                    {User.isLoggedIn() ?
                                    <span>
                                        <i className="icon pr-2 fa-solid fa-pen-to-square fa-2x" onClick={() => this.setState({ editing: !editing })}></i>
                                        <ProjectDelete action={'/api/projects/' + project?.id} submitEvent = {() => this.setState({ editing: false, project: null })}/>
                                    </span> :
                                    <></>}
                                </div>
                            </div>
                            {!editing ? <p>{project?.content}</p> : <></>}
                            {!editing ? <img className="w-100" src={"data:image/jpeg;base64," + project?.image }/> : <></>}
                        </div>
                        {editing ? <ProjectEdit action={'/api/projects/' + project?.id} editEvent = {(project) => this.setState({ editing: !editing, project: project })} project={project} /> : <></>}
                    </div> :
                    <></>
                }
            </>
        );
    }
}
export default Project;
