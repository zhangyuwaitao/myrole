import React from 'react';
import './App.css';
import Login from "./pages/Login";
//引入antd的Button组件
import index from "./pages";
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import PrivateRouter from "./component/PrivateRouter";
function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path={'/'} exact render={()=><Redirect to={'/login'}/>}></Route>
                <Route path='/login' component={Login}></Route>
                {/*<Route path='/index' component={index}></Route>*/}
                <Route path={'/index'} render={()=>{
                    <index>
                        <PrivateRouter></PrivateRouter>
                    </index>
                }}>
                </Route>
            </Switch>

        </div>
    </Router>
  );
}

export default App;
