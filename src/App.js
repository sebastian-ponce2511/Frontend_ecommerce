
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch, //decide que componente se renderiza   
} from "react-router-dom";
import ProductForm from './ProductForm.js'
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';
import CategoryForm from './CategoryForm';
import BrandForm from './BrandForm';

function App() {
  return (
    <Router>

      <Switch>

        <Route path ="/products/create">
    
          < ProductForm/>

        </Route>

        <Route path ="/register">
    
          < RegisterForm/>

        </Route>

        <Route path ="/login">
    
          < LoginForm/>

        </Route>

        <Route path ="/profiles/create">
    
          < ProfileForm/>

        </Route>

        <Route path ="/categories/create">
    
          < CategoryForm/>

        </Route>

        <Route path ="/brands/create">
    
          < BrandForm/>

        </Route>

      </Switch>

    </Router>
    
  );
}

export default App;
