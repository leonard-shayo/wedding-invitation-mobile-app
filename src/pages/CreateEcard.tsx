import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import EditCard from "../components/EditCard";

const CreateECard: React.FC = () => {return (
  <>
    <IonPage id="myWeddingContent">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Customize Card</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/my-wedding/e-cards"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {" "}
        <IonImg
          src="https://ionic-docs-demo-v6.vercel.app/assets/madison.jpg"
          alt="The Wisconsin State Capitol building in Madison, WI at night"
        ></IonImg>
        <EditCard label="mambo" value="kuku" />
      </IonContent>
    </IonPage>
  </>
);}
export default CreateECard;
