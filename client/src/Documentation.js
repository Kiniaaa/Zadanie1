import React from 'react';
import { Link } from 'react-router-dom';
import image from './assets/doc.png';

export default () => {
  return (
    <div>
      <div className="documentation">
        <h3> Schemat aplikacji </h3>
        <img src={image}></img>
      </div>
      <div className="documentation">
        Projekt powstal na podstawie aplikacji z laboratorium 9 <br/>
      </div>
      <div className="documentation">
        Aby dzialal poprawnie wszystkie pliki Dockerfile zostaly zmodyfikowane tak aby korzystaly ze statycznej wersji node, czyli 'node:14.14.0-alpine' zamiast obrazu w wersji latest<br/>
        We wszystkich pozostalych obrazach rowniez wersje zostaly zmienione na statyczne <br/>
        Utworzono nowe strony, tak aby aplikacja spelniala zalozenia zadania <br/>
        Zmieniono takze delikatnie wyglad aplikacji <br/>
        Zmieniono rowniez maksymalna wartosc indeksu wprowadzonego przez uzytkownika na 20
      </div>
      <div className="documentation">
        <h3> Kontenery </h3>
        Do realizacji zadania wykorzystano 6 kontenerow. <br/>
        Redis przechowuje wprowadzone wpolczynniki i obliczone wartosci. <br/>
        Worker sluzy do obliczania wartosci na podstawie indeksu przekazanego przez Redisa. <br/>
        Postgres przechowuje liste wprowadzonych indeksow. <br/>
        Nginx zapewnia komunikacje <br/>
        Express server (api) zapewnia komunikacje z bazami danych <br/>
        React Server (client) jest aplikacja webowa <br/>
      </div>
      <div className="documentation">
        <Link to="/" className="link-back">Go back home</Link>
      </div>
    </div>
  );
};
