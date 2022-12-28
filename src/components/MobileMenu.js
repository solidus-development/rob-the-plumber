import { HashLink as Link } from 'react-router-hash-link';

function MobileMenu(props) {

    let visibility = 'hide'

    if(props.menuOpen) {
        visibility = 'show'
    }

    return(
        <div id='mobile-menu' className={visibility}>
            <ul className="mobile-menu-list">
                <li><Link smooth to='#home'>Home</Link></li>
                <li><Link smooth to='#services'>Services</Link></li>
                <li><Link smooth to='#testimonials'>Testimonials</Link></li>
                <li><Link smooth to='#about'>About</Link></li>
                <li><button className='contact-button' onClick={() => props.setContactModal(true)}>Free Quote</button></li>
            </ul>
        </div>
    )
}

export default MobileMenu;