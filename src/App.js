import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {

  const [newProduct, setNewProduct] = useState({
    title: 'Fall Limited Edition Sneakers',
    price: 125,
    quantity: 0,
  });

  return (
    <div className="App">
      <Header newProduct={newProduct} setNewProduct={setNewProduct}/>
      <Body newProduct={newProduct} setNewProduct={setNewProduct}/> 
      <Footer/>
    </div>
  );
}

export default App;
