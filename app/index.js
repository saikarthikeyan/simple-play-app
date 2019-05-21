var USER_DATA  = {
	name:"Karthikeyan Rangaswamy",
	username:"Karthik",
	image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
}

var React = require("react");
var ReactDOM = require("react-dom");
var routes =require('./config/routes');

var ProfilePic =React.createClass({	
	render:function(){		
		return <img src={this.props.imageUrl} style={{height:100,width:100}} />
	}
});

var Link =React.createClass({	
	render:function(){		
		return (
		   <span style={{ color:'blue',cursor:'pointer'}} onClick={this.changeURL}>
		   {this.props.children}
		   </span>
		)
	},
	changeURL:function(){
		window.location.replace(this.props.href)		
	}
});

var ProfileLink =React.createClass({	
	render:function(){		
		return (
		   <div>
		   <Link href={'https://www.github.com/'+ this.props.username} >
			{this.props.username}
		   </Link>
		   </div>
		)
	}
});

var ProfileName =React.createClass({	
	render:function(){		
		return (
		   <div>
			{this.props.name}
		   </div>
		)
	}
});

var Avatar =React.createClass({	
	render:function(){		
		return (
		   <div>
			<ProfilePic imageUrl={this.props.user.image} />
			<ProfileName name={this.props.user.name} />
			<ProfileLink username={this.props.user.username} />
		   </div>
		)
	}
});


ReactDOM.render(
routes,
document.getElementById("app")

)