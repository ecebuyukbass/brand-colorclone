import React, { Component } from 'react';
import BrandRow from './BrandRow';
import { brands } from '../data'; 
import '../cssler/Main.css';


class Main extends Component {

constructor(props) {
    super(props);
    this.state = {
        searchTerm: "",
    };
}

handleSearchChange = (event) => {
    this.setState({searchTerm: event.target.value});
};

  render() {
    const { searchTerm } = this.state;
     const { onShowNotification } = this.props;

    const filteredBrands = brands.filter(brand =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    let brandsContent;
    if (filteredBrands.length > 0) {
      brandsContent = filteredBrands.map((brand) => (
        <BrandRow
          key={brand.name}
          brand={brand}
          onShowNotification={onShowNotification}
        />
      ));
    } else {
      brandsContent = (
        <div className="no-results-container">
          <h2>"{searchTerm}" için sonuç bulunamadı</h2>
          <p>Lütfen farklı bir marka adı aramayı deneyin.</p>
        </div>
      );
    }


    return (
      <main className="main-content">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Marka ara"
            value={searchTerm}
            onChange={this.handleSearchChange}
          />
        </div>
        <section className="brands-list">
          {brandsContent}
        </section>
      </main>
    );
  }
}
export default Main;
