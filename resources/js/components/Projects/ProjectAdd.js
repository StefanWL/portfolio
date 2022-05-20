import React, { Component } from 'react';

class ProjectAdd extends Component {
    static displayName = ProjectAdd.name;
    constructor (props) {
        super(props);
        this.state = {
            file: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        axios.post(this.props.action, formData)
             .then(res => {
                    if(res.data.error){
                        console.log(res.data.error)
                    } else {
                        this.props.addEvent(res.data)
                    }
                })
    }

    fileChange = (e) => {
        const rawFile = e.target.files[0];
        const fileUrl = window.URL.createObjectURL(rawFile);
        this.setState({file: fileUrl});
    }

    render() {
        const file = this.state.file;
        return (
            <div className="banner row justify-content-center">
                <div className="col-10 col-md-6">
                    <form encType="multipart/form-data" onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="title">Name</label>
                        <input id="title" name="title" className="text-input w-100 mb-3" type="text"/>
                        <label htmlFor="url">Site URL</label>
                        <input id="url" name="url" className="text-input w-100 mb-3" type="text"/>
                        <label htmlFor="repository">Repository</label>
                        <input id="repository" name="repository" className="text-input w-100 mb-3" type="text"/>
                        <label htmlFor="content">Content</label>
                        <textarea id="content" name="content" rows="6" className="w-100 mb-3"></textarea>
                        <label className="image-upload w-25 mb-3 mx-auto d-block text-center" htmlFor="image">
                            Add Image
                            <input id="image" name="image" className="hidden" onChange={this.fileChange} type="file"/>
                        </label>
                        {file ? <img className="mx-auto d-block w-50 mb-3" src={file} /> : <></>}
                        <button className="mx-auto w-25 d-block text-center submit" name="submit" type="submit">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default ProjectAdd;