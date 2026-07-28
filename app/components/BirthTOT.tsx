import "./BirthTOT.css";
import BirthProcess from "./BirthProcess";
import BirthDocuments from "./BirthDocuments";
import BirthDuration from "./BirthDuration";
import BirthFAQ from "./BirthFAQ";
import BirthHelp from "./BirthHelp";
import BirthCTA from "./BirthCTA";

export default function BirthTOT() {
  return (
    <>

      <section className="birthHero">

        <div className="container birthHeroContent">

          <div className="birthHeroLeft">

            <span className="birthBadge">
              Народження дитини
            </span>

            <h1>
              Народження дитини
              <br />
              на тимчасово окупованій
              території України
            </h1>

            <p className="birthLead">
              Отримайте українське свідоцтво про народження
              дитини незалежно від того,
              де Ви зараз перебуваєте.
            </p>

            <div className="birthSteps">

              <div>✓ встановлення факту народження через суд</div>

              <div>✓ представництво Ваших інтересів у суді</div>

              <div>✓ отримання українського свідоцтва про народження</div>

              <div>✓ дистанційний супровід клієнтів з будь-якої країни світу</div>

            </div>

            <a href="/consultation" className="birthButton">
              Отримати консультацію
            </a>

          </div>

          <div className="birthHeroRight">

            <div className="birthCard">

              <span className="birthCardBadge">
                🇺🇦 Результат нашої роботи
              </span>

              <ul>

                <li>✔ рішення суду про встановлення факту народження</li>

                <li>✔ українське свідоцтво про народження</li>

                <li>✔ повний юридичний супровід справи</li>

                <li>✔ передача готових документів клієнту зручним способом</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      <BirthProcess />

      <BirthDocuments />

      <BirthDuration />

      <BirthFAQ />

      <BirthHelp />

      <BirthCTA />

    </>
  );
}