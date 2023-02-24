import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledButton  } from './Styled';
import { Wrapper  } from './Styled';

export const Button = ({ btnText, onLoadMore }) => {
  return (
    <Wrapper>
      <StyledButton  onClick={onLoadMore} type="button">
        {btnText}
      </StyledButton >
    </Wrapper>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  onLoadMore: PropTypes.func,
};


