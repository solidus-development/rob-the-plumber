function MobileMenu(props) {

    let visibility = 'hide'

    if(props.menuOpen) {
        visibility = 'show'
    }

    return(
        <div id='mobile-menu' className={visibility}>
            <ul className="mobile-menu-list">
                <li>Home</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>About</li>
                <li>Free Quote</li>
            </ul>
        </div>
    )
}

export default MobileMenu;