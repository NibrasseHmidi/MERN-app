
import './App.css'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';


 const App=() => {
  return (
    
    <body id="myPage"  data-spy="scroll" data-target=".navbar" data-offset="60">
    
      <Header/>
       
<Slider/>

     <Footer/>

    </body>
   
   
  );
}

export default App;
