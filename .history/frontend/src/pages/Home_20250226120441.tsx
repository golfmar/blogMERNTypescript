import React from "react";
const Home: React.FC = () => {
  return (
    <div className="home-page">
      {" "}
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
      <hr />
      <section>
        <h2> Description of the project.</h2>
        <p>
          It is a Pet project that can be converted into a real project
          according to customer requirements can be converted. The project
          consists of the frontend and Backend part.
        </p>
        <h3>frontend</h3>
        <p>
          React-create-app is used. The components are in Typescript written.
          The customer part is sent to the https://vercel.com / all private keys
          have been added to environment variables and are not visible on
          github.
        </p>
        <h3>backend</h3>
        <p>
          Written in nodejs + express. The data is stored on mongodb stored in
          it. Uses a socket connection for fast Exchange and display of data on
          the client. server part located on https://railway.com / All private
          keys have been added to environment variables and are not available on
          github visible.
        </p>
        <h3>General description</h3>
        <p>
          The header component implements authorization in two ways, using
          GOOGLE registration and authorization and without you.
        </p>
        <p>
          Accordingly, a registration and Implemented authorization
          functionality, which is addressed to the user in the database, and
          then he finds the The user is in the database and transfers it to the
          client.
        </p>
        <p>
          After successful registration, you will be taken to the contributions
          page and there will be available functions for creating a post and for
          Adding comments to the post.
        </p>
        <p>
          Authorized users can also share their posts and comments editing and
          deleting, for which the corresponding components are used and created
          pages.
        </p>
        <p>
          When you create a post, the image of the post is sent to a
          transferring an external service api.cloudinary.com and just the link
          to the The image is stored in the database.
        </p>
        <p>
          This link will then be sent along with the other postal data and
          opened in the browser on the post component. The post page filtering
          and pagination of post pages are implemented, so the user conveniently
          scroll through the page filtering can find the right Item.
        </p>
        <p>
          In addition, customer-specific solutions for Standard components such
          as Select, Button, burger, input, etc. implemented, so you can access
          third-party UI libraries waive.
        </p>
        <p>
          The layout uses a local Redux-based datastore that greatly simplifies
          the change process and the exchange of data in components, without
          waiting for the response from the server.
        </p>
        <p>
          Overall, the laying looks dynamic and modern. And of course the
          interface can be changed according to the customer's order werden.
        </p>
      </section>
    </div>
  );
};
export default Home;
