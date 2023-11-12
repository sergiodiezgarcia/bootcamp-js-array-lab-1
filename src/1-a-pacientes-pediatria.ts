import { Pacientes,} from "./datos";

export const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesDePediatria = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesDePediatria.push(pacientes[i]);
    }
  }
  return pacientesDePediatria;
};
