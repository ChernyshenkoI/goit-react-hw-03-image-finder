import { Rings } from 'react-loader-spinner';
import React from 'react';
// import { Overlay } from 'components/Modal/Modal';
import { Overlay } from './Styled';
import { createPortal } from 'react-dom';
const portalContainer = document.querySelector('#portal');


export const Loader = () => {
  return (
    createPortal(<Overlay>
      <Rings height="200" width="200" radius="80" color="black" />
    </Overlay>, portalContainer)
  );
};