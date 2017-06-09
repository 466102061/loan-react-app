import React from 'react';
import {Router, Route, IndexRoute, Link, NavLink} from 'react-router-dom';
import footerStyle from './footer.css';

class Footer extends React.Component{
	render(){
		return (
		   <div className={footerStyle.bottomNavWrap}>
			<ul className={footerStyle.bottomNav}>
				<li className={footerStyle.bottomNavItems}>
				    <NavLink exact to="/" className={footerStyle.navLink} activeClassName={footerStyle.navLinkActive} >
						<div className={footerStyle.bottomNavIcoWrap}><span className={footerStyle.bottomNavIco +" "+ footerStyle.bottomNavIco3}></span></div>
						<p className={footerStyle.bottomNavTitle}>热点咨询</p>
					</NavLink>
				</li>
				<li className={footerStyle.bottomNavItems}>
				    <NavLink to="/loan" className={footerStyle.navLink} activeClassName={footerStyle.navLinkActive}>
                         <div className={footerStyle.bottomNavIcoWrap}><span className={footerStyle.bottomNavIco +" "+  footerStyle.bottomNavIco2}></span></div>
					    <p className={footerStyle.bottomNavTitle}>贷款超市</p>
					</NavLink>
				</li>
				<li className={footerStyle.bottomNavItems}>
				    <NavLink to="/calculator" className={footerStyle.navLink} activeClassName={footerStyle.navLinkActive}>
                        <div className={footerStyle.bottomNavIcoWrap}><span className={footerStyle.bottomNavIco +" "+  footerStyle.bottomNavIco5}></span></div>
					    <p className={footerStyle.bottomNavTitle}>费率计算</p>
					</NavLink>
				</li>
				<li className={footerStyle.bottomNavItems}>
				    <NavLink to="/aboutUs" className={footerStyle.navLink} activeClassName={footerStyle.navLinkActive}>
                         <div className={footerStyle.bottomNavIcoWrap}><span className={footerStyle.bottomNavIco +" "+ footerStyle.bottomNavIco4}></span></div>
					    <p className={footerStyle.bottomNavTitle}>关于我们</p>
					</NavLink>
				</li>
			</ul>
			</div>
		)
	}
};

export default Footer;