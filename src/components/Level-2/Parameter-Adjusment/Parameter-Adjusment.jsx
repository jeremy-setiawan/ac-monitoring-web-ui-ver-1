import React from 'react'
import {ParameterSlider} from '../../Level-1';

import './Parameter-Adjusment.css';

function ParameterAdjusment(props){
    return(
        <section className="parameter-holder">
            <ParameterSlider 
                parameterName={"Temperature Adjusment"} 
                minUnit={"18*C"}
                maxUnit={"30*C"}
                minScale={18}
                maxScale={30}
                defaultValue={24}
                title={"Temp. Adjument"}
                value={props.FirestoreData.TemperaturAdj}
                unit={"*C"}
                information={"Adjusted Temperature"}
            />
            <ParameterSlider
                parameterName={"Fan Adjusment"} 
                minUnit={"0"}
                maxUnit={"3"}
                minScale={0}
                maxScale={3}
                defaultValue={3}
                title={"Fan Adjument"}
                value={props.FirestoreData.FanAdj}
                unit={""}
                information={"Adjusted Fan Speed"}
            />
        </section>
    )
}

export default React.memo(ParameterAdjusment);