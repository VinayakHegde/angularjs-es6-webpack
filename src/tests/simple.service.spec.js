import SimpleService from '../app/services/sample.service';

describe('SimpleService', () => {
    const text = 'Hello AngularJS + ES6';
    let service;
    beforeEach(() => {
        service = new SimpleService();
    });

    it('#getMessage should, by default, Hello AngularJS + ES6', () => {
        expect(service.getMessage()).toEqual(text);
    });
});