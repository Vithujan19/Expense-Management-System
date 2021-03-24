import React, {useState,useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Receipts from './components/Receipts';
import Receipt from './components/Receipt';
import AddReceipt from './components/AddReceipt';
import EditReceipt from './components/EditReceipt';

function App() {
  //Hook
  const [posts,setPosts] = useState([])
  useEffect(() => {
    axios
    .get('http://localhost:8080/receipts')
    .then(res => setPosts(res.data))
    .catch(error => console.log(error));
  });
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Route exact path="/" render={() => <Receipts posts={posts}/>}/>
      <Route path="/receipt/:id" render={props => <Receipt {...props} posts={posts}/>}/>
      <Route path="/update/:id" render={props => <EditReceipt {...props} posts={posts}/>}/>
      <Route path="/add-receipt" component={AddReceipt}/>
      <Footer/>
    </div>
  );
}

export default App;
