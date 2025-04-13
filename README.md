# Geoportal dla analizy lokalizacji schronów

## Opis projektu

Geoportal stanowi narzędzie do wizualizacji danych przestrzennych, które wspomagają analizę potencjalnych lokalizacji schronów na terenie Warszawy. Projekt jest częścią pracy magisterskiej na temat: "Wyznaczenie potencjalnej lokalizacji schronów na terenie Warszawy".

Geoportal umożliwia użytkownikom wyświetlanie i analizowanie różnych warstw danych, takich jak:

- **Obszary Sieci Uzbrojenia terenu**: W miejscach objętych SUT lokalizacja schronów jest wykluczona.
- **Dzielnice Warszawy**: Każda dzielnica jest reprezentowana osobno, co umożliwia bardziej szczegółową analizę.
- **Zabudowa**: Warstwy przedstawiające gęstość zabudowy (gęsta, średnio-gęsta i luźna) podzielone na podstawie klasyfikacji CORINA LAND USE.
- **Sieć drogowa**: Wyszukiwanie miejsc z dogodnym dostępem do dróg ewakuacyjnych.
- **Gęstość zaludnienia**: Lokalizowanie miejsc schronienia tam, gdzie jest to najbardziej potrzebne.
- **Obiekty niebezpieczne**: Zachowanie odpowiednich odległości od obiektów skategoryzowanych jako niebezpieczne.

## Technologie

- **React** – Framework do budowy interfejsu użytkownika.
- **React Router** – Biblioteka do zarządzania nawigacją w aplikacji.
- **GeoServer** – Serwer danych geospatial, który służy do przechowywania i udostępniania danych przestrzennych.
- **PostGIS** – Rozszerzenie PostgreSQL do pracy z danymi geograficznymi.
- **Leaflet.js** – Biblioteka do tworzenia interaktywnych map.

## Instalacja

1. Sklonuj repozytorium na swoje urządzenie:

   ```bash
   git clone https://github.com/AsAnder9934/shelters_in_warsaw_app
   ```

2. Zainstaluj wymagane zależności:

   ```bash
   cd shelters_in_warsaw_app
   npm install
   ```

3. Uruchom aplikację:
   ```bash
   npm start
   ```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## Warstwy danych

- **Sieć Uzbrojenia Terenu**: Źródło: [https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu]
- **Baza Danych Obiektów Topograficznych w skali 1:10 000**: Źródło: [https://mapy.geoportal.gov.pl/imap/Imgp_2.html?gpmap=gp0]
- **Numeryczne Modele Terenu/Numeryczne Modele Pokrycia Terenu**: Źródło: [https://mapy.geoportal.gov.pl/imap/Imgp_2.html?gpmap=gp0]
- **Ryzyka związane z powodzią**: Źródło: [https://wody.isok.gov.pl/imap_kzgw/?gpmap=gpMZP]
- **Urban Atlas Land Cover/Land Use**: Źródło: [https://land.copernicus.eu/en/products/urban-atlas/urban-atlas-2018]
- **UGlobal Human Settlement Layer**: Źródło: [https://human-settlement.emergency.copernicus.eu/download.php?ds=pop]

## Licencja

Ten projekt jest licencjonowany na warunkach MIT License.
