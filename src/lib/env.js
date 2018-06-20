import moment from 'moment';

import time from '../assets/image/time-product.png'
import calendar from '../assets/image/calendar-product.png'

export default class Env {

  static formatCurrency(nominal) {
    if (nominal === undefined || nominal === 0) {
        return 'FREE';
    }
    let reverse = nominal.toString().split('').reverse().join('');
    let formated = reverse.match(/\d{1,3}/g);
    return 'Rp ' + formated.join('.').split('').reverse().join('');
  }

  static urlS3(assetName) {
    // if (assetName === null) return
    if (assetName.indexOf('.') === -1 && assetName !== '') {
      return `https://graph.facebook.com/v2.5/${assetName}/picture?type=large`;
    }

    if (assetName !== '') {
      return 'https://s3-ap-southeast-1.amazonaws.com/meetsell-d/' + assetName;
    }
  }

  // WARNING: return date with local timezone!

  static now() {
    return moment()
  }

  static getDateTimeFormat(date) {
    let _date = (date === undefined) ? this.now() : date;
    if(typeof date === 'string'){
        _date = moment(date);
    }
    return _date.format('DD-MMM-YYYY hh.mma');
  }

  static timeAgo(date) {
    if (date !== 'Invalid date') {
      let fromDate = moment(date, 'DD-MMM-YYYY hh.mma').fromNow()
      let parse = parseInt(fromDate)
      if (fromDate.indexOf('seconds ago') !== -1) {
        return fromDate;
      }

      if (fromDate.indexOf('minute ago') !== -1) {
        return fromDate;
      }

      if (fromDate.indexOf('minutes ago') !== -1) {
        return fromDate;
      }

      if (fromDate.indexOf('hour ago') !== -1) {
        return fromDate;
      }

      if (fromDate.indexOf('hours ago') !== -1) {
        if (parse < 24) {
          return fromDate;
        }
      } else {
        return moment(date, 'DD-MMM-YYYY').format('DD - MMM - YYYY')
      }
    }
  }

  static getInitialName(name) {
    if (name === null || name === '') {
      return null;
    };

    name = name.trim();
    let result = name.split(/\s+/, 2);

    if (result.length === 1) {
      return result[0][0].toUpperCase();
    };
    return (result[0][0] + result[1][0]).toUpperCase();
  }

  static getExtension(path) {
    return path.split('.').pop();
  }

  static getRandomString(length) {
    let string = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        string += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return string;
  }

  static getBase64(url) {
    let split = url.split(',')
    let base64 = split[1]
    return base64
  }

  static getChangeIconItemProduct(time) {
    let varTime = this.timeAgo(this.getDateTimeFormat(time))
    return varTime
  }

  static toUTC(date) {
    let _date = (date === undefined) ? this.now() : date;
    if (typeof date === 'string') {
      _date = moment(date)
    };
    return _date.utcOffset(0);
  };

  static getExtension(path) {
    return path.split('.').pop();
  }

  static getImageSource(key, base64) {
    let ext = this.getExtension(key);
    return 'data:image/' + ext + ';base64,' + base64
  }

};