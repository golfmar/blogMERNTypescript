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
        <p>
          В компоненте header реализована авторизация двумя способами, с
          использованием регистрации и авторизации через GOOGLE и без нее.
          Соответственно реализован функционал регистрации и авторизации,
          который запоминает пользователя на базе данных и потом при авторизации
          находит пользователя на базе данных и передает на клиент. После
          успешной регистрации происходит переход на страницу постов и
          становятся доступными функции создания поста и добавления коментариев
          к посту. Также авторизованные пользователи могут редактировать и
          удалять свои посты и коментарии, для чего созданы соответствующие
          компоненты и страницы. При создании поста, изображение поста
          передается на внешний сервис api.cloudinary.com и в базе данных
          сохраняется только ссылка на изображение. Затем эта ссылка передется
          вместе с остальными данными поста и открывается в браузере на
          компоненте поста. На странице постов реализованы фильтрации постов и
          пагинация по страницам постов, что позволяет пользователю удобно
          просматривать нужные посты. Кроме того реализованы кастомные решения
          для стандартных компонентов, таких как Select , Button, Burger, Input
          и так далее, что позволяет обойтись без сторонних UI библиотек. В
          проложении использовано локальное хранилище данных на основе redux,
          что в значительной мере упрощает процесс изменения и обмена данных в
          компонентах, не дожидаясь ответа сервера. В целом проложение выглядит
          динамично и современно. И конечно интерфейс может быть изменен,
          согласно заданию заказчика.
        </p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </section>
    </>
  );
};
export default Home;
