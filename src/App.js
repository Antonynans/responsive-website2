import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles/GlobalStyles';
import Home from './pages/homePage/Home';
import { Footer, Navbar } from './components';
import ScrollToTop from './components/ScrollToTop';
import Products from './pages/products/Products';
import SignUp from './pages/signUp/SignUp';
import Services from './pages/services/Services';


function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />

    </BrowserRouter>
  );
}

export default App;
