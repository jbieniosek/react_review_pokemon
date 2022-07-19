import './Pokemon.css';

const Pokemon = (props) => {

    const handleLike = () => {
        props.addLike(props.id);
    }

    return (<div>
        <span>{props.name}</span>
        <span>{props.id}</span>
        <img src={props.image} />
        <span>Likes = {props.likes}</span>
        <button onClick={handleLike}>Like</button>
    </div>)
};

export default Pokemon;