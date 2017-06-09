import React from 'react';
import Header from '../component/header.js';
import abStyle from './aboutUs.css';

class AboutUs extends React.Component{
	componentDidMount(){
		document.title="关于我们";
	}
	render(){
		return (
			<div>
				<Header title={"关于我们"} showBackBtn={false} />
				<div className={abStyle.header}>
					<img src="public/img/mao_logo.png" className={abStyle.logo} />
				</div>
				<ul className={abStyle.itemsWrap}>	
					<li className={abStyle.itemBlock +" "+ abStyle.clearfix}>
						<div className={abStyle.block}>
						   <div className={abStyle.qqBlock}>
							<img src="public/img/qq_d.png" className={abStyle.qqIco} />
							<p className={abStyle.qqTitle}>QQ咨询</p>
							<p className={abStyle.qqNum}>784512174875</p>
							<p className={abStyle.markDesc}>QQ咨询时间：9:00~18:00</p>
						   </div>
						</div>
						<div className={abStyle.block}>
						   <div className={abStyle.telBlock}>
								<img src="public/img/tel_d.png" className={abStyle.telIco} />
								<p className={abStyle.telTitle}>电话咨询</p>
								<p className={abStyle.telNum}>400-445-4845</p>
								<p className={abStyle.markDesc}>电话咨询时间：9:00-21:00</p>
						   </div>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}

export default AboutUs;