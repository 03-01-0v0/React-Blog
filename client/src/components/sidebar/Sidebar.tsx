import {Link} from 'react-router-dom';
import imgSidebar from '../../assets/images/imgSidebar.jpg';
import './Sidebar.scss';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src={imgSidebar} alt='' />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat
                    facere id labore illo, libero aliquid ut ab nostrum, quia iure mollitia dolorem
                    ea temporibus nulla soluta numquam ex molestiae!
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <Link className='link' to='/posts?cat=Life'>
                            Life
                        </Link>
                    </li>
                    <li className='sidebarListItem'>
                        <Link className='link' to='/posts?cat=Music'>
                            Music
                        </Link>
                    </li>
                    <li className='sidebarListItem'>
                        <Link className='link' to='/posts?cat=Sport'>
                            Sport
                        </Link>
                    </li>
                    <li className='sidebarListItem'>
                        <Link className='link' to='/posts?cat=Style'>
                            Style
                        </Link>
                    </li>
                    <li className='sidebarListItem'>
                        <Link className='link' to='/posts?cat=Tech'>
                            Tech
                        </Link>
                    </li>
                    <li className='sidebarListItem'>
                        <Link className='link' to='/posts?cat=Cinema'>
                            Cinema
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className='sidebarIcon fab fa-facebook-square'></i>
                    <i className='sidebarIcon fab fa-instagram-square'></i>
                    <i className='sidebarIcon fab fa-pinterest-square'></i>
                    <i className='sidebarIcon fab fa-twitter-square'></i>
                </div>
            </div>
        </div>
    );
}
