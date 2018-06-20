import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Cleave from 'cleave.js/react';
import $ from 'jquery';

import Env from '../lib/env';
import ProductService from '../lib/product-service';

import camera from '../assets/image/jual-barang-camera.png'

class JualBarangContent extends Component {

  constructor() {
    super();

    this.state = {
      file: '',
      imagePreviewUrl: '',
      images: [],
      imageValidation: false,
      condition: '',
      conditionValidation: false,
      title: '',
      titleValidation: false,
      currentLocation: '',
      currentLocationValidation: false,
      category: '',
      categoryValidation: false,
      price: '',
      priceValidation: false,
      freeInput: false,
      description: '',
      descriptionValidation: false
    };

    this._handleImageChange = this._handleImageChange.bind(this);
    this._deleteImagePreview = this._deleteImagePreview.bind(this);
    this._handleConditionInput = this._handleConditionInput.bind(this);
    this._handleTitleInput = this._handleTitleInput.bind(this);
    this._handleCurrentLocation = this._handleCurrentLocation.bind(this);
    this._handleCategoryInput = this._handleCategoryInput.bind(this);
    this._handlePriceInput = this._handlePriceInput.bind(this);
    this._handleFreeInput = this._handleFreeInput.bind(this);
    this._handleDescriptionInput = this._handleDescriptionInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  };

  // componentDidMount() {
  //   console.log(this.props)
  // };

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  // };

