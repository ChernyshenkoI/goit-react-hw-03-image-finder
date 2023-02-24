import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Overlay, ModalStyled } from './Styled';

  export const Modal = ({ img, description, onClickCloseModal }) => {
  return (
    <Overlay onClick={onClickCloseModal}>
      <ModalStyled>
        <img src={img} alt={description} />
      </ModalStyled>
    </Overlay>
  );
};


Modal.propTypes = {
  img: PropTypes.string,
  description: PropTypes.string,
  onClickCloseModal: PropTypes.func,
};

// export default Modal;