import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import PersonPage from 'containers/PersonPage/Loadable';
import ContentPage from 'containers/ContentPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

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
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </StyledAppWrapper>
    );
  }
}
