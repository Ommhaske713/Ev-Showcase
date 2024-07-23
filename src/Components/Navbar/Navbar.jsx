import './Navbar.css'

const Navbar = () => {
   
  return (
    <div className='nav'>
      <div className="nav-logo"></div>
      <ul className='nav-menu'>
        <li className='list-home'>Home</li>
        <li className='list-explore'>Explore</li>
        <li className='list-about'>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>     
    </div>
  )
}
export default Navbar;
