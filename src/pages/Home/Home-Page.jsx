/************************** Import library/fungsi ****************************/
import React from 'react';

import {ElectricPower,
    EmbeddedData,
    ParameterAdjusment,
    RoomTemperature,
    SetupContainer} from '../../components';

    import './Home-Page.css';

import useFetchFirestore from '../../hooks/useFetchFirestore';

// mount firebase sekali saja dalam aplikasi, tetapi di dalam folder ./src
import firebase from '../../firestore/firebase';

/************************ Deklarasi objek/variabel ***************************/
export var firestoreDbRef = firebase.firestore();

/************************ Deklarasi kelas/komponen ***************************/
function HomePage(){
    const [data] = useFetchFirestore('Main-Data');
    
    return(
        <section className="home-container">
            <SetupContainer FirestoreData={data.firestoreData}/>
            <ParameterAdjusment FirestoreData={data.firestoreData}/>
            <RoomTemperature FirestoreData={data.firestoreData}/>
            <ElectricPower FirestoreData={data.firestoreData}/>
            <EmbeddedData/>
        </section>
    )
}

export default React.memo(HomePage);