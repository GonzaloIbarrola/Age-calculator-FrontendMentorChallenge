export default function calcularEdad(fecha) {
  const fechaNacimiento = new Date(fecha);
  const ahora = new Date();
  let años = ahora.getFullYear() - fechaNacimiento.getFullYear();
  const meses = ahora.getMonth() - fechaNacimiento.getMonth();
  if (meses < 0 || (meses === 0 && ahora.getDate() < fechaNacimiento.getDate())) {
    años--;
  }
  const mesesCumplidos = (ahora.getMonth() + 12 * ahora.getFullYear()) - (fechaNacimiento.getMonth() + 12 * fechaNacimiento.getFullYear());
  const dias = ahora.getDate() - fechaNacimiento.getDate();
  return { años, meses: mesesCumplidos % 12, dias };
}

// Ejemplo de uso
// const fecha = "1990-04-13";
// const edad = calcularEdad(fecha);
// console.log(`Tienes ${edad.años} años, ${edad.meses} meses y ${edad.dias} días.`);

