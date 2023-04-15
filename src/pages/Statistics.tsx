import { IonButtons, IonCard, IonContent, IonHeader,IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React from "react";
import Bar from "../components/Bar";
import MyWeddingSideMenu from "../components/MyWeddingSidemenu";


const Statistics:React.FC=()=>{
  const inviteeslabels = ["Started Pledge", "completed Pledge"];
  const inviteesData = [5, 10];
    const moneylabels = ["Total Pledges ", "Pledge Paid"];
    const moneyData = [5000, 1000];

  return (
    <>
      <MyWeddingSideMenu />
      <IonPage id="myWeddingContent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Stats</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <Bar xLabel="Guests" labels={inviteeslabels} Data={inviteesData} />
          </IonCard>
          <IonCard>
            {" "}
            <Bar xLabel="Money" labels={moneylabels} Data={moneyData} />
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );}
export default Statistics