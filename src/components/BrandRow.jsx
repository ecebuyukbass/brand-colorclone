import React, { Component } from 'react'
import ColorBlok from './ColorBlok';
import '../cssler/BrandRow.css';

class BrandRow extends Component {
  render() {
    const { brand , onShowNotification} = this.props;

    return (
        <article className='brand-row'>
            <h2 className='brand-name'> {brand.name} </h2>
            <div className='color-palette'>
                {brand.colors.map((color,index) =>(
                    <ColorBlok
                    key={ `${brand.name}-${index}`} 
                    hexCode ={color}
                    onShowNotification={onShowNotification}
                     />
                ))}
            </div>
        </article>
      
    )
  }
}

export default BrandRow;