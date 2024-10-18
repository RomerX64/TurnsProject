import { Notices } from '../../components/Notices'
import styles from './Home.module.css'
  const noticias =[
    {
      id:0,
      titulo: "Nueva Especialidad: Cardiología Pediátrica",
      descripcion: "Nos complace anunciar que ahora contamos con un especialista en cardiología pediátrica. Para más información o para agendar un turno, comuníquese con nuestra central de turnos.",
      autor: "Dirección Médica",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbD8bX-xpNMatNpxH7lUl6b6Htw9lV0LoPQQ&s",
    },
    {
      id:1,
      titulo: "Cambio de Horarios de Atención",
      descripcion: "A partir del 1 de octubre, los horarios de atención del Dr. Juan Pérez se modificarán. Ahora atenderá los días martes y jueves de 9:00 a 13:00.",
      autor: "Recursos Humanos",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHftr5LpdV9zjWgBJ9N5IoZMpoDIYVdFaMw&s",
    },
    {
      id:2,
      titulo: "Nueva Campaña de Vacunación",
      descripcion: "¡Únase a nuestra nueva campaña de vacunación contra la gripe estacional! Las vacunas estarán disponibles de lunes a viernes, de 10:00 a 16:00, en el primer piso.",
      autor: "Departamento de Enfermería",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_VXJ0x-ZGuLbZCc60qDJgV41tzhqRQGtnQ&s",
    },
    {
      id:3,
      titulo: "Incorporación de Nuevo Equipo Médico",
      descripcion: "Nos complace informar que el Dr. Mario González se une a nuestro equipo como cirujano general. El Dr. González cuenta con más de 15 años de experiencia en cirugía laparoscópica.",
      autor: "Dirección Médica",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93XjhZ8lmik4TpUB4XeJHx60BpoBZNMye1g&s",
    },
    {
      id:4,
      titulo: "Nuevo Servicio de Teleconsulta",
      descripcion: "Ahora puede consultar a nuestros especialistas desde la comodidad de su hogar. Nuestro servicio de teleconsulta ya está disponible. Para más información, visite la sección de teleconsulta en nuestra web.",
      autor: "Tecnología Médica",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93XjhZ8lmik4TpUB4XeJHx60BpoBZNMye1g&s",
    },
    {
      id:5,
      titulo: "Semana de la Salud",
      descripcion: "Durante la semana del 15 al 19 de octubre, estaremos realizando chequeos médicos gratuitos para nuestros pacientes. ¡Reserve su turno hoy mismo!",
      autor: "Departamento de Prevención",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXUJDfHV7yE1ndLhHjNXBbWlR5js4LkFNXA&s",
    },
    {
      id:6,
      titulo: "Cambio en el Protocolo de Atención",
      descripcion: "Se ha actualizado el protocolo de atención para emergencias respiratorias. Por favor, lea el nuevo protocolo en nuestra sección de noticias para conocer más detalles.",
      autor: "Comité de Ética y Calidad",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEEGl66-k6cf-aOD7AJFHwaLkftkBrfv6yQ&s",
    },
    {
      id:7,
      titulo: "Nuevos Paquetes de Salud Integral",
      descripcion: "Hemos lanzado nuevos paquetes de salud integral con descuentos especiales para chequeos anuales y atención multidisciplinaria.",
      autor: "Departamento de Ventas",
      img:"https://i0.wp.com/aldiaargentina.microjuris.com/wp-content/uploads/2022/02/salud-j-4.jpg?fit=1000%2C662&ssl=1",
    }
  ]
function Home() {

  return (
    <div className={styles.HomeBody}>
      {noticias.map((noticia)=> (  <Notices key={noticia.id} noticia={noticia}/>  ))}
    </div>
  )
}

export default Home
