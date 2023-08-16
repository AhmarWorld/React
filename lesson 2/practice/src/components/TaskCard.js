import '../App.css'
import {BiEdit} from 'react-icons/bi'
import {FaTrash} from 'react-icons/fa'
 
export default function TaskCard({title, id, deleteFunc}){
    return(
        <div className="taskCard">
            <p>{title}</p>
            <div style={{display:'flex', justifyContent:'space-between', width:'60px'}}>
            <span><BiEdit/></span>
            <span onClick={()=>{deleteFunc(id)}}><FaTrash/></span>
            </div>
        </div>
    )
}