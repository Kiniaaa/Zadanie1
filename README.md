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
# Uruchomienie aplikacji
  Aby uruchomić aplikację wystarczy pobrać projekt oraz wykonać polecenie 'docker compose up'. Po uruchomieniu wszystskich kontenerów należy wejść na stronę http://localhost:3050
 
 # Działanie aplikacji
  Aby sprawdzić czy aplikacja działa wyświetliłam działające kontenery, jak widać wszystkie opisane przeze mnie wyżej kontenery działają poprawnie.
  ![271055658_930303327596997_8651066337990694045_n](https://user-images.githubusercontent.com/58142903/148451161-14ebd06e-6402-4a7b-87bf-b968872d19d1.png)

  Efekt można też zobaczyć w przeglądarce
  ![271055658_930303327596997_8651066337990694045_n](https://user-images.githubusercontent.com/58142903/148451278-34b2b1aa-3f57-4b3f-82ef-28136a35e361.png)
