import {
  
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { } from "ionicons/icons";
import React, { useState } from "react";
import EditCard from "../components/EditCard";
import MyWeddingSideMenu from "../components/MyWeddingSidemenu";

const Ecards = () => {

  const [segmentValue,setSegmentValue]=useState("all")

  const changeSegmentHandler=(e)=>{setSegmentValue(e.detail.value)}

  return (
    <>
      <MyWeddingSideMenu />
      <IonPage id="myWeddingContent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Wedding Card</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSegment value={segmentValue} onIonChange={changeSegmentHandler}>
              <IonSegmentButton value="all">
                <IonLabel>All</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="favorites">
                <IonLabel>Selected</IonLabel>
              </IonSegmentButton>
            </IonSegment>{" "}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {segmentValue === "all" ? (
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonCard>
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                    />
                    <IonCardHeader>
                      <IonCardTitle> Light Blue</IonCardTitle>
                      <IonCardSubtitle>TSH 250/Card</IonCardSubtitle>
                    </IonCardHeader>

                    {/* <IonCardContent>
                    Here's a small text description for the card content.
                    Nothing more, nothing less.
                  </IonCardContent> */}

                    <IonButton
                      expand="full"
                      fill="solid"
                      routerLink="/tabs/my-wedding/e-cards/create-e-card"
                    >
                      Use Card
                    </IonButton>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          ) : (
            <IonCard class="ion-margin-top ion-padding">
              <IonImg
                src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
              ></IonImg>
              <EditCard label="mambo" value="kuku" />
            </IonCard>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};
export default Ecards;
