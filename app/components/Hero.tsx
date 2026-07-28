import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="container heroContent">

        <div className="heroLeft">

          <span className="heroBadge">
            Expert Legal Center
          </span>

          <h1>
            Правнича допомога громадянам України,
            які перебувають за кордоном або
            на тимчасово окупованих територіях
          </h1>

          <p>
            Допомагаємо дистанційно вирішувати юридичні питання,
            отримувати українські документи та представляємо
            інтереси клієнтів без необхідності особистого
            приїзду до України.
          </p>

          <a href="/consultation" className="button">
            Отримати консультацію
          </a>

          <div className="heroAdvantages">

            <div>✓ Дистанційно</div>

            <div>✓ Без приїзду до України</div>

            <div>✓ Повний юридичний супровід</div>

          </div>

        </div>

        <div className="heroRight">

          <div className="heroCard">

            <span className="heroCardBadge">
              🌍 Працюємо дистанційно
            </span>

            <h3>
              Ми допомагаємо незалежно
              від того, в якій країні
              Ви перебуваєте
            </h3>

            <ul className="heroList">

              <li>✔ Встановлення юридичних фактів</li>

              <li>✔ Документи ДРАЦС</li>

              <li>✔ Сімейні справи</li>

              <li>✔ Представництво в судах України</li>

              <li>✔ Отримання українських документів</li>

              <li>✔ Повний юридичний супровід</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}