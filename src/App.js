import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing/>
      <Footer />
    </div>
  );
}
export default App;
