import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import CountUp from 'react-countup';
import styles from './Cards.component.css';
const Cards=({data:{confirmed, recovered, deaths, lastUpdate}}) =>{
    if(!confirmed){
        return('Loading...');
    }
    else{
    return(
        <div className="row mt-3 justify-content-center">
            <div className="card col-sm-3 border-dark border-rounded" style={{width: 18 +'rem'}}>
                <div className="card-body">
                <h4 className="card-title">Infected</h4>
                <h5 className="card-subtitle mb-2 text-muted">
                    <CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2}
                    separator=","
                    />
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{new Date(lastUpdate).toDateString()}</h6>
                </div>
            </div>
            <div className="card col-sm-3 offset-1 border-dark" style={{width: 18 +'rem'}}>
                <div className="card-body">
                <h4 className="card-title">Recovered</h4>
                <h5 className="card-subtitle mb-2 text-muted">
                <CountUp
                    start={0}
                    end={recovered.value}
                    duration={2}
                    separator=","
                    />
                <span> (<CountUp
                    start={0}
                    end={(recovered.value/confirmed.value)*100}
                    duration={2}
                    separator=","
                    />%)</span>    
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{new Date(lastUpdate).toDateString()}</h6>
                </div>
            </div>
            <div className="card col-sm-3 offset-1 border-dark" style={{width: 18 +'rem'}}>
                <div className="card-body">
                <h4 className="card-title">Deaths</h4>
                <h5 className="card-subtitle mb-2 text-muted">
                <CountUp
                    start={0}
                    end={deaths.value}
                    duration={2}
                    separator=","
                    />
                <span> (<CountUp
                    start={0}
                    end={(deaths.value/confirmed.value)*100}
                    duration={2}
                    separator=","
                    />%)</span>    
                </h5>
                
                <h6 className="card-subtitle mb2 text-muted">{new Date(lastUpdate).toDateString()}</h6>
                </div>
            </div>
        </div>
    )
}
}
export default Cards;