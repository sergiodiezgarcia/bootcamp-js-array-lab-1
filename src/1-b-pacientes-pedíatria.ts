import { Pacientes } from "./datos";

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let PacientesAsignadosAPediatriaYMenorDeDiezAnios = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      PacientesAsignadosAPediatriaYMenorDeDiezAnios.push(pacientes[i]);
    }
  }
  return PacientesAsignadosAPediatriaYMenorDeDiezAnios;
};
