import './LogoSmall.css';
import logo from './thePSmall.png'

export default function LogoSmall() {
    return (
        <div className='LogoSmall'>
            <img className='thePSmall' src ={logo}></img> 
        </div>
    );
}