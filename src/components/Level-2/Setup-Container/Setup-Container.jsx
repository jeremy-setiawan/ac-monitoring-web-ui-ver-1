/************************** Import library/fungsi ****************************/
import React from 'react';
import {SetupSimple} from '../../Level-1';
import OnAC from '../../../images/Icon On AC.png';
import OffAC from '../../../images/Icon Off AC.png';
import OnRelay from '../../../images/Icon Relay On AC.png';
import OffRelay from '../../../images/Icon Relay Off AC.png';

import './Setup-Container.css';

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/
function SetupContainer(props){
        
    
    return(
        <section className="setup-on-ac-container">
            <SetupSimple Value={props.FirestoreData.relayStatus} Title="Power Status" Information={"To Activate Electric grid"} ImageOn={OnRelay} ImageOff={OffRelay} OnText="On" OffText="Off"/>
            <SetupSimple Value={props.FirestoreData.ACStatus} Title="Running Status" Information={"To Set On Air Conditioner"} ImageOn={OnAC} ImageOff={OffAC} OnText="On" OffText="Off"/>
        </section>
    )
}

export default React.memo(SetupContainer);