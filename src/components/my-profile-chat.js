import React, { Component } from 'react'
import {
  Col,
  Tabs,
  Tab,
  Button,
  FormGroup,
  FormControl
} from 'react-bootstrap'

import send from '../assets/image/send-chat.png'

class MyProfileChat extends Component {

  render() {
    return (
      <div className="my-profile-chat">
        <div className="my-profile-chat-top">
          <Col md={ 6 } sm={ 6 } xs={ 6 }>
            <p className="chat">CHAT</p>
          </Col>
          <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
            <div className="my-profile-chat-bagikan">
              BAGIKAN:
              <div className="my-profile-chat-social-button">
                <a href="#facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#twitter">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="#youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </Col>
        </div>
        <div className="my-profile-chat-body">
          <Col md={ 4 }>
            <div className="my-profile-chat-tabs">
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Jual">
                  <p className="my-profile-chat-tab-item">
                    <img src="http://i2.wp.com/infoheboh.com/wp-content/uploads/2015/11/Tatjana-Saphira-20.jpg?resize=300%2C300" alt="" width="30" />
                    <span className="my-profile-chat-tab-item-name">Robin van Persie</span>
                    <span className="my-profile-chat-tab-item-tanggal">09:00 AM</span>
                  </p>
                  <p className="my-profile-chat-tab-item">
                    <img src="http://i2.wp.com/infoheboh.com/wp-content/uploads/2015/11/Tatjana-Saphira-20.jpg?resize=300%2C300" alt="" width="30" />
                    <span className="my-profile-chat-tab-item-name">Gal Gadot</span>
                    <span className="my-profile-chat-tab-item-tanggal">07:00 AM</span>
                  </p>
                  <p className="my-profile-chat-tab-item">
                    <img src="http://i2.wp.com/infoheboh.com/wp-content/uploads/2015/11/Tatjana-Saphira-20.jpg?resize=300%2C300" alt="" width="30" />
                    <span className="my-profile-chat-tab-item-name">Chelsea Ailen</span>
                    <span className="my-profile-chat-tab-item-tanggal">09:00 AM</span>
                  </p>
                  <p className="my-profile-chat-tab-item">
                    <img src="http://i2.wp.com/infoheboh.com/wp-content/uploads/2015/11/Tatjana-Saphira-20.jpg?resize=300%2C300" alt="" width="30" />
                    <span className="my-profile-chat-tab-item-name">Putri Marino</span>
                    <span className="my-profile-chat-tab-item-tanggal">07:00 AM</span>
                  </p>
                </Tab>
                <Tab eventKey={2} title="Beli">
                <p className="my-profile-chat-tab-item">
                    <img src="http://pojoksatu.id/wp-content/uploads/2015/01/025056_641896_chelsea_islan-300x300.jpg" alt="" width="30" />
                    <span className="my-profile-chat-tab-item-name">Robin van Persie</span>
                    <span className="my-profile-chat-tab-item-tanggal">09:00 AM</span>
                  </p>
                  <p className="my-profile-chat-tab-item">
                    <img src="http://pojoksatu.id/wp-content/uploads/2015/01/025056_641896_chelsea_islan-300x300.jpg" alt="" width="30" />
                    <span className="my-profile-chat-tab-item-name">Gal Gadot</span>
                    <span className="my-profile-chat-tab-item-tanggal">07:00 AM</span>
                  </p>
                  <p className="my-profile-chat-tab-item">
                    <img src="http://pojoksatu.id/wp-content/uploads/2015/01/025056_641896_chelsea_islan-300x300.jpg" alt="" width="30" />
                    <span className="my-profile-chat-tab-item-name">Chelsea Ailen</span>
                    <span className="my-profile-chat-tab-item-tanggal">09:00 AM</span>
                  </p>
                  <p className="my-profile-chat-tab-item">
                    <img src="http://pojoksatu.id/wp-content/uploads/2015/01/025056_641896_chelsea_islan-300x300.jpg" alt="" width="30" />
                    <span className="my-profile-chat-tab-item-name">Putri Marino</span>
                    <span className="my-profile-chat-tab-item-tanggal">07:00 AM</span>
                  </p>
                </Tab>
              </Tabs>
            </div>
          </Col>
          <Col md={ 8 }>
            <div className="my-profile-chat-item-header">
              <Col md={ 1 } sm={ 1 } xs={ 1 }>
                <img src="http://i2.wp.com/infoheboh.com/wp-content/uploads/2015/11/Tatjana-Saphira-20.jpg?resize=300%2C300" alt="" width="40" />
              </Col>
              <Col md={ 11 } sm={ 11 } xs={ 11 }>
                <p className="my-profile-chat-item-header-name">Gal Gadot</p>
                <p className="my-profile-chat-item-header-location2">2 km from your location</p>
              </Col>
            </div>
            <div className="my-profile-chat-item-body">
              <Col md={ 2 }>
                <div className="my-profile-chat-item-body-image-wrap">
                  <img src="https://s0.bukalapak.com/img/0798089302/w-300/UNIQLO___KEMEJA_FLANNEL_KOTAK_LENGAN_PANJANG.jpg" alt="" />
                </div>
              </Col>
              <Col md={ 10 }>
                <p className="my-profile-chat-item-body-title">Kemeja Uniqlo original Asli no KW</p>
                <p className="my-profile-chat-item-body-harga">
                  Rp 200.000
                  <span className="my-profile-chat-item-body-button-add-cart">
                    <Button>Add to cart</Button>
                  </span>
                  <span className="my-profile-chat-item-body-button-buy-now">
                    <Button>Buy now</Button>
                  </span>
                </p>
              </Col>
              <Col md={ 12 }>
                <p className="my-profile-chat-item-body-line"></p>
              </Col>
            </div>
            <div className="my-profile-chat-item-body-chat">
              <p className="my-profile-chat-item-body-chat-date-seen">
                Hari ini
              </p>
              <div className="my-profile-chat-item-body-chat-item">
                <p className="my-profile-chat-item-body-chat-user-lain">
                  <span className="my-profile-chat-item-body-chat-user-lain-item">Barangnya oke..sesuai dengan deskripsi di website.. pengiriman juga cepat. rekomende seller nih..besok beli lagi!</span>
                  <span className="my-profile-chat-item-body-chat-tanggal-user-lain">09:00 AM</span>
                </p>
                <p className="my-profile-chat-item-body-chat-saya-sendiri text-right">
                  <span className="my-profile-chat-item-body-chat-tanggal-saya-sendiri">09:00 AM</span>
                  <span className="my-profile-chat-item-body-chat-saya-sendiri-item">Terima kasih gan</span>
                </p>
              </div>
            </div>
            <div className="my-profile-chat-item-body-chat-input">
              <Col md={ 10 } sm={ 10 } xs={ 10 }>
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Tulis Pesan ....."
                  ></FormControl>
                </FormGroup>
              </Col>
              <Col md={ 2 } sm={ 2 } xs={ 2 }>
                <div className="send-chat-wrap">
                  <img src={ send } alt="" className="send-chat" />
                </div>
              </Col>
            </div>
          </Col>
        </div>
      </div>
    )
  }

}

export default MyProfileChat