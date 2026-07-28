import Link from "next/link";
import "./DeathHero.css";

export default function DeathHero() {
  return (
    <section className="deathHero">
      <div className="container">
        <div className="deathHeroContent">
          <span className="deathHeroBadge">
            Юридична допомога громадянам України
          </span>

          <h1>
            Отримання українського свідоцтва про смерть,
            якщо смерть настала на тимчасово окупованій території України
          </h1>

          <p>
            Допомагаємо встановити факт смерті в судовому порядку,
            отримати українське свідоцтво про смерть та забезпечити
            можливість у подальшому оформити спадщину й вирішувати інші
            юридичні питання.
          </p>

          <div className="deathHeroButtons">
            <Link href="#consultation" className="primaryButton">
              Отримати консультацію
            </Link>

            <Link href="#procedure" className="secondaryButton">
              Як проходить процедура
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}