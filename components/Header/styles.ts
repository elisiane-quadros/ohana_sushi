import { Typography } from 'antd';
import styled from 'styled-components';

const { Title, Text } = Typography;

interface ScreenWidth {
  isMdDown?: boolean;
  isXs?: boolean;
}

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

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-end;
  height: 500px;
  width: 1376px;
  padding: 100px 16px 16px 16px;

  @media (min-width: 768px) {
    padding: 100px 16px 32px 16px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  /* width: 500px; */
  max-width: 600px;
  font-family: var(--montserrat), sans-serif;
`;

export const OhanaSushi = styled(Title)<ScreenWidth>`
  width: fit-content !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  color: #fff !important;
  text-shadow: 2px 4px 8px #d81616;
  font-weight: 400 !important;
  line-height: 1 !important;
  font-size: ${(props) =>
    props.isMdDown ? '2.4rem !important' : '3.2rem !important'};
`;

export const HeaderTextIntroduction = styled(Title)<ScreenWidth>`
  color: #fff !important;
  font-size: 1.4rem !important;
  font-weight: 400 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-family: var(--montserrat), sans-serif;
`;

export const HeaderText = styled(Text)<ScreenWidth>`
  color: #fff !important;
  font-size: ${(props) => (props.isXs ? '1.3rem' : '1.4rem !important')};
  line-height: ${(props) => (props.isXs ? '1.3' : '1.4')};
  line-height: 1.4;
  text-align: justify !important;
  font-family: var(--montserrat), sans-serif;
`;

export const HightLightText = styled.span`
  color: #d81616 !important;
  /* font-size: 36px !important; */
`;
