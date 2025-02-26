import React from "react";
const Home: React.FC = () => {
  return (
    <>
      <section>
        <h2> Beschreibung des Projekts.</h2>
        <p>
          Es ist ein Pet-Projekt, das nach Kundenwunsch in ein reales Projekt
          umgewandelt werden kann. Das Projekt besteht aus dem Frontend- und
          Backend-Teil.
        </p>
        <h3>frontend</h3>
        <p>
          React-create-app wird verwendet. Die Komponenten sind in Typescript
          geschrieben. Der Kundenteil wird an die https://vercel.com/ alle
          privaten Schlüssel wurden zu environment-variables hinzugefügt und
          sind auf github nicht sichtbar.
        </p>
        <h3>backend</h3>
        <p>
          Geschrieben in nodejs + express. Die Daten werden auf mongodb
          gespeichert. Verwendet eine Socket-Verbindung für den schnellen
          Austausch und die Anzeige von Daten auf dem Client. Der Serverteil
          befindet sich auf https://railway.com/ Alle privaten Schlüssel wurden
          zu environment-variables hinzugefügt und sind auf github nicht
          sichtbar.
        </p>
        <h3>Allgemeine Beschreibung</h3>
        <p>
          Die Header-Komponente implementiert die Autorisierung auf zwei Arten,
          unter Verwendung von GOOGLE-Registrierung und Autorisierung und ohne
          sie.
        </p>
        <p>
          Dementsprechend wurde eine Registrierungs- und
          Autorisierungsfunktionalität implementiert, die sich an den Benutzer
          in der Datenbank erinnert und dann findet er bei der Autorisierung den
          Benutzer in der Datenbank und überträgt ihn an den Client.
        </p>
        <p>
          Nach erfolgreicher Registrierung gelangen Sie zur Seite der Beiträge
          und werden verfügbare Funktionen zum Erstellen eines Posts und zum
          Hinzufügen von Kommentaren zum Post.
        </p>
        <p>
          Autorisierte Benutzer können auch ihre Beiträge und Kommentare
          bearbeiten und löschen, wofür werden die entsprechenden Komponenten
          und Seiten erstellt.
        </p>
        <p>
          Wenn Sie einen Beitrag erstellen, wird das Bild des Beitrags an einen
          externen Dienst übertragen api.cloudinary.com und nur der Link zum
          Bild wird in der Datenbank gespeichert.
        </p>
        <p>
          Dieser Link wird dann zusammen mit den anderen Postdaten gesendet und
          im Browser auf der Postkomponente geöffnet. Die Postseitenfilterung
          und Paginierung von Postseiten sind implementiert, sodass der Benutzer
          bequem durch die Postseitenfilterung blättern kann die richtigen
          Posten.
        </p>
        <p>
          Darüber hinaus wurden kundenspezifische Lösungen für
          Standardkomponenten wie Select , Button, Burger, Input usw.
          implementiert, so können Sie auf UI-Bibliotheken von Drittanbietern
          verzichten.
        </p>
        <p>
          Das Layout verwendet einen lokalen Redux-basierten Datenspeicher, der
          den Änderungsprozess erheblich vereinfacht und den Austausch von Daten
          in Komponenten, ohne auf die Antwort des Servers zu warten.
        </p>
        <p>
          Insgesamt sieht die Verlegung dynamisch und modern aus. Und natürlich
          kann die Schnittstelle entsprechend dem Auftrag des Kunden geändert
          werden.
        </p>
      </section>
      {/* --------------------------- */}
      <section>
        <h2> Description of the project.</h2>
        <p>
          It is a Pet project that can be converted into a real project
          according to customer requirements can be converted. The project
          consists of the frontend and Backend part.
        </p>
        <h3>frontend</h3>
        <p>
          React-create-app wird verwendet. Die Komponenten sind in Typescript
          geschrieben. Der Kundenteil wird an die https://vercel.com/ alle
          privaten Schlüssel wurden zu environment-variables hinzugefügt und
          sind auf github nicht sichtbar.
        </p>
        <h3>backend</h3>
        <p>
          Geschrieben in nodejs + express. Die Daten werden auf mongodb
          gespeichert. Verwendet eine Socket-Verbindung für den schnellen
          Austausch und die Anzeige von Daten auf dem Client. Der Serverteil
          befindet sich auf https://railway.com/ Alle privaten Schlüssel wurden
          zu environment-variables hinzugefügt und sind auf github nicht
          sichtbar.
        </p>
        <h3>General description</h3>
        <p>
          The header component implements authorization in two ways, using
          GOOGLE registration and authorization and without you.
        </p>
        <p>
          Dementsprechend wurde eine Registrierungs- und
          Autorisierungsfunktionalität implementiert, die sich an den Benutzer
          in der Datenbank erinnert und dann findet er bei der Autorisierung den
          Benutzer in der Datenbank und überträgt ihn an den Client.
        </p>
        <p>
          Nach erfolgreicher Registrierung gelangen Sie zur Seite der Beiträge
          und werden verfügbare Funktionen zum Erstellen eines Posts und zum
          Hinzufügen von Kommentaren zum Post.
        </p>
        <p>
          Autorisierte Benutzer können auch ihre Beiträge und Kommentare
          bearbeiten und löschen, wofür werden die entsprechenden Komponenten
          und Seiten erstellt.
        </p>
        <p>
          Wenn Sie einen Beitrag erstellen, wird das Bild des Beitrags an einen
          externen Dienst übertragen api.cloudinary.com und nur der Link zum
          Bild wird in der Datenbank gespeichert.
        </p>
        <p>
          Dieser Link wird dann zusammen mit den anderen Postdaten gesendet und
          im Browser auf der Postkomponente geöffnet. Die Postseitenfilterung
          und Paginierung von Postseiten sind implementiert, sodass der Benutzer
          bequem durch die Postseitenfilterung blättern kann die richtigen
          Posten.
        </p>
        <p>
          Darüber hinaus wurden kundenspezifische Lösungen für
          Standardkomponenten wie Select , Button, Burger, Input usw.
          implementiert, so können Sie auf UI-Bibliotheken von Drittanbietern
          verzichten.
        </p>
        <p>
          Das Layout verwendet einen lokalen Redux-basierten Datenspeicher, der
          den Änderungsprozess erheblich vereinfacht und den Austausch von Daten
          in Komponenten, ohne auf die Antwort des Servers zu warten.
        </p>
        <p>
          Insgesamt sieht die Verlegung dynamisch und modern aus. Und natürlich
          kann die Schnittstelle entsprechend dem Auftrag des Kunden geändert
          werden.
        </p>
      </section>
    </>
  );
};
export default Home;
