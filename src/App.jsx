import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ComponentsAbout from './components/about';
import ComponentsJumbotron from './components/jumbotron';
import ComponentsNavbar from './components/navbar';
import ComponentsSertificate from './components/sertificate';
import ComponentSkill from './components/skill';
import ComponentsPortofolio from './components/portofolio';
import InputComponents from './components/input';
import ComponentFooter from './components/footer';

function App() {
  return (
      <ChakraProvider>
      <ComponentsNavbar/>
      <ComponentsJumbotron/>
      <ComponentsAbout/>
      <ComponentSkill/>
      <ComponentsSertificate/>
      <ComponentsPortofolio/>
      <InputComponents/>
      <ComponentFooter/>
      </ChakraProvider>
    
  );
}

export default App;
