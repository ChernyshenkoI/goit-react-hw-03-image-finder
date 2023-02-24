import styled from 'styled-components';

export const StyledButton  = styled.button`
  background-color: #0a6bff;
  border-radius: 4px;
  border: 0;
  box-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,
    rgba(0, 44, 97, 0.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inherit;
  font-family: 'Space Grotesk', -apple-system, system-ui, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  min-height: 56px;
  min-width: 120px;
  padding: 16px 20px;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:hover {
    background-color: #065dd8;
    transform: translateY(-2px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;