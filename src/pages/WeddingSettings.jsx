import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonMenuButton,
  IonModal,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { create, save } from "ionicons/icons";
import React, { useState } from "react";
import MyWeddingSideMenu from "../components/MyWeddingSidemenu";


const WeddingSettings = () => {
   const [editing, setEditing] = useState(false);

   const editHandler=()=>{
setEditing(true)

   }


   const saveHandler = () => {
     setEditing(false);
   };
  return (
    <>
      <MyWeddingSideMenu />
      <IonPage id="myWeddingContent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Wedding Settings</IonTitle>
            {editing ? (
              <IonButton onClick={saveHandler} slot="end" fill="clear">
                <IonIcon icon={save} style={{ cursor: "pointer" }} />
              </IonButton>
            ) : (
              <IonButton onClick={editHandler} slot="end" fill="clear">
                <IonIcon icon={create} style={{ cursor: "pointer" }} />
              </IonButton>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonCard class="ion-margin-vertical">
              <IonItemDivider>Event Settings</IonItemDivider>

              <IonItem lines="none">
                <IonLabel position="stacked">Date & Time</IonLabel>
                <IonDatetimeButton
                  class="ion-margin"
                  disabled={!editing}
                  datetime="datetime"
                ></IonDatetimeButton>
                <IonModal keepContentsMounted={true}>
                  <IonDatetime id="datetime"></IonDatetime>
                </IonModal>{" "}
              </IonItem>
              <IonItem lines="none">
                <IonLabel position="stacked">Location</IonLabel>
<IonInput
                  class="ion-margin"
                  type="text"
                  readonly={!editing}
                />              </IonItem>
            </IonCard>
            <IonCard class="ion-margin-vertical">
              <IonItemDivider>Price Settings</IonItemDivider>
              <IonItem lines="none">
                <IonLabel position="stacked">Minimum Single Amount</IonLabel>
                <IonInput
                  class="ion-margin"
                  type="number"
                  readonly={!editing}
                />
              </IonItem>
              <IonItem lines="none">
                <IonLabel position="stacked">Minimum Double Amount</IonLabel>
                <IonInput
                  class="ion-margin"
                  type="number"
                  readonly={!editing}
                />
              </IonItem>
              <IonItem lines="none">
                <IonLabel position="stacked">Minimum Pledge Amount</IonLabel>
                <IonInput
                  class="ion-margin"
                  type="number"
                  readonly={!editing}
                />
              </IonItem>
            </IonCard>
            <IonCard class="ion-margin-vertical">
              <IonItemDivider>Notification Settings</IonItemDivider>
              <IonItem lines="none">
                <IonLabel position="stacked">Pledge Reminder Message</IonLabel>
                <IonTextarea
                  class="ion-margin"
                  readonly={!editing}
                  placeholder="Can't edit this"
                ></IonTextarea>
              </IonItem>
            </IonCard>
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
};
export default WeddingSettings;
