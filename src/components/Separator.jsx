import iconArrow from '../assets/images/icon-Arrow.svg';
import calcularEdad from '../assets/js/date';

export default function Separator() {
  return (
    <section className='h-16 desktop:h-24'>
      <article className='flex flex-row items-center'>
        <hr />
        <button onClick={ calcularEdad } type="submit" className='desktop:order-2  w-16 h-16 bg-purple desktop:w-24 desktop:h-24 rounded-full flex justify-center items-center'>
          <img src={iconArrow} alt="icon-arrow" />
        </button>
        <hr />
      </article>
    </section>
  )
}