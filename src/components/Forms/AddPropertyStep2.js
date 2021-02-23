import React from 'react';
import Input from 'components/Input';
import Button from 'components/Buttons';
import Select from 'components/Input/Select';

export default function AddPropertyStep2() {
  return (
    <>
      <div className="add-property-wrap__body_left">
        <div className="image-placeholder">
          <h1>CREATE PROPERTY2</h1>
          <div className="image-placeholder__body"></div>
          <div className="image-placeholder__footer">
            <p>Add cover Image</p>
          </div>
        </div>
      </div>
      <div className="add-property-wrap__body__right">
        <div>
          <Select
            defaultValue="Select Unit"
            className="select-input"
            label="Select Payment Frequency"
            options={['Unit 1', 'Unit 2']}
          />
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
          <Button title="Next" className="liveizbtn liveizbtn--primary mt-5" />
        </div>
      </div>
    </>
  );
}
