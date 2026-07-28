import "./DeathTOT.css";
import DeathProcess from "./DeathProcess";
import DeathDocuments from "./DeathDocuments";
import DeathFAQ from "./DeathFAQ";
import DeathHelp from "./DeathHelp";
import DeathCTA from "./DeathCTA";

export default function DeathTOT() {
  return (
    <>
      <section className="deathHero">
        <div className="container deathHeroContent">

          <div className="deathHeroLeft">

            <span className="deathBadge">
              Смерть родича
            </span>

            <h1>
              Отримання українського свідоцтва про смерть,
              якщо смерть настала на тимчасово окупованій території України
            </h1>

            <p>
              Допомагаємо встановити факт смерті в судовому порядку,
              отримати українське свідоцтво про смерть та забезпечити
              можливість у подальшому оформити спадщину.
            </p>

            <a
              href="/consultation"
              className="primaryButton"
            >
              Отримати консультацію
            </a>

          </div>

        </div>
      </section>

      <DeathProcess />

      <DeathDocuments />

      <DeathFAQ />

      <DeathHelp />

      <DeathCTA />
    </>
  );
}