const mockJob = {
  vehicleInformation: {
    vehicleRegistrationNumber: '2323213123',
    vehicleType: 'Truck',
    vehicleBrand: 'Ashok Leyland',
    vehicleModel: 'Pro 5025',
    vehicleConfiguration: '6x4 (10 Wheeler)',
    roadApplication: 'Rated Load',
    loading: 'Heavy Load',
    tyreSize: '10.00 R 20',
    speedoMeterReading: '34234',
    averageMonthlyRunning: '34234',
  },
  driverAndOwnerInfo: {
    companyName: 'kiencon',
    addressStreet: '12 abc saigon',
    city: 'sài gòn',
    pincode: '0123457',
    ownerContactNumber: '+841232158073',
    ownerEmailAddress: 'kienconu1@gmail.com',
    driverName: 'kien con',
    driverContactNumber: '+841232158073',
    fleetManagerEmailAddress: 'kienconu1@gmail.com',
    id: 'kiencon-1614517747225',
  },
  tyreInspection: {
    'Misalignment-radio-btn': 1,
    'Misalignment-dropdown': 'Uneven wear in tyres due to misalignment',
    'Pattern Mismatch-radio-btn': 0,
    'Air Pressure Mismatch-radio-btn': 1,
    'Air Pressure Mismatch-dropdown': 'Mismatch of air pressure in dual tyres',
    'Disc Holes Mismatch-radio-btn': 1,
    'Disc Holes Mismatch-dropdown': 'Holes mismatch in outer & inner tyres',
    'Cuts & Damages In Tyres-radio-btn': 0,
    'Tyres Which Can Be Removed For Retread?-radio-btn': 0,
  },
  vehicleInspection: {
    'King Pin-radio-btn': 1,
    'King Pin-dropdown': 'Shake in king pin',
    'Wheel Bearing-radio-btn': 0,
    'Stearing Ball Joints-radio-btn': 0,
    'Tie Rod-radio-btn': 1,
    'Tie Rod-dropdown': 'Excessive play in tie rod',
    'Steering Wheel-radio-btn': 1,
    'Steering Wheel-dropdown': 'Streering wheel play',
    'Bushes In Leafs-radio-btn': 0,
    'Front Leaf Spring-radio-btn': 1,
    'Front Leaf Spring-dropdown': 'Misaligned leafs',
    'Rear Leaf Spring-radio-btn': 0,
    'Rim Disc-radio-btn': 1,
    'Rim Disc-dropdown': 'Disc damaged',
  },
  jobWorksheet: {
    'Chassis Greasing': true,
    Retreading: true,
    'Tyre Fitment': '2',
    Swapping: '5',
    'Extension Valves': '6',
  },
  serviceRecommendation: {
    otherRecommendation: 'Problem observed but done alignment with permission of Driver and/or Owner',
  },
  type: 'jobsheet',
  createdAt: '2021-02-28T13:10:07.602Z',
  _id: 'kiencon-1614517747225',
};

const mockData = () => {
  const data = [];
  for (let i = 0; i < 24; i += 1) {
    const id = `kiencon${i}-${new Date().getTime()}`;
    const mockCompanyInfo = {
      ...mockData.driverAndOwnerInfo,
      companyName: `kiencon${i}`,
      id,
    };
    data.push({
      ...mockJob,
      driverAndOwnerInfo: mockCompanyInfo,
      _id: id,
    });
  }

  return data;
};

export default mockData();
