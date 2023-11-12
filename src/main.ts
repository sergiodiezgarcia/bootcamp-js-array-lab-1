import { pacientes } from "./datos";
import { obtenPacientesAsignadosAPediatria } from "./1-a-pacientes-pediatria";
import {obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios} from "./1-b-pacientes-pedíatria"

const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log("****** Pacientes de Pediatria");
console.log(pacientesPediatria);

const PacientesAsignadosAPediatriaYMenorDeDiezAnios = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log("****** Pacientes de Pediatria menores de diez años");
console.log(PacientesAsignadosAPediatriaYMenorDeDiezAnios);
