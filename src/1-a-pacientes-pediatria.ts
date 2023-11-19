import { Paciente } from "./datos";

export const obtenPacientesAsignadosAPediatria = (
  pacientes: Paciente[]
): Paciente[] => {
  let pacientesDePediatria = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesDePediatria.push(pacientes[i]);
    }
  }
  return pacientesDePediatria;
};
