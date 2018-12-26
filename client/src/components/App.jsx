import React from 'react';
import axios from 'axios';

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
        description: 'These versatile high-rise tights were designed to fit like a second skin—perfect for yoga or the gym. Made with Full-On® Luxtreme fabric that offers great support and coverage with a cool, smooth feel.'
      },
      colors: [],
      currentColor: '',
      photos: [],
      currentPhoto: ''
    };

    this.getProduct = this.getProduct.bind(this);
    this.getColors = this.getColors.bind(this);
    this.selectCurrentColor = this.selectCurrentColor.bind(this);
    this.getPhotos = this.getPhotos.bind(this);

    this.onSwatchClick = this.onSwatchClick.bind(this);
    this.onPhotoClick = this.onPhotoClick.bind(this);
  }

  componentDidMount() {
    this.getProduct(Math.floor(Math.random() * 10) + 1); 
    // 4 is num of products we have -> needs to be 30 eventually
  }

  getProduct(productId) {
    axios.get(`api/products/${productId}`)
      .then(({ data }) => {
        this.setState({ currentProduct: data });
        this.getColors(productId);
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

  onSwatchClick(colorId) {
    this.selectCurrentColor(colorId);
  }

  onPhotoClick(photo) {
    this.setState({ currentPhoto: photo }, () => console.log('current photo from click', this.state.currentPhoto));
  }

  render() {
    return (
      <div className="flex-column">
        <div>
          <span className="clickable">Women</span>{' > '}<span className="clickable">{this.state.currentProduct.category}</span>{' > '}<span className="clickable">{this.state.currentProduct.type}</span>
        </div>
        <br/>
        <div className="flex-row">
          <PhotoList 
            photos={this.state.photos} 
            onPhotoClick={this.onPhotoClick}
          />
          <PhotoScroll 
            photos={this.state.photos} 
          />
          <ProductDetail 
            product={this.state.currentProduct} 
            colors={this.state.colors} 
            currentColor={this.state.currentColor}
            onSwatchClick={this.onSwatchClick} 
          />
        </div>
      </div>
    );
  }
}

export default App;




// ** below not worth -> too long to render? just hard coded it
// componentWillMount() {
//   axios.get('api/products/1')
//   .then(({ data }) => {
//     console.log('currentProduct', this.state.currentProduct)
//     console.log('data', data);
//     this.setState({ currentProduct: data });
//   })
// }


// ** below is uneccessary wtf was i thinking
// selectCurrentPhoto(photoId) {  // on click or scroll to photo
//   axios.get(`api/products/${this.state.currentProduct.id}/colors/${this.state.currentColor.id}/photos/${photoId}`)
//     .then(({ data }) => {
//       this.setState({ currentPhoto: data });
//       console.log('this.state.currentPhoto', this.state.currentPhoto);
//     })
//     .catch(err => console.error('error selecting current photo', err));
// }