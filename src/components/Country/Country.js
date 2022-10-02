
//import css
import './Country.css';


export default function Country(props) {
    const { name, capital, flag } = props.country;
    return (
        <div className="country">
            <img src={flag} alt="flag" />
            <h2>Name: {name}</h2>
            <p>Capital: {capital}</p>
        </div>
    );
}