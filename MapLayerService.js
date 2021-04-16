import AxiosBase from './AxiosBase';
import QueryList from './MapLayerQueryList'


class MapLayerService {
 
  getLayersForRegion(region,callback) {
    const userData = 
        {
          query: QueryList['getLayersForRegion'],
          variables: {
            input: {
              region,
              }
          },
          operationName: 'getLayersForRegion'
        };

    return AxiosBase.post(userData,callback,'Failed to get layer.');
  }

  getLayerUrl(region, layerName,callback) {
    const userData =  {
          query: QueryList['getLayerUrl'],
          variables: {
            input: {
              region,
              layerName,
            }
          },
          operationName: 'getLayerUrl'
        };

    return AxiosBase.post(userData,callback,'Failed to get layer URL.');
  }

  

  getLayerUrls(input, callback) {
    const userData =  
        {
          query: QueryList['getLayerUrls'],
          variables: {
            input
          },
          operationName: 'getLayerUrls'
        };

    return AxiosBase.post(userData,callback,'Failed to get layer URLs.');
  }


}

export default MapLayerService;