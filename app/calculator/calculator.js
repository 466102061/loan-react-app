import React from 'react';
import Header from '../component/header.js';
import calStyle from './calculator.css';

class Calculator extends React.Component{
	componentDidMount(){
		document.title="费率计算";
	}
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
			<div>
				<Header title={"计算器"} showBackBtn={false} />
				<div className={calStyle.content}>
					<div className={calStyle.logoWrap}><img src="/public/img/logo.png" className={calStyle.logo} alt="logo" /></div>
					<div className={calStyle.formItemWrap} style={{"minHeight":"164px"}}>
						 <div className={calStyle.formItems}>
							 <label className={calStyle.formLabel}>贷款金额</label>
							 <input className={calStyle.formInput} type="text" id="loan" data-msg="您的贷款金额没有填写哦!" defaultValue="5000" />
							 <span className={calStyle.formUnit}>元</span>
						 </div>
						 <div className={calStyle.formItems}>
							 <label className={calStyle.formLabel}>贷款期限</label>
							 <input className={calStyle.formInput} type="text" id="month" data-msg="您的贷款期限没有填写哦!" defaultValue="1" />
							 <span className={calStyle.formUnit}>月</span>
						 </div>
						 <div className={calStyle.formItems}>
							 <label className={calStyle.formLabel}>月<span style={{"padding":"0 9px"}}>利</span>率</label>
							 <input className={calStyle.formInput} type="text" id="interest" data-msg="您的贷款利率没有填写哦!" defaultValue="0.5" />
							 <span className={calStyle.formUnit}>%</span>
						 </div>
					</div>
					<div className={calStyle.resultTitle}>计算结果</div>
					<div className={calStyle.formItemWrap}>
						 <div className={calStyle.formItems}>
							 <label className={calStyle.formLabel}>每月还款</label>
							 <input className={calStyle.formInput} type="text" id="pay" value="" />
							 <span className={calStyle.formUnit}>元</span>
						 </div>
						 <div className={calStyle.formItems}>
							 <label className={calStyle.formLabel}>总共应还</label>
							 <input className={calStyle.formInput} type="text" id="totalPay" value="" />
							 <span className={calStyle.formUnit}>元</span>
						 </div>
					</div>
					<span className={calStyle.btn} onClick={this.toCalculation}>开始计算</span>
					<div className={calStyle.tips}>备注：结果仅供参考，实际还款数额以还款计划为准</div>
				</div>
			</div>
		)
	}
}

export default Calculator;