import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import doughnut from '../../images/doughnut-chart.png'
import bar from '../../images/bar-chart.png'
import Loader from '../loader/loader'
import UserContext from '../../contexts/UserContext';
import RegistrationForm from '../ResgistrationForm/RegistrationForm';
import './LandingPage.css';

export default class LandingPage extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props)
    this.featuresRef = React.createRef()
    this.registrationRef = React.createRef()
    this.state = {
      isloading: true,
      team: [
        {name: 'Andre Willie', href: 'https://github.com/andre-kw'},
        {name: 'Chris Carnivale', href: 'https://github.com/cjcarnivale'},
        {name: 'Ethan Zimmerman', href: 'https://github.com/thebinarypenguin'},
        {name: 'Michael Bonner', href: 'https://github.com/mdb1710'},
        {name: 'Zoljargal Fallows', href: 'https://github.com/ZolFallows'},
      ],
    }
  }

  componentDidMount(){
    this.setState({isloading: false})
    // this.scrollToRegistration()
    window.scrollTo(0, 0)
  }
     // Scroll to ref function
  scrollTo = (el) => {
    let top = el === 'feature'
      ? this.featuresRef.current.offsetTop
      : this.registrationRef.current.offsetTop
    window.scrollTo({
        top,
        behavior: "smooth"
    })
  }


  scrollToFeatures = () => {
      this.scrollTo('feature')
  }


  scrollToRegistration = () => {
    this.scrollTo('registration')
  }

  render() {
    const content = (
      <>
        {this.context.error.length > 0 ? <div className="alert-error-lg">{this.context.error[0]}</div> : ''}

        <header ref={this.registrationRef}>
          <div className="landing-header">
            <div className="landing-header-left">
              <h2>Spendful is the newest way to prevent yourself from going broke.</h2>
            </div>

            <div className="landing-header-right">
              <RegistrationForm handleRegistrationSuccess={this.props.handleRegistrationSuccess} />
            </div>
          </div>
        </header>

        <div className="feature-wrapper" >
          <div className="hidden">
          </div>
          <div onClick={this.scrollToFeatures} className="feature">
            <h3>AWESOME FEATURES</h3>
            <p>Simple and effective feaures that will put you in control of your own finances!</p>
          </div>
          <div className="hidden">
          </div>
        </div>

        <main ref={this.featuresRef} className="landing-page-main">

          <section className="feature-list" >
            <figure>
              <img src={bar} alt="placeholder"></img>
              <figcaption>
                On the dedicated incomes and expenses pages, see all of your transactions, or select a specific month to view.
                When viewing all transactions, an easy-to-read  bar chart will show you when in the previous year you bought that boat and
                the subsequent months where all you ate was Ramen.
              </figcaption>
            </figure>

            <figure>
              <img src={doughnut} alt="placeholder" />
              <figcaption>
                On your dashboard, a handy doughnut chart displays your expenses broken down by category and includes a balance sheet.
                This intuitive and easy to read display will help you determine whether or not that seventh IPA for the evening is a good idea.
              </figcaption>
            </figure>
          </section>
        </main>
        <footer>
          <div className='footer-wrapper'>
            <div className="project">
              <h3>Project</h3>
              {/* <hr className="underline"/> */}
              <ul>
                <li><a href="https://github.com/thebinarypenguin/spendful-client" target="_blank" rel="noopener noreferrer">Github Client</a></li>
                <li><a href="https://github.com/thebinarypenguin/spendful-server" target="_blank" rel="noopener noreferrer">Github Server</a></li>
                <li><Link to="/" onClick={this.scrollToRegistration}>Register</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>
            <div className="about-us">
              <h3>About us</h3>
              {/* <hr className="underline"/> */}
              <ul>
                {this.state.team.map((guy, i) => <li key={i}><a href={guy.href} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> {guy.name}</a></li>)}
              </ul>
            </div>
          </div>
          <hr className="copyright-hr"/>
          <div className="copyright">
            <p>Copyright 2019</p>
          </div>
        </footer>
      </>
    )
    return <>
     {this.state.isloading ? <Loader /> : content}
    </>
  }
}
