import "./DRACSHelp.css";

export default function DRACSHelp() {
  return (
    <section className="dracsHelp">

      <div className="container">

        <h2 className="birthSectionTitle">
          Як ми можемо допомогти
        </h2>

        <p className="birthSectionText">
          Ми беремо на себе організацію всієї процедури,
          щоб Ви отримали необхідний документ без зайвих
          витрат часу та складнощів.
        </p>

        <div className="dracsHelpGrid">

          <div className="dracsHelpCard">
            <div className="dracsHelpIcon">📋</div>
            <h3>Оцінка ситуації</h3>
            <p>
              Аналізуємо Вашу ситуацію та визначаємо
              оптимальний порядок дій.
            </p>
          </div>

          <div className="dracsHelpCard">
            <div className="dracsHelpIcon">📝</div>
            <h3>Підготовка документів</h3>
            <p>
              Готуємо всі необхідні документи та
              супроводжуємо процедуру їх оформлення.
            </p>
          </div>

          <div className="dracsHelpCard">
            <div className="dracsHelpIcon">⚖️</div>
            <h3>Юридичний супровід</h3>
            <p>
              Представляємо Ваші інтереси та
              контролюємо весь процес до завершення.
            </p>
          </div>

          <div className="dracsHelpCard">
            <div className="dracsHelpIcon">📦</div>
            <h3>Передача документа</h3>
            <p>
              Передаємо готовий документ
              у найбільш зручний для Вас спосіб.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}