import {shallow} from 'enzyme';
import Notifications from './Notifications';


describe('<Notifications />', () => {
    it('renders <Notifications /> components without crashing', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find('.Notifications').exists()).toBeTruthy()
    });
    it('renders a paragraph with a spesfic text without crashing ', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications p').exists()).toBeTruthy();
        expect(wrapper.find('.Notifications p').text()).toMatch('Here is the list of notifications');
      });

    it('should have  3 list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications ul').children().length).toBe(3);
    })

});