import './App.css';
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/navbar/NavBar';
import { getUser } from '../../utilities/users-service';


function App() {

  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
  
}

export default App;

---------

import { Component } from 'react';
import { signUp } from '../../utilities/users-service';


export default class SignUpForm extends Component {
  // // state is always an object with a property for each "piece" of state
  // constructor() {
  //   super();
  //   this.state = {
  //     name: '',
  //     email: '',
  //     password: '',
  //     confirm: '',
  //     error: ''
  //   };
  //   this.handleChange = this.handleChange.bind(this)
  // }

  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
    console.log(evt.target.value)
  };

  handleSubmit = async (evt) =>{
    evt.preventDefault();
    try{
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      // could also make a new object w/o the confirm or error
      // const formData = {
      //   name: this.state.name,
      //   emai: this.state.email,
      //   password: this.state.password
      // };
      // or
      // const {name, email, password} = this.state;
      // const formData = {name, email, password};
    }catch{
      this.setState({
        error : 'Sign Up Failed - Try Again'
      })
    }
    

  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }

};