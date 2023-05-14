import React, { useEffect } from 'react';

import { Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/main/Header';
import Footer from './components/main/Footer';

import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';
import CartScreen from './screens/CartScreen';
import MainScreen from './screens/MainScreen';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ManagerScreen from './screens/ManagerScreen';

import { getCategory } from './actions/itemActions';

import { useDispatch, useSelector, } from 'react-redux'


function App() {

  const dispatch = useDispatch()

  const state = useSelector(state => state)
  const categoryList = useSelector(state => state.categoryList)

  const { error, loading, categories } = categoryList
  

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const printState = () =>{
    console.log(state)
  }

  return (
    <Router>
      <Header categories={categories}/>
      <main className="">
        <Container>
          <Routes>

          <Route path="/" element={<HomeScreen categories={categories}/>} exact />

            {categories.map((category) => (
              <Route 
                key={category.id} 
                path={category.url} 
                element={<MainScreen idCategory={category.id} />} 
                exact 
              />
            ))}

            <Route path="/contatti" element={<MainScreen idCategory={1} />} exact />

            <Route path="/login/" element={<LoginScreen />} />
            
            <Route path="/item/:id" element={<ItemScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/register/" element={<RegisterScreen />} />
            <Route path="/profile/" element={<ProfileScreen />} />
            <Route path="/manager/" element={<ManagerScreen />} />
          </Routes>
        </Container>        
      </main>
      <Button variant='primary' onClick={printState}>
          Print State
      </Button>
      <Footer />
    </Router>
  );
}

export default App;