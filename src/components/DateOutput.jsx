import DateInput from "./DateInput";
import calcularEdad from "../assets/js/date";

export default function DateOutput(day, setDay) {
  calcularEdad()
  return (
    <section className="leading-[60px]">
      <li>
        <h1><span className="text-purple">38</span> years</h1>
      </li>
      <li>
        <h1><span className="text-purple">5</span> months</h1>
      </li>
      <li>
        <h1><span className="text-purple">17</span> days</h1>
      </li>
    </section>
  )
}