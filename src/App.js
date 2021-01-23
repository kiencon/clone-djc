import {
  BrowserRouter as Router,
}                             from "react-router-dom";
import Header                 from './components/header/Header';
import AppRouter              from './router/index';
import Counter                from './containers/Counter/Counter';

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <Header />
    //     <div className="main container">
    //       <section className="wraper-app">
    //         <AppRouter />
    //       </section>
    //     </div>
    //   </div>
    // </Router>
    <Counter />
  );
};

export default App;
