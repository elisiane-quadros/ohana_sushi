import { Flex } from 'antd';
import { FamilyImageFlex, SunImageFlex } from './styles';
import Image from 'next/image';
import sun from '../../public/images/sun2.png';
import family from '../../public/images/imagePalavraJaponesBranca.png';
import useResponsive from '@/hooks/useResponsive';

const SunFamily = () => {
  const { isXs, isMdDown } = useResponsive();
  return (
    <Flex vertical align="center" justify="center" style={{ height: '28px' }}>
      <SunImageFlex isMdDown={isMdDown} isXs={isXs} align="center">
        <Image
          src={sun}
          width={isMdDown ? 22 : 28}
          height={isMdDown ? 22 : 28}
          alt="Ohana Sushi"
        />
      </SunImageFlex>
      <FamilyImageFlex isMdDown={isMdDown} isXs={isXs} align="center">
        <Image
          src={family}
          width={isMdDown ? 16 : 20}
          height={isMdDown ? 16 : 20}
          alt="Ohana Sushi"
        />
      </FamilyImageFlex>
    </Flex>
  );
};

export default SunFamily;
