import { Redirect, Route } from 'react-router-dom';
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { apps, appsOutline, ellipse, notificationsOutline, square, triangle } from 'ionicons/icons';
import MyWedding from './MyWedding';
import OtherWeddings from './OtherWeddings';
import Notifications from './Notifications';
import React from 'react';
import Statistics from './Statistics';
import Invitees from './Invitees';
import Ecards from './Ecarda';
import Verification from './Verification';
import WeddingSettings from './WeddingSettings';
import CreateECard from './CreateEcard';
import JoinedWedding from './JoinedWedding';
import More from "./More"
import ContactUs from './ContactUs';
import Settings from './Settings';
const Tabs: React.FC = () => (
  <IonContent>
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/my-wedding" />
        <Route exact path="/tabs/my-wedding">
          <MyWedding />
        </Route>
        <Route exact path="/tabs/my-wedding/statistics">
          <Statistics />
        </Route>
        <Route exact path="/tabs/my-wedding/invitees">
          <Invitees />
        </Route>
        <Route exact path="/tabs/my-wedding/e-cards">
          <Ecards />
        </Route>
        <Route exact path="/tabs/my-wedding/verification">
          <Verification />
        </Route>
        <Route exact path="/tabs/my-wedding/settings">
          <WeddingSettings />
        </Route>
        <Route exact path="/tabs/my-wedding/e-cards/create-e-card">
          <CreateECard />
        </Route>

        <Route exact path="/tabs/Weddings">
          <OtherWeddings />
        </Route>
        <Route exact path="/tabs/wedings/joined-wedding">
          <JoinedWedding />
        </Route>
        <Route exact path="/tabs/notifications">
          <Notifications />
        </Route>
        <Route exact path="/tabs/more">
          <More />
        </Route>
        <Route exact path="/tabs/more/contact-us">
          <ContactUs />
        </Route>
        <Route exact path="/tabs/more/settings">
          <Settings />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tabs/my-wedding" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="my-wedding" href="/tabs/my-wedding">
          <IonIcon icon={triangle} />
          <IonLabel>My Wedding</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Weddings" href="/tabs/Weddings">
          <IonIcon icon={ellipse} />
          <IonLabel>Weddings</IonLabel>
        </IonTabButton>
        <IonTabButton tab="notifications" href="/tabs/notifications">
          <IonIcon icon={notificationsOutline} />
          <IonLabel>Notifications</IonLabel>
        </IonTabButton>
        <IonTabButton tab="more" href="/tabs/more">
          <IonIcon icon={appsOutline} />
          <IonLabel>more</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonContent>
);

export default Tabs;