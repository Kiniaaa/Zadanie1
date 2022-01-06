# Zadanie1

# Schemat aplikacji 
  ![271055658_930303327596997_8651066337990694045_n](https://user-images.githubusercontent.com/58142903/148449961-97bba805-ad73-4e4f-894c-facb846aa375.png)
            
# Projekt powstal na podstawie aplikacji z laboratorium 9
  Aby działał poprawnie wszystkie pliki Dockerfile zostały zmodyfikowane tak aby korzystały ze statycznej wersji node, czyli 'node:14.14.0-alpine' zamiast obrazu w wersji latest
  We wszystkich pozostałych obrazach również wersje zostały zmienione na statyczne
  Utworzono nowe strony, tak aby aplikacja spełniała założenia zadania
  Zmieniono także delikatnie wygląd aplikacji
  Zmieniono również maksymalną wartość indeksu wprowadzonego przez użytkownika na 20
# Kontenery
  Do realizacji zadania wykorzystano 6 kontenerów.
  Redis przechowuje wprowadzone wpółczynniki i obliczone wartości.
  Worker służy do obliczania wartości na podstawie indeksu przekazanego przez Redisa.
  Postgres przechowuje listę wprowadzonych indeksów.
  Nginx zapewnia komunikację.
  Express server (api) zapewnia komunikację z bazami danych.
  React Server (client) jest aplikacją webową.
