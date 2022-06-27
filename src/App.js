import './App.css';
import Likes from './components/Likes';
import content from './images/Aska.jpg';
function App() {
  return (
    <div className="App">
      <div className="wrap">
        <img style={{ height: 600, width: 550 }} src={content} alt="No" />
        <Likes></Likes>
      </div>
    </div>
  );
}

export default App;
