import React,{useRef, useState} from 'react';
import {
  IonLabel,
  IonSegmentButton,
  IonSegment,
  IonHeader,
  IonToolbar,
  IonImg,
  IonTitle,IonChip,
  IonSearchbar,
  IonContent,
  IonPage,
  IonList,
  IonCard,
  IonAvatar,
  IonItem,
  IonModal,
  IonInput,
  IonButton,
  IonButtons,
} from "@ionic/react";

import "./otherWeddings.css";

const OtherWeddings= () => {

  const [segmentValue, setSegmentValue] = useState("joined");
   const modal = useRef(null);

  const changeSegmentHandler = (e) => {
    setSegmentValue(e.detail.value);
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            {/* <IonTitle>Weddings</IonTitle> */}
            <IonSearchbar
              // onClick={() => modal.current?.setCurrentBreakpoint(0.75)}
              placeholder="Search"
            ></IonSearchbar>
          </IonToolbar>
          <IonToolbar>
            <IonSegment value={segmentValue} onIonChange={changeSegmentHandler}>
              <IonSegmentButton value="all">
                <IonLabel>All</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="Joined">
                <IonLabel>Joined</IonLabel>
              </IonSegmentButton>
            </IonSegment>{" "}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {segmentValue === "all" ? (
            <>
              <IonList>
                <IonCard id="openJoinWeddingCodeModel">
                  <IonItem detail={true}>
                    <IonAvatar slot="start">
                      <img
                        alt="Silhouette of a person's head"
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      />
                    </IonAvatar>
                    <IonLabel>Leonard Weds None</IonLabel>
                  </IonItem>
                </IonCard>
              </IonList>
              <IonModal
                ref={modal}
                id="example-modal"
                trigger="openJoinWeddingCodeModel"
              >
                <IonHeader>
                  <IonToolbar>
                    <IonButtons slot="start">
                      <IonButton onClick={() => modal.current?.dismiss()}>
                        Close
                      </IonButton>
                    </IonButtons>
                    <IonButtons slot="end">
                      <IonButton onClick={() => modal.current?.dismiss()}>
                   Join
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
                <IonItem class="ion-padding" fill="outline">
                  <IonLabel position="floating">Enter Joining Code</IonLabel>
                  <IonInput type="number" placeholder="e.g (12367)"></IonInput>
                </IonItem>
              </IonModal>
            </>
          ) : (
            <>
              <IonList>
                <IonCard>
                  <IonItem
                    button={true}
                    routerLink="/tabs/wedings/joined-wedding"
                  >
                    <IonAvatar slot="start">
                      <IonImg
                        alt="Silhouette of a person's head"
                        src="https://ionicframework.com/docs/img/demos/avatar.svg"
                      />
                    </IonAvatar>
                    <IonLabel>
                      <h3>Leonard Weds None </h3>
                      <IonChip>-500000</IonChip>
                    </IonLabel>
                  </IonItem>
                </IonCard>
              </IonList>
            </>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default OtherWeddings;
