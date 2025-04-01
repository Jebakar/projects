import './App.css';

import Header from './Header_section';
import Banner from './Banner';
import Collection from './Collection';
import Racing from './Racing';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <div className="banner">
      <Header /> 
      <Banner />     
      </div>
      <Collection />
      <Racing />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
