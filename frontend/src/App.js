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
import AddItemsScreen from './screens/AddItemsScreen';

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

            <Route path="/biografia" element={<StoriesScreen idCategory={1} />} exact />
            <Route path="/antologiaCritica" element={<StoriesScreen idCategory={2} />} exact />
            <Route path="/articoliInterviste" element={<StoriesScreen idCategory={3}/>} exact />

            <Route path="/dipinti" element={<GalleryScreen idCategory={4} />} exact />
            <Route path="/litografie" element={<GalleryScreen idCategory={5}/>} exact />

            <Route path="/mostreCollettive" element={<EventsScreen idCategory={6} />} exact />
            <Route path="/mostrePersonali" element={<EventsScreen idCategory={7} />} exact />
            <Route path="/cataloghi" element={<EventsScreen />} exact />

            <Route path="/casaArte" element={<EventsScreen idCategory={8} />} exact />
            <Route path="/archivio" element={<EventsScreen idCategory={9} />} exact />
            <Route path="/autentiche" element={<EventsScreen idCategory={10} />} exact />

            <Route path="/contatti" element={<StoriesScreen />} exact />

            <Route path="/login/" element={<LoginScreen />} />
            
            <Route path="/product/:id" element={<ItemScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/register/" element={<RegisterScreen />} />
            <Route path="/profile/" element={<ProfileScreen />} />
            <Route path="/addItems/" element={<AddItemsScreen />} />
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