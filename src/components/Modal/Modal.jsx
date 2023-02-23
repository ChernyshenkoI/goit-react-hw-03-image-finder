import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalStyled = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;