import ActorCard from '../ActorCard/ActorCard';
import './ActorList.css';

export default function ActorList({ actors }) {
    return (
        <div className="actor-list">
            <h1>Actors</h1>
            <div className="actor-list_cards">
                {/* {actors.map(el => (
                    <ActorCard
                        key={el.id}
                        actor={'actors'}
                        character={'character'}
                        img={'/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg'}
                    />
                ))} */}
            </div>
        </div>
    )
}