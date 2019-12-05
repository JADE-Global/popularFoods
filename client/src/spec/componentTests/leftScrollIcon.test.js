import React from 'react';
import { shallow } from 'enzyme';
import LeftScrollIcon from '../../components/carousel/icons/leftScrollIcon.jsx';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

describe('<LeftScrollIcon/>', () => {
    it('should render', () => {
        const component = shallow(<LeftScrollIcon />);
        expect(component.exists()).toEqual(true);
    });
    it('should render properly - snapshot version', () => {
        const component = renderer.create(<LeftScrollIcon />);
        expect(component).toMatchSnapshot();
    });
})