import React from 'react';
import InspectionForm from './InspectionForm';

const TYRE_INSPECTION_DATA = [{
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

const TyreInspection = () => {
  const formTemplates = TYRE_INSPECTION_DATA.map(
    item => [item.label, ...InspectionForm(item)],
  );

  return (
    <>
      <div className="typeInspection">
        <h1>Type Inspection</h1>
        {
          formTemplates.map(([label, Template]) => <Template key={label} />)
        }
      </div>
    </>
  );
};

export default TyreInspection;
