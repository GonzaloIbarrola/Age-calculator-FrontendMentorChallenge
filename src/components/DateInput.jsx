import { useState } from "react";
import calcularEdad from "../assets/js/date";

export default function DateInput() {
  const [day, setDay] = useState(Date);
  const [month, setMonth] = useState(Date);
  const [year, setYear] = useState(Date);
  //const [fecha, setFecha] = useState(Date);

  const handleChangeDay = event => {
    setDay(event.target.value)
  }
  const handleChangeMonth = event => {
    setMonth(event.target.value)
  }
  const handleChangeYear = event => {
    setYear(event.target.value)
  }

  let fecha = (year + '-' + month + '-' + day);
  console.log(fecha);

  calcularEdad()

  //Ejemplo de uso
  const edad = calcularEdad(fecha);
  console.log(`Tienes ${edad.años} años, ${edad.meses} meses y ${edad.dias} días.`);
  


  return(
    <div className="flex gap-4 desktop:gap-8">
      <label className="" htmlFor="">Day
        <input placeholder="DD" type="number" value={day} onChange={handleChangeDay} />
      </label>
      <label className="" htmlFor="">Month {edad.dias}
        <input placeholder="MM" type="number" value={month} onChange={handleChangeMonth} />
      </label>
      <label className="" htmlFor="">Year
        <input placeholder="YYYY" type="number" value={year} onChange={handleChangeYear} />
      </label>
    </div>
  )
}