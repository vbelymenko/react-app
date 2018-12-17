import React from 'react';
import { shallow } from 'enzyme';
 import { FooterApp } from './FooterApp'
 describe('Footer', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<FooterApp debug />);
        const footerText = <p>Footer</p>
        expect(component).toMatchSnapshot();
        expect(component.contains(footerText)).toEqual(true);
    });
});
