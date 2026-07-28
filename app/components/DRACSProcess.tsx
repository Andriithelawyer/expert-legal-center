import "./DRACSProcess.css";

export default function DRACSProcess() {
  return (
    <section className="dracsProcess">

      <div className="container">

        <h2 className="birthSectionTitle">
          Як проходить процедура
        </h2>

        <p className="birthSectionText">
          Ми супроводжуємо клієнта на кожному етапі —
          від первинної консультації до отримання
          готового документа.
        </p>

        <div className="dracsProcessGrid">

          <div className="dracsStep">
            <div className="dracsStepNumber">1</div>
            <h3>Аналіз документів</h3>
            <p>
              Вивчаємо Вашу ситуацію та визначаємо
              порядок подальших дій.
            </p>
          </div>

          <div className="dracsStep">
            <div className="dracsStepNumber">2</div>
            <h3>Підготовка та подання документів</h3>
            <p>
              Готуємо необхідні документи та організовуємо
              їх подання до компетентних органів.
            </p>
          </div>

          <div className="dracsStep">
            <div className="dracsStepNumber">3</div>
            <h3>Отримання документа</h3>
            <p>
              Отримуємо повторний документ та перевіряємо
              правильність його оформлення.
            </p>
          </div>

          <div className="dracsStep">
            <div className="dracsStepNumber">4</div>
            <h3>Передача клієнтові</h3>
            <p>
              Передаємо готовий документ у найбільш
              зручний для Вас спосіб.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}