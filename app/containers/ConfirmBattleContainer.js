var React =require("react");
var ConfirmBattle =require("../components/ConfirmBattle");
var githubHelpers =require("../utils/githubHelpers");


var ConfirmBattleContainer =React.createClass({
    
    contextTypes:{        
        router:React.PropTypes.object.isRequired
    },
    
    getInitialState:function(){
        
        return{
            isLoading:true,
            playerInfo:[]
        }
    },
    componentWillMount:function(){        
        
    },
    
    componentDidMount:function(){        
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo])
        .then(function(players){            
            this.setState({                
                isLoading:false,
                playerInfo:[players[0],players[1]]
            })
        }.bind(this))
    },
    componentWillReceiveProps:function(){
         
    },
    componentWillUnmount:function(){
        
        
    },
    handleInitiateBattle:function(){        
    this.context.router.push({        
        pathname:'/results',
        state:{
            playerInfo:this.state.playersInfo
        }
    })
    },
    render:function(){
        return (
            <ConfirmBattle 
            isLoading={this.state.isLoading} 
            onInitiateBattle={this.handleInitiateBattle} 
            playersInfo ={this.state.playerInfo}/>
        );
    }
});
        
module.exports = ConfirmBattleContainer;