import './deck.css'

type DeckProps = {
    title: string;
}

export function Deck(props) {
    const clickHandler = () => {
        console.log(props.title + " clicked");
    }
    return(
        <button onClick={clickHandler} className="deck-container">
            <span className="deck-title">{props.title}</span>
        </button>
    );
}