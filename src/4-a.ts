import { Paciente ,  } from "./datos.js";

export const noHayPacientesDePediatria = (pacientes: Paciente[]): boolean => {
    let mandarACasa = true;
  for (let i = 0; i < pacientes.length; i++) {
    if (
        pacientes[i].especialidad === "Pediatra") {
      mandarACasa = false;
      break;
    }
  }

  return mandarACasa; 
  };

 