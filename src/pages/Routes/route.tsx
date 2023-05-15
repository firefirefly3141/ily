import { BrowserRouter, Routes as RoutesDom, Route } from 'react-router-dom';

import Home from '../Home';
import Poem from '../Poems'

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" Component={Home} />
        <Route path="/190fa7702545a1964425028e84a22b6d" Component={Poem} />
      </RoutesDom>
    </BrowserRouter>
  );
}

export default Routes;
