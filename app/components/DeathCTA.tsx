import "./DeathCTA.css";

export default function DeathCTA() {
  return (
    <section className="deathCTA" id="consultation">

      <div className="container">

        <div className="ctaCard">

          <h2>
            Потрібна правова допомога?
          </h2>

          <p>
            Якщо вам необхідно офіційно зареєструвати смерть відповідно до
            законодавства України, отримати українське свідоцтво про смерть
            або отримати консультацію щодо вашої ситуації — зв'яжіться з нами.
          </p>

          <p className="ctaText">
            Ми допоможемо знайти оптимальне рішення саме у вашій ситуації.
          </p>

          <a
            href="#consultation"
            className="ctaButton"
          >
            Отримати консультацію
          </a>

        </div>

      </div>

    </section>
  );
}