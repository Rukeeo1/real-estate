import React from 'react';
import { Table } from 'reactstrap';

// assets
import notification from 'assets/svg/notification.svg';
import edit from 'assets/svg/edit.svg';
import owner from 'assets/svg/owner.svg';
import settings from 'assets/svg/settings.svg';
import bin from 'assets/svg/bin.svg';
import Button from 'components/Buttons';

import './index.scss';

export default function PropertyTable() {
  return (
    <Table class="table" responsive borderless>
      <thead>
        <tr>
          <th scope="col">Property ID</th>
          <th scope="col">LOCATION</th>
          <th scope="col">Total Rent</th>
          <th scope="col">OPen MAINTENANCE</th>
          <th scope="col">Tenanats</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">577-899</th>
          <td>NO.3 CHERVON DRIVE</td>
          <td>200,000</td>
          <td>
            <img src={settings} alt="maintenance" />
            <span className="ml-3">1</span>
          </td>
          <td>
            <img src={owner} alt="owners" />
            <span className="ml-3">3</span>
          </td>
          <td>
            <img src={edit} alt="edit" />
            <img src={bin} alt="bin" className="ml-3" />
          </td>
        </tr>
        <tr>
          <th scope="row">577-899</th>
          <td>NO.3 CHERVON DRIVE</td>
          <td>200,000</td>
          <td>
            <img src={settings} alt="maintenance" />
            <span className="ml-3">1</span>
          </td>
          <td>
            <img src={owner} alt="owners" />
            <span className="ml-3">3</span>
          </td>
          <td>
            <img src={edit} alt="edit" />
            <img src={bin} alt="bin" className="ml-3" />
          </td>
        </tr>
        <tr>
          <th scope="row">577-899</th>
          <td>NO.3 CHERVON DRIVE</td>
          <td>200,000</td>
          <td>
            <img src={settings} alt="maintenance" />
            <span className="ml-3">1</span>
          </td>
          <td>
            <img src={owner} alt="owners" />
            <span className="ml-3">3</span>
          </td>
          <td>
            <img src={edit} alt="edit" />
            <img src={bin} alt="bin" className="ml-3" />
          </td>
        </tr>
       
       
      </tbody>
    </Table>
  );
}
