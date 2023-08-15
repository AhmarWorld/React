import '../../App.css'

export default function TaskButton({ value, func, state }) {

    return (
        <button className="buttons" id={`${state && 'yellow'}`} onClick={func}>{value}</button>
    )
}