  _handleImageChange(e, placeToInsertImagePreview) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    if (file !== undefined) {
      let ext = Env.getExtension(file.name)
      let key = localStorage.getItem('id') + '-' + Env.getRandomString(8) + '.' + ext

      reader.onloadend = () => {
        let addImage = {
          key: key,
          base64: Env.getBase64(reader.result)
        }
  
        let newImage = this.state.images.concat(addImage)
        this.setState({
          images: newImage
        })
        if (newImage.length > 0) {
          this.setState({
            imageValidation: true
          });
          $('.upload-zone').removeClass('changed');
        } else {
          this.setState({
            imageValidation: false
          })
        }
      }

      reader.readAsDataURL(file);
    }
  };

  _deleteImagePreview(baseKey) {
    let delImg = this.state.images.filter((item) => item.key !== baseKey)
    this.setState({
      images: delImg
    })
    if (delImg.length === 0) {
      this.setState({
        imageValidation: false
      })
    } else {
      this.setState({
        imageValidation: true
      })
    }
  };

  _handleConditionInput(e) {
    let conditionVal = e.target.value;
    if (conditionVal === '') {
      this.setState({
        condition: conditionVal,
        conditionValidation: false
      });
    } else {
      this.setState({
        condition: conditionVal,
        conditionValidation: true
      });
      $('.jual-barang-content-wrap input[type="radio"] + label').removeClass('changed')
    };
  };

  _handleTitleInput(e) {
    let titleVal = e.target.value;
    if (titleVal === '') {
      this.setState({
        title: titleVal,
        titleValidation: false
      });
    } else {
      this.setState({
        title: titleVal,
        titleValidation: true
      });
      $('input#jualBarangTitle').removeClass('changed');
    };
  };

  _handleCurrentLocation(e) {
    let currentLocationVal = e.target.value;
    if (currentLocationVal === '') {
      this.setState({
        currentLocationValidation: false
      });
    } else {
      this.setState({
        currentLocationValidation: true
      });
      $('input#jualBarangCurrentLocation').removeClass('changed');
    };
  };

  _handleCategoryInput(e) {
    let categoryVal = e.target.value;
    if (categoryVal === '') {
      this.setState({
        category: categoryVal,
        categoryValidation: false
      });
    } else {
      this.setState({
        category: categoryVal,
        categoryValidation: true
      });
      $('select#jualBarangChooseCategory').removeClass('changed');
    };
  };

  _handlePriceInput(e) {
    let priceVal = e.target.value;
    if (priceVal === '') {
      this.setState({
        price: priceVal,
        priceValidation: false
      });
    } else {
      this.setState({
        price: priceVal,
        priceValidation: true
      });
      $('input#jualBarangPrice').removeClass('changed');
    };
  };

  _handleFreeInput(e) {
    this.setState({
      freeInput: !this.state.freeInput
    }, function() {
      if (this.state.freeInput) {
        this.setState({
          price: 'FREE!!!',
          priceValidation: true
        });
        $('input#jualBarangPrice').removeClass('changed');
      } else {
        this.setState({
          price: ''
        });
      };
    });
  };

  _handleDescriptionInput(e) {
    let descriptionVal = e.target.value;
    if (descriptionVal === '') {
      this.setState({
        description: descriptionVal,
        descriptionValidation: false
      });
    } else {
      this.setState({
        description: descriptionVal,
        descriptionValidation: true
      });
      $('textarea#jualBarangProductDesc').removeClass('changed');
    };
  };

  _handleSubmit(e) {
    e.preventDefault();
    const {
      imageValidation,
      conditionValidation,
      titleValidation,
      currentLocationValidation,
      categoryValidation,
      priceValidation,
      descriptionValidation
    } = this.state;
    let priceStr = this.state.price.replace(/,/g, '');
    let productId = null;
    let categoryId = this.state.category;
    let title = this.state.title;
    let description = this.state.description;
    let isFree = this.state.freeInput;
    let price = parseInt(priceStr);
    let condition = this.state.condition;
    let lat = 0;
    let lng = 0;
    let add_images = this.state.images;
    let del_images = [];
    if (imageValidation && conditionValidation && titleValidation && currentLocationValidation && categoryValidation && priceValidation && descriptionValidation) {
      let button = document.querySelector('#loadButton');
      button.classList.add('load');
      setTimeout(() => {
        ProductService.save(productId, categoryId, title, description, isFree, price, condition, lat, lng, add_images, del_images, (res) => {
          if (res.status.code === 0) {
            button.classList.remove('load');
            let split = title.split(' ').join('-').toLowerCase();
            this.props.history.push(`/${localStorage.getItem('id')}/${res.data.product_id}/${split}`);
          };
        }, (err) => {
          console.log(err);
        });
      }, 1500);
    };

    if (!imageValidation) {
      $('.upload-zone').addClass('changed');
    } else {
      $('.upload-zone').removeClass('changed');
    };

    if (!conditionValidation) {
      $('.jual-barang-content-wrap input[type="radio"] + label').addClass('changed');
    } else {
      $('.jual-barang-content-wrap input[type="radio"] + label').removeClass('changed')
    };

    if (!titleValidation) {
      $('input#jualBarangTitle').addClass('changed');
    } else {
      $('input#jualBarangTitle').removeClass('changed');
    };

    if (!currentLocationValidation) {
      $('input#jualBarangCurrentLocation').addClass('changed');
    } else {
      $('input#jualBarangCurrentLocation').removeClass('changed');
    };

    if (!categoryValidation) {
      $('select#jualBarangChooseCategory').addClass('changed');
    } else {
      $('select#jualBarangChooseCategory').removeClass('changed');
    };

    if (!priceValidation) {
      $('input#jualBarangPrice').addClass('changed');
    } else {
      $('input#jualBarangPrice').removeClass('changed');
    };

    if (!descriptionValidation) {
      $('textarea#jualBarangProductDesc').addClass('changed');
    } else {
      $('textarea#jualBarangProductDesc').removeClass('changed');
    };
  };

  render() {
    return (
      <div className="jual-barang-content-wrap">
        <Grid>
          <Row>
            <Col md={ 12 }>
              <p className="jual-barang-content-title">Jual barang Anda disini</p>
              <p className="jual-barang-validasi-required">* Required</p>
            </Col>
          </Row>
          <Row>
            <Form horizontal onSubmit={ this._handleSubmit }>
              <FormGroup controlId="jualBarangUploadFoto" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">Upload barang<span className="jual-barang-required">*</span></p>
                  <p className="jual-barang-upload-foto-label-bawah">
                    Silakan pakai foto Anda yang paling bagus untuk mendapatkan perhatian dari Pembeli
                  </p>
                </Col>
                <Col md={ 9 }>
                  <div className="jual-barang-image-preview-col-wrap">
                    { this.state.images.map((item, idx) => {
                      return (
                        <div className="jual-barang-image-preview-wrap" key={ idx }>
                          <i className="far fa-trash-alt" onClick={() => this._deleteImagePreview(item.key) }></i>
                          <img src={ Env.getImageSource(item.key, item.base64) } alt="" className="jual-barang-image-preview" />
                        </div>
                      )
                    }) }
                    <label className='upload-zone'>
                      <img src={ camera } alt="" />
                      <input type='file' name='files' onChange={(e) => this._handleImageChange(e, 'jual-barang-image-preview-wrap')} multiple />
                    </label>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangCondition" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Condition<span className="jual-barang-required">*</span>
                  </p>
                </Col>
                <Col md={ 9 }>
                  <input type="radio" id="a-option" name="selector" value="NEW" onChange={ this._handleConditionInput } />
                  <label htmlFor="a-option">New</label>

                  <input type="radio" id="b-option" name="selector" value="SECOND" onChange={ this._handleConditionInput } />
                  <label htmlFor="b-option">Second-hand</label>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangTitle" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">Title<span className="jual-barang-required">*</span></p>
                </Col>
                <Col md={ 7 }>
                  <FormControl type="text" onChange={ this._handleTitleInput }></FormControl>
                </Col>
                <Col md={ 2 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangCurrentLocation" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Current Location<span className="jual-barang-required">*</span>
                  </p>
                </Col>
                <Col md={ 7 }>
                  <FormControl type="text" onChange={ this._handleCurrentLocation }></FormControl>
                </Col>
                <Col md={ 2 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangChooseCategory" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Choose Category<span className="jual-barang-required">*</span>
                  </p>
                </Col>
                <Col md={ 5 }>
                  <FormControl componentClass="select" onChange={ this._handleCategoryInput }>
                    <option> - choose - </option>
                    <option value={1}>Gadget</option>
                    <option value={2}>Clothes</option>
                    <option value={3}>House</option>
                    <option value={4}>Cars</option>
                    <option value={5}>Motors</option>
                    <option value={6}>Hobbie</option>
                    <option value={7}>Books</option>
                    <option value={8}>Child</option>
                    <option value={9}>Others</option>
                  </FormControl>
                </Col>
                <Col md={ 4 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangPrice" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Price<span className="jual-barang-required">*</span>
                  </p>
                </Col>
                <Col md={ 5 }>
                  <Cleave
                    id="jualBarangPrice"
                    className="form-control"
                    placeholder={ this.state.price }
                    onChange={ this._handlePriceInput }
                    options={{
                    numeral: true,
                    numeralThousandsGroupStyle: 'thousand'
                    }} 
                  />
                </Col>
                <Col md={ 4 }>
                  <div className="jual-barang-checkbox-free">
                    <input type="checkbox" id="switchs" checked={ this.state.freeInput } onChange={ this._handleFreeInput } /><label htmlFor="switchs">Free</label>
                    <span>Free</span>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangProductDesc" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Product Description<span className="jual-barang-required">*</span>
                  </p>
                </Col>
                <Col md={ 7 }>
                  <FormControl componentClass="textarea" rows={ 6 } onChange={ this._handleDescriptionInput }></FormControl>
                </Col>
                <Col md={ 2 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangButton" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 6 }></Col>
                <Col md={ 4 }>
                  <Button className="btn-block jual-barang-sell-button" type="submit" onClick={ this._handleSubmit } id="loadButton">Sell</Button>
                </Col>
                <Col md={ 2 }></Col>
              </FormGroup>

              <FormGroup controlId="jualBarangUploadFoto" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">Upload barang</p>
                  <p className="jual-barang-upload-foto-label-bawah">
                    Silakan pakai foto Anda yang paling bagus untuk mendapatkan perhatian dari Pembeli
                  </p>
                </Col>
                <Col md={ 10 }>
                  <label className='upload-zone'>
                    <img src={ camera } alt="" />
                    <input type='file' name='files'/>
                  </label>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangCondition" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">
                    Condition
                  </p>
                </Col>
                <Col md={ 10 }>
                  <input type="radio" id="s-option" name="selector" defaultChecked />
                  <label htmlFor="s-option">New</label>

                  <input type="radio" id="t-option" name="selector" />
                  <label htmlFor="t-option">Second-hand</label>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangTitle1" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">Title</p>
                </Col>
                <Col md={ 10 }>
                  <FormControl type="text"></FormControl>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangCurrentLocation1" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">
                    Current Location
                  </p>
                </Col>
                <Col md={ 10 }>
                  <FormControl type="text"></FormControl>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangChooseCategory1" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">
                    Choose Category
                  </p>
                </Col>
                <Col md={ 7 }>
                  <FormControl componentClass="select">
                    <option></option>
                    <option>Gadget</option>
                    <option>Motor</option>
                    <option>Cars</option>
                    <option>Home Appliance</option>
                  </FormControl>
                </Col>
                <Col md={ 3 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangPrice1" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">
                    Price
                  </p>
                </Col>
                <Col md={ 7 }>
                  <FormControl type="text"></FormControl>
                  <p className="jual-barang-checkbox-ongkos">
                    <input id="box2" type="checkbox" />
                    <label htmlFor="box2">Harga termasuk ongkos kirim</label>
                  </p>
                </Col>
                <Col md={ 3 }>
                  <div className="jual-barang-checkbox-free">
                    <input type="checkbox" id="switch" /><label htmlFor="switch">Free</label>
                    <span>Free</span>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangTelephone1" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">
                    Telephone
                  </p>
                </Col>
                <Col md={ 7 }>
                  <FormControl type="text"></FormControl>
                </Col>
                <Col md={ 3 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangProductDesc1" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">
                    Product Description
                  </p>
                </Col>
                <Col md={ 10 }>
                  <FormControl componentClass="textarea" rows={ 6 }></FormControl>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangButton" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 8 }></Col>
                <Col md={ 4 }>
                  <Button className="btn-block jual-barang-sell-button">Sell</Button>
                </Col>
              </FormGroup>
            </Form>
          </Row>
        </Grid>
      </div>
    )
  }

}

export default withRouter(JualBarangContent);