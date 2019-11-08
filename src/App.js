import React, { Component } from 'react';
import * as classes from './App.css';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Section from './Content/Section/Section';
import SectionHeader from './Content/SectionHeader/SectionHeader';
import NavbarItem from './Navbar/NavbarItem/NavbarItem';
import Contact from './Contact/Contact';
import ContactItem from './Contact/ContactItem/ContactItem';

class App extends Component {
  render() {

    return (
      <div className={classes.App}>
        <Navbar>
          <NavbarItem hoverColor="#a29bfe" takeMeTo="#work">Work</NavbarItem>
          <NavbarItem hoverColor="#74b9ff" takeMeTo="#skills">Skills</NavbarItem>
          <NavbarItem hoverColor="#81ecec" takeMeTo="#about">About</NavbarItem>
          <NavbarItem hoverColor="#55efc4" takeMeTo="#contact">Contact</NavbarItem>
        </Navbar>
        <Content>
          <SectionHeader bgColor="#a29bfe" textColor="#2c3e50">
            Look, what I have done so far
            </SectionHeader>
          <Section sectionName="work" bgColor="#fff">
            Work
         </Section>
          <SectionHeader bgColor="#74b9ff" textColor="#2c3e50">
            You know what my skill set is?
            </SectionHeader>

          <Section sectionName="skills" bgColor="#fff">
            Skills
         </Section>
          <SectionHeader bgColor="#81ecec" textColor="#2c3e50">
            This is me
            </SectionHeader>
          <Section sectionName="about" bgColor="#fff">
            About
         </Section>
          <SectionHeader bgColor="#55efc4" textColor="#2c3e50">
            You can find me here
            </SectionHeader>
          <Section sectionName="contact" bgColor="#fff">
            <Contact>
              <ContactItem color="#55efc4" hoverColor="#00b894"><a href="#"><i className="fab fa-github"></i></a></ContactItem>
              <ContactItem color="#55efc4" hoverColor="#00b894"><a href="#"><i className="fab fa-linkedin"></i></a></ContactItem>
              <ContactItem color="#55efc4" hoverColor="#00b894"><a href="#"><i className="fab fa-docker"></i></a></ContactItem>
            </Contact>
          </Section>
        </Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
