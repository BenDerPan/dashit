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
      items: [0, 1, 2, 3, 4].map(function (i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 3,
          h: 3,
          frameHeight: { height: 3 * AddRemoveLayout.defaultProps.rowHeight + 20 },
        };
      }),
      newCounter: 0
    };

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
    console.log(el);
    return (
      <div key={el.i} data-grid={el}>
        <Frame style={el.frameHeight}>
          <Words>Graph Monitor</Words>
          <span style={removeStyle} onClick={this.onRemoveItem.bind(this, el.i)}>Close</span>
          <Line></Line>
        </Frame>

      </div>
    );
  }

  onAddItem() {
    /*eslint no-console: 0*/
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 3,
        h: 3,
        frameHeight: { height: 3 * AddRemoveLayout.defaultProps.rowHeight + 20 },
      }),
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
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  onResize(layout, oldLayoutItem, layoutItem, placeholder) {
    // `oldLayoutItem` contains the state of the item before the resize.
    // You can modify `layoutItem` to enforce constraints.
    const items = [...this.state.items];
    items[layoutItem.i].frameHeight = { height: layoutItem.h * this.props.rowHeight + (layoutItem.h - 1) * 10 }
    this.setState({
      items: items
    })

  }

  render() {
    return (
      <div>
        <div style={{margin:5}}>
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

