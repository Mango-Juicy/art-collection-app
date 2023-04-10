import { Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';
import CartScreen from './screens/CartScreen';
import GalleryScreen from './screens/GalleryScreen';
import StoriesScreen from './screens/StoriesScreen';
import EventsScreen from './screens/EventsScreen';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

import { useDispatch, useSelector, } from 'react-redux'


function App() {

  const state = useSelector(state => state)
  const printState = () =>{
    console.log(state)
  }

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/shop" element={<GalleryScreen />} exact />
            <Route path="/stories" element={<StoriesScreen />} exact />
            <Route path="/events" element={<EventsScreen />} exact />
            <Route path="/product/:id" element={<ItemScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />

            <Route path="/login/" element={<LoginScreen />} />
            <Route path="/register/" element={<RegisterScreen />} />
            <Route path="/profile/" element={<ProfileScreen />} />
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