import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import MyWeddingSideMenu from "../components/MyWeddingSidemenu";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const Invitees: React.FC = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];
  return (
    <>
      <MyWeddingSideMenu />
      <IonPage id="myWeddingContent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Invitees</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ height: 300, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};
export default Invitees;
