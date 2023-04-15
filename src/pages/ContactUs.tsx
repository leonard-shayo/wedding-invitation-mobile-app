import { IonBackButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import {
  settingsOutline,
  mailOutline,callOutline
 , bagOutline,
 logoInstagram,
 } from "ionicons/icons";
import React from "react";

const ContactUs: React.FC = () => {return (
  <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact Us</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/more"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {" "}
        <IonList lines="full">
          <IonCard>
            <IonItem>
              <IonIcon slot="start" icon={callOutline}></IonIcon>{" "}
              <IonLabel>
                <h3>Phone Call </h3>
                <p>+255 745 557 020</p>
              </IonLabel>
            </IonItem>
          </IonCard>

          <IonCard>
            <IonItem>
              <IonIcon slot="start" icon={mailOutline}></IonIcon>{" "}
              <IonLabel>
                <h3>E-mail </h3>
                <p>leoshayo11@gmail.com</p>
              </IonLabel>
            </IonItem>
          </IonCard>
          <IonCard>
            <IonItem>
              <IonIcon slot="start" icon={logoInstagram}></IonIcon>{" "}
              <IonLabel>
                <h3>Instagram</h3>
                <p>Wedding</p>
              </IonLabel>
            </IonItem>
          </IonCard>
        </IonList>
      </IonContent>
    </IonPage>
  </>
);}
        export default ContactUs;
