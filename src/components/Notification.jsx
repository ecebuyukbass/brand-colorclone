import React, { Component } from 'react'
import '../cssler/Notification.css';


class Notification extends Component {
  render() {
    const { message , visible } = this.props;
    const notificationClass = `notification-popup ${visible ? "show" : ""}`;
    return (
      <div className={notificationClass}>
        {message}
      </div>
    )
  }
}

export default Notification;
