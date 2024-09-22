export class Alumno extends Materia{
    nombreAlumno: string;

    constructor(nombreMateria: string,  nombreAlumno: string) {
        super(nombreMateria);
        this.nombreAlumno = nombreAlumno;
    }


      
}

