import { useState } from 'react'
import Button from './Button/Button';
import Input from './Input/Input';

export default function Form({ setLink, setShow }) {
    const [inputValue, setInputValue] = useState('')
    const [isEmpty, setColor] = useState(false)

    async function cutLink(link) {
        const response = await fetch(`https://clck.ru/?url=${link}`)
        const data = await response.json()
        return data
    }

    const changeLink = () => {
        cutLink(inputValue).then((data)=>setLink(data)).then(setShow(true))
        
    }

    return (
        <div className='string'>
            <Input setColor={setColor} inputValue={inputValue} setInputValue={setInputValue} />
            <Button state={isEmpty} value={'Сократить'} func={changeLink} />
        </div>
    )
}