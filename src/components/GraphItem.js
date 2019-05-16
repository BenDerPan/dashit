import React, { Component } from 'react';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';
import SpriteText from 'three-spritetext';
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from 'react-force-graph';


class GraphItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: {
                "nodes": [
                    { "id": "百度", "group": 1 },
                    { "id": "谷歌", "group": 2 },
                    { "id": "腾讯", "group": 3 },
                    { "id": "亚马逊", "group": 4 },
                    { "id": "阿里巴巴", "group": 5 },
                    { "id": "Facebook", "group": 6 },
                    { "id": "苹果", "group": 7 },
                ],
                "links": [
                    { "source": "谷歌", "target": "阿里巴巴", "value": 1 },
                    { "source": "百度", "target": "腾讯", "value": 1 },
                    { "source": "阿里巴巴", "target": "腾讯", "value": 1 },
                    { "source": "亚马逊", "target": "阿里巴巴", "value": 1 },
                    { "source": "苹果", "target": "腾讯", "value": 1 },
                    { "source": "Facebook", "target": "腾讯", "value": 1 },
                ]
            }
        };
    }

    render() {
        return (
            <ForceGraph3D style={{padding:10}} width={this.props.parentWidth}  height={this.props.parentHeight}
                graphData={this.state.datas}
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