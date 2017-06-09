import React from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import HotStyle from './hotInfo.css';

class Other extends React.Component{
	render(){
		return (
			<div>
				<ul className={HotStyle.newsIemsWrap}>
					<li className={HotStyle.newsItems}>
				      <Link className={HotStyle.Link} to="/hotInfoDetail">
						<div className={HotStyle.newsItemsLeftBlock}><img src="/public/img/pic_news.png" /></div>
						<div className={HotStyle.newsItemsRightBlock}>
							 <h4 className={HotStyle.newsTitle}>贷款买车和全款买车，这笔账怎么算？</h4>
							 <p className={HotStyle.newsCountWrap}>
							    <span className={HotStyle.newsTime}>2016-8-1</span>
								<span className={HotStyle.newsReadCount}>80678阅读</span>
							 </p>
						</div>
					  </Link>
					</li>
					<li className={HotStyle.newsItems}>
				      <Link className={HotStyle.Link} to="/hotInfoDetail">
						<div className={HotStyle.newsItemsLeftBlock}><img src="/public/img/pic_new2.png" /></div>
						<div className={HotStyle.newsItemsRightBlock}>
							 <h4 className={HotStyle.newsTitle}>贷款买车和全款买车，这笔账怎么算？</h4>
							 <p className={HotStyle.newsCountWrap}>
							    <span className={HotStyle.newsTime}>2016-8-1</span>
								<span className={HotStyle.newsReadCount}>80678阅读</span>
							 </p>
						</div>
					  </Link>
					</li>
					<li className={HotStyle.newsItems}>
				      <Link className={HotStyle.Link} to="/hotInfoDetail">
						<div className={HotStyle.newsItemsLeftBlock}><img src="/public/img/pic_news_3.png" /></div>
						<div className={HotStyle.newsItemsRightBlock}>
							 <h4 className={HotStyle.newsTitle}>贷款买车和全款买车，这笔账怎么算？</h4>
							 <p className={HotStyle.newsCountWrap}>
							    <span className={HotStyle.newsTime}>2016-8-1</span>
								<span className={HotStyle.newsReadCount}>80678阅读</span>
							 </p>
						</div>
					  </Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Other;