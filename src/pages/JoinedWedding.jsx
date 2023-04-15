import React, { useState,useRef } from "react"
import {
  IonBackButton,IonButton,
  IonImg,IonChip,IonFab,IonFabButton,
  IonButtons,
  IonContent,
  IonHeader,IonSearchbar,
  IonLabel,
  IonPage,IonModal,
  IonSegment,
  IonSegmentButton,
  IonTitle,IonIcon,
  IonToolbar,
} from "@ionic/react";

import { eye } from "ionicons/icons";


const JoinedWedding=()=>{
      const [segmentValue, setSegmentValue] = useState("card");
          const modal = useRef(null);


      const changeSegmentHandler = (e) => {
        setSegmentValue(e.detail.value);
      };

    return (
      <>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/tabs/Weddings"></IonBackButton>
              </IonButtons>
              <IonButtons slot="end">
                <IonChip> -50000</IonChip>
              </IonButtons>
              <IonTitle>Leonard Weds None</IonTitle>
            </IonToolbar>
            <IonToolbar>
              <IonSegment
                value={segmentValue}
                onIonChange={changeSegmentHandler}
                scrollable={true}
                swipe-gesture={true}
              >
                <IonSegmentButton value="payment">
                  <IonLabel>Payment</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="card">
                  <IonLabel>Card</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="verification">
                  <IonLabel>Verification</IonLabel>
                </IonSegmentButton>
                
              </IonSegment>{" "}
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {segmentValue === "card" && (
              <>
                <IonImg
                  class="ion-margin-top ion-padding-top"
                  src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
                ></IonImg>
              </>
            )}
            {segmentValue === "payment" && <></>}
            {segmentValue === "verification" && (
              <>
                {" "}
                <IonFab slot="fixed" vertical="center" horizontal="end">
                  <IonFabButton
                    id="openVerifiedFab"
                    // onClick={createWeddingHandler}
                    size="small"
                  >
                    <IonIcon icon={eye}></IonIcon>
                  </IonFabButton>
                </IonFab>
                <IonModal
                  ref={modal}
                  trigger="openVerifiedFab"
                  initialBreakpoint={0.35}
                  breakpoints={[0.35, 0.5, 0.75]}
                  backdropDismiss={false}
                  backdropBreakpoint={0.5}
                  handleBehavior="cycle"
                >
                  <IonHeader>
                    <IonToolbar>
                      <IonTitle>Verified</IonTitle>
                      <IonButtons slot="end">
                        <IonButton onClick={() => modal.current.dismiss()}>
                          Close
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                    <IonToolbar>
                      <IonSearchbar
                        // onClick={() => modal.current?.setCurrentBreakpoint(0.75)}
                        placeholder="Search"
                      ></IonSearchbar>
                    </IonToolbar>
                  </IonHeader>
                </IonModal>
              </>
            )}
            {segmentValue === "about" && <></>}
          </IonContent>
        </IonPage>
      </>
    );}
export default JoinedWedding