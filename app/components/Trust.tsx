import "./Trust.css";

const items = [
  {
    icon: "⚖️",
    title: "Вузька спеціалізація",
    text: "Ми займаємося питаннями українських документів, сімейного права та судових процедур для громадян України.",
  },
  {
    icon: "🌍",
    title: "Робота дистанційно",
    text: "Усі питання можна вирішити без приїзду до України незалежно від країни Вашого перебування.",
  },
  {
    icon: "📄",
    title: "Повний супровід",
    text: "Від першої консультації до отримання рішення суду або необхідного документа.",
  },
  {
    icon: "💳",
    title: "Прозорі ціни",
    text: "Вартість послуг узгоджується до початку роботи без прихованих платежів.",
  },
];

export default function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <h2 className="sectionTitle">
          Чому нам довіряють
        </h2>

        <div className="trustGrid">
          {items.map((item) => (
            <article
              className="trustCard"
              key={item.title}
            >
              <div className="trustIcon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}