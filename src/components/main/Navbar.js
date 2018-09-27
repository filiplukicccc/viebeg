import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from 'semantic-ui-react';
import logo from '../../images/logo.png';
import HamburgerMenu from 'react-hamburger-menu';
import css from '../styles/styles.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'home',
			visible: false,
			class: ''
		}
	}


	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	handleClick() {
		this.setState({
			open: !this.state.open
		});
		this.toggleVisibility();
	}
	

	render() {
		const { activeItem } = this.state;
		const { visible } = this.state;

		return (
			<div>
				<div className={css.navbarDiv}>
					<div className={css.navbarLogoDiv} style={{ paddingTop: '20px' }}><img src={logo} />
						<div className={css.burger}>
							<HamburgerMenu
								isOpen={this.state.open}
								menuClicked={this.handleClick.bind(this)}
								width={24}
								height={21}
								strokeWidth={2}
								rotate={0}
								color='#003571'
								borderRadius={0}
								animationDuration={0.5}
							/>
						</div>
					</div>
					<div className={css.menuStandard} style={{ marginLeft: 'auto', paddingRight: '50px' }}>
						<Menu className={css.menuItem} stackable pointing secondary size='large' style={{ borderBottom: 'none', display: 'center', alignItems: 'center', justifyContent: 'center' }}>
							<a href='#home'><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>Home</Menu.Item></a>
							<a href='#about'><Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}>About</Menu.Item></a>
							<a href='#managment'><Menu.Item name='Managment' active={activeItem === 'Managment'} onClick={this.handleItemClick}>Managment</Menu.Item></a>
							<a href='#contact'><Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}>Contact</Menu.Item></a>
						</Menu>
					</div>
					<Transition visible={visible} animation='slide down' duration={650}>
						<div className={css.menuRes}>
							<Menu className={css.menuItem} stackable pointing secondary size='large' style={{ borderBottom: 'none' }} >
								<a href='#home'><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>Home</Menu.Item></a>
								<a href='#about'><Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}>About</Menu.Item></a>
								<a href='#managment'><Menu.Item name='Managment' active={activeItem === 'Managment'} onClick={this.handleItemClick}>Managment</Menu.Item></a>
								<a href='#contact'><Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}>Contact</Menu.Item></a>
							</Menu>
						</div>
					</Transition>
				</div>
			</div>
		)
	}
}

export default Navbar;