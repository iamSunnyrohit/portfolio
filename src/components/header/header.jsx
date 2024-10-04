import './header.css';
import Type from './type';
import CTA from "./CoreToAction";
import HeaderSocial from './headerSocials';
import Me from "../../assets/3.jpeg"

const header = () => {
    return (
        <header>
            <div className='container header__container' id='header'>
                <h4>Hello I'm</h4>
                <h1>Sunny Rohit</h1>
                <div>
                    <h5 className='text-light'>
                        <Type/>
                    </h5>
                </div>
                <CTA />
                <HeaderSocial />
                <div className='.me'>
                     <img src= {Me} className='me' alt='me' />
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default header 