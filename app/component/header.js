import React, { PropTypes } from 'react';
import styles from './header.css';

class Header extends React.Component{
	goBack(){
		history.go(-1);
	}
	render(){
		const backBtnHtml = this.props.showBackBtn?<span className={styles.btnBack} onClick={this.goBack}></span>:"";
		return (
			<div className={styles.headerWrap}>
				 <div className={styles.header}>
					  <h4 className={styles.headerTitle}>{this.props.title}</h4>
					  <span className={styles.btnFeedBack}></span>
					  {backBtnHtml}
				 </div>
			</div>
		)
	}
};
export default Header;