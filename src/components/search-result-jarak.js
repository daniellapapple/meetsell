import React, { Component } from 'react'
import $ from 'jquery'

class SearchResultJarak extends Component {

  constructor(props) {
    super(props)

    this.rSlider()
  }

  rSlider() {
    $("document").ready(function () {
      $(".rslider").rangeslider();
    });
    $.fn.rangeslider = function (options) {
      var obj = this;
      obj.on('input', function () {
        updateSlider(this)
      })
      updateSlider(this);
      return obj;
    };

    function updateSlider(passObj) {
      var obj = $(passObj);
      var value = obj.val();
      var min = obj.attr("min");
      var max = obj.attr("max");
      var range = Math.round(max - min);
      var percentage = Math.round((value - min) * 100 / range);
      var nextObj = obj.next();
      nextObj.find("span.bar-btn").css("left", percentage + "%");
      nextObj.find("span.bar > span").css("width", percentage + "%");
      nextObj.find("span.bar-btn > span").text(percentage);
      $('#rangevalue').html(percentage + ' KM')
      $('.filter-modal')
      .find('#rangevalue')
      .html(percentage + ' KM')
    };
  }

  render() {
    return (
      <div className="search-result-jarak">
        <p>JARAK</p>
        <div className="slider">
          <span className="range-slider">
            <input type="range" className="rslider" min="0" max="100" defaultValue="20 KM" />
            <span className='slider-container'>
              <span className='bar'>
                <span>
                </span>
              </span>
              <span className='bar-btn'>
                <span>0</span>
              </span>
            </span>
            <output id="rangevalue"></output>
          </span>
        </div>
      </div>
    )
  }

}

export default SearchResultJarak