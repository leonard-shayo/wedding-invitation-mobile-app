import { IonAvatar, IonChip, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonSelect, IonSelectOption, IonToolbar } from "@ionic/react";
import React, { useState } from "react"

const MyWeddingSideMenu=()=>{
    
     const [selectedWedding, setSelectedWedding] = useState("oranges");

     const weddingSelectionHandler = (event) => {
       setSelectedWedding(event.target.value);
     };
    
    
    return (
      <>
        <IonMenu contentId="myWeddingContent">
          <IonHeader>
            <IonToolbar className="ion-padding-left">
              <IonChip>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
                <IonLabel>
                  <IonSelect
                    value={selectedWedding}
                    onIonChange={weddingSelectionHandler}
                  >
                    <IonSelectOption value="apples">
                      leonard weds none
                    </IonSelectOption>
                    <IonSelectOption value="oranges">
                      leonard weds me
                    </IonSelectOption>
                    <IonSelectOption value="bananas">
                      leonard weds infinity
                    </IonSelectOption>
                  </IonSelect>
                </IonLabel>
              </IonChip>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList>
              <IonMenuToggle>
                <IonItem
                  lines="full"
                  detail={true}
                  button
                  routerLink="/tabs/my-wedding/statistics"
                  routerDirection="none"
                >
                  <IonLabel>Statistics</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem
                  lines="full"
                  detail={true}
                  button
                  routerLink="/tabs/my-wedding/invitees"
                  routerDirection="none"
                >
                  <IonLabel>Invitees</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem
                  lines="full"
                  detail={true}
                  button
                  routerLink="/tabs/my-wedding/e-cards"
                  routerDirection="none"
                >
                  <IonLabel>E-cards</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem
                  lines="full"
                  detail={true}
                  button
                  routerLink="/tabs/my-wedding/verification"
                  routerDirection="none"
                >
                  <IonLabel>Verification</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle>
                <IonItem
                  lines="full"
                  detail={true}
                  button
                  routerLink="/tabs/my-wedding/settings"
                  routerDirection="none"
                >
                  <IonLabel>Settings</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
      </>
    );}
export default MyWeddingSideMenu