import React from 'react'
import { Link } from 'react-router'
import './style.css'

class Hot extends React.Component{
	render(){
		return (
			<div>
			    <div className="banner">
				   <Link className="Link" to="/hotInfo/detail">
					<img src={require("../../../static/img/banner.png")} />
				   </Link>
				</div>
				<ul className="newsIemsWrap">
					<li className="newsItems">
				      <Link className="Link" to="/hotInfo/detail">
						<div className="newsItemsLeftBlock"><img src={require("../../../static/img/pic_news.png")} /></div>
						<div className="newsItemsRightBlock">
							 <h4 className="newsTitle">贷款买车和全款买车，这笔账怎么算？</h4>
							 <p className="newsCountWrap">
							    <span className="newsTime">2016-8-1</span>
								<span className="newsReadCount">80678阅读</span>
							 </p>
						</div>
					  </Link>
					</li>
					<li className="newsItems">
				      <Link className="Link" to="/hotInfo/detail">
						<div className="newsItemsLeftBlock"><img src={require("../../../static/img/pic_new2.png")} /></div>
						<div className="newsItemsRightBlock">
							 <h4 className="newsTitle">贷款买车和全款买车，这笔账怎么算？</h4>
							 <p className="newsCountWrap">
							    <span className="newsTime">2016-8-1</span>
								<span className="newsReadCount">80678阅读</span>
							 </p>
						</div>
					  </Link>
					</li>
					<li className="newsItems">
				      <Link className="Link" to="/hotInfo/detail">
						<div className="newsItemsLeftBlock"><img src={require("../../../static/img/pic_news_3.png")} /></div>
						<div className="newsItemsRightBlock">
							 <h4 className="newsTitle">贷款买车和全款买车，这笔账怎么算？</h4>
							 <p className="newsCountWrap">
							    <span className="newsTime">2016-8-1</span>
								<span className="newsReadCount">80678阅读</span>
							 </p>
						</div>
					  </Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Hot;