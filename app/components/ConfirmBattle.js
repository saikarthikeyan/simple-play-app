var React = require("react");
var styles =require("../styles");
var PropTypes =React.PropTypes;
var Link =require("react-router").Link;
var UserDetails = require("./UserDetails");
var UserDetailsWrapper = require("./UserDetailsWrapper");
var MainContainer = require("./MainContainer");
var Loading = require("./Loading");

function ConfirmBattle(props){    
    return props.isLoading === true
    ? <Loading speed={800} text="Waiting"/>
    : <MainContainer>
       <h1>Confirm Players</h1>
       <div className="col-sm-8 col-sm-offset-2">
       <UserDetailsWrapper header="player One"><UserDetails info={props.playersInfo[0]} /></UserDetailsWrapper>
       
       <UserDetailsWrapper header="player Two"><UserDetails info={props.playersInfo[1]} /></UserDetailsWrapper>
       
       </div>
       <div className="col-sm-8 col-sm-offset-2">
           <div className="col-sm-12" style={styles.space}>
            <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                INITIATE BATTLE
            </button>
            </div>
            <div className="col-sm-12" style={styles.space}>
            <Link to="/playerone">
                <button type="button" className="btn btn-lg btn-danger">Reselect Playerone</button>
            </Link>
            </div>
       </div>
       </MainContainer>
           
    
}
    
ConfirmBattle.propTypes ={    
    isLoading:PropTypes.bool.isRequired,
    onInitiateBattle:PropTypes.func.isRequired,
    playersInfo:PropTypes.array.isRequired
}
module.exports = ConfirmBattle;