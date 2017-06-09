import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../component/header.js';
import Lists from './list.js';
import Style from './loan.css';

class LoanList extends React.Component{
	componentDidMount(){
		document.title="贷款超市";
	}
	pushDatasouce(start,end){
		let array = [];
		for(let i = start;i <= end; i++){
			array.push(Lists[i]);
		}
		return array;
	}
	onClickFunc(title){
		sessionStorage.setItem("loanTitle",title);
		//console.log(e.target);
		//location.href = 'loanDetail';
	}
	render(){
		const bannerData =Lists[0];
		const bannerTabData = this.pushDatasouce(1,2);
		const tabData = this.pushDatasouce(3,10);
		const subTabData = this.pushDatasouce(11,14);
		const itemsData = this.pushDatasouce(15,Lists.length-1);
		//console.log(itemsData);
		const datasouce = {};
		datasouce.banner = <Link className={Style.link} to="loanDetail" onClick={this.onClickFunc.bind(this,bannerData.title)}><img src={bannerData.ico} /></Link>;
		datasouce.bannerTab = bannerTabData.map(
			(res,index)=>{
				return <div key={"banner_"+index} className={Style.bitem_33}><div><Link className={Style.link} to="loanDetail" onClick={this.onClickFunc.bind(this,res.title)}><img src={res.ico} /></Link></div></div>; 
			}
		);
		datasouce.tab = tabData.map(
			(res,index)=>{
				let divBg = {
					backgroundColor:res.bg
				};
				return <li key={"tab_"+index} className={Style.tbItem_33}>
						  <Link className={Style.link} to="loanDetail" onClick={this.onClickFunc.bind(this,res.title)}>
						  <div className={Style.tbItemBg_33} style={divBg}>
							   <img src={res.ico} />
							   <p>{res.title}</p>
						  </div>
						  </Link>
						</li>;
			}
		);
		datasouce.subTab = subTabData.map(
			(res,index)=>{
				return <li key={"subTab_"+index}><Link className={Style.link} to="loanDetail" onClick={this.onClickFunc.bind(this,res.title)}><img src={res.ico} /></Link></li>;
			}
		);
		datasouce.items = itemsData.map(
			(res,index)=>{
				return <li key={"item_"+index} className={Style.list_33}>
				         <Link className={Style.link} to="loanDetail" onClick={this.onClickFunc.bind(this,res.title)}>
						   <div className={Style.cot_33}>
								<h4>{res.title}</h4>
								<p>{res.desc}</p>
						   </div>
						   <img src={res.ico} className={Style.proList_33} />
						   <span className={Style.numList_33}><span>{res.base}</span>人已放款</span>
						   <span className={Style.btnImg_33}></span>
						   </Link>
					   </li>;
			}
		);
		return(
			<div>
				<Header title={"贷款超市"} showBackBtn={false} />
				<div className={Style.wrap_33}>
					<div className={Style.rb_33+" "+ Style.mb_33}>
						{datasouce.banner}
					</div>
					<div className={Style.clearfix+" "+ Style.mb_33}>
						{datasouce.bannerTab}
					</div>
					<ul className={Style.tb_33+" "+ Style.clearfix+" "+ Style.mb_33}>
						{datasouce.tab}
					</ul>
					<div className={Style.sTab_33}>
						<p>微额借款</p>
						<ul className={Style.sTabItem_33 +" "+ Style.clearfix}>
							{datasouce.subTab}
						</ul>
					</div>
					<div className={Style.hotT_33}>热门借款</div>
					<ul className={Style.listW_33}>
				        {datasouce.items}
				    </ul>
				</div>
			</div>
		)
	}
}

export default LoanList;