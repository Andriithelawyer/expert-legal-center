import "./Process.css";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Ви залишаєте заявку",
      text: "Зв'язуєтеся з нами будь-яким зручним способом та коротко описуєте свою ситуацію.",
    },
    {
      number: "2",
      title: "Ми аналізуємо документи",
      text: "Перевіряємо документи, визначаємо необхідну процедуру та повідомляємо перелік того, що потрібно.",
    },
    {
      number: "3",
      title: "Готуємо документи",
      text: "Готуємо всі необхідні документи та погоджуємо їх з Вами перед поданням.",
    },
    {
      number: "4",
      title: "Самостійно подаємо документи",
      text: "Після погодження діємо від Вашого імені та подаємо документи до відповідного органу або суду.",
    },
    {
      number: "5",
      title: "Отримуємо рішення або документ",
      text: "Самостійно отримуємо необхідне рішення суду або офіційний документ.",
    },
    {
      number: "6",
      title: "Ви отримуєте результат",
      text: "Надсилаємо готові документи зручним для Вас способом незалежно від країни перебування.",
    },
  ];

  return (
    <section className="process">
      <div className="container">
        <h2 className="sectionTitle">
          Як ми працюємо
        </h2>

        <div className="processList">
          {steps.map((step) => (
            <div className="processItem" key={step.number}>
              <div className="processNumber">
                {step.number}
              </div>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}