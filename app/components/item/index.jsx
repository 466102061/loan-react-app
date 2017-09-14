import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.css'

class Item extends React.Component{
	constructor(props, context){
		super(props, context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render (){
		console.log(this.props.id)
		return (
			<div className="loanItem">
			   <Link to={'/loanDetail/'+this.props.id}>
			    <div className="loanItemTop">
			        <h4>{this.props.item.title}</h4>
			        <p>{this.props.item.desc}</p>
			    </div>
			    <div className="loanItemTag">
			         {
			            this.props.item.require.map((res,index)=>{
			            	return <span className="tagItem" key={index}>{res}</span>
			            })
			         }
			   </div>
			   <img src={this.props.item.ico} className="loanItemIco" />
			   {
			   	this.props.flag ?
			     <img src={this.props.flag} className="loanItemPan" />
			     : ''
			   }
			   <span className="loanItemNum"><span>{this.props.item.base}</span>人已放款</span>
			   <span className="loanItemBtn"></span>
			   <span className="loanItemLine"></span>
			   </Link>
			</div>
		)
	}
}

export default Item