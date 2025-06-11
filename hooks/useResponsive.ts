import { Grid } from 'antd';

type Breakpoints = {
  isXs: boolean; // NOTE: screen < 576px
  isSm: boolean; // NOTE: screen >= 576px && screen < 768px
  isSmDown: boolean; // NOTE: screen < 768px
  isSmUp: boolean; // NOTE: screen >= 576px
  isMd: boolean; // NOTE: screen >= 768px && screen < 992px
  isMdDown: boolean; // NOTE: screen < 992px
  isMdUp: boolean; // NOTE: screen >= 768px
  isLg: boolean; // NOTE: screen >= 992px && screen < 1200px
  isLgDown: boolean; // NOTE: screen < 1200px
  isLgUp: boolean; // NOTE: screen >= 992px
  isXl: boolean; // NOTE: screen >= 1200px && screen < 1600px
  isXlDown: boolean; // NOTE: screen < 1600px
  isXlUp: boolean; // NOTE: screen >= 1200px
  isXxl: boolean; // NOTE: screen >= 1600px
  // is1392Down: boolean; // NOTE: screen < 1392px
};

const useResponsive = (): Breakpoints => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return {
    // Extra Small
    isXs: screens.xs === true && screens.sm === false,

    // Small
    isSm: screens.sm === true && screens.md === false,
    isSmDown:
      screens.md === false && (screens.sm === true || screens.xs === true),
    isSmUp:
      screens.sm === true ||
      screens.md === true ||
      screens.lg === true ||
      screens.xl === true ||
      screens.xxl === true,

    // Medium
    isMd: screens.md === true && screens.lg === false,
    isMdDown:
      screens.lg === false &&
      (screens.md === true || screens.sm === true || screens.xs === true),
    isMdUp:
      screens.md === true ||
      screens.lg === true ||
      screens.xl === true ||
      screens.xxl === true,

    // Large
    isLg: screens.lg === true && screens.xl === false,
    isLgDown:
      screens.xl === false &&
      (screens.lg === true ||
        screens.md === true ||
        screens.sm === true ||
        screens.xs === true),
    isLgUp: screens.lg === true || screens.xl === true || screens.xxl === true,

    // Extra Large
    isXl: screens.xl === true && screens.xxl === false,
    isXlDown:
      screens.xxl === false &&
      (screens.xl === true ||
        screens.lg === true ||
        screens.md === true ||
        screens.sm === true ||
        screens.xs === true),
    isXlUp: screens.xl === true || screens.xxl === true,

    // Extra Extra Large
    isXxl: screens.xxl === true,

    // Custom breakpoint for 1392px
    // is1392Down:
    //   typeof window !== 'undefined' ? window.innerWidth < 1392 : false,
  };
};

export default useResponsive;
