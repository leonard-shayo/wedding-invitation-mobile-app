import React from 'react';
import { IonHeader,IonPage, IonContent, IonToolbar, IonTitle ,IonButton, IonItem, IonLabel, IonList, IonAvatar, IonAccordion, IonAccordionGroup} from '@ionic/react';

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAccordionGroup multiple={true}>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />{" "}
              </IonAvatar>
              <IonLabel class="ion-margin-start">Third Accordion</IonLabel>{" "}
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />{" "}
              </IonAvatar>
              <IonLabel class="ion-margin-start">Third Accordion</IonLabel>{" "}
            </IonItem>
            <div className="ion-padding" slot="content">
              Second Content
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />{" "}
              </IonAvatar>

              <IonLabel class="ion-margin-start">Third Accordion</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Third Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
        {/* <IonList lines="full">
          <IonItem>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
            <IonLabel></IonLabel>
            <h1>qwertyiukcvcdfhkjlkjh</h1>
          </IonItem>
        </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
