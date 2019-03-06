import React from 'react';
import Nav from './Nav';
import './App.css';

export default class Contact extends React.Component {
  state = {
    yourName: '',
    yourEmail: '',
    subject: '',
    message: ''
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    
    this.setState({
      yourName: '',
      yourEmail: '',
      subject: '',
      message: ''
    })
  }

  render() {
    return (
      <div className='contact-page'>
        <Nav />
        <form className='contact-form'>
          <input
          name='yourName' 
          placeholder='Your Name' 
          value={this.state.yourName}
          onChange={e => this.change(e)} />
          <input
          name='yourEmail' 
          placeholder='Your Email' 
          value={this.state.yourEmail}
          onChange={e => this.change(e)} />
          <input 
          name='subject'
          placeholder='Subject' 
          value={this.state.subject}
          onChange={e => this.change(e)} />
          <input 
          name='message'
          placeholder='Your message...' 
          value={this.state.message}
          onChange={e => this.change(e)} />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}