import "./Alimony.css";
import AlimonyProcess from "./AlimonyProcess";
import AlimonyDocuments from "./AlimonyDocuments";
import AlimonyDuration from "./AlimonyDuration";
import AlimonyFAQ from "./AlimonyFAQ";
import AlimonyHelp from "./AlimonyHelp";
import AlimonyCTA from "./AlimonyCTA";

export default function Alimony() {
  return (
    <>
      <section className="alimonyHero">

        <div className="container alimonyHeroContent">

          <div className="alimonyHeroLeft">

            <span className="alimonyBadge">
              Стягнення аліментів
            </span>

            <h1>
              Стягнення аліментів
            </h1>

            <p className="alimonyLead">
              Допомагаємо отримати рішення українського суду
              про стягнення аліментів незалежно від того,
              де Ви або інший з батьків зараз перебуваєте.
            </p>

            <div className="alimonySteps">
              <div>✓ підготовка документів</div>
              <div>✓ представництво Ваших інтересів у суді</div>
              <div>✓ отримання рішення суду</div>
              <div>✓ дистанційний юридичний супровід</div>
            </div>

            <a
              href="/consultation"
              className="alimonyButton"
            >
              Отримати консультацію
            </a>

          </div>

          <div className="alimonyHeroRight">

            <div className="alimonyCard">

              <span className="alimonyCardBadge">
                🇺🇦 Результат нашої роботи
              </span>

              <ul>
                <li>✔ рішення суду про стягнення аліментів</li>
                <li>✔ виконавчий документ</li>
                <li>✔ повний юридичний супровід</li>
                <li>✔ передача готових документів клієнтові</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      <AlimonyProcess />

      <AlimonyDocuments />

      <AlimonyDuration />

      <AlimonyFAQ />

      <AlimonyHelp />

      <AlimonyCTA />

    </>
  );
}