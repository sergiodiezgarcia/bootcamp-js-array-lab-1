import { pacientes } from "./datos";
import { obtenPacientesAsignadosAPediatria } from "./1-a-pacientes-pediatria";
import {obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios} from "./1-b-pacientes-pedíatria"
import{activarProtocoloUrgencia} from "./2-a-protocolo-de-urgencia"
import { reasignaPacientesAMedicoFamilia } from "./3-a";
import{ noHayPacientesDePediatria } from "./4-a"
const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log("****** Pacientes de Pediatria");
console.log(pacientesPediatria);

const PacientesAsignadosAPediatriaYMenorDeDiezAnios = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log("****** Pacientes de Pediatria menores de diez años");
console.log(PacientesAsignadosAPediatriaYMenorDeDiezAnios);


const activarProctolo = activarProtocoloUrgencia(pacientes);
console.log("****** protocolo de urgencias");
console.log(activarProctolo);

const pacienteReasignado = reasignaPacientesAMedicoFamilia(pacientes);
console.log("******  pacientes reasignados")
console.log(pacienteReasignado)


const mandarACasa = noHayPacientesDePediatria(pacientes);
console.log("******  mandar a casa")
console.log(mandarACasa)

