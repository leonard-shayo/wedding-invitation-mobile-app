import React, { useState } from "react";
import { IonItem, IonLabel, IonInput, IonButton, IonCol, IonGrid, IonRow, IonDatetime, IonDatetimeButton, IonModal } from "@ionic/react";

const DetailItem:React.FC <{label:String,value:any}>=(props)=> {
  const {  value } = props;
  const [editing, setEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);

  function handleEditClick() {
    setEditing(true);
  }

    function handleSaveClick() {
  // Reset the new value to the original value
  setNewValue(value);

  // Set editing to false
  setEditing(false);
  //     // Call a function to save the new value
  //     // This function is not included in this example
  //     saveNewValue(newValue);

  //     // Set editing to false
  //     setEditing(false);
    }

//   function handleCancelClick() {
    // Reset the new value to the original value
    // setNewValue(value);

    // Set editing to false
    // setEditing(false);
//   }

  return (
    <>
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
        <IonInput class="ion-margin" type="text" readonly={!editing} />{" "}
      </IonItem>{" "}
      {editing ? (
        <>
          {" "}
          <IonButton expand="full" onClick={handleSaveClick}>
            Save
          </IonButton>
          {/* <IonButton onClick={handleCancelClick}>Cancel</IonButton> */}
        </>
      ) : (
        <>
          {" "}
          <IonButton expand="full" onClick={handleEditClick}>
            Edit
          </IonButton>
        </>
      )}
    </>
  );
}

export default DetailItem;
