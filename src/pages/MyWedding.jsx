import {
  IonButtons,
  IonAvatar,IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,IonGrid,IonRow,IonCol,
  IonButton,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, {  useState,useRef } from "react";
import MyWeddingSideMenu from "../components/MyWeddingSidemenu";
import "./otherWeddings.css";


const MyWedding=()=>{
    // const [weddingFormIsOpen, setWeddingFormIsOpen]=useState(false);

  

    // const createWeddingHandler=()=>{
    //    setWeddingFormIsOpen(true)
    //    console.log(weddingFormIsOpen)
    // };

    const modal = useRef(null);

    return (
      <>
        <MyWeddingSideMenu />
        <IonPage id="myWeddingContent">
          <IonHeader>
            <IonToolbar>
              <IonTitle>My Wedding</IonTitle>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonModal id="example-modal" ref={modal} trigger="createWeddingFab">
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonButton onClick={() => modal.current.dismiss()}>
                      Close
                    </IonButton>
                  </IonButtons>
                  <IonButtons slot="end">
                    <IonButton onClick={() => modal.current.dismiss()}>
                      Create
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <div class="ion-padding">
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
                <IonItem>
                  <IonLabel position="stacked">Enter Bride name</IonLabel>
                  <IonInput placeholder="Leonard " />
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Enter Bride Groom name</IonLabel>
                  <IonInput placeholder="Rose " />
                </IonItem>
              </div>
            </IonModal>{" "}
            <IonFab slot="fixed" vertical="center" horizontal="center">
              <IonFabButton
                id="createWeddingFab"
                // onClick={createWeddingHandler}
                size="small"
              >
                <IonIcon icon={add}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonContent>
        </IonPage>
      </>
    );}

export default MyWedding;
