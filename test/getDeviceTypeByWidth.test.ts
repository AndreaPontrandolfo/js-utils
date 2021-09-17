import { getDeviceTypeByWidth } from '../src/getDeviceTypeByWidth';

it('should select a device type', () => {
  const device = getDeviceTypeByWidth(991);
  expect(device).toStrictEqual({ isMobile: false, isTablet: true, isDesktop: false });
});
