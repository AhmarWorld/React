import './BlogSection.css';
import BlogCard from '../../BlogCard/BlogCard';
import Button from '../../Button/Button';

export default function BlogSection() {
    return (
        <section className="blog">
            <h1>Stay Motivated, read the weekly blog articles.</h1>
            <div className="blogs-card">
                <BlogCard img={'./assets/1.png'} title={'Balancing your love and work life.'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'} />
                <BlogCard img={'./assets/2.png'} title={'A short break from Social Media is important.'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'} />
                <BlogCard img={'./assets/3.png'} title={'How to be 1% Better Every Day'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.'} />
            </div>
            <Button width={'250px'} height={'42px'} value={'Read more blogs'} />
        </section>
    )
}