import React, {Component} from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Overlay, ModalStyled } from './Styled';
import { createPortal } from 'react-dom';

const portalContainer = document.querySelector('#portal');

  export class  Modal extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyPress);
    }

  handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      this.props.onClickCloseModal();
    }
  };

    render (){
      const { img, description, onClickCloseModal } = this.props;
     
      return createPortal(
          <Overlay onClick={onClickCloseModal}>
          <ModalStyled>
            <img src={img} alt={description} />
          </ModalStyled>
        </Overlay>, portalContainer)
      }
};

    
 

Modal.propTypes = {
  img: PropTypes.string,
  description: PropTypes.string,
  onClickCloseModal: PropTypes.func,
};

// export default Modal;