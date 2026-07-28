import "./AlimonyHelp.css";

export default function AlimonyHelp() {
  return (
    <section className="alimonyHelp">

      <div className="container">

        <h2 className="birthSectionTitle">
          Як ми можемо допомогти
        </h2>

        <div className="alimonyHelpGrid">

          <div className="alimonyHelpCard">
            <div className="alimonyHelpIcon">📄</div>
            <h3>Аналізуємо Вашу ситуацію</h3>
            <p>
              Оцінюємо перспективи справи та визначаємо
              оптимальний порядок дій.
            </p>
          </div>

          <div className="alimonyHelpCard">
            <div className="alimonyHelpIcon">⚖️</div>
            <h3>Готуємо всі документи</h3>
            <p>
              Самостійно готуємо процесуальні документи
              та представляємо Ваші інтереси в суді.
            </p>
          </div>

          <div className="alimonyHelpCard">
            <div className="alimonyHelpIcon">🤝</div>
            <h3>Супроводжуємо до результату</h3>
            <p>
              Контролюємо справу до отримання рішення суду
              та передачі всіх необхідних документів клієнтові.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}