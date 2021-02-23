import React, { useState } from 'react';
import whiteLogo from 'assets/png/liveizy-logo-white.png';
import dashboard from 'assets/svg/dashboard.svg';
import property from 'assets/svg/home-run.svg';
import notification from 'assets/svg/notification.svg';

import Button from 'components/Buttons';
import MenuItem, {MenuItemWithSubCategories} from './MenuItem';
import AllProperty from './AllProperties'
import PropertyPackage from './PropertyPackage.js'

import MyTable from 'components/Tables/index.js';
import './index.scss';

let path = '/dashboard';

const urlObject = {
  main: {
    name: 'DASHBOARD',
    url: `${path}/dashboard`,
    image: dashboard,
  },
};

const urlObjectWithSub = {
  main: {
    name: 'PROPERTY',
    url: `${path}/property`,
    image: property,
  },
  sub: [
    {
      name: 'All property',
      url: `${path}/property/all`,
    },
    {
      name: 'Property package',
      url: `${path}/property/package`,
    },
  ],
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('All');
  return (
    <div className="dashboard">
      <div className="dashboard__sidebar">
        <div className="d-flex justify-content-center dashboard__sidebar__img">
          <img src={whiteLogo} className="" />
        </div>
        <div className="dashboard__sidebar__user-profile-pic">
          <img src="https://www.w3schools.com/w3css/img_avatar3.png" />
          <p>oleka kelechi</p>
          <p>UvBa1591</p>
        </div>
        <div className="dashboard__sidebar__navlinks">
          <div
            className="dashboard__sidebar__navlinks__normal"
            activeClassName="dashboard__sidebar__navlinks__active"
          >
            {/* <div className="main-item">
              <img src={dashboard} alt="dashboard" />
              <p className="ml-2">DASHBOARD</p>
            </div> */}
            <MenuItem route={urlObject} />
            <MenuItemWithSubCategories route={urlObjectWithSub} />
            {/* <div className="sub-item">
              <div className="d-flex ml-3">
                <img
                  src={property}
                  alt="dashboard"
                  data-toggle="collapse"
                  data-target="#demo"
                />
                <p className="ml-2 mb-0">PROPERTIES</p>
              </div>
              <div>
                <div className="d-flex ml-3 sub-item__list-item">
                  <p className="ml-2 mb-0">All property</p>
                </div>
                <div className="d-flex ml-3 sub-item__list-item">
                  <p className="ml-2 mb-0">Property package</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__main__header">
          <div className="dashboard__main__header__title">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <div>
              <h1>PROPERTY</h1>
            </div>
          </div>
          <div className="d-flex  ">
            <img src={notification} />
            <div className="d-flex ml-5 user-info">
              <img
                src="https://avatars2.githubusercontent.com/u/44168306?s=460&v=4"
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />
              <p className="mb-0 ml-2">Kelechi</p>
            </div>
          </div>
        </div>
        {/* body comes in here */}
        <div className="dashboard__main__body">
          <h1>MY PROPERTIES</h1>
        </div>
        {/* <div className="d-flex justify-content-between dashboard__main__body__switch-wrap">
          <div className="dashboard__main__body__switcher">
            <span
              className={`item ${activeTab === 'All' ? 'active-item' : null}`}
              onClick={() => setActiveTab('All')}
            >
              All
            </span>
            <span
              className={`item ${
                activeTab === 'Active' ? 'active-item' : null
              }`}
              onClick={() => setActiveTab('Active')}
            >
              Active
            </span>
            <span
              className={`item ${
                activeTab === 'Vacant' ? 'active-item' : null
              }`}
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
        </div> */}
        <PropertyPackage />
      </div>
    </div>
  );
}
