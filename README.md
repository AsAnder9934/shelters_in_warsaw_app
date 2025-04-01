# Geoportal dla analizy lokalizacji schronów

## Opis projektu

Geoportal stanowi narzędzie do wizualizacji danych przestrzennych, które wspomagają analizę potencjalnych lokalizacji schronów na terenie Warszawy. Projekt jest częścią pracy magisterskiej dotyczącej wyznaczania odpowiednich miejsc pod schrony w kontekście różnych kryteriów ochrony cywilnej.

Geoportal umożliwia użytkownikom wyświetlanie i analizowanie różnych warstw danych, takich jak:

- **Obszary sieci gazowej**: W miejscach objętych siecią gazową lokalizacja schronów jest wykluczona.
- **Dzielnice Warszawy**: Każda dzielnica jest reprezentowana osobno, co umożliwia bardziej szczegółową analizę.
- **Zabudowa**: Warstwy przedstawiające gęstość zabudowy (gęsta i luźna) zgodnie z klasyfikacją CORINA LAND USE.
- **Sieć drogowa**: Wyszukiwanie miejsc z dogodnym dostępem do dróg ewakuacyjnych.

## Technologie

- **React** – Framework do budowy interfejsu użytkownika.
- **React Router** – Biblioteka do zarządzania nawigacją w aplikacji.
- **GeoServer** – Serwer danych geospatial, który służy do przechowywania i udostępniania danych przestrzennych.
- **PostGIS** – Rozszerzenie PostgreSQL do pracy z danymi geograficznymi.
- **Leaflet.js** – Biblioteka do tworzenia interaktywnych map.

## Instalacja

1. Sklonuj repozytorium na swoje urządzenie:

   ```bash
   git clone https://github.com/TwojeRepozytorium.git
   ```

2. Zainstaluj wymagane zależności:

   ```bash
   cd TwojeRepozytorium
   npm install
   ```

3. Uruchom aplikację:
   ```bash
   npm start
   ```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## Warstwy danych

- **Sieć gazowa**: Źródło: [tu wstaw link lub nazwę pliku danych]
- **Dzielnice Warszawy**: Źródło: [tu wstaw link lub nazwę pliku danych]
- **Zabudowa (CORINA LAND USE)**: Źródło: [tu wstaw link lub nazwę pliku danych]
- **Sieć drogowa**: Źródło: [tu wstaw link lub nazwę pliku danych]

## Licencja

Ten projekt jest licencjonowany na warunkach [wstaw licencję].
