import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Notification from './components/Notification';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      notification: {
       visible:false,
        message:""

      } 
    }
  this.notificationTimeout = null;

  }

  showNotification = (message) => {
    if(this.notificationTimeout){
      clearTimeout(this.notificationTimeout);
    }
    this.setState({notification: {visible:true, message}});

    this.notificationTimeout = setTimeout (() =>{
      this.setState({notification: {visible:false, message: ""}});
    },3000);
  };


  render() {
    const { notification} = this.state;
    return (
      <div className="wrapper">
        <Header />
        <Main onShowNotification={this.showNotification} />
         <Notification
          message={notification.message}
          visible={notification.visible}
        />
      </div>
    );
  }
}

export default App;
