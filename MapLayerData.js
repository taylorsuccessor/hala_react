import MapLayerService from './MapLayerService';


class MapLayerData {

    constructor() {
        this.mapLayerService =new MapLayerService();
      }

  getLayersForRegion(region) {

    return this.mapLayerService.getLayersForRegion(region, (response) =>{
      console.log(`Got for getLayersForRegion(${region}):`, JSON.stringify(response.data, null, 4));
      return response.data.data.getLayersForRegion;
    });

  }

  getLayerUrl(region, layerName) {


    return  this.mapLayerService.getLayerUrl(region, layerName, (response) =>{
      console.log(`Got for getLayerUrl(${region}, ${layerName}):`, JSON.stringify(response.data, null, 4));
      return response.data.data.getLayerUrl;
    });
  }



  getLayerUrls(input) {

    return this.mapLayerService.getLayerUrls(input, (response)=> {
      console.log(`Got response for getLayerUrls:`, JSON.stringify(response.data, null, 4));
      return response.data.data.getLayerUrls;
    });

  }


}

export default MapLayerData;