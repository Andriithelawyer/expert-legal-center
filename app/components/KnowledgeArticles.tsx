import "./KnowledgeArticles.css";

export default function KnowledgeArticles() {
  const articles = [
    {
      icon: "👶",
      title: "Народження дитини на тимчасово окупованій території",
      text: "Пояснюємо порядок отримання українського свідоцтва про народження та встановлення факту народження через суд.",
    },
    {
      icon: "📄",
      title: "Повторне отримання документів ДРАЦС",
      text: "Як повторно отримати свідоцтво про народження, шлюб, розірвання шлюбу або смерть.",
    },
    {
      icon: "💍",
      title: "Розірвання шлюбу, якщо Ви перебуваєте за кордоном",
      text: "Що робити, якщо один із подружжя проживає за межами України або на тимчасово окупованій території.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Стягнення аліментів",
      text: "Як отримати рішення українського суду для подальшого виконання в іншій державі.",
    },
    {
      icon: "⚖️",
      title: "Встановлення юридичних фактів",
      text: "Коли необхідно звертатися до суду та які документи для цього потрібні.",
    },
    {
      icon: "📚",
      title: "Відповіді на поширені питання",
      text: "Практичні рекомендації та відповіді адвоката на найбільш поширені запитання клієнтів.",
    },
  ];

  return (
    <section className="knowledgeArticles" id="articles">

      <div className="container">

        <h2 className="birthSectionTitle">
          Оберіть тему, яка Вас цікавить
        </h2>

        <p className="birthSectionText">
          Матеріали написані простою мовою та допоможуть
          зрозуміти порядок дій ще до початку оформлення документів.
        </p>

        <div className="knowledgeArticlesGrid">

          {articles.map((article) => (
            <div
              className="knowledgeArticleCard"
              key={article.title}
            >

              <div className="knowledgeArticleIcon">
                {article.icon}
              </div>

              <h3>{article.title}</h3>

              <p>{article.text}</p>

              <span className="knowledgeArticleSoon">
                Незабаром →
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}