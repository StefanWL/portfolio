import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import axios from 'axios';
import '../../css/bootstrap.css';

import  Nav  from './Layout/Nav';
import  Home  from './Home';
import  Page  from './Pages/Page';
import  Projects  from './Projects/Projects';
import  Footer  from './Layout/Footer';
import  Login  from './Auth/Login';
import PageAdd from './Pages/PageAdd';
import '../../css/site.css';
import User from '../auth/User';

class App extends Component {
  static displayName = App.name;

    constructor (props) {
        super(props);
        this.state = {
            pages: [],
            returnHome: false,
            loggedIn: User.loggedIn,
        }
    }
  
  componentDidMount() {
    axios.get('/api/pages')
      .then(res => {
        if(res.data.error){
            console.log(res.data.error);
        } else {
            this.setState({pages: res.data});
        }
    })
  }

  logIn = () => {
    this.setState({loggedIn: true});
  }
  logOut = () => {
    this.setState({loggedIn: false});
  }

  pageEdit(page, id) {
    const pages = this.state.pages;
    const pageToEdit = pages.findIndex(p => p.id == id);
    pages[pageToEdit] = page;
    this.setState({pages: pages});
  }

  pageDelete(id) {
    const pages = this.state.pages;
    const pageToDelete = pages.findIndex(p => p.id == id);
    pages.splice(pageToDelete, 1);
    this.setState({pages: pages});
    this.setState({returnHome: true})
  }

  render() {
    const pages = this.state.pages;
    const loggedIn = this.state.loggedIn;
    return (
      <div className="App">
          <BrowserRouter>
              <Nav pages={pages} loggedIn={loggedIn} logOutApp={this.logOut.bind(this)}/>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path="/Projects" element={<Projects/>} />
                  <Route path="/AddPage" element={<PageAdd addEvent = {page => {this.setState({pages: pages.concat([page])})}}/>} />
                  {pages ? pages.map((page, index) => 
                    <Route path={'/' + page.title} element={<Page page={page} key={index} editDelegate={this.pageEdit.bind(this)} deleteDelegate={this.pageDelete.bind(this)} />} />
                  ):<></>}
                  <Route path='/Login' element={<Login logInApp={this.logIn.bind(this)}/>} />
              </Routes>
              <Footer />
              {this.state.returnHome ? 
              <>
                {this.setState({returnHome: false})}
                <Navigate to='/' replace={true} /> 
              </>
              : <></> }
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}