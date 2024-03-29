export const getDeviceTypeByWidth = (width: number) => {
  switch (true) {
    case width < 768:
      return { isMobile: true, isTablet: false, isDesktop: false };
    case width < 992:
      return { isMobile: false, isTablet: true, isDesktop: false };

    default:
      return { isMobile: false, isTablet: false, isDesktop: true };
  }
};
