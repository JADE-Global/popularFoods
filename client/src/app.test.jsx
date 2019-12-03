import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './app.jsx';

describe('<App/>', () => {
    it('contains "hello world', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.text()).toContain('Hello World');
    })
})
