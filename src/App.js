import './App.css';
import { Card } from './components/card/card.tsx';

function App() {
  return (
    <div className="App">
      <div className="open-deck">
        <Card title="Helpfulness" content="to be helpful to others"/>
        <Card title="Self-esteem" content="to feel good about myself"/>
      </div>
    </div>
  );
}

export default App;
