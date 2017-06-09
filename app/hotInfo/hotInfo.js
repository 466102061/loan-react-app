import React from 'react';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import Header from '../component/header.js'
import HotInfoStyle from './hotInfo.css';
import Hot from './hot.js';
import Finance from './finance.js';
import Loan from './loan.js';
import Other from './other.js';

class HotInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tabId:1,
			tabType:"HOT",
			tabs:[
				{tabName:"热点",id:1,type:"HOT"},
				{tabName:"理财",id:2,type:"FINANCE"},
				{tabName:"贷款",id:3,type:"LOAN"},
				{tabName:"其他",id:4,type:"OTHER"}
			]
		}
	}
	componentDidMount(){
		document.title="热点咨询";
	}
	tabClicked(id,type){
		this.setState(
			{
				tabId: id,
				tabType: type
			}
		);
	}
	render(){
		const active={
				opacity:"1",
				borderBottom:"3px solid #333",
		}
		const nomal = {
				opacity:"0.5",
				borderBottom:"none",
		}
		let tabBody = "";
		const tablist = this.state.tabs.map(
			(res,index)=>{
				//console.log(res.tabName);
				let myStyle = nomal;
				if(res.id == this.state.tabId){
					myStyle = active;
				}
				if(this.state.tabId == 1){
					tabBody = <Hot />;
				}else if(this.state.tabId == 2){
					tabBody = <Finance />;
				}else if(this.state.tabId == 3){
					tabBody = <Loan />;
				}else if(this.state.tabId == 4){
					tabBody = <Other />;
				}
				return <li key={res.id} className={HotInfoStyle.navItems}>
						 <span className={HotInfoStyle.navItemsHref} onClick={this.tabClicked.bind(this,res.id,res.type)} style={myStyle}>{res.tabName}</span>
					 </li>;
			}
		)
		return (
			<div>
				{/*头部标题栏*/}
				<Header title={"热点咨询"} showBackBtn={false} />
				{/*navLink*/}
				 <ul className={HotInfoStyle.navWrap}>
				 	{tablist}
				 </ul>
				 {tabBody}
			</div>
		)
	}
};
/*
					 <li className={HotInfoStyle.navItems}>
						 <span className={HotInfoStyle.navItemsHref}>热点</span>
					 </li>
					 <li className={HotInfoStyle.navItems}>
						 <span className={HotInfoStyle.navItemsHref}>理财</span>
					 </li>
					 <li className={HotInfoStyle.navItems}>
						 <span className={HotInfoStyle.navItemsHref}>贷款</span>
					 </li>
					 <li className={HotInfoStyle.navItems}>
						 <span className={HotInfoStyle.navItemsHref}>其他</span>
					 </li>*/
export default HotInfo;