import React, { Component } from 'react';

class ProjectDelete extends Component {
    static displayName = ProjectDelete.name;
    constructor (props) {
        super(props);
    }

    handleClick = (event) => {
        axios.delete(this.props.action)
             .then(res => {
                    if(res.data.error){
                        console.log(res.data.error)
                    } else {
                        this.props.submitEvent()
                    }
                })
    }

    render() {
        const action = this.props.action;
        return (
            <i className="icon fa-solid fa-times fa-2x" onClick={e => this.handleClick(e)}></i> 
        )
    };
    
}

export default ProjectDelete;