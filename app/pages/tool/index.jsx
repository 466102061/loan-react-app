import React from 'react'
import Header from '../../components/header'
import './style.css'

class Calculator extends React.Component{
	toCalculation(){
		var loan = parseFloat($("#loan").val());
		var month = parseFloat($("#month").val());
		var interest = parseFloat($("#interest").val());
		interest = interest /100;
		var pay = loan*(interest*Math.pow((1+interest),month))/(Math.pow((1+interest),month)-1);
		var totalPay = pay*month;
		$("#pay").val(pay.toFixed(2));
		$("#totalPay").val(totalPay.toFixed(2));
	}
	render(){
		return(
			<div className="mbody">
				<Header title={"应急钱包"} route="back" />
				<div className="content">
					<div className="logoWrap"><img src={require("../../static/img/logo.png")} className="logo" alt="logo" /></div>
					<div className="formItemWrap" style={{"minHeight":"164px"}}>
						 <div className="formItems">
							 <label className="formLabel">贷款金额</label>
							 <input className="formInput" type="text" id="loan" data-msg="您的贷款金额没有填写哦!" defaultValue="5000" />
							 <span className="formUnit">元</span>
						 </div>
						 <div className="formItems">
							 <label className="formLabel">贷款期限</label>
							 <input className="formInput" type="text" id="month" data-msg="您的贷款期限没有填写哦!" defaultValue="1" />
							 <span className="formUnit">月</span>
						 </div>
						 <div className="formItems">
							 <label className="formLabel">月<span style={{"padding":"0 9px"}}>利</span>率</label>
							 <input className="formInput" type="text" id="interest" data-msg="您的贷款利率没有填写哦!" defaultValue="0.5" />
							 <span className="formUnit">%</span>
						 </div>
					</div>
					<div className="resultTitle">计算结果</div>
					<div className="formItemWrap">
						 <div className="formItems">
							 <label className="formLabel">每月还款</label>
							 <input className="formInput" type="text" id="pay" value="" />
							 <span className="formUnit">元</span>
						 </div>
						 <div className="formItems">
							 <label className="formLabel">总共应还</label>
							 <input className="formInput" type="text" id="totalPay" value="" />
							 <span className="formUnit">元</span>
						 </div>
					</div>
					<span className="btn" onClick={this.toCalculation}>开始计算</span>
					<div className="tips">备注：结果仅供参考，实际还款数额以还款计划为准</div>
				</div>
			</div>
		)
	}
}

export default Calculator;