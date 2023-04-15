import {
  IonButtons,
  IonContent,
  IonHeader,
  
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,IonModal, IonButton, IonIcon, IonSearchbar
} from "@ionic/react";
import { eye } from "ionicons/icons";
import React ,{useState}from "react";
import MyWeddingSideMenu from "../components/MyWeddingSidemenu";

const Verification: React.FC = () => {

  const [isModalOpen,setIsModalOpen]=useState(false)

  return (
    <>
      <MyWeddingSideMenu />
      <IonPage id="myWeddingContent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Verification</IonTitle>
            <IonButton
              fill="clear"
              onClick={() => setIsModalOpen(true)}
              slot="end"
            >
              {!isModalOpen && <IonIcon icon={eye}></IonIcon>}
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonModal
            isOpen={isModalOpen}
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
                  <IonButton onClick={() => setIsModalOpen(false)}>
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
        </IonContent>
      </IonPage>
    </>
  );
};
export default Verification;
