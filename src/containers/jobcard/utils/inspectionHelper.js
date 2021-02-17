export const VEHICLE_INSPECTION_DATA = [{
  label: 'King Pin',
  comments: ['Shake in king pin'],
}, {
  label: 'Wheel Bearing',
  comments: ['Shake in wheel bearing. Can cause tyre wear'],
}, {
  label: 'Stearing Ball Joints',
  comments: ['Steering ball joints worn out'],
}, {
  label: 'Tie Rod',
  comments: ['Excessive play in tie rod', 'Bent tie rod'],
}, {
  label: 'Steering Wheel',
  comments: ['Streering wheel play'],
}, {
  label: 'Bushes In Leafs',
  comments: ['Bushes worn out in leafs'],
}, {
  label: 'Front Leaf Spring',
  comments: ['Misaligned leafs', 'Loose U clamps', 'Broken leafs'],
}, {
  label: 'Rear Leaf Spring',
  comments: ['Misaligned leafs', 'Loose U clamps', 'Broken leafs', 'Center bolt cut. Can lead to fast wear'],
}, {
  label: 'Rim Disc',
  comments: ['Disc damaged', 'Disc bent', 'Incorrect rim size. Will damage tyre bead'],
}];

export const TYRE_INSPECTION_DATA = [{
  label: 'Misalignment',
  comments: ['Uneven wear in tyres due to misalignment'],
}, {
  label: 'Pattern Mismatch',
  comments: [
    'Radial and Nylon tyres on same axle',
    'Steering pattern tyres at drive axle',
    'Drive pattern tyres at steering axle',
  ],
}, {
  label: 'Air Pressure Mismatch',
  comments: [
    'Mismatch of air pressure in dual tyres',
    'Uneven pressure in tyres',
  ],
}, {
  label: 'Disc Holes Mismatch',
  comments: [
    'Holes mismatch in outer & inner tyres',
    'Non accessibilty of inner tyre valves (Inner tyre valves bent and touches the rim)',
  ],
}, {
  label: 'Cuts & Damages In Tyres',
  comments: ['Cuts and damages observed in tyres'],
}, {
  label: 'Tyres Which Can Be Removed For Retread?',
  comments: ['Depth is less than 3mm. Tyres should be removed now for retreading'],
}];

const toInspectionArray = (inspectionValues, masterData) => {
  const result = [];
  const labels = masterData.map(item => item.label);
  labels.forEach(label => {
    const radioBtnValue = inspectionValues[`${label}-radio-btn`];
    result.push({
      label,
      radioBtnValue,
      comment: radioBtnValue === 1
        ? inspectionValues[`${label}-dropdown`]
        : '',
    });
  });
  return result;
};

export const toVehicleInspectionArray = inspectionValues => toInspectionArray(
  inspectionValues, VEHICLE_INSPECTION_DATA,
);

export const toTyreInspectionArray = inspectionValues => toInspectionArray(
  inspectionValues, TYRE_INSPECTION_DATA,
);
