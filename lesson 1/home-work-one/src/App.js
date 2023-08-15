import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import { BsLink45Deg } from 'react-icons/bs';
import Button from './components/Button/Button';

function App() {
  const [link, setLink] = useState('')
  const [isShow, setShow] = useState(false)

  const addClipboard = (text)=>{
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="App">
      <p style={{ width: "700px", color: "#1A2B4D99", lineHeight: "24px", fontFamily: 'YS Text,arial,sans-serif', marginTop: '20px' }}>Помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придётся видеть длинные url-адреса, занимающие много места.</p>
      <main>
        <Form setLink={setLink} setShow={setShow} />
        <div className='copyCut' id={`${isShow && 'show'}`}>
          <p onClick={addClipboard(`${link}`)} style={{ height: '32px', fontSize: '32px', display: "flex", alignItems: 'center' }}><BsLink45Deg />{link || 'https://clck.ru/'}</p>
          <Button value={'Копировать ctrl+c'} func={addClipboard(`${link}`)} />
        </div>
      </main>
    </div>
  );
}

export default App;
