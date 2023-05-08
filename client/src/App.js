import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home }     from './Home';
import { BookList } from './BookList';

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path = '/'      element = { <Home />} exact />
          <Route path = '/books' element = { BookList} />
        </Routes>
      </div>
    </Router>
  );
};
