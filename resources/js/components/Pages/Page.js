import React, { Component } from 'react';

import User from "../../auth/User";
import PageEdit from './pageEdit';
import PageDelete from './pageDelete';

class Page extends Component {
    static displayName = Page.name;
    constructor (props) {
        super(props);
        this.state = {
            editing: false,
            page: this.props.page,
        }
    }

    editHandler(page, id) {
        this.props.editDelegate(page, id);
    }

    deleteHandler(id) {
        this.props.deleteDelegate(id);
    }

    render() {
        const page = this.state.page;
        const editing = this.state.editing;
        return (
            <>
                {page ?
                    <div className="container">
                        <div className="banner row justify-content-center">
                            <div className="col-10 col-md-6">
                                <div className="row justify-content-between">
                                    <h1>{page.title}</h1>
                                    {User.isLoggedIn() ? 
                                    <>
                                        <span>
                                            <i className="icon pr-2 fa-solid fa-pen-to-square fa-2x" onClick={() => this.setState({ editing: !editing })}></i>
                                            <PageDelete action={'/api/pages/' + page?.id} submitEvent = {() => this.deleteHandler(page.id)}/>
                                        </span>
                                    </> :
                                    <></>}
                                </div>
                                {!editing ?
                                <div className="row mt-5 justify-content-between">
                                    <img src={'data:image/jpeg;base64,' + page.image} id="about-photo" className="col-4 h-100"/>
                                    <div className="col-7">
                                        <p className="pr-5">{page.content}</p>
                                    </div>
                                </div>
                                : <></>}
                            </div>
                        </div>:
                        {editing ?
                        <PageEdit action={'/api/pages/' + page?.id} editEvent = {page => {
                            this.setState({ editing: !editing, page: page });
                            this.editHandler(page, page.id);
                        }} page={page} />
                        : <></>}
                    </div> :
                    <></>
                }
            </>
        );
    }
}
export default Page;
