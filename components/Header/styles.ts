import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/new.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
export const Overlay = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(
    115deg,
    #000 0%,
    rgba(0, 0, 0, 0.9) 35%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  background-image: url('/images/Logo500.png');
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 400px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-end;
  height: 500px;
  width: 1344px;
  padding: 16px 0 16px 0;

  @media (min-width: 768px) {
    padding: 16px 0 64px 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;
  padding: 0 16px;
  font-family: var(--inria-sans), sans-serif;
  & h2 {
    color: #fff;
    font-family: var(--inria-sans), sans-serif;
    font-size: 36px;
  }
  & span {
    font-family: var(--inria-sans), sans-serif;
    color: #fff;
    font-size: 22px;
  }
`;

export const HightLightText = styled.span`
  color: #d81616 !important;
  font-size: 36px !important;
`;
