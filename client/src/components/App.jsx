import React from 'react';
import axios from 'axios';
import classNames from 'classnames';

import Navigation from './Navigation.jsx';
import PhotoList from './PhotoList.jsx';
import PhotoScroll from './PhotoScroll.jsx';
import ProductDetail from './ProductDetail.jsx';
import styles from '../../dist/styles/app.css';

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
    let swatches = document.getElementsByClassName(e.target.className);
    swatches = Array.prototype.slice.call(swatches);
    // let initSwatch = document.getElementsByClassName(e.target.parentNode.className);
    // initSwatch = Array.prototype.slice.call(initSwatch).pop().className;
    // console.log('initswatch', initSwatch)
    swatches.forEach(swatch => {
      swatch.parentNode.classList = '';
      console.log(swatch.parentNode);
      swatch.classList.remove(styles['selectedSwatch']);
    });
    e.target.classList.add(styles['selectedSwatch']);
  }

  onPhotoClick(photo) {
    this.setState({ currentPhoto: photo }, () => console.log('current photo from click', this.state.currentPhoto));
  }

  onPhotoSelect(e) {
    let photos = document.getElementsByClassName(e.target.className);
    photos = Array.prototype.slice.call(photos);
    photos.forEach(photo => {
      photo.parentNode.parentNode.classList = '';
      photo.classList.remove(styles['selectedPhoto']);
    });
    e.target.classList.add(styles['selectedPhoto']);
  }

  onDropdownClick(e) {
    let dropdowns = document.getElementsByClassName(e.target.className);
    dropdowns = Array.prototype.slice.call(dropdowns);
    dropdowns.forEach(dropdown => {
      if (dropdown.nextElementSibling !== e.target.nextElementSibling) {
        dropdown.nextElementSibling.style.display = 'none';
        dropdown.style.borderBottom = '0.5px solid #e0e0e0';
        dropdown.classList.remove(styles['minus']);
        dropdown.classList.add(styles['plus']);
        console.log('class names', dropdown.classList);
      }
    });
    if (e.target.nextElementSibling.style.display === 'block') {
      e.target.nextElementSibling.style.display = 'none';
      e.target.style.borderBottom = '0.5px solid #e0e0e0';
      e.target.classList.remove(styles['minus']);
      e.target.classList.add(styles['plus']);
    } else {
      e.target.nextElementSibling.style.display = 'block';
      e.target.nextElementSibling.style.borderBottom = '0.5px solid #e0e0e0';
      e.target.style.borderBottom = 'none';
      // e.target.classList.remove(styles['plus']);
      e.target.classList.add(styles['minus']);
    }
  }

  onSizeDropdown(e) {
    let sizeDropdown = document.getElementsByClassName(e.target.className);
    sizeDropdown = Array.prototype.slice.call(sizeDropdown)[0];
    if (sizeDropdown.nextElementSibling.style.display !== 'block') {
      sizeDropdown.nextElementSibling.style.display = 'block';
    } else {
      sizeDropdown.nextElementSibling.style.display = 'none';
    }
  }

  onSizeSelect(e) {
    this.setState({ size: e.target.getAttribute('name') });
    let sizes = document.getElementsByClassName(e.target.className);
    sizes = Array.prototype.slice.call(sizes);
    sizes.forEach(size => {
      size.parentNode.style.display = 'none';
    });
  }

  render() {
    return (
      <div className={styles.flexColumn}>
        <Navigation />
        <br className={styles.break}/>
        <br className={styles.break}/>
        <div className={styles.main}>
          <div className={styles.directory}>
            <span className={styles.clickable}>Women</span>{' > '}<span className={styles.clickable}>{this.state.currentProduct.category}</span>{' > '}<span className={styles.clickable}>{this.state.currentProduct.type}</span>
          </div>
          <br/>
          <div className={classNames(styles.flexRow, styles.container)}>
            <div className={styles.parent}></div>
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
      </div>
    );
  }
}

export default App;
