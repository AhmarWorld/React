import './BlogCard.css';

export default function BlogCard({ img, title, text }) {
    return (
        <div className="blog-card">
            <div className='blog-card_img' style={{
                background: `url(${img}), lightgray 50% / cover no-repeat`
            }} ></div>
            <div className="blog-card_text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}