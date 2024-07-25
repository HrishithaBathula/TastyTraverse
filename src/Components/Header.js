import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import "../styles/home.css"

const url = "https://login-api-9e52.onrender.com/auth/userInfo";

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData: '',
        }
    }
    
    handleLogout = () => {
        sessionStorage.clear()        
        this.setState({userData: ""})
        window.location.replace('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name) {
            let data = this.state.userData
            sessionStorage.setItem("loginStatus", "loggedIn")
            sessionStorage.setItem("userInfo", JSON.stringify(data))
            return (
                <div className='auth d-flex align-items-center justify-content-end'>
                    <Link to={"/"} className="login text-decoration-none mt-3">
                        <span>{data.name}</span>
                    </Link>
                    <button onClick={this.handleLogout} className="btn text-light bg-danger register p-2 mt-3" style={{width: '100px', margin: '10px 20px' }}>
                        Logout
                    </button>
                </div>
            )
        } else {
            return (
                <div className='auth-login d-lg-flex flex-xl-row justify-content-end me-4'>
                    <Link to="/login" id='login' className="btn login mt-3">
                        LogIn    
                    </Link>  
                    <Link to="/register" id='acctbtn' className="btn register mt-3">
                        Create an account    
                    </Link>  
                </div>
            )
        }
    }
  render() {
    return (
      <>
        {this.conditionalHeader()}
      </>
    )
  }

  componentDidMount() {
    fetch(url, {
        method: 'GET',
        headers: { 
            "x-access-token": sessionStorage.getItem("tk")
        }
    })
    .then(res => res.json())
    .then(data =>{
        this.setState({userData: data})
    })
  }
}
