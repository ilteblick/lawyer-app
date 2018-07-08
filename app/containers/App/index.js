import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import PersonPage from 'containers/PersonPage/Loadable';
import ContentPage from 'containers/ContentPage/Loadable';
import History from 'containers/History/Loadable';
import Attorneys from 'containers/Attorneys/Loadable';
import AttorneyAlexey from 'containers/AttorneyAlexey/Loadable';
import AttorneyTatsiana from 'containers/AttorneyTatsiana/Loadable';
import Principles from 'containers/Principles/Loadable';
import PracticalAreas1 from 'containers/PracticalAreas1/Loadable';
import PracticalAreas2 from 'containers/PracticalAreas2/Loadable';
import PracticalAreas3 from 'containers/PracticalAreas3/Loadable';
import PracticalAreas4 from 'containers/PracticalAreas4/Loadable';
import LawersRepOfBel from 'containers/LawersRepOfBel/Loadable';
import Guarantee from 'containers/Guarantee/Loadable';
import OraganizationalForms from 'containers/OraganizationalForms/Loadable';
import PrinciplesOfOrganizations from 'containers/PrinciplesOfOrganizations/Loadable';
import LawersGoals from 'containers/LawersGoals/Loadable';
import ContactUs from 'containers/ContactUs';
import Statements from 'containers/Statements/Loadable';
import Represent from 'containers/Represent/Loadable';
import Assessment from 'containers/Assessment/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Acts1 from 'containers/Acts/Acts1/Loadable';
import Acts2 from 'containers/Acts/Acts2/Loadable';
import Acts3 from 'containers/Acts/Acts3/Loadable';

import AppBar from 'components/AppBar';
import { StyledAppWrapper } from './styled';
import Footer from './components/Footer';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.sectionScroll);
  }

  sectionScroll = () => {
    if (window.pageYOffset !== 0) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  getSectionRef = (ref) => {
    this.sectionRef = ref;
  }

  render() {
    const { isScrolled } = this.state;

    return (
      <StyledAppWrapper>
        <AppBar isScrolled={isScrolled} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/person" component={PersonPage} />
          <Route exact path="/content" component={ContentPage} />
          <Route exact path="/history" component={History} />
          <Route exact path="/attorneys" component={Attorneys} />
          <Route exact path="/attorneys/AlexeyPrybylski" component={AttorneyAlexey} />
          <Route exact path="/attorneys/TatyanaGumenuk" component={AttorneyTatsiana} />
          <Route exact path="/principles" component={Principles} />

          <Route exact path="/lawersRB" component={LawersRepOfBel} />
          <Route exact path="/guarantee" component={Guarantee} />
          <Route exact path="/org-forms" component={OraganizationalForms} />

          <Route exact path="/principles-organization" component={PrinciplesOfOrganizations} />
          <Route exact path="/lawers-goals" component={LawersGoals} />

          <Route path="/contact-us" component={ContactUs} />

          <Route exact path="/statements" component={Statements} />
          <Route exact path="/represent" component={Represent} />
          <Route exact path="/assessment" component={Assessment} />

          <Route exact path="/areas/1" component={PracticalAreas1} />
          <Route exact path="/areas/2" component={PracticalAreas2} />
          <Route exact path="/areas/3" component={PracticalAreas3} />
          <Route exact path="/areas/4" component={PracticalAreas4} />

          <Route exact path="/acts/1" component={Acts1} />
          <Route exact path="/acts/2" component={Acts2} />
          <Route exact path="/acts/3" component={Acts3} />

          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </StyledAppWrapper>
    );
  }
}
