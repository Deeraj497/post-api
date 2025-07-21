import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PostList from './components/PostList'
import PostDetails from './components/PostDetails';
import './App.css';




function App() {
  return (
    <Router>
    <div className='app'><h1>Welcome To The Post-Api
    </h1>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/posts/:id' element={<PostDetails/>}/>
       
      </Routes>
    </div>
    </Router>
  )
};

export default App;
