import "./BirthDocuments.css";

export default function BirthDocuments() {
  return (
    <section className="birthDocuments">

      <div className="container">

        <h2 className="birthSectionTitle">
          Які документи можуть знадобитися
        </h2>

        <p className="birthDocumentsLead">
          Перелік документів залежить від обставин конкретної справи.
          Нижче наведено документи, які найчастіше використовуються
          під час підготовки справи.
        </p>

        <div className="birthDocumentsGrid">

          <article className="birthDocumentsCard">

            <div className="birthDocumentsIcon">
              👤
            </div>

            <h3>
              Документи заявника
            </h3>

            <ul>

              <li>
                Паспорт громадянина України заявника
                (або обох батьків).
              </li>

            </ul>

          </article>

          <article className="birthDocumentsCard">

            <div className="birthDocumentsIcon">
              👶
            </div>

            <h3>
              Документи щодо народження дитини
            </h3>

            <ul>

              <li>
                Медичні документи, видані медичним
                закладом (якщо є).
              </li>

              <li>
                Свідоцтво про народження,
                видане за місцем народження дитини
                (якщо є).
              </li>

              <li>
                Інші документи,
                які підтверджують обставини
                народження.
              </li>

            </ul>

          </article>

        </div>

      </div>

    </section>
  );
}