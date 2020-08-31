import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/Header'
import Home from './pages/Home'
import Detail from './pages/Detail/loadable'
import Login from './pages/Login'
import Write from './pages/Write'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact render={()=><Home/>}></Route>
          <Route path='/login' exact render={()=><Login/>}></Route>
          <Route path='/write' exact render={()=><Write/>}></Route>
          <Route path='/detail/:id' exact render={()=><Detail/>}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
