import './ContactCard.css';
import { useState } from 'react';

export default function ContactCard({ name, email, age, avatarUrl }) {
    const [showAge, setShowAge] = useState(false)

    return (
        <div className="contact-card">
            <img src={avatarUrl} alt="profile" />
            <div className="user-details">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <button onClick={()=>setShowAge(!showAge)} >Show Age</button>
                {showAge && <p>Age: {age}</p>}
            </div>
        </div>
    )
}