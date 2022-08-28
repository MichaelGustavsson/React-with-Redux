import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div id='navbar' className='navbar'>
      <h1 className='logo'>Tracker</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Reactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/add'
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Add
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
