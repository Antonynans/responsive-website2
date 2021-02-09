import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles/GlobalStyles';
import Home from './pages/homePage/Home';
import { Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
import Products from './pages/products/Products';
import SignUp from './pages/signUp/SignUp';
import Services from './pages/services/Services';
import CreateAccount from './pages/createAccount/CreateAccount';
import Navbar from './components/Navbar/Navbar';
import ScrollArrow from './pages/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <ScrollArrow />
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' exact component={SignUp} />
          <CreateAccount />

        </Switch>
        {/* <Footer /> */}
        {/* <CreateAccount /> */}

    </BrowserRouter>
  );
}

export default App;
