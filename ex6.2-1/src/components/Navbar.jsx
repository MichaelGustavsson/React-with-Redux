import './navbar.css';

const Navbar = () => {
  return (
    <div id='navbar' className='navbar'>
      <h1 className='logo'>Tracker</h1>
      <nav>
        <ul>
          <li>
            <a href='#'>Reactions</a>
          </li>
          <li>
            <a href='#'>Add</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
