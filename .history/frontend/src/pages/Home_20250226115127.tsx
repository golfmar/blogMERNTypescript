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
      </section>
    </>
  );
};
export default Home;
