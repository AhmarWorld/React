import './WinnerBox.css';

export default function WinnerBox({winner}){
    return(
        <div className='winner'>
            <p>Congratulations won</p>
            <h1>{winner}</h1>
        </div>
    )
}