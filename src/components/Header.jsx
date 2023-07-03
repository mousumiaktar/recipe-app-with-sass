import {ImSpoonKnife} from 'react-icons/im'

const Header = () => {
    return (
      <header className='header' style={{ backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-fashion-food-poster-background-image_159294.jpg)` }}>
      <div className='layer'>
      <div className="container">
        <nav className='logo-wrapper'>
          <div className='logo'>
            <ImSpoonKnife className='brand' />
          </div>
        </nav>
        <div className='header-text' >
          <h1>Recipe App Reactjs</h1>
          <p>Lets have fun building this app together...</p>
        </div>

      </div>
      </div>
    </header>
    );
};

export default Header;