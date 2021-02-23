import React, {useState} from 'react';
import MyTable from 'components/Tables/index.js';
import Button from 'components/Buttons';

export default function AllProperties() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <>
      <div className="d-flex justify-content-between dashboard__main__body__switch-wrap">
        <div className="dashboard__main__body__switcher">
          <span
            className={`item ${activeTab === 'All' ? 'active-item' : null}`}
            onClick={() => setActiveTab('All')}
          >
            All
          </span>
          <span
            className={`item ${activeTab === 'Active' ? 'active-item' : null}`}
            onClick={() => setActiveTab('Active')}
          >
            Active
          </span>
          <span
            className={`item ${activeTab === 'Vacant' ? 'active-item' : null}`}
            onClick={() => setActiveTab('Vacant')}
          >
            Vacant
          </span>
          <span
            className={`item ${activeTab === 'Draft' ? 'active-item' : null}`}
            onClick={() => setActiveTab('Draft')}
          >
            Draft
          </span>
        </div>
        <Button
          title="New Property"
          className="liveizbtn liveizbtn--primary"
          iconRight={true}
        />
      </div>
      <div className="mt-4">
        <MyTable />
      </div>
    </>
  );
}
