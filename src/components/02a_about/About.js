import React from "react";
import "./About.css";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div className="about_02a">
      <div className="mid_02a">
        <Link to="/menu">
          <button className="back_02">MENU</button>
        </Link>
        <div className="about2_02a">O projekcie</div>
        <line className="line_02a"></line>
        <text className="information1_02a">
          Zaniedbania w zakresie obrony cywilnej stawiają wyzwania związane z
          zapewnieniem schronienia ludności w przypadku zagrożenia, szczególnie
          w kontekście trwającej wojny za wschodnią granicą Polski. W Warszawie
          nie istnieje wystarczająca liczba budowli ochronnych, które
          umożliwiłyby zaspokojenie potrzeb mieszkańców w przypadku zagrożenia.
        </text>
        <text className="information2_02a">
          Celem pracy jest wyznaczanie obszarów o najbardziej odpowiednich
          warunkach do budowy schronów.
        </text>
        <div className="objective_02a">Podejście metodyczne</div>
        <line className="line_02a"></line>
        <text className="information1_02a">
          Metodyka analizy lokalizacji budowli ochronnych bazuje na
          uwzględnieniu kilku kluczowych kryteriów, takich jak odległość od
          budynków, sieci uzbrojenia terenu, obiektów określonych jako
          niebezpieczne. Ważnym elementem jest także optymalizacja dostępu do
          schronów, z uwzględnieniem gęstości sieci drogowej (minimalizacja
          czasu ewakuacji) oraz gęstości zaludnienia (ekonomia sytuowania).
          Należy unikać terenów cmentarzy i obszarów zagrożonych powodziami.
          Wyniki analizy zostały zwizualizowane na geoportalu, który przedstawia
          potencjalne lokalizacje budowli ochronnych w Warszawie.
        </text>
        <text className="information2_02a">
          Analiza wykazała, że najwięcej terenów nadających się pod budowle
          ochronne znajduje się na obrzeżach miasta, gdzie dominuje luźna
          zabudowa i mniejsze zagęszczenie infrastruktury. Na obszarach zabudowy
          gęstej i średnio-gęstej kluczowe znaczenie miało zastosowanie wyjątków
          od warunku odległościowego, co umożliwiło wyznaczenie lokalizacji mimo
          ograniczonej dostępności terenowej. Obszary, które spełniły warunki na
          obszarach zabudowy gęstej i średnio gęstej mogą w większości
          przypadków być za małe do opłacalnego tworzenia budowli ochronnych W
          celu zwiększenia liczby potencjalnych lokalizacji w tych obszarach
          warto rozważyć złagodzenie kryteriów lokalizacyjnych.
        </text>
      </div>
    </div>
  );
}

export default About;
