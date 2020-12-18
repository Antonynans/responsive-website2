import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles/GlobalStyles';
import Home from './pages/homePage/Home';
import { Footer, Navbar } from './components';


function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        
        </Switch>
        <Footer />

    </BrowserRouter>
  );
}

export default App;
