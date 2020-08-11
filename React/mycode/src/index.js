import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Todolist from './Todolist'
// import Counter from './Counter'
import Demo from './demo';
import { BrowserRouter, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import Newbotton from './newButton';
import Newlist from './newList'

ReactDOM.render(
      <BrowserRouter>
          <div>
              <Route path='/list/:id' component={Newlist}/>
              <Route path='/button' component={Newbotton}/>
              <Route path='/' component={Demo}/>
          </div>
      </BrowserRouter>,
  document.getElementById('root')
);


