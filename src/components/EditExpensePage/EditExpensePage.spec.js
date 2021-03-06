import React from 'react';
import ReactDOM from 'react-dom';
// import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme'
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import EditExpensePage from './EditExpensePage';


import EditExpenseForm from '../EditExpenseForm/EditExpenseForm';

Enzyme.configure({ adapter: new Adapter() });

describe('Edit Expense Page component', () => {

    let wrapper;

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
         <BrowserRouter>
           <EditExpensePage />
         </BrowserRouter>,
          
          div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders the form component', () => {
        wrapper = shallow(<EditExpenseForm />);

        expect(wrapper.find(EditExpenseForm));
    })  
})