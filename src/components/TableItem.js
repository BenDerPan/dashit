import React, { Component } from "react";
import { Heading, Button, Line, Row, Col, Project, Frame, Words } from '@arwes/arwes';
import { Table } from 'antd';
import '../App.css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className:"Table-Row-Color",
  },
  {
    title: 'Age',
    dataIndex: 'age',
    className:"Table-Row-Color",
  },
  {
    title: 'Address',
    dataIndex: 'address',
    className:"Table-Row-Color",
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '哒哒哒',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: '滴滴滴',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'HI',
  },
];

class TableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Table
        bordered={false}
        scroll={false}
        pagination={false}
        columns={columns}
        dataSource={data}
        size="small"
        showHeader={true}
        
      />
    )
  };
}

export default TableItem;
