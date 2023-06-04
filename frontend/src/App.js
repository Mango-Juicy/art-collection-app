import React, { useEffect, useState } from 'react';

import { Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Loader from './components/main/Loader';

import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';
import CartScreen from './screens/CartScreen';
import MainScreen from './screens/MainScreen';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ManagerScreen from './screens/ManagerScreen';

import { getCategory, getConfiguration } from './actions/itemActions';

import { useDispatch, useSelector, } from 'react-redux'


function App() {

  // STATE: (dev)
  const state = useSelector(state => state)
  const printState = () =>{
    console.log(state)
  }
  
  const dispatch = useDispatch()

  // CATEGORY
  const categoryList = useSelector(state => state.categoryList)
  const { errorCategory, loadingCategory, categories } = categoryList

  // CONFIGURATION
  const configList = useSelector(state => state.configList)
  const { configs } = configList  
  const [configInfo, setConfigInfo] = useState({})

  const handleConfig = (setting, settingField) => {
    const value = configs
        ?.filter(config => 
          config.setting === setting && 
          config.settingField === settingField)
        .map(config => 
          config.value
    )
    return value.toString()
  }

  // Dynamically set the root variables
  const setRootVariables = (config) => {
    document.documentElement.style.setProperty('--primary-color', config.colorPrimary);
    document.documentElement.style.setProperty('--secondary-color', config.colorSecondary);
    document.documentElement.style.setProperty('--orange-color', config.colorAccent);
  };
  
  // Dispatch: categoryList and configList
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getConfiguration())  
  }, [])

  // configInfo
  useEffect(() => {
    setConfigInfo({
      title: handleConfig("title","title"),
      email: handleConfig("contacts","email"),
      phone: handleConfig("contacts","phone"),
      colorPrimary: handleConfig("colorPalette","colorPrimary"),
      colorSecondary: handleConfig("colorPalette","colorSecondary"),
      colorAccent: handleConfig("colorPalette","colorAccent")
    })  
    console.log(configInfo)
  }, [configs])

  // rootVariables
  useEffect(() => {
    setRootVariables(configInfo);
  }, [configInfo]);

  return (
    configInfo.title === undefined ?  <Loader/>
    : <Router>
        <Header categories={categories} title={configInfo.title}/>
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
              <Route path="/manager/" element={<ManagerScreen configInfo={configInfo}/>} />
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