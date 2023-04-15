import {  IonAvatar,IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { bagOutline, callOutline, logOutOutline, moonOutline, settingsOutline, shareSocialOutline } from "ionicons/icons";
import React from "react"
const More= () => {
  return (
    <>
      <IonPage>
        {" "}
        <IonHeader>
          <IonToolbar>
            <IonTitle>More</IonTitle>{" "}
            {/* <IonButton
              fill="clear"
              style={{ width: "fit-content", height: "fit-content" }}
              slot="end"
              button={true}
            > */}
              <IonToggle id="themeToggle" slot="end" checked={true}></IonToggle>
            {/* </IonButton> */}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList lines="full">
            <IonItem
              button={true}
              routerLink="/tabs/more/Settings"
              detail={true}
            >
              <IonAvatar slot="start" style={{ width: "40px", height: "40px" }}>
                <IonImg
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel><h4>Leonard</h4> <p>0620454106</p></IonLabel>
            </IonItem>
            <IonItem
              button={true}
              routerLink="/tabs/more/contact-us"
              detail={true}
            >
              <IonIcon slot="start" icon={callOutline}></IonIcon>{" "}
              <IonLabel>Contact Us</IonLabel>
            </IonItem>
            <IonItem detail={true}>
              <IonIcon slot="start" icon={bagOutline}></IonIcon>{" "}
              <IonLabel>About</IonLabel>
            </IonItem>
            <IonItem detail={true}>
              <IonIcon slot="start" icon={shareSocialOutline}></IonIcon>{" "}
              <IonLabel>Share</IonLabel>
            </IonItem>
            
            <IonItem detail={true}>
              <IonIcon slot="start" icon={logOutOutline}></IonIcon>{" "}
              <IonLabel>LogOut</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
}
  
export default More;