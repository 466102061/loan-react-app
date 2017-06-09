import React from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import Footer from '../component/footer.js';
import Header from '../component/header.js';
import HotInfo from '../hotInfo/hotInfo.js';
import LoanList from '../loan/loan.js';
import Calculator from '../calculator/calculator.js';
import AboutUs from '../aboutUs/aboutUs.js';
import HotInfoDetail from '../hotInfo/hotInfoDetail.js';
import LoanDetail from '../loan/loanDetail.js';

/*import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();
<Router history={customHistory}>
....
....
</Router>
*/

const styles = {};
styles.content={
	paddingTop:'44px',
	paddingBottom:'50px'
};
//const Index = React.createClass({
class Index extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<div style={styles.content}>
					{/*body 路由*/}
				    <Route exact  path="/" component={HotInfo}></Route>
				    <Route path="/loan" component={LoanList}></Route>
				    <Route path="/loanDetail" component={LoanDetail}></Route>
				    <Route path="/hotInfoDetail" component={HotInfoDetail}></Route>
				    <Route path="/calculator" component={Calculator}></Route>
				    <Route path="/aboutUs" component={AboutUs}></Route>
					{/*底部导航*/}
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
};

export default Index;