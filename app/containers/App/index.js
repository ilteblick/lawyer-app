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
import ContactUs from 'containers/ContactUs/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Acts1 from 'containers/Acts/Acts1/Loadable';
import Acts2 from 'containers/Acts/Acts2/Loadable';

import Act12 from 'containers/Acts/Act12/Loadable';
import Act13 from 'containers/Acts/Act13/Loadable';
import Act13_1 from 'containers/Acts/Act13-1/Loadable';
import Act15 from 'containers/Acts/Act15/Loadable';
import Act20 from 'containers/Acts/Act20/Loadable';
import Act20_1 from 'containers/Acts/Act20-1/Loadable';
import Act21 from 'containers/Acts/Act21/Loadable';
import Act22 from 'containers/Acts/Act22/Loadable';
import Act23 from 'containers/Acts/Act23/Loadable';
import Act24 from 'containers/Acts/Act24/Loadable';
import Act26 from 'containers/Acts/Act26/Loadable';
import Act29 from 'containers/Acts/Act29/Loadable';
import Act34 from 'containers/Acts/Act34/Loadable';
import Act35 from 'containers/Acts/Act35/Loadable';
import Act35_1 from 'containers/Acts/Act35-1/Loadable';
import Act36 from 'containers/Acts/Act36/Loadable';
import Act38 from 'containers/Acts/Act38/Loadable';
import Act41 from 'containers/Acts/Act41/Loadable';
import Act42 from 'containers/Acts/Act42/Loadable';
import Act50 from 'containers/Acts/Act50/Loadable';
import Act51 from 'containers/Acts/Act51/Loadable';
import Act57 from 'containers/Acts/Act57/Loadable';
import Act68 from 'containers/Acts/Act68/Loadable';
import Act74 from 'containers/Acts/Act74/Loadable';
import Act76 from 'containers/Acts/Act76/Loadable';

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

          <Route exact path="/contact-us" component={ContactUs} />

          <Route exact path="/areas/1" component={PracticalAreas1} />
          <Route exact path="/areas/2" component={PracticalAreas2} />
          <Route exact path="/areas/3" component={PracticalAreas3} />
          <Route exact path="/areas/4" component={PracticalAreas4} />

          <Route exact path="/acts/1" component={Acts1} />
          <Route exact path="/acts/2" component={Acts2} />

          <Route exact path="/acts/12" component={Act12} />
          <Route exact path="/acts/13" component={Act13} />
          <Route exact path="/acts/13-1" component={Act13_1} />
          <Route exact path="/acts/15" component={Act15} />
          <Route exact path="/acts/20" component={Act20} />
          <Route exact path="/acts/20-1" component={Act20_1} />
          <Route exact path="/acts/21" component={Act21} />
          <Route exact path="/acts/22" component={Act22} />
          <Route exact path="/acts/23" component={Act23} />
          <Route exact path="/acts/24" component={Act24} />
          <Route exact path="/acts/26" component={Act26} />
          <Route exact path="/acts/29" component={Act29} />
          <Route exact path="/acts/34" component={Act34} />
          <Route exact path="/acts/35" component={Act35} />
          <Route exact path="/acts/35-1" component={Act35_1} />
          <Route exact path="/acts/36" component={Act36} />
          <Route exact path="/acts/38" component={Act38} />
          <Route exact path="/acts/41" component={Act41} />
          <Route exact path="/acts/42" component={Act42} />
          <Route exact path="/acts/50" component={Act50} />
          <Route exact path="/acts/51" component={Act51} />
          <Route exact path="/acts/57" component={Act57} />
          <Route exact path="/acts/68" component={Act68} />
          <Route exact path="/acts/74" component={Act74} />
          <Route exact path="/acts/76" component={Act76} />

          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </StyledAppWrapper>
    );
  }
}
