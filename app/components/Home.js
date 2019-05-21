var React = require("react");
var transparentBg =require('../styles').transparentBg;
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var MainContainer = require("./MainContainer");

var Home=React.createClass({	
	render:function(){		
		return(
		   <MainContainer>
           <h1>GitHub Battle</h1>
            <p className='lead'>Some Fancy Motto</p>
            <Link to ="/playerone">
            <button type="button" className="btn btn-lg btn-success">Get Started</button>
            </Link>
            </MainContainer>
		)
	}
});

module.exports = Home;