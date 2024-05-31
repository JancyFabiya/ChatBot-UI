import './App.css';
import Chatbot from './component/Chatbot';
import Footer from './component/Footer';
import MainPage from './component/MainPage';
function App() {
  return (
    <div className="App">
     <MainPage/>
     <Chatbot/>
     <Footer/>
    </div>
  );
}

export default App;
