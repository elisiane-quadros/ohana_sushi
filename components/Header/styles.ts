import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url('/images/banner.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
export const Overlay = styled.div`
  width: 100%;
  height: 500px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & span {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    padding: 0.5rem;
    background-color: #54cc0a;
    border-radius: 4px;
  }
`;

export const Logo = styled.div`
  background-image: url('/images/Logo500.png');
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 400px;
`;
