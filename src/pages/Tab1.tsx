import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css'; // Importa el archivo CSS para este componente
import ExploreContainer from '../components/ExploreContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar"> {/* Aplica una clase personalizada */}
          <IonTitle>Subir Foto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Subir Foto</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="explore-container"> {/* Aplica una clase personalizada */}
          <ExploreContainer name="Subir Foto" />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;
