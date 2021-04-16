const QueryList = {
    dgetLayersForRegion : `query getLayersForRegion($input: LayersForRegionInput!) {
        getLayersForRegion(input: $input) {
          layerName
          region
          id
        }
      }`,
      
    getLayerUrl : `query getLayerUrl($input: LayerUrlInput!) {
        getLayerUrl(input: $input) {
          url
          layerName
          region
          layerId
          sources {
            desc
            url
          }
        }
      }`,
      
       getLayerUrls : `query getLayerUrls($input: [LayerUrlInput!]!) {
        getLayerUrls(input: $input) {
          url
          region
          layerName
          sources {
            desc
            url
          }
        }
      }`
}