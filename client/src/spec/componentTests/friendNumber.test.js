import React from 'react';
import { shallow } from 'enzyme';
import FriendNumber from '../../components/modal/icons/friendNumber.jsx';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

describe('<FriendNumber/>', () => {
    it('should render', () => {
        const component = shallow(<FriendNumber />);
        expect(component.exists()).toEqual(true);
    });
    it('should render properly - snapshot version', () => {
        const component = renderer.create(<FriendNumber />);
        expect(component).toMatchSnapshot();
    });
})