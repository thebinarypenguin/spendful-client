import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeExpenseList from '../IncomeExpensesList/IncomeExpenseList';
import { getAllIncomes } from '../../services/incomes-service'

export default class IncomePage extends Component {

    state = {
        incomes: [],
        error: []
    }

    componentDidMount(){
        this.setState({error: []})
        getAllIncomes()
            .then(incomes => {
                this.setState({incomes})
            })
            .catch(error => {
                this.setState({error: error.errors})
            })
    }


  render() {
    return (
      <>
        <section className="page-controls">
          <select>
            <option>April 2019</option>
          </select>

          <Link to="/add#income">Add income</Link>
        </section>
        
        <section className="page-content">
          <IncomeExpenseList type="incomes" data={this.state.incomes}/>
        </section>
      </>
    );
  }
}