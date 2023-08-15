import '../../App.css'

export default function TaskButton({value, func}){
 return(
     <button className="taskButton" onClick={func}>{value}</button>
 )
}