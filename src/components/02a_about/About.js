import React from "react";
import "./About.css";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="mid_02a">
        <Link to="/menu">
          <button className="back_02">MENU</button>
        </Link>
        <div className="about_02a">O projekcie</div>
        <line className="line_02a"></line>
        <text className="information1_02a">
          Lorem ipsum dolor sit amet. Et temporibus illo qui corporis officia 33
          illo voluptatem id Quis delectus. Ut laudantium laudantium vel
          voluptatem saepe eos nostrum consequatur eos architecto molestias et
          iure odio. Ut nulla natus qui dolor mollitia aut veniam explicabo aut
          harum laudantium in omnis earum aut quas veritatis. Aut vero numquam
          est voluptas voluptatum sit velit voluptatibus nam quia placeat. In
          similique internos non quae harum sed quae atque qui illo tempora.
        </text>
        <text className="information2_02a">
          Lorem ipsum dolor sit amet. Et temporibus illo qui corporis officia 33
          illo voluptatem id Quis delectus. Ut laudantium laudantium vel
          voluptatem saepe eos nostrum consequatur eos architecto molestias et
          iure odio. Ut nulla natus qui dolor mollitia aut veniam explicabo aut
          harum laudantium in omnis earum aut quas veritatis. Aut vero numquam
          est voluptas voluptatum sit velit voluptatibus nam quia placeat. In
          similique internos non quae harum sed quae atque qui illo tempora.
        </text>
        <div className="objective_02a">Cel projektu</div>
        <line className="line_02a"></line>
        <text className="information1_02a">
          Lorem ipsum dolor sit amet. Et temporibus illo qui corporis officia 33
          illo voluptatem id Quis delectus. Ut laudantium laudantium vel
          voluptatem saepe eos nostrum consequatur eos architecto molestias et
          iure odio. Ut nulla natus qui dolor mollitia aut veniam explicabo aut
          harum laudantium in omnis earum aut quas veritatis. Aut vero numquam
          est voluptas voluptatum sit velit voluptatibus nam quia placeat. In
          similique internos non quae harum sed quae atque qui illo tempora.
        </text>
        <text className="information2_02a">
          Lorem ipsum dolor sit amet. Et temporibus illo qui corporis officia 33
          illo voluptatem id Quis delectus. Ut laudantium laudantium vel
          voluptatem saepe eos nostrum consequatur eos architecto molestias et
          iure odio. Ut nulla natus qui dolor mollitia aut veniam explicabo aut
          harum laudantium in omnis earum aut quas veritatis. Aut vero numquam
          est voluptas voluptatum sit velit voluptatibus nam quia placeat. In
          similique internos non quae harum sed quae atque qui illo tempora.
        </text>
      </div>
    </div>
  );
}

export default About;
