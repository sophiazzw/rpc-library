import { Component } from 'react';
import { Button,Row,Col } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
  }
  renderButtons(data){
    return data.map((elem, index) => {
      const {text,type,htmlType,buttonEvent,className,loading,icon,size} = elem;
      const clsName = classNames('bc-btn-group',className);
      return (
        <Col key={index}>
          <Button 
            onClick={buttonEvent} 
            type={type} 
            htmlType={htmlType}
            className={clsName}
            loading={loading}
            icon={icon}
            size={size}
          >
            {text}
          </Button>
        </Col>
      );
    });
  }
  render() {
    const {data,className} = this.props;
    return (
      <div>
        <Row type={'flex'} gutter={4} className={classNames(className)}>
          {this.renderButtons(data)}
        </Row>
      </div>
    )
  }
}
ButtonGroup.PropTypes = {
  data : PropTypes.arrayOf(PropTypes.shape({
    text : PropTypes.string,
    type : PropTypes.string,
    htmlType : PropTypes.string,
    buttonEvent : PropTypes.func,
    loading : PropTypes.bool,
    className : PropTypes.string,
    icon : PropTypes.string,
    size : PropTypes.string
  })),
  className : PropTypes.string,
  key : PropTypes.any,
}
export default ButtonGroup;