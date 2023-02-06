import {shallow} from 'enzyme';
import App from './App';


describe('<App />', () => {
    const wrapper = shallow(<App />);
    it('renders three <App /> components without crashing', () => {
      expect(wrapper.find('.App').exists()).toBeTruthy()
    });

    it('renders a div with className App-header without crashing', () =>{
        expect(wrapper.find('.App-header').exists()).toBeTruthy()
    });

    it('renders a div with className App-header without crashing', () =>{
        expect(wrapper.find('.App-logo').exists()).toBeTruthy()
    });

    it('renders a div with className App-body without crashing', () =>{
        expect(wrapper.find('.App-body').exists()).toBeTruthy()
    });

    it('renders a div with className App-header without crashing', () =>{
        expect(wrapper.find('.App-footer').exists()).toBeTruthy()
    });

});