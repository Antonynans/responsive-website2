import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles/GlobalStyles';
import Home from './pages/homePage/Home';


function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
