import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap'

import camera from '../assets/image/jual-barang-camera.png'

class JualBarangContent extends Component {

  render() {
    return (
      <div className="jual-barang-content-wrap">
        <Grid>
          <Row>
            <Col md={ 12 }>
              <p className="jual-barang-content-title">Jual barang Anda disini</p>
            </Col>
          </Row>
          <Row>
            <Form horizontal>
              <FormGroup controlId="jualBarangUploadFoto" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">Upload barang</p>
                  <p className="jual-barang-upload-foto-label-bawah">
                    Silakan pakai foto Anda yang paling bagus untuk mendapatkan perhatian dari Pembeli
                  </p>
                </Col>
                <Col md={ 9 }>
                  <label className='upload-zone'>
                    <img src={ camera } alt="" />
                    <input type='file' name='files'/>
                  </label>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangCondition" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Condition
                  </p>
                </Col>
                <Col md={ 9 }>
                  <input type="radio" id="s-option" name="selector" defaultChecked />
                  <label htmlFor="s-option">New</label>

                  <input type="radio" id="t-option" name="selector" />
                  <label htmlFor="t-option">Second-hand</label>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangTitle" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">Title</p>
                </Col>
                <Col md={ 7 }>
                  <FormControl type="text"></FormControl>
                </Col>
                <Col md={ 2 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangCurrentLocation" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Current Location
                  </p>
                </Col>
                <Col md={ 7 }>
                  <FormControl type="text"></FormControl>
                </Col>
                <Col md={ 2 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangChooseCategory" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Choose Category
                  </p>
                </Col>
                <Col md={ 5 }>
                  <FormControl componentClass="select">
                    <option></option>
                    <option>Gadget</option>
                    <option>Motor</option>
                    <option>Cars</option>
                    <option>Home Appliance</option>
                  </FormControl>
                </Col>
                <Col md={ 4 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangPrice" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Price
                  </p>
                </Col>
                <Col md={ 5 }>
                  <FormControl type="text"></FormControl>
                  <p className="jual-barang-checkbox-ongkos">
                    <input id="box1" type="checkbox" />
                    <label htmlFor="box1">Harga termasuk ongkos kirim</label>
                  </p>
                </Col>
                <Col md={ 4 }>
                  <div className="jual-barang-checkbox-free">
                    <input type="checkbox" id="switch" /><label htmlFor="switch">Free</label>
                    <span>Free</span>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangTelephone" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Telephone
                  </p>
                </Col>
                <Col md={ 5 }>
                  <FormControl type="text"></FormControl>
                </Col>
                <Col md={ 4 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangProductDesc" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 3 } className="text-right">
                  <p className="jual-barang-form-label">
                    Product Description
                  </p>
                </Col>
                <Col md={ 7 }>
                  <FormControl componentClass="textarea" rows={ 6 }></FormControl>
                </Col>
                <Col md={ 2 }></Col>
              </FormGroup>
              <FormGroup controlId="jualBarangButton" className="hidden-xs hidden-sm visible-lg visible-md">
                <Col md={ 6 }></Col>
                <Col md={ 4 }>
                  <Button className="btn-block jual-barang-sell-button">Sell</Button>
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
              <FormGroup controlId="jualBarangTitle" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">Title</p>
                </Col>
                <Col md={ 10 }>
                  <FormControl type="text"></FormControl>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangCurrentLocation" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">
                    Current Location
                  </p>
                </Col>
                <Col md={ 10 }>
                  <FormControl type="text"></FormControl>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangChooseCategory" className="visible-xs visible-sm hidden-lg hidden-md">
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
              <FormGroup controlId="jualBarangPrice" className="visible-xs visible-sm hidden-lg hidden-md">
                <Col md={ 2 }>
                  <p className="jual-barang-form-label">
                    Price
                  </p>
                </Col>
                <Col md={ 7 }>
                  <FormControl type="text"></FormControl>
                  <p className="jual-barang-checkbox-ongkos">
                    <input id="box1" type="checkbox" />
                    <label htmlFor="box1">Harga termasuk ongkos kirim</label>
                  </p>
                </Col>
                <Col md={ 3 }>
                  <div className="jual-barang-checkbox-free">
                    <input type="checkbox" id="switch" /><label htmlFor="switch">Free</label>
                    <span>Free</span>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup controlId="jualBarangTelephone" className="visible-xs visible-sm hidden-lg hidden-md">
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
              <FormGroup controlId="jualBarangProductDesc" className="visible-xs visible-sm hidden-lg hidden-md">
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

export default JualBarangContent