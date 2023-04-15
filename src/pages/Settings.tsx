import { IonAvatar, IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { callOutline, keyOutline, personOutline } from "ionicons/icons";
import React from "react";

const Settings: React.FC = () => {
    return (
      <>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Settings</IonTitle>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/tabs/more"></IonBackButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent class="ion-padding-top ">
            <IonGrid>
              <IonRow>
                <IonCol offset="4">
                  <IonAvatar>
                    <IonImg
                      alt="Silhouette of a person's head"
                      src="https://ionicframework.com/docs/img/demos/avatar.svg"
                    />
                  </IonAvatar>
                </IonCol>
              </IonRow>
            </IonGrid>

            <IonList lines="inset">
              <IonItem lines="inset">
                <IonIcon slot="start" icon={personOutline}></IonIcon>
                <IonLabel position="stacked"> Name</IonLabel>
                <IonInput
                  placeholder="e.g (Leonard Shayo)"
                  type="text"
                ></IonInput>
              </IonItem>
              <IonItem lines="inset">
                <IonIcon slot="start" icon={callOutline}></IonIcon>
                <IonLabel position="stacked"> Phone</IonLabel>
                <IonInput placeholder="0620454106" type="tel"></IonInput>
              </IonItem>
              <IonItem lines="inset" detail={true}>
                <IonIcon slot="start"   icon={keyOutline}></IonIcon>
                <IonLabel> Change Password</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPage>
      </>
    );
    
}

export default Settings;
