import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import _ from 'lodash';

import Navigation from '../Navigation/Navigation.jsx';
import PhotoList from '../PhotoList/PhotoList.jsx';
import PhotoScroll from '../PhotoScroll/PhotoScroll.jsx';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
import styles from './app.css';

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
      size: 'Select Size',
      photoHeight: 0
    };
  }

  componentDidMount() {
    // select random product
    this.getProduct(Math.floor(Math.random() * 13) + 1); 

    // event listeners
    window.addEventListener('scroll', this.onPageScroll);
    window.addEventListener('resize', _.debounce(this.getPhotoHeight, 500, {leading: false}));

    // get initial photo height once page loads
    setTimeout(this.getPhotoHeight, 500);
  }

  //~ Methods for loading product, colors, photos, fabrics, features ~//

  getProduct = productId => {
    axios.get(`http://localhost:3001/api/products/${productId}`)
      .then(({ data }) => {
        this.setState({ currentProduct: data });
        this.getColors(productId);
        this.getFabrics(productId);
        this.getFeatures(productId);
      })
      .catch(err => console.error('error getting products', err));
  }

  getColors = productId => {
    axios.get(`http://localhost:3001/api/products/${productId}/colors`)
      .then(({ data }) => {
        this.setState({ colors: data }, () => {
          this.selectCurrentColor(this.state.colors[0].id);
        });
      })
      .catch(err => console.error('error getting colors', err));
  }

  selectCurrentColor = colorId => {
    axios.get(`http://localhost:3001/api/products/${this.state.currentProduct.id}/colors/${colorId}`)
      .then(({ data }) => {
        this.setState({ currentColor: data });
        this.getPhotos(colorId);
      })
      .catch(err => console.error('error selecting color', err));
  }

  getPhotos = colorId => {
    axios.get(`http://localhost:3001/api/products/${this.state.currentProduct.id}/colors/${colorId}/photos`)
      .then(({ data }) => {
        this.setState({ photos: data, currentPhoto: data[0] });
      })
      .catch(err => console.error('error getting photos', err));
  }

  getFabrics = productId => {
    axios.get(`http://localhost:3001/api/products/${productId}/fabrics`)
      .then(({ data }) => {
        this.setState({ fabrics: data });
      })
      .catch(err => console.error('error getting fabrics', err));
  }

  getFeatures = productId => {
    axios.get(`http://localhost:3001/api/products/${productId}/features`)
      .then(({ data }) => {
        this.setState({ features: data });
      })
      .catch(err => console.error('error getting features', err));
  }

  //~ Listeners for user functionality ~// 

  // updates photos based on swatch clicked
  onSwatchClick = colorId => {
    this.selectCurrentColor(colorId);
  }

  // adds black outline around selected swatch
  onSwatchSelect = e => {
    let swatches = document.getElementsByClassName(e.target.className);
    swatches = Array.prototype.slice.call(swatches);
    swatches.forEach(swatch => {
      // remove initSwatch (first black outline)
      swatch.parentNode.classList = '';
      // remove previously selected swatch (black outline)
      swatch.classList.remove(styles['selectedSwatch']);
    });
    e.target.classList.add(styles['selectedSwatch']);
  }

  // selects photo clicked
  onPhotoClick = photo => {
    this.setState({ currentPhoto: photo });
  }

  // makes selected photo opaque
  onPhotoSelect = e => {
    let photos = document.getElementsByClassName(e.target.className);
    photos = Array.prototype.slice.call(photos);
    photos.forEach(photo => {
      // remove initPhoto (first opacity)
      photo.parentNode.parentNode.classList = '';
      // remove previously selected photo (opacity)
      photo.classList.remove(styles['selectedPhoto']);
    });
    e.target.classList.add(styles['selectedPhoto']);
  }

  // accordion box click functionality
  onDropdownClick = e => {
    let dropdowns = document.getElementsByClassName(e.target.className);
    dropdowns = Array.prototype.slice.call(dropdowns);
    dropdowns.forEach(dropdown => {
      if (dropdown.nextElementSibling !== e.target.nextElementSibling) {
        dropdown.nextElementSibling.style.display = 'none';
        dropdown.style.borderBottom = '0.5px solid #e0e0e0';
        dropdown.classList.remove(styles['minus']);
        dropdown.classList.add(styles['plus']);
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

  // size dropdown functionality
  onSizeDropdown = e => {
    let sizeDropdown = document.getElementsByClassName(e.target.className);
    sizeDropdown = Array.prototype.slice.call(sizeDropdown)[0];
    if (sizeDropdown.nodeName === 'DIV') {
      if (sizeDropdown.nextElementSibling.style.display !== 'block') {
        sizeDropdown.nextElementSibling.style.display = 'block';
      } else {
        sizeDropdown.nextElementSibling.style.display = 'none';
      }
    } else {
      if (sizeDropdown.parentNode.nextElementSibling.style.display !== 'block') {
        sizeDropdown.parentNode.nextElementSibling.style.display = 'block';
      } else {
        sizeDropdown.parentNode.nextElementSibling.style.display = 'none';
      }
    }
  }

  // selecting size from size menu dropdown
  onSizeSelect = e => {
    this.setState({ size: e.target.getAttribute('name') });
    let sizes = document.getElementsByClassName(e.target.className);
    sizes = Array.prototype.slice.call(sizes);
    sizes.forEach(size => {
      size.parentNode.style.display = 'none';
    });
  }

  // side scroll change on scroll
  onPageScroll = () => {
    let scrollAmt = document.scrollingElement.scrollTop;

    let length = document.getElementById('photoScroll').children.length;
    let children = document.getElementById('photoList').children;
    children = Array.prototype.slice.call(children);

    for (let i = 0; i < length; i++) {
      if (((this.state.photoHeight + 16) * i - 30) < scrollAmt && scrollAmt < ((this.state.photoHeight + 16) * i + 30)) {
        children.forEach(child => {
          // remove initial opacity
          child.classList = '';
          // remove previous opacity
          child.children[0].children[0].classList.remove(styles['selectedPhoto']);
        });

        children[i].children[0].children[0].classList.add(styles['selectedPhoto']);
      }
    }
  }

  getPhotoHeight = () => {
    let height = document.getElementById('photoScroll').children[0].clientHeight;
    this.setState({ photoHeight: height });
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
            <PhotoList 
              photos={this.state.photos} 
              currentPhoto={this.state.currentPhoto}
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
