import React from "react";
import { ThemeProvider, createTheme, Arwes, Heading, Button, Line, Row, Col, Project, Frame, Words } from '@arwes/arwes';
import { WidthProvider, Responsive } from "react-grid-layout";
import Icon from '@mdi/react'
import { mdiAccount, mdiAirplay } from '@mdi/js'

import _ from "lodash";

import 'antd/dist/antd.css';

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class AddRemoveLayout extends React.PureComponent {
  static defaultProps = {
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
    onLayoutChange: () => { }
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          index: 0,
          i: "GraphView1",
          x: 0,
          y: 0,
          w: 3,
          h: 3,
          frameHeight: { height: 3 * AddRemoveLayout.defaultProps.rowHeight + 20 },
        },
        {
          index: 1,
          i: "GraphView2",
          x: 2,
          y: 0,
          w: 3,
          h: 3,
          frameHeight: { height: 3 * AddRemoveLayout.defaultProps.rowHeight + 20 },
        },
        {
          index: 2,
          i: "GraphView3",
          x: 4,
          y: 0,
          w: 3,
          h: 3,
          frameHeight: { height: 3 * AddRemoveLayout.defaultProps.rowHeight + 20 },
        },
      ],
      newCounter: 4
    };
    console.log("初始化:",this.state.items);
    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    return (
      <div key={el.i} data-grid={el}>
        <Frame style={el.frameHeight}>
          <Words>{el.i}</Words>
          <span style={removeStyle} onClick={this.onRemoveItem.bind(this, el.i)}>Close</span>
          <Line></Line>
        </Frame>

      </div>
    );
  }

  onAddItem() {
    /*eslint no-console: 0*/
    console.log("adding", this.state.newCounter);
    let keyName="GraphView"+this.state.newCounter.toString();
    const items = [...this.state.items,
      {
        index:this.state.newCounter,
        i: keyName,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 3,
        h: 3,
        frameHeight: { height: 3 * AddRemoveLayout.defaultProps.rowHeight + 20 },
      }
    ];
    
    console.log("新增后：",items,items.length);
    this.setState({
      // Add a new item. It must have a unique key!
      items:items,
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    console.log("removing", i);
    const items=[...this.state.items.filter((s)=>{return s.i!=i})];
    console.log("删除后：",items);

    this.setState({ items:items});
  }

  onResize(layout, oldLayoutItem, layoutItem, placeholder) {
    // `oldLayoutItem` contains the state of the item before the resize.
    // You can modify `layoutItem` to enforce constraints.
    // const items = [...this.state.items];
    const items=[...this.state.items];
    let index=items.findIndex((s)=>{return s.i===layoutItem.i});
    if(index>-1){
      items[index].frameHeight = { height: layoutItem.h * this.props.rowHeight + (layoutItem.h - 1) * 10 }
    }
    this.setState({
      items: items
    })

  }

  render() {
    return (
      <div>
        <div style={{ margin: 5 }}>
          <Button onClick={this.onAddItem}>
            <Icon path={mdiAccount}
              size={0.5}
              horizontal
              vertical
              rotate={90}
              color="green"
              spin />
          </Button>
          <Button onClick={this.onAddItem}>
            <Icon path={mdiAirplay}
              size={0.5}
              horizontal
              vertical
              rotate={90}
              color="red"
              spin />
          </Button>
        </div>
        <Line></Line>
        <ResponsiveReactGridLayout onResize={this.onResize.bind(this)}
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default AddRemoveLayout;

