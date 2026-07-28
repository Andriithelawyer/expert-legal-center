import "./KnowledgeHero.css";

export default function KnowledgeHero() {
  return (
    <section className="knowledgeHero">

      <div className="container knowledgeHeroContent">

        <div className="knowledgeHeroLeft">

          <span className="knowledgeBadge">
            Корисні матеріали
          </span>

          <h1>
            Практичні юридичні
            <br />
            поради та інструкції
          </h1>

          <p className="knowledgeLead">
            Ми зібрали матеріали, які допоможуть Вам
            зрозуміти юридичні процедури, підготуватися
            до їх проходження та уникнути поширених помилок.
          </p>

          <div className="knowledgeAdvantages">

            <div>✓ покрокові інструкції</div>

            <div>✓ відповіді на поширені питання</div>

            <div>✓ практичні рекомендації адвоката</div>

            <div>✓ інформація, яка постійно оновлюється</div>

          </div>

          <a href="#articles" className="knowledgeButton">
            Переглянути матеріали
          </a>

        </div>

        <div className="knowledgeHeroRight">

          <div className="knowledgeCard">

            <span className="knowledgeCardBadge">
              📚 Для кого створено цей розділ
            </span>

            <ul>

              <li>
                ✔ для українців, які перебувають за кордоном
              </li>

              <li>
                ✔ для мешканців тимчасово окупованих територій
              </li>

              <li>
                ✔ для тих, хто лише планує звернутися до суду
              </li>

              <li>
                ✔ для всіх, хто хоче зрозуміти процедуру до початку оформлення документів
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}