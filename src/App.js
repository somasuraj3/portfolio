import React, { Component } from 'react';
import * as classes from './App.css';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Section from './Content/Section/Section';

class App extends Component {
  render() {

    return (
      <div className={classes.App}>
        <Navbar></Navbar>
        <Content>
          <Section sectionName="work" height="100" labelHeight="30" bgColor="#a29bfe">
            Work
         </Section>

          <Section sectionName="skills" height="100" labelHeight="30" bgColor="#74b9ff">
            Skills
         </Section>

          <Section sectionName="about" height="100" labelHeight="30" bgColor="#81ecec">
            About
         </Section>

          <Section sectionName="contact" height="100" labelHeight="30" bgColor="#55efc4">
            Contact
         </Section>
        </Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
