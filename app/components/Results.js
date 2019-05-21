var React = require('react');
var PropTypes =React.PropTypes;
var styles =require('../styles');
var UserDetails = require("./UserDetails");
var UserDetailsWrapper = require("./UserDetailsWrapper");
var Link =require("react-router").Link;
var MainContainer = require("./MainContainer");
var Loading = require("./Loading");

function StartOver(){
    
    return(
            <div className="col-sm-12" style={styles.space}>
            <Link to="/playerone"><button type="button" className="btn btn-lg btn-danger">
            Start Over</button></Link> 
            </div>
    )
}
function Results(props){   
    var WinningIndex =props.scores[0] > props.scores[1] ? 0 : 1;
    var LosingIndex = WinningIndex === 0 ? 1:0;
    
    if(props.isLoading === true){
        
        return(
         <p><Loading text="ONE MOMENT" speed={100} /></p>
        )
    }
    if(props.scores[0] == props.scores[1]){
        
        return(    
            <MainContainer>
            <h1>Its a tie!</h1>
            <StartOver />
            </MainContainer>
        )
    }
    
    return(    
        <MainContainer>
        <h1>RESULTS</h1>
        
        <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner" >
        <UserDetails score={props.scores[WinningIndex]} info={props.playersInfo[WinningIndex]} />
        </UserDetailsWrapper>
       
        <UserDetailsWrapper header="Loser" >
        <UserDetails score={props.scores[LosingIndex]} info={props.playersInfo[LosingIndex]} />
        </UserDetailsWrapper>
        </div> 
        <StartOver />
        </MainContainer>
    
    )
}


Results.PropTypes = {
    isLoading:PropTypes.bool.isRequired,
    scores:PropTypes.array.isRequired,
    playersInfo:PropTypes.array.isRequired,
}

module.exports =Results