import React from 'react';
import { NavLink, useParams, Switch, Route } from 'react-router-dom';
import dashboard from 'assets/svg/dashboard.svg';

export default function MenuItem({ route, index }) {
  return (
    <NavLink
      to={route.main.url}
      className="main-item"
      activeClassName="main-item-active"
      key={index}
    >
      <img src={route.main.image} alt="dashboard" />
      <p className="ml-2">DASHBOARD</p>
    </NavLink>
  );
}

export function MenuItemWithSubCategories({ route, index }) {
  return (
    <div className="sub-item" key={index}>
      <div className="d-flex ml-3">
        <img
          src={route.main.image}
          alt="dashboard"
          data-toggle="collapse"
          data-target="#demo"
        />
        <p className="ml-2 mb-0">{route.main.name}</p>
      </div>
      <div>
        {route?.sub?.map((item, i) => (
          <>
            <div className="d-flex ml-3 sub-item__list-item" key={i}>
              <p className="ml-2 mb-0">{item.name}</p>
            </div>
            {/* <div className="d-flex ml-3 sub-item__list-item">
            <p className="ml-2 mb-0">Property package</p>
          </div> */}
          </>
        ))}
      </div>
    </div>
  );
}
