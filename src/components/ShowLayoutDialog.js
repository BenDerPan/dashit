import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import { Modal } from 'antd';
import '../App.css'

class ShowLayoutDialog extends React.Component {
  render() {
    const jsonStr=this.props.onGetLayoutJson();

    return (
      <div>
        <Modal wrapClassName="modal-json"
          title={null}
          footer={null}
          style={{ top: 20}}
          visible={this.props.modalVisible}
          onOk={() => this.props.setModalVisible(false)}
          onCancel={() => this.props.setModalVisible(false)}
        >
        <TextareaAutosize value= {jsonStr} style={{maxHeight: 550,width:"100%", background:"#021114", color:"#1DA5C0"}}/>
        </Modal>
      </div>
    );
  }
}

export default ShowLayoutDialog;