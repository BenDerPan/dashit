import React, { Component } from "react";
import { Table } from 'antd';
import '../App.css'

class TableItem extends Component {
  render() {
    return (
      <Table
        bordered={false}
        scroll={{x:false,y:false}}
        pagination={false}
        columns={this.props.viewData.columns}
        dataSource={this.props.viewData.data}
        size="small"
        showHeader={true}
        
      />
    )
  };
}

export default TableItem;
