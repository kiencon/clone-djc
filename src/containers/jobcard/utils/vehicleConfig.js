const vehicleConfig = {
  VEHICLE_TYPE_BRAND: [
    {
      'type': 'Truck',
      'brands': ['Ashok Leyland', 'Bharat Benz', 'Eicher', 'TATA', 'Mahindra', 'Others']
    },
    {
      'type': 'Bus and Coach',
      'brands': ['Volvo', 'Scania', 'Mercedes', 'Ashok Leyland', 'MAN', 'IML Isuzu', 'Eicher', 'TATA', 'Others']
    },
    {
      'type': 'ICV',
      'brands': []
    },
    {
      'type': 'LCV',
      'brands': []
    }
  ],

  VEHICLE_BRAND_MODEL: [
    {
      'type': 'Truck',
      'brands': [
        { 'brand': 'Eicher', 'models': [ '3531', 'Pro 5025', 'Pro 6031', 'Pro 6037', 'Others' ] },
        { 'brand': 'Ashok Leyland', 'models': [ '1616', '2516', '2518', '3118', '3123', '3518', '3718', '4018', '4923', 'Others' ] },
        { 'brand': 'Bharat Benz', 'models': [ '1617', '2523', '3123', '3723', '4023', '4923', 'Others' ] },
        { 'brand': 'TATA', 'models': [ '1616', '2515', '2516', '2518', '3118', '3123', '3518', '3718', '3723', '4018', '4923', 'Others' ] },
        { 'brand': 'Others', 'models': [ '1616', '1617', '2516', '2518', '2523', '3118', '3123', '3518', '3531', '3718', '3723', '4018', '4023', '4923', 'Others' ] },
        { 'brand': 'Mahindra', 'models': [ 'Blazo 37', 'Blazo 49', 'Truxo 25', 'Truxo 31', 'Truxo 37', 'MN 25', 'MN 31', 'MN 49' ] }
      ]
    }
  ],

  VEHICLE_MODEL_CONFIGURATION: [
    {
      'type': 'Truck',
      'brand': 'Ashok Leyland',
      'models': [
        { 'model': '1616', 'configs': [ '4x2 (6 Wheeler)' ] },
        { 'model': '2516', 'configs': [ '6x2 (10 Wheeler)' ] },
        { 'model': '2518', 'configs': [ '6x4 (10 Wheeler)' ] },
        { 'model': '3118', 'configs': [ '8x2x4 (Twin steer 12 W)' ] },
        { 'model': '3123', 'configs': [ '8x4 (12 Wheeler)' ] },
        { 'model': '3518', 'configs': [ '4x2 Horse only', '4x2 Horse with Trailer' ] },
        { 'model': '3718', 'configs': [ '10x2x4 (14 Wheeler)' ] },
        { 'model': '4018', 'configs': [ '4x2 Horse only', '4x2 Horse with Trailer' ] },
        { 'model': '4923', 'configs': [ '6x4 Horse only', '6x4 Horse with Trailer' ] },
        { 'model': 'Others', 'configs': [ 'Open Configuration' ] }
      ]
    },
    {
      'type': 'Truck',
      'brand': 'Bharat Benz',
      'models': [
        { 'model': '1617', 'configs': [ '4x2 (6 Wheeler)' ] },
        { 'model': '2523', 'configs': [ '6x2 (10 Wheeler)' ] },
        { 'model': '3123', 'configs': [ '8x2x2 (12 Wheeler)' ] },
        { 'model': '3723', 'configs': [ '10x2x4 (14 Wheeler)' ] },
        { 'model': '4023', 'configs': [ '4x2 Horse only', '4x2 Horse with Trailer' ] },
        { 'model': '4923', 'configs': [ '6x4 Horse only', '6x4 Horse with Trailer' ] },
        { 'model': 'Others', 'configs': [ 'Open Configuration' ] }
      ]
    },
    {
      'type': 'Truck',
      'brand': 'Eicher',
      'models': [
        { 'model': '3531', 'configs': [ '8x2x4 (Twin steer 12 W)' ] },
        { 'model': 'Pro 5025', 'configs': [ '6x2 (10 Wheeler)' ] },
        { 'model': 'Pro 6031', 'configs': [ '8x2x4 (Twin steer 12 W)' ] },
        { 'model': 'Pro 6037', 'configs': [ '10x2x4 (14 Wheeler)' ] },
        { 'model': 'Others', 'configs': [ 'Open Configuration' ] }
      ]
    },
    {
      'type': 'Truck',
      'brand': 'Others',
      'models': [
        { 'model': 'Others', 'configs': [ 'Open Configuration' ] },
        { 'model': '1616', 'configs': [ 'Open Configuration' ] },
        { 'model': '1617', 'configs': [ 'Open Configuration' ] },
        { 'model': '2516', 'configs': [ 'Open Configuration' ] },
        { 'model': '2518', 'configs': [ 'Open Configuration' ] },
        { 'model': '2523', 'configs': [ 'Open Configuration' ] },
        { 'model': '3118', 'configs': [ 'Open Configuration' ] },
        { 'model': '3123', 'configs': [ 'Open Configuration' ] },
        { 'model': '3518', 'configs': [ 'Open Configuration' ] },
        { 'model': '3531', 'configs': [ 'Open Configuration' ] },
        { 'model': '3718', 'configs': [ 'Open Configuration' ] },
        { 'model': '3723', 'configs': [ 'Open Configuration' ] },
        { 'model': '4018', 'configs': [ 'Open Configuration' ] },
        { 'model': '4023', 'configs': [ 'Open Configuration' ] },
        { 'model': '4923', 'configs': [ 'Open Configuration' ] }
      ]
    },
    {
      'type': 'Truck',
      'brand': 'TATA',
      'models': [
        { 'model': '1616', 'configs': [ '4x2 (6 Wheeler)' ] },
        { 'model': '2515', 'configs': [ '6x2 (10 Wheeler)' ] },
        { 'model': '2516', 'configs': [ '6x2 (10 Wheeler)' ] },
        { 'model': '2518', 'configs': [ '6x4 (10 Wheeler)' ] },
        { 'model': '3118', 'configs': [ '8x2x2 (12 Wheeler)' ] },
        { 'model': '3123', 'configs': [ '8x4 (12 Wheeler)' ] },
        { 'model': '3518', 'configs': [ '4x2 Horse only', '4x2 Horse with Trailer' ] },
        { 'model': '3718', 'configs': [ '10x2x4 (14 Wheeler)' ] },
        { 'model': '3723', 'configs': [ '10x2x4 (14 Wheeler)' ] },
        { 'model': '4018', 'configs': [ '4x2 Horse only', '4x2 Horse with Trailer' ] },
        { 'model': '4923', 'configs': [ '6x4 Horse only', '6x4 Horse with Trailer' ] },
        { 'model': 'Others', 'configs': [ 'Open Configuration' ] }
      ]
    },
    {
      'type': 'Truck',
      'brand': 'Mahindra',
      'models': [
        { 'model': 'Blazo 49', 'configs': [ '6x4 Horse with Trailer' ] },
        { 'model': 'Blazo 37', 'configs': [ '10x2x4 (14 Wheeler)' ] },
        { 'model': 'Truxo 31', 'configs': [ '8x2x4 (Twin steer 12 W)' ] },
        { 'model': 'Truxo 25', 'configs': [ '6x2 (10 Wheeler)' ] },
        { 'model': 'Truxo 37', 'configs': [ '10x2x4 (14 Wheeler)' ] },
        { 'model': 'MN 31', 'configs': [ '8x2x4 (Twin steer 12 W)' ] },
        { 'model': 'MN 25', 'configs': [ '6x4 (10 Wheeler)' ] },
        { 'model': 'MN 49', 'configs': [ '6x4 Horse with Trailer' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': '',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) City Bus', '6x2 (8 Wheeler) Coach' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': 'Volvo',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) City Bus', '6x2 (8 Wheeler) Coach' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': 'Scania',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) City Bus', '6x2 (8 Wheeler) Coach' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': 'Mercedes',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) City Bus', '6x2 (8 Wheeler) Coach' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': 'Ashok Leyland',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) City Bus', '6x2 (8 Wheeler) Coach' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': 'Others',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) City Bus', '6x2 (8 Wheeler) Coach' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': 'MAN',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) City Bus', '6x2 (8 Wheeler) Coach' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': 'IML Isuzu',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) City Bus', '6x2 (8 Wheeler) Coach' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': 'TATA',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) Bus' ] }
      ]
    },
    {
      'type': 'Bus and Coach',
      'brand': 'Eicher',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler) Bus' ] }
      ]
    },
    {
      'type': 'ICV',
      'brand': '',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler)' ] }
      ]
    },
    {
      'type': 'LCV',
      'brand': '',
      'models': [
        { 'model': '', 'configs': [ '4x2 (6 Wheeler)', '4x2 (4 Wheeler)' ] }
      ]
    }
  ],

  ROADAPPLICATION_LOADING_TYRESIZE: [
    {
      'road': 'Coach',
      'loading': [
        {
          'name': 'Moderate Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '295/80 R 22.5']
        },
        {
          'name': 'Rated Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '295/80 R 22.5']
        }
      ]
    },
    {
      'road': 'Long Distance / National',
      'loading': [
        {
          'name': 'Heavy Load',
          'tyze_size': ['10.00 R 20', '11.00 R 20', '12.00-20', '12.00-24', '7.00 R 16', '7.50 R 16', '7.50-20', '8.25 R 16', '8.25 R 20', '9.00 R 20']
        },
        {
          'name': 'Moderate Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '11.00 R 20', '12.00-20', '12.00-24', '215/75 R 17.5', '225/75 R 17.5', '235/75 R 17.5', '295/80 R 22.5', '7.00 R 16', '7.50 R 16', '7.50-20', '8.25 R 16', '8.25 R 20', '9.00 R 20']
        },
        {
          'name': 'Rated Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '11.00 R 20', '12.00-20', '12.00-24', '215/75 R 17.5', '225/75 R 17.5', '235/75 R 17.5', '295/80 R 22.5', '7.00 R 16', '7.50 R 16', '7.50-20', '8.25 R 16', '8.25 R 20', '9.00 R 20']
        }
      ]
    },
    {
      'road': 'Mixed (On & Off Road)',
      'loading': [
        {
          'name': 'Heavy Load',
          'tyze_size': ['10.00 R 20', '11.00 R 20', '12.00-20', '12.00-24', '7.00 R 16', '7.50 R 16', '7.50-20', '8.25 R 16', '8.25 R 20', '9.00 R 20']
        },
        {
          'name': 'Moderate Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '11.00 R 20', '12.00-20', '12.00-24', '215/75 R 17.5', '225/75 R 17.5', '235/75 R 17.5', '295/80 R 22.5', '7.00 R 16', '7.50 R 16', '7.50-20', '8.25 R 16', '8.25 R 20', '9.00 R 20']
        },
        {
          'name': 'Rated Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '11.00 R 20', '12.00-20', '12.00-24', '215/75 R 17.5', '225/75 R 17.5', '235/75 R 17.5', '295/80 R 22.5', '7.00 R 16', '7.50 R 16', '7.50-20', '8.25 R 16', '8.25 R 20', '9.00 R 20']
        }
      ]
    },
    {
      'road': 'Regional (On-Road)',
      'loading': [
        {
          'name': 'Heavy Load',
          'tyze_size': ['10.00 R 20', '11.00 R 20', '12.00-20', '12.00-24', '215/75 R 17.5', '7.00 R 16', '7.50 R 16', '7.50-20', '8.25 R 16', '8.25 R 20', '9.00 R 20']
        },
        {
          'name': 'Moderate Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '11.00 R 20', '12.00-20', '12.00-24', '215/75 R 17.5', '225/75 R 17.5', '235/75 R 17.5', '295/80 R 22.5', '7.00 R 16', '7.50 R 16', '7.50-20', '8.25 R 16', '8.25 R 20', '9.00 R 20']
        },
        {
          'name': 'Rated Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '11.00 R 20', '12.00-20', '12.00-24', '215/75 R 17.5', '225/75 R 17.5', '235/75 R 17.5', '295/80 R 22.5', '7.00 R 16', '7.50 R 16', '7.50-20', '8.25 R 16', '8.25 R 20', '9.00 R 20']
        }
      ]
    },
    {
      'road': 'Speciality (Mining , Sand etc.)',
      'loading': [
        {
          'name': 'Heavy Load',
          'tyze_size': ['10.00 R 20', '11.00 R 20', '12.00-20', '12.00-24', '9.00 R 20']
        },
        {
          'name': 'Moderate Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '11.00 R 20', '12.00-20', '12.00-24', '295/80 R 22.5', '9.00 R 20']
        },
        {
          'name': 'Rated Load',
          'tyze_size': ['10.00 R 20', '11 R 22.5', '11.00 R 20', '12.00-20', '12.00-24', '295/80 R 22.5', '9.00 R 20']
        }
      ]
    }
  ],

  getAllType () {
    return this.VEHICLE_TYPE_BRAND.map(v => v.type)
  },
  getBrandsByType (type) {
    let brandObj = this.VEHICLE_TYPE_BRAND.filter(item => item.type === type)[0]
    return brandObj ? brandObj.brands : []
  },
  getModels (type, brand) {
    let brandObj = this.VEHICLE_BRAND_MODEL.filter(item => item.type === type)[0]
    if (brandObj) {
      let modelObj = brandObj.brands.filter(item => item.brand === brand)[0]
      return modelObj ? modelObj.models : []
    }
    return []
  },
  getConfigs (type, brand, model) {
    let brandlObj = this.VEHICLE_MODEL_CONFIGURATION
      .filter(item => (item.type === type && item.brand === brand))[0]
    if (brandlObj) {
      let modelObj = brandlObj.models.filter(item => item.model === model)[0]
      return modelObj ? modelObj.configs : []
    }
    return []
  },
  getRoadApplications () {
    return this.ROADAPPLICATION_LOADING_TYRESIZE.map(v => v.road)
  },
  getLoadingByRoadApplication (roadApp) {
    let roadApps = this.ROADAPPLICATION_LOADING_TYRESIZE.filter(f => f.road === roadApp).map(v => v.loading)[0] || []
    return roadApps.map(m => m.name) || []
  },
  getTyreSizeByLoading (roadApp, loading) {
    let roadApps = this.ROADAPPLICATION_LOADING_TYRESIZE.filter(f => f.road === roadApp).map(v => v.loading)[0] || []
    return roadApps.filter(f => f.name === loading).map(v => v.tyze_size)[0] || []
  }

}

export default vehicleConfig;
