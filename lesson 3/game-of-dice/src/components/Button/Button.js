import './Button.css';

export default function Button({value, onClick}){
    return(
        <button className="game-button" onClick={onClick}>{value}</button>
    )
}