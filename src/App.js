import Navbar from "./components/navbar";
import Home from "./pages/home";
import Features from "./pages/features";
import Docs from "./pages/docs";
import {Switch, Route} from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/features' component={Features} />
				<Route path='/docs' component={Docs} />
			</Switch>
		</div>
	);
}

export default App;
