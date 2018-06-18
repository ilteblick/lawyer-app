/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import MainImage from './components/MainImage';
import ContactForm from './components/ContactForm';
import VideoSection from './components/VideoSection';
import AboutUsSection from './components/AboutUsSection';
import FeedBackSection from './components/FeedBackSection';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ paddingTop: 200 }}>
        <MainImage />
        <ContactForm />
        <VideoSection />
        <AboutUsSection />
        <FeedBackSection />
      </div>
    );
  }
}
