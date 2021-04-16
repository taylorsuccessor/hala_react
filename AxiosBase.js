import axios from 'axios';


class AxiosBase {
  constructor(serviceUrl, apiKey) {
    if (serviceUrl == null) {
      throw Error('Service URL not provided.');
    }

    if (apiKey == null) {
      throw Error('API key not provided.');
    }

    this.serviceUrl = serviceUrl;
    this.apiKey = apiKey;
  }

  request(options, callback, faildMessage) {

     return axios.request(options).then(function (response) {
       callback(response);
    }).catch(function (error) {
      console.error(error);
      throw Error(faildMessage);
    });

  }

  prepareRequestData(userData,method) {

    const options = {
      method: method,
      url: this.serviceUrl,
      headers: { 'Content-Type': 'application/json', ['x-api-key']: this.apiKey },
      data: JSON.stringify(userData )
    };

  }

  post(userData,callback,faildMessage) {
    var options = this.prepareRequestData(userData,'POST');
    this.request(options,callback,faildMessage);
  }
}

export default AxiosBase;