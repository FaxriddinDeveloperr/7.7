import { memo } from 'react';
import { useRoutes } from 'react-router-dom'
import Home from './pages/home';
import Shop from './pages/shop';
import Header from './components/hader'
import ProductDetial from './pages/produc'

const App = () => {
  return (
    <div className="App">

      <Header/>

      {
        useRoutes([
          {path:'/' , element:<Home/>},
          {path:'/shop' , element:<Shop/>},
          {path:'/recipes/:id' , element:<ProductDetial/>}
        ])
      }

      
    </div>
  );
};

export default memo(App);