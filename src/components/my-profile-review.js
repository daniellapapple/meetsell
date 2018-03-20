import React, { Component } from 'react'
import {
  Col
} from 'react-bootstrap'

class MyProfileReview extends Component {

  render() {
    return (
      <div className="profile-review">
        <div className="profile-review-top">
          <Col md={ 6 } sm={ 6 } xs={ 6 }>
            <p className="review">REVIEW</p>
          </Col>
          <Col md={ 6 } sm={ 6 } xs={ 6 } className="text-right">
            <div className="profile-produk-bagikan">
              BAGIKAN:
              <div className="profile-produk-social-button">
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
        <div className="profile-review-item">
          <div className="profile-review-wrap-item">
            <Col md={ 3 }>
              <p className="profile-review-item-image-wrap">
                <img src="https://s2.bukalapak.com/img/2128619961/w-300/UNIQLO__T_SHIRT___KAOS_PRIA___SUPIMA_COTTON_CREW_NECK__PDK_.jpg" alt="" />
              </p>
              <p className="profile-review-title-item">
                Kemeja Uniqlo original Asli no KW
              </p>
            </Col>
            <Col md={ 9 }>
              <div className="profile-review-item-right-wrap">
                <div className="profile-review-item-review-name">
                  <img src="https://ecs7.tokopedia.net/img/cache/300/product-1/2016/4/21/253544/253544_1b95828c-cbd0-4636-8dfc-c9f089eb578d.jpg" alt="" width="30" />
                  <span className="profile-review-other-name">Robin van Persie</span>
                  <span className="profile-review-tanggal">12 Maret 2018, 4:00 PM</span>
                </div>
                <div className="profile-review-item-rating">
                  <fieldset className="rating">
                    <input type="radio" id="stars5" name="rating" value="5" /><label className = "full" htmlFor="stars5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="stars4half" name="rating" value="4 and a half" /><label className="half" htmlFor="stars4half" title="Pretty good - 4.5 stars"></label>
                    <input type="radio" id="stars4" name="rating" value="4" /><label className = "full" htmlFor="stars4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="stars3half" name="rating" value="3 and a half" /><label className="half" htmlFor="stars3half" title="Meh - 3.5 stars"></label>
                    <input type="radio" id="stars3" name="rating" value="3" /><label className = "full" htmlFor="stars3" title="Meh - 3 stars"></label>
                    <input type="radio" id="stars2half" name="rating" value="2 and a half" /><label className="half" htmlFor="stars2half" title="Kinda bad - 2.5 stars"></label>
                    <input type="radio" id="stars2" name="rating" value="2" /><label className = "full" htmlFor="stars2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="stars1half" name="rating" value="1 and a half" /><label className="half" htmlFor="stars1half" title="Meh - 1.5 stars"></label>
                    <input type="radio" id="stars1" name="rating" value="1" /><label className = "full" htmlFor="stars1" title="Sucks big time - 1 star"></label>
                    <input type="radio" id="starshalf" name="rating" value="half" /><label className="half" htmlFor="starshalf" title="Sucks big time - 0.5 stars"></label>
                  </fieldset>
                </div>
                <div className="profile-review-other-comment">
                  <p>Barangnya oke..sesuai dengan deskripsi di website.. pengiriman juga cepat. rekomende seller nih..besok beli lagi!</p>
                </div>
                <div className="profile-review-user-comment">
                  <Col md={ 1 } sm={ 1 } xs={ 1 }className="text-center">
                    <img src="http://i0.wp.com/infoheboh.com/wp-content/uploads/2015/11/Tatjana-Saphira-20.jpg?resize=300%2C300" alt="" width="30" />
                  </Col>
                  <Col md={ 11 } sm={ 11 } xs={ 11 }>
                    <p className="profile-review-user-name">
                      Tatjana Shapira Online
                      <span>PENJUAL</span>
                    </p>
                    <p>Terimakasih reviewnya gan ....</p>
                  </Col>
                </div>
              </div>
              <div className="profile-review-item-right-wrap">
                <div className="profile-review-item-review-name">
                  <img src="https://ecs7.tokopedia.net/img/cache/300/product-1/2016/4/21/253544/253544_1b95828c-cbd0-4636-8dfc-c9f089eb578d.jpg" alt="" width="30" />
                  <span className="profile-review-other-name">Van Nistelrooy</span>
                  <span className="profile-review-tanggal">12 Maret 2018, 4:00 PM</span>
                </div>
                <div className="profile-review-item-rating">
                  <fieldset className="rating">
                    <input type="radio" id="starss5" name="rating" value="5" /><label className = "full" htmlFor="starss5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="starss4half" name="rating" value="4 and a half" /><label className="half" htmlFor="starss4half" title="Pretty good - 4.5 stars"></label>
                    <input type="radio" id="starss4" name="rating" value="4" /><label className = "full" htmlFor="starss4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="starss3half" name="rating" value="3 and a half" /><label className="half" htmlFor="starss3half" title="Meh - 3.5 stars"></label>
                    <input type="radio" id="starss3" name="rating" value="3" /><label className = "full" htmlFor="starss3" title="Meh - 3 stars"></label>
                    <input type="radio" id="starss2half" name="rating" value="2 and a half" /><label className="half" htmlFor="starss2half" title="Kinda bad - 2.5 stars"></label>
                    <input type="radio" id="starss2" name="rating" value="2" /><label className = "full" htmlFor="starss2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="starss1half" name="rating" value="1 and a half" /><label className="half" htmlFor="starss1half" title="Meh - 1.5 stars"></label>
                    <input type="radio" id="starss1" name="rating" value="1" /><label className = "full" htmlFor="starss1" title="Sucks big time - 1 star"></label>
                    <input type="radio" id="starsshalf" name="rating" value="half" /><label className="half" htmlFor="starsshalf" title="Sucks big time - 0.5 stars"></label>
                  </fieldset>
                </div>
                <div className="profile-review-other-comment">
                  <p>Barangnya oke..sesuai dengan deskripsi di website.. pengiriman juga cepat. rekomende seller nih..besok beli lagi!</p>
                </div>
              </div>
            </Col>
          </div>
          <div className="profile-review-wrap-item">
            <Col md={ 3 }>
              <p className="profile-review-item-image-wrap">
                <img src="http://www.hawkshop.com/webitemimages/103/W41820-t.jpg" alt="" />
              </p>
              <p className="profile-review-title-item">
                Kemeja Uniqlo original Asli no KW
              </p>
            </Col>
            <Col md={ 9 }>
              <div className="profile-review-item-right-wrap">
                <div className="profile-review-item-review-name">
                  <img src="https://ecs7.tokopedia.net/img/cache/300/product-1/2016/4/21/253544/253544_1b95828c-cbd0-4636-8dfc-c9f089eb578d.jpg" alt="" width="30" />
                  <span className="profile-review-other-name">Robin van Persie</span>
                  <span className="profile-review-tanggal">12 Maret 2018, 4:00 PM</span>
                </div>
                <div className="profile-review-item-rating">
                  <fieldset className="rating">
                    <input type="radio" id="stars5" name="rating" value="5" /><label className = "full" htmlFor="stars5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="stars4half" name="rating" value="4 and a half" /><label className="half" htmlFor="stars4half" title="Pretty good - 4.5 stars"></label>
                    <input type="radio" id="stars4" name="rating" value="4" /><label className = "full" htmlFor="stars4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="stars3half" name="rating" value="3 and a half" /><label className="half" htmlFor="stars3half" title="Meh - 3.5 stars"></label>
                    <input type="radio" id="stars3" name="rating" value="3" /><label className = "full" htmlFor="stars3" title="Meh - 3 stars"></label>
                    <input type="radio" id="stars2half" name="rating" value="2 and a half" /><label className="half" htmlFor="stars2half" title="Kinda bad - 2.5 stars"></label>
                    <input type="radio" id="stars2" name="rating" value="2" /><label className = "full" htmlFor="stars2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="stars1half" name="rating" value="1 and a half" /><label className="half" htmlFor="stars1half" title="Meh - 1.5 stars"></label>
                    <input type="radio" id="stars1" name="rating" value="1" /><label className = "full" htmlFor="stars1" title="Sucks big time - 1 star"></label>
                    <input type="radio" id="starshalf" name="rating" value="half" /><label className="half" htmlFor="starshalf" title="Sucks big time - 0.5 stars"></label>
                  </fieldset>
                </div>
                <div className="profile-review-other-comment">
                  <p>Barangnya oke..sesuai dengan deskripsi di website.. pengiriman juga cepat. rekomende seller nih..besok beli lagi!</p>
                </div>
                <div className="profile-review-user-comment">
                  <Col md={ 1 } sm={ 1 } xs={ 1 } className="text-center">
                    <img src="http://i0.wp.com/infoheboh.com/wp-content/uploads/2015/11/Tatjana-Saphira-20.jpg?resize=300%2C300" alt="" width="30" />
                  </Col>
                  <Col md={ 11 } sm={ 11 } xs={ 11 }>
                    <p className="profile-review-user-name">
                      Tatjana Shapira Online
                      <span>PENJUAL</span>
                    </p>
                    <p>Terimakasih reviewnya gan ....</p>
                  </Col>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    )
  }

}

export default MyProfileReview