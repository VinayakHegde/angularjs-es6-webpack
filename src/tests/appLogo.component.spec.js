import logo from '../img/logo.png';

describe('appLogo', () => {
  module('app');

  describe('AppLogoController', () => {
    let ctrl;
    beforeEach(inject(function(_$componentController_) {
      ctrl = _$componentController_;
    }));

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe(logo);
    });
  });
});