import logo from "../logo.svg";

const Footer = () => <>
	<a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
		<h1 className="dark-gray dib f4 fw5 ma0 v-mid">&copy; 2022 My App</h1>
	</a>

	<img src={logo} className="ml-auto h2 v-mid" alt="Site Name" />
</>;

export default Footer;