import "./AlimonyDocuments.css";

export default function AlimonyDocuments() {
  return (
    <section className="alimonyDocuments">

      <div className="container">

        <h2 className="birthSectionTitle">
          Які документи можуть знадобитися
        </h2>

        <p className="birthSectionText">
          Остаточний перелік документів залежить від конкретної
          ситуації. Після аналізу Вашої справи ми повідомимо,
          які документи необхідно підготувати саме у Вашому випадку.
        </p>

        <div className="alimonyDocumentsGrid">

          <div className="alimonyDocumentsCard">

            <h3>
              Документи заявника
            </h3>

            <ul>

              <li>паспорт або інший документ, що посвідчує особу;</li>

              <li>реєстраційний номер облікової картки платника податків (за наявності);</li>

              <li>документи щодо місця проживання (за необхідності).</li>

            </ul>

          </div>

          <div className="alimonyDocumentsCard">

            <h3>
              Документи щодо дитини
            </h3>

            <ul>

              <li>свідоцтво про народження дитини;</li>

              <li>документи щодо місця проживання дитини (за наявності);</li>

              <li>інші документи залежно від обставин справи.</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}