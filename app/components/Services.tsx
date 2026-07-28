import Link from "next/link";
import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: "👶",
      title: "Народження дитини",
      text: "Отримання українського свідоцтва про народження, встановлення факту народження, народження на ТОТ або за кордоном.",
      link: "/birth-tot",
    },
    {
      icon: "🕊️",
      title: "Смерть родича",
      text: "Отримання українського свідоцтва про смерть, встановлення факту смерті та підготовка документів для спадщини.",
      link: "/death-tot",
    },
    {
      icon: "💍",
      title: "Розірвання шлюбу",
      text: "Розлучення без особистого приїзду до України, якщо один із подружжя перебуває за кордоном або на ТОТ.",
      link: "/divorce-tot",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Стягнення аліментів",
      text: "Допомога в отриманні судового рішення для захисту прав дитини та використання його за кордоном.",
      link: "/alimony",
    },
    {
      icon: "📄",
      title: "Документи ДРАЦС",
      text: "Повторне отримання свідоцтв про народження, шлюб, розірвання шлюбу та смерть.",
      link: "/dracs",
    },
    {
      icon: "📚",
      title: "Корисні матеріали",
      text: "Практичні юридичні поради, покрокові інструкції, відповіді на поширені питання та корисні рекомендації.",
      link: "/knowledge",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="container">

        <h2 className="sectionTitle">
          Наші послуги
        </h2>

        <div className="servicesGrid">

          {services.map((service) => (
            <Link
              href={service.link}
              className="serviceCard"
              key={service.title}
            >

              <div className="serviceIcon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <span className="serviceButton">
                Детальніше →
              </span>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}