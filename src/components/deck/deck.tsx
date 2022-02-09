import './deck.css'
type DeckProps = {
    title: string;
    content: string;
}

export const Deck = ({title, content}: DeckProps) =>  {
    <button className="deck-container">
        <span className="deck-title">{title}</span>
        <span className="deck-content">{content}</span>
    </button>
}