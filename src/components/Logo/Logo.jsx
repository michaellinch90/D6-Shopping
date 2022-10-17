import './Logo.css';
import logo from './theP.png'

export default function Logo() {
    return (
        <div className='Logo'>
            <img className='theP' src ={logo}></img>
        </div>
    );
}