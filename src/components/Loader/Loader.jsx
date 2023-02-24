import { Rings } from 'react-loader-spinner';
import React from 'react';
// import { Overlay } from 'components/Modal/Modal';
import { Overlay } from './Styled';

export const Loader = () => {
  return (
    <Overlay>
      <Rings height="200" width="200" radius="80" color="black" />
    </Overlay>
  );
};