import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Todohead from './components/Todohead'
import Todo from './components/Todo'
import GoodThings from './components/GoodThings'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <section>
        <Login/>
        <Home/>
        <Todohead/>
      </section>
      <section>
          <Todo/>
      </section>
      <section>
        <GoodThings/>
      </section>
      <section>
        <Contact/>
      </section>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

export default App;
