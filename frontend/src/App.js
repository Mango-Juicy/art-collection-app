import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';
import CartScreen from './screens/CartScreen';
import GalleryScreen from './screens/GalleryScreen';
import StoriesScreen from './screens/StoriesScreen';
import EventsScreen from './screens/EventsScreen';


function App() {
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
            <Route path="/cart/" element={<CartScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;