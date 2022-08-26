import './style.css';

type Props = {
    order: string;
    text: string; 
}

function Title({ order, text } : Props) {
    return (
        <div className="title">
            <span>{order}.</span>
            <h3>{text}</h3>
        </div>
    );
}

export default Title;


