import React, { Component } from 'react';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';
import SpriteText from 'three-spritetext';
import { ForceGraph3D} from 'react-force-graph';


class GraphItem extends Component {
    render() {
        return (
            <ForceGraph3D style={{padding:10}} width={this.props.parentWidth}  height={this.props.parentHeight}
                graphData={this.props.viewData.data}
                nodeAutoColorBy="group"
                linkColor="#F8B209"
                nodeThreeObject={node => {
                    const sprite = new SpriteText(node.id);
                    sprite.color = node.color;
                    sprite.textHeight = 8;
                    return sprite;
                }}
            />
        );
    }

}

export default GraphItem;