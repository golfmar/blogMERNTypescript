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
      </section>
    </>
  );
};
export default Home;
