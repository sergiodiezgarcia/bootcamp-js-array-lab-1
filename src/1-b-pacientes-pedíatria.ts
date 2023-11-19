import { Paciente } from "./datos";

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Paciente[]
): Paciente[] => {
  let PacientesAsignadosAPediatriaYMenorDeDiezAnios = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      PacientesAsignadosAPediatriaYMenorDeDiezAnios.push(pacientes[i]);
    }
  }
  return PacientesAsignadosAPediatriaYMenorDeDiezAnios;
};
