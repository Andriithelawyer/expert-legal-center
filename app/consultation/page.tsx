import ConsultationForm from "../components/ConsultationForm";

export default function ConsultationPage() {
  return (
    <section className="consultationPage">

      <div className="container">

        <h1>
          Отримати юридичну консультацію
        </h1>

        <p className="consultationLead">
          Заповніть форму нижче. Ми зв'яжемося з Вами у
          зручний спосіб та запропонуємо оптимальне рішення
          саме Вашої ситуації.
        </p>

        <ConsultationForm />

      </div>

    </section>
  );
}