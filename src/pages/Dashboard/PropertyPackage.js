import React, { useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Buttons';
import AddProp from 'components/Forms/AddProperty';
import AddProp2 from 'components/Forms/AddPropertyStep2'

export default function PropertyPackage() {
    const [step, setStep] = useState(2)
  return (
    <div className="add-property-wrap">
      <div className="add-property-wrap__header">
        <p className="title">Property Details</p>
        <div>
          <div>{/* <img src={} /> */}</div>
        </div>
      </div>
      <div className="add-property-wrap__body">
          <>
        {/* <div className="add-property-wrap__body_left">
          <div className="image-placeholder">
            <h1>CREATE PROPERTY</h1>
            <div className="image-placeholder__body"></div>
            <div className="image-placeholder__footer">
              <p>Add cover Image</p>
            </div>
          </div>
        </div>
        <div className="add-property-wrap__body__right">
          <div>
            <Input
              label="Property Name"
              placeholder="Enter a name"
              className="add-prop-input mt-4"
            />
            <Input
              label="Address"
              placeholder="Enter a location"
              className="add-prop-input mt-4"
            />
            <Input
              label="Property Type"
              placeholder="Select Type"
              className="add-prop-input mt-4"
            />
            <div className="custom-input">
              <h1>Property Manager</h1>
              <p>Select LPM for this Property</p>
              <Input placeholder="select" className="add-prop-input" />
              <p>
                Indicate if you want the selected LPM to help you add the
                apartment
              </p>
            </div>
            <div className="custom-input">
              <h1>Property Images</h1>
              <p>Select LPM for this Property</p>
              <Input placeholder="select" className="add-prop-input" />
              <p>
                Indicate if you want the selected LPM to help you add the
                apartment
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              title="Next"
              className="liveizbtn liveizbtn--primary mt-5"
            />
          </div>
        </div> */}
        {step === 1 && <AddProp />}
        {step === 2 && <AddProp2 />}

        </>
      </div>
    </div>
  );
}
