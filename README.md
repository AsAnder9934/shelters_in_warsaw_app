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

- **Sieć Uzbrojenia Terenu**: Źródło: [https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaUzbrojeniaTerenu]
- **Baza Danych Obiektów Topograficznych w skali 1:10 000**: Źródło: [https://mapy.geoportal.gov.pl/imap/Imgp_2.html?gpmap=gp0]
- **Numeryczne Modele Terenu/Numeryczne Modele Pokrycia Terenu**: Źródło: [https://mapy.geoportal.gov.pl/imap/Imgp_2.html?gpmap=gp0]
- **Ryzyka związane z powodzią**: Źródło: [https://wody.isok.gov.pl/imap_kzgw/?gpmap=gpMZP]
- **Urban Atlas Land Cover/Land Use**: Źródło: [https://land.copernicus.eu/en/products/urban-atlas/urban-atlas-2018]
- **UGlobal Human Settlement Layer**: Źródło: [https://human-settlement.emergency.copernicus.eu/download.php?ds=pop]

## Licencja

Ten projekt jest licencjonowany na warunkach

MIT License

Copyright (c) 2025 Maciej

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
