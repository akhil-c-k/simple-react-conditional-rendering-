import React from 'react';
import ReactDOM from 'react-dom';
import './seasondisplay.css';
const seasonConfig = {
    summer:{
        title:'hey its hot',
        iconName:'sun'
    },
    winter: {
        title:'hey its chilling',
        iconName:'snowflake'
    }
}
//season display start from season determine
const getSeason = (lat,month) => {
    if(month > 2 && month < 9)
     {
         return lat > 0 ? 'summer' : 'winter';
     }

     else 
     {
        return  lat > 0 ? 'winter' : 'summer';
     }
};


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'heyy its chilling' : 'lets go to beach';
     const {iconName,title} = seasonConfig[season]
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    console.log(season);
    return <div className={`season-display ${season}`}>
             <i className={`icon-left massive ${iconName} icon`}/>
             <h1>{text}</h1>
             <i className={`icon-right massive ${iconName} icon`}/>
           </div>
};

export  default SeasonDisplay;