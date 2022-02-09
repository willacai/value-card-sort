import './App.css';
import { Card } from './components/card/card.tsx';
import { Deck } from './components/deck/deck.tsx';

function App() {
  return (
    <div className="App">
      <div className="deck-list">
        <Deck title="Very Important"/>
        <Deck title="Somewhat Important"/>
        <Deck title="Not Important"/>
      </div>
      <div className="open-deck">
        <Card title="Helpfulness" content="to be helpful to others"/>
        <Card title="Self-esteem" content="to feel good about myself"/>
      </div>
    </div>
  );
}

export default App;
