import React from 'react';
import axios from 'axios';

import Navigation from './Navigation.jsx';
import PhotoList from './PhotoList.jsx';
import PhotoScroll from './PhotoScroll.jsx';
import ProductDetail from './ProductDetail.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {
        id: 1, 
        name: 'Wunder Under High-Rise Tight Full-On Luxtreme 28"', 
        category: 'Bottoms',
        type: 'Pants', 
        price: '$98.00', 
        description: 'These versatile high-rise tights were designed to fit like a second skin—perfect for yoga or the gym. Made with Full-On® Luxtreme fabric that offers great support and coverage with a cool, smooth feel.',
        fabric_name: 'Full-On® Luxtreme',
        fabric_description: 'Four-way stretch Full-On® Luxtreme fabric is sweat-wicking and offers great support and coverage with a cool, smooth feel'    
      },
      colors: [],
      currentColor: '',
      photos: [],
      currentPhoto: '',
      fabrics: [],
      features: [],
      size: 'Select Size'
    };

    this.getProduct = this.getProduct.bind(this);
    this.getColors = this.getColors.bind(this);
    this.selectCurrentColor = this.selectCurrentColor.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.getFabrics = this.getFabrics.bind(this);
    this.getFeatures = this.getFeatures.bind(this);

    this.onSwatchClick = this.onSwatchClick.bind(this);
    this.onSwatchSelect = this.onSwatchSelect.bind(this);
    this.onPhotoClick = this.onPhotoClick.bind(this);
    this.onPhotoSelect = this.onPhotoSelect.bind(this);
    this.onDropdownClick = this.onDropdownClick.bind(this);
    this.onSizeDropdown = this.onSizeDropdown.bind(this);
    this.onSizeSelect = this.onSizeSelect.bind(this);
  }

  componentDidMount() {
    this.getProduct(Math.floor(Math.random() * 13) + 1); 
    // 13 is num of products we have -> needs to be 30 eventually
  }

  getProduct(productId) {
    axios.get(`api/products/${productId}`)
      .then(({ data }) => {
        this.setState({ currentProduct: data });
        this.getColors(productId);
        this.getFabrics(productId);
        this.getFeatures(productId);
        console.log('this.state.currentProduct', this.state.currentProduct);
      })
      .catch(err => console.error('error getting products', err));
  }

  getColors(productId) {
    axios.get(`api/products/${productId}/colors`)
      .then(({ data }) => {
        this.setState({ colors: data });
        this.selectCurrentColor(this.state.colors[0].id);
        console.log('this.state.colors', this.state.colors);
      })
      .catch(err => console.error('error getting colors', err));
  }

  selectCurrentColor(colorId) {
    axios.get(`api/products/${this.state.currentProduct.id}/colors/${colorId}`)
      .then(({ data }) => {
        this.setState({ currentColor: data });
        this.getPhotos(colorId);
        console.log('this.state.currentColor', this.state.currentColor);
      })
      .catch(err => console.error('error selecting color', err));
  }

  getPhotos(colorId) {
    axios.get(`api/products/${this.state.currentProduct.id}/colors/${colorId}/photos`)
      .then(({ data }) => {
        this.setState({ photos: data });
        this.setState({ currentPhoto: data[0] });
        console.log('this.state.photos', this.state.photos);
        console.log('this.state.currentPhoto', this.state.currentPhoto);
      })
      .catch(err => console.error('error getting photos', err));
  }

  getFabrics(productId) {
    axios.get(`api/products/${productId}/fabrics`)
      .then(({ data }) => {
        this.setState({ fabrics: data });
        console.log('this.state.fabrics', this.state.fabrics);
      })
      .catch(err => console.error('error getting fabrics', err));
  }

  getFeatures(productId) {
    axios.get(`api/products/${productId}/features`)
      .then(({ data }) => {
        this.setState({ features: data });
        console.log('this.state.features', this.state.features);
      })
      .catch(err => console.error('error getting features', err));
  }

  onSwatchClick(colorId) {
    this.selectCurrentColor(colorId);
  }

  onSwatchSelect(e) {
    let swatches = document.getElementsByClassName('swatch');
    swatches = Array.prototype.slice.call(swatches);
    swatches.forEach(swatch => {
      swatch.parentNode.classList.remove('init-swatch');
      swatch.classList.remove('selected-swatch');
    });
    e.target.classList.add('selected-swatch');
  }

  onPhotoClick(photo) {
    this.setState({ currentPhoto: photo }, () => console.log('current photo from click', this.state.currentPhoto));
  }

  onPhotoSelect(e) {
    let photos = document.getElementsByClassName('photo-list');
    photos = Array.prototype.slice.call(photos);
    photos.forEach(photo => {
      photo.parentNode.parentNode.classList.remove('init-photo');
      photo.classList.remove('selected-photo');
    });
    e.target.classList.add('selected-photo');
  }

  onDropdownClick(e) {
    let dropdowns = document.getElementsByClassName('dropdown');
    dropdowns = Array.prototype.slice.call(dropdowns);
    dropdowns.forEach(dropdown => {
      if (dropdown.nextElementSibling !== e.target.nextElementSibling) {
        dropdown.nextElementSibling.style.display = 'none';
        dropdown.style.borderBottom = '0.5px solid #e0e0e0';
        dropdown.classList.remove('minus');
        dropdown.classList.add('plus');
      }
    });
    if (e.target.nextElementSibling.style.display === 'block') {
      e.target.nextElementSibling.style.display = 'none';
      e.target.style.borderBottom = '0.5px solid #e0e0e0';
      e.target.classList.remove('minus');
      e.target.classList.add('plus');
    } else {
      e.target.nextElementSibling.style.display = 'block';
      e.target.nextElementSibling.style.borderBottom = '0.5px solid #e0e0e0';
      e.target.style.borderBottom = 'none';
      e.target.classList.remove('plus');
      e.target.classList.add('minus');
    }
  }

  onSizeDropdown() {
    let sizes = document.getElementsByClassName('sizes-list');
    sizes = Array.prototype.slice.call(sizes);
    sizes.forEach(size => {
      if (!size.classList.contains('open')) {
        size.classList.add('open');
      } else {
        size.classList.remove('open');
      }
    });
  }

  onSizeSelect(e) {
    this.setState({ size: e.target.getAttribute('name') });
    console.log(e.target.getAttribute('name'));
    let sizes = document.getElementsByClassName('sizes-list');
    sizes = Array.prototype.slice.call(sizes);
    sizes.forEach(size => {
      size.classList.remove('open');
    });
  }

  render() {
    return (
      <div className="flex-column">
        <Navigation />
        <br/>
        <div className="directory">
          <span className="clickable">Women</span>{' > '}<span className="clickable">{this.state.currentProduct.category}</span>{' > '}<span className="clickable">{this.state.currentProduct.type}</span>
        </div>
        <br/>
        <div className="container flex-row">
          <div className="parent"></div>
          <PhotoList 
            photos={this.state.photos} 
            onPhotoClick={this.onPhotoClick}
            onPhotoSelect={this.onPhotoSelect}
          />
          <PhotoScroll 
            photos={this.state.photos} 
          />
          <ProductDetail 
            product={this.state.currentProduct} 
            photos={this.state.photos} 
            colors={this.state.colors}
            fabrics={this.state.fabrics}
            features={this.state.features}
            size={this.state.size}
            currentColor={this.state.currentColor}
            onSwatchClick={this.onSwatchClick}
            onSwatchSelect={this.onSwatchSelect}
            onDropdownClick={this.onDropdownClick}
            onSizeDropdown={this.onSizeDropdown}
            onSizeSelect={this.onSizeSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
