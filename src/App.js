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
import Skills from './Skills/Skills';
import Skill from './Skills/Skill/Skill';
import Navigator from './Navigator/Navigator';

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
          <SectionHeader sectionName="work" bgColor="#a29bfe" textColor="#2c3e50">
            Look, what I have done so far
            </SectionHeader>
          <Section bgColor="#fff">
            Work
         </Section>
          <SectionHeader sectionName="skills" bgColor="#74b9ff" textColor="#2c3e50">
            You know what my skill set is?
            </SectionHeader>

          <Section bgColor="#fff">
            <Skills>
              <Skill skillColor="#74b9ff" skillName="java" skillExpertise="10" iconName="fab fa-java" />
              <Skill skillColor="#74b9ff" skillName="Css" skillExpertise="20" iconName="fab fa-css3-alt" />
              <Skill skillColor="#74b9ff" skillName="html" skillExpertise="30" iconName="fab fa-html5" />
              <Skill skillColor="#74b9ff" skillName="angular" skillExpertise="10" iconName="fab fa-angular" />
              <Skill skillColor="#74b9ff" skillName="react" skillExpertise="20" iconName="fab fa-react" />
              <Skill skillColor="#74b9ff" skillName="python" skillExpertise="20" iconName="fab fa-python" />
              <Skill skillColor="#74b9ff" skillName="node" skillExpertise="20" iconName="fab fa-node-js" />
              <Skill skillColor="#74b9ff" skillName="jenkins" skillExpertise="30" iconName="fab fa-jenkins" />
              <Skill skillColor="#74b9ff" skillName="docker" skillExpertise="10" iconName="fab fa-docker" />
              <Skill skillColor="#74b9ff" skillName="sonar" skillExpertise="10" iconName="fas fa-code" />
              <Skill skillColor="#74b9ff" skillName="git" skillExpertise="10" iconName="fab fa-git-alt" />
              <Skill skillColor="#74b9ff" skillName="aws" skillExpertise="10" iconName="fab fa-aws" />
            </Skills>
          </Section>
          <SectionHeader sectionName="about" bgColor="#81ecec" textColor="#2c3e50">
            This is me
            </SectionHeader>
          <Section bgColor="#fff">
            About
         </Section>
          <SectionHeader sectionName="contact" bgColor="#55efc4" textColor="#2c3e50">
            You can find me here
            </SectionHeader>
          <Section bgColor="#fff">
            <Contact>
              <ContactItem color="#55efc4" hoverColor="#00b894"><a href="#"><i className="fab fa-github"></i></a></ContactItem>
              <ContactItem color="#55efc4" hoverColor="#00b894"><a href="#"><i className="fab fa-linkedin"></i></a></ContactItem>
              <ContactItem color="#55efc4" hoverColor="#00b894"><a href="#"><i className="fab fa-docker"></i></a></ContactItem>
            </Contact>
          </Section>
        </Content>
        <Footer></Footer>
        <Navigator>
          <i className="fas fa-chevron-up"></i>
        </Navigator>
      </div>
    );
  }
}

export default App;
