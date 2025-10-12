import React, { Component } from 'react'
import '../cssler/ColorBlock.css';

class ColorBlok extends Component {
  

 handleCopy = () => {
    const { hexCode, onShowNotification } = this.props;

    navigator.clipboard.writeText(hexCode).then(() => {
      onShowNotification(`"${hexCode}" panoya kopyalandı!`);

    }).catch(err => {
      console.error('Renk kodu kopyalanamadı: ', err);
      onShowNotification('Hata: Renk kopyalanamadı.');
    });
  };


  render() {
    const { hexCode } = this.props;

    return (
      <div className='color-block'
        onClick={this.handleCopy}
        style={{backgroundColor: hexCode}} >
          <span className='color-code'> { hexCode} </span>
      </div>
    )
  }
}

export default ColorBlok;
