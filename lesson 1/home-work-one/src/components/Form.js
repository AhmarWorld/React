import { useState } from 'react'
import Button from './Button/Button';
import Input from './Input/Input';

export default function Form({ setLink, setShow }) {
    const [inputValue, setInputValue] = useState('')
    const [isEmpty, setColor] = useState(false)

    const fetchShortUrl = (url) => {
        fetch(`https://clck.ru==?url=${url}`)
        .then(res=> res.text())
        .then((url)=>{
            setLink(url)
            console.log(url);
        } )
    }

    const changeLink = () => {
        fetchShortUrl(inputValue).then(setShow(true))
    }

    return (
        <div className='string'>
            <Input setColor={setColor} inputValue={inputValue} setInputValue={setInputValue} />
            <Button state={isEmpty} value={'Сократить'} func={changeLink} />
        </div>
    )
}