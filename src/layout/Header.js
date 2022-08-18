import logo from '../logo.svg';

const Header = () => <>
	<a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
		<img src={logo} className="h2 v-mid" alt="Site Name" />
		<h1 className="dark-gray dib f4 fw5 ma0 v-mid">My App</h1>
	</a>
	<nav className="dtc v-mid w-75 tr">
		<a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Services</a>
		<a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Blog</a>
		<a className="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Join Us</a>
	</nav>
</>;

export default Header;