import React from "react";
import { Heading, Button, Line, Frame, Words } from '@arwes/arwes';
import { WidthProvider, Responsive } from "react-grid-layout";

import {Utils} from './utils/Utils'

import TableItem from './components/TableItem'
import LineItem from './components/LineItem'
import PieItem from './components/PieItem'
import ListItem from './components/ListItem'
import TextItem from './components/TextItem'
import ImageItem from './components/ImageItem'
import SettingsItem from './components/SettingsItem'
import NetworkStatusItem from './components/NetworkStatusItem'
import BarItem from './components/BarItem'

import GraphItem from './components/GraphItem'
import '@mdi/font/css/materialdesignicons.css'

import _ from "lodash";

import * as Mock from './mock/ExampleData'

import 'antd/dist/antd.css';

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveReactGridLayout = WidthProvider(Responsive);
// saveItemsToLS("items",[]);
// saveLayoutsToLS("layouts",{})
const originalLayouts = Utils.getLayoutsFromLS("layouts") || {};
const originalItems =  Utils.getItemsFromLS("items") || [];
const ClientUnitWidth = Math.ceil(document.getElementById('root').clientWidth / 12) - 10;

class AddRemoveLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
    widthNum:3,
    heightNum:3,
  };

  constructor(props) {
    super(props);
    this.createChildVew = this.createChildVew.bind(this);
    this.createElement = this.createElement.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onResetAll = this.onResetAll.bind(this);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      items: JSON.parse(JSON.stringify(originalItems)),
      wsState:{text:"Connecting...",color:"yellow"},
      widthNum:AddRemoveLayout.defaultProps.widthNum,
      heightNum:AddRemoveLayout.defaultProps.heightNum,
      msgKey:this.props.match.params.index,
    };
    console.log("初始化:", this.state.items);
    console.log(this.state.layouts, this.state.items);
  }

  createChildVew(componentType, parentWidth, parentHeight, data) {
    console.log("创建组件类型：", componentType);
    switch (componentType) {
      case "table":
        return <TableItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></TableItem>;
      case "pie":
        return <PieItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></PieItem>;
      case "line":
        return <LineItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></LineItem>;
      case "bar":
        return <BarItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></BarItem>;
      case "list":
        return <ListItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></ListItem>;
      case "text":
        return <TextItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></TextItem>;
      case "graph":
        return <GraphItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></GraphItem>;
      case "image":
        return <ImageItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></ImageItem>;
      case "settings":
        return <SettingsItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></SettingsItem>;
      case "network_status":
        return <NetworkStatusItem parentWidth={parentWidth} parentHeight={parentHeight} viewData={data}></NetworkStatusItem>;
      default:
        return <Words>Not Implemented!!!</Words>;
    }
  };

  createElement(el) {
    console.log("step:", "createElement", el)
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    const componentType = el.type;
    let parentWidth = el.frameWidth;
    let parentHeight = el.frameHeight.height - 52;
    let viewData = el.viewData;

    const ChildView = () => this.createChildVew(componentType, parentWidth, parentHeight, viewData);

    return (
      <div key={el.i} data-grid={el}>
        <Frame style={el.frameHeight}>
          <div>
            <Words>{"[" + el.index + "]" + el.title}</Words>
            <span style={removeStyle} onClick={() => this.onRemoveItem(el.i)}>Close</span>
            <Line style={{ margin: 0, padding: 0 }}></Line>
          </div>
          <div id={el.i} style={{ margin: 0, }}>
            <ChildView />
          </div>
        </Frame>
      </div>
    );
  }

  onAddItem(componentType) {
    /*eslint no-console: 0*/
    console.log("adding", componentType);
    const totalCount = this.state.items.length;
    let keyName = new Date().getTime().toString();
    const items = [...this.state.items,
    {
      index: totalCount,
      i: keyName,
      x: (totalCount * this.state.widthNum) % 12,
      y: Math.floor((totalCount * this.state.heightNum) / 12), // puts it at the bottom
      w: this.state.widthNum,
      h: this.state.heightNum,
      type: componentType,
      title: "Waiting Data...",
      frameHeight: { height: this.state.heightNum * AddRemoveLayout.defaultProps.rowHeight + (this.state.heightNum - 1) * 10 },
      frameWidth: ClientUnitWidth * this.state.widthNum,
      viewData: Mock.GetMockData(componentType)
    }];
    //重新排序Index
    for (let n = 0; n < items.length; n++) {
      items[n].index = n;
      items[n].title = "Monitor" + n.toString();
      items[n].i = "M" + n.toString();
    }
    console.log("新增后：", items, items.length);
    this.setState({
      // Add a new item. It must have a unique key!
      items: items,
    });
    
    Utils.saveItemsToLS("items", items);
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout, layouts) {
    this.setState({ layouts: layouts });
    Utils.saveLayoutsToLS("layouts", layouts);
    Utils.saveItemsToLS("items", this.state.items);
  }

  onRemoveItem(i) {
    console.log("removing", i);
    const items = [...this.state.items.filter((s) => { return s.i !== i })];
    console.log("删除后：", items);

    this.setState({ items: items });
    Utils.saveItemsToLS("items", items);
  }

  onResize(layout, oldLayoutItem, layoutItem, placeholder) {
    const items = [...this.state.items];
    console.log("resize");
    let w = document.getElementById(layoutItem.i).clientWidth;
    let index = items.findIndex((s) => { return s.i === layoutItem.i });
    if (index > -1) {
      items[index].frameHeight = { height: layoutItem.h * this.props.rowHeight + (layoutItem.h - 1) * 10 };
      items[index].frameWidth = w;
    }
    this.setState({
      items: items
    })

  }

  render() {
    return (
      <div>
        <Heading node='h5'>AI Bot Dashboard V1.0 {" "}<Words style={{color:this.state.wsState.color}}>{" ["+this.state.wsState.text+"] "}</Words></Heading>
        <div style={{ margin: 5 }}>
          <Button onClick={this.onResetAll} animate layer='alert'>
            <i className='mdi mdi-lock-reset'></i>
          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("table")}>
            <i className='mdi mdi-grid'></i>
          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("pie")}>
            <i className='mdi mdi-chart-pie'></i>
          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("line")}>
            <i className='mdi mdi-chart-line'></i>

          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("bar")}>
            <i className='mdi mdi-chart-bar'></i>
          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("list")}>
            <i className='mdi mdi-format-list-bulleted'></i>
          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("text")}>
            <i className='mdi mdi-tag-text-outline'></i>
          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("graph")}>
            <i className='mdi mdi-hubspot'></i>
          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("image")}>
            <i className='mdi mdi-tooltip-image'></i>
          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("settings")}>
            <i className='mdi mdi-tune'></i>
          </Button>
          {' '}
          <Button onClick={() => this.onAddItem("network_status")}>
            <i className='mdi mdi-lan-connect'></i>
          </Button>
        </div>
        <Line></Line>
        <ResponsiveReactGridLayout onResize={this.onResize}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {_.map(this.state.items, (el) => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }

  onResetAll() {
    this.setState({
      items: [],
      layouts: {},
    });
    Utils.saveItemsToLS("items", this.state.items);
    Utils.saveLayoutsToLS("layouts", this.state.layouts);
  };
}


export default AddRemoveLayout;

