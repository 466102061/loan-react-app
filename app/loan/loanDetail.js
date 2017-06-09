import React from 'react';
import Header from '../component/header.js';

class LoanDetail extends React.Component{
	componentDidMount(){
		document.title="贷款";
	}
	render(){
		const title = sessionStorage.getItem("loanTitle");
		const style = {
			padding:"40px",
			fontSize:"30px",
			textAlign:"center"
		}
		return (
		    <div>
			    <Header title={"贷款"} showBackBtn={true} />
				<h6 style={style}>{title}...</h6>
			</div>
		)
	}
}

export default LoanDetail;