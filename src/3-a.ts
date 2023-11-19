import { Paciente , pacientes } from "./datos.js";



export const reasignaPacientesAMedicoFamilia = (
  pacientes: Paciente[]
): Paciente[] => {
  let nuevaListaPacientes: Paciente[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      const pacienteReasignado: Paciente = {
        ...pacientes[i],
        especialidad: "Medico de familia",
      };
      
      nuevaListaPacientes.push(pacienteReasignado);
    } else {
      nuevaListaPacientes.push(pacientes[i]);
    }
  }
  return nuevaListaPacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));
