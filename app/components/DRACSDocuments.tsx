import "./DRACSDocuments.css";

export default function DRACSDocuments() {
  return (
    <section className="dracsDocuments">

      <div className="container">

        <h2 className="birthSectionTitle">
          Які документи можна отримати повторно
        </h2>

        <p className="birthSectionText">
          Ми допомагаємо отримати повторні документи,
          видані органами державної реєстрації актів
          цивільного стану України.
        </p>

        <div className="dracsDocumentsGrid">

          <div className="dracsDocumentCard">
            <div className="dracsDocumentIcon">👶</div>
            <h3>Свідоцтво про народження</h3>
          </div>

          <div className="dracsDocumentCard">
            <div className="dracsDocumentIcon">💍</div>
            <h3>Свідоцтво про шлюб</h3>
          </div>

          <div className="dracsDocumentCard">
            <div className="dracsDocumentIcon">📄</div>
            <h3>Свідоцтво про розірвання шлюбу</h3>
          </div>

          <div className="dracsDocumentCard">
            <div className="dracsDocumentIcon">⚰️</div>
            <h3>Свідоцтво про смерть</h3>
          </div>

        </div>

      </div>

    </section>
  );
}