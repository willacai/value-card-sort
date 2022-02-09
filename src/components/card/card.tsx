import './card.css'

type CardProps = {
    title: string;
    content: string;
}

export const Card = ({title, content}: CardProps) =>  {
    return (
        <div className="card-container">
            <span className="card-title">{title}</span>
            <span className="card-content">{content}</span>
        </div>
    );
}