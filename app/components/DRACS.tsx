import "./DRACS.css";
import DRACSDocuments from "./DRACSDocuments";
import DRACSRequiredDocuments from "./DRACSRequiredDocuments";
import DRACSProcess from "./DRACSProcess";
import DRACSTerms from "./DRACSTerms";
import DRACSFAQ from "./DRACSFAQ";
import DRACSHelp from "./DRACSHelp";
import DRACSCTA from "./DRACSCTA";

export default function DRACS() {
  return (
    <>
      <section className="dracsHero">

        <div className="container dracsHeroContent">

          <div className="dracsHeroLeft">

            <span className="dracsBadge">
              Документи ДРАЦС
            </span>

            <h1>
              Повторне отримання
              <br />
              документів ДРАЦС
            </h1>

            <p className="dracsLead">
              Допомагаємо повторно отримати українські документи
              про народження, шлюб, розірвання шлюбу та смерть
              незалежно від того, де Ви зараз перебуваєте.
            </p>

            <div className="dracsSteps">
              <div>✓ аналіз Вашої ситуації</div>
              <div>✓ підготовка всіх необхідних документів</div>
              <div>✓ повний юридичний супровід</div>
              <div>✓ дистанційна допомога клієнтам з будь-якої країни світу</div>
            </div>

            <a
              href="/consultation"
              className="dracsButton"
            >
              Отримати консультацію
            </a>

          </div>

          <div className="dracsHeroRight">

            <div className="dracsCard">

              <span className="dracsCardBadge">
                🇺🇦 Результат нашої роботи
              </span>

              <ul>
                <li>✔ повторно отриманий документ ДРАЦС</li>
                <li>✔ повний юридичний супровід</li>
                <li>✔ оформлення документів без зайвих труднощів</li>
                <li>✔ передача готових документів клієнтові у зручний спосіб</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      <DRACSDocuments />

      <DRACSRequiredDocuments />

      <DRACSProcess />

      <DRACSTerms />

      <DRACSFAQ />

      <DRACSHelp />

      <DRACSCTA />

    </>
  );
}