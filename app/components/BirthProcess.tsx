import "./BirthProcess.css";

export default function BirthProcess() {
  const steps = [
    {
      number: "1",
      icon: "📄",
      title: "Аналіз документів",
      text: "Ми вивчаємо наявні документи та оцінюємо можливість звернення до суду.",
    },
    {
      number: "2",
      icon: "✍️",
      title: "Підготовка заяви",
      text: "Готуємо заяву та всі необхідні процесуальні документи.",
    },
    {
      number: "3",
      icon: "⚖️",
      title: "Подання документів до суду",
      text: "Подаємо документи до суду.",
    },
    {
      number: "4",
      icon: "👨‍⚖️",
      title: "Представництво у суді",
      text: "Представляємо інтереси клієнта під час судового розгляду.",
    },
    {
      number: "5",
      icon: "📑",
      title: "Отримання рішення суду",
      text: "Після набрання рішенням суду законної сили отримуємо його для подальшого оформлення документів.",
    },
    {
      number: "6",
      icon: "👶",
      title: "Отримання українського свідоцтва про народження",
      text: "На підставі рішення суду отримуємо українське свідоцтво про народження та передаємо його клієнтові.",
    },
  ];

  return (
    <section className="birthProcess">

      <div className="container">

        <h2 className="birthSectionTitle">
          Як проходить процедура
        </h2>

        <div className="birthProcessGrid">

          {steps.map((step) => (
            <article className="birthProcessCard" key={step.number}>

              <div className="birthProcessTop">

                <span className="birthProcessNumber">
                  {step.number}
                </span>

                <span className="birthProcessIcon">
                  {step.icon}
                </span>

              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}