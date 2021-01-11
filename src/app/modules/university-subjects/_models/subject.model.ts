
export class SubjectModel {
    id_subject: number;
    id_university: number;
    id_channel: number;
    year : string;
    id_asignatura : number;
    id_centro : number;
    id_plan: number;
    id_estudio : number;
    periodo : string;
    name: string;
    description: string;
  
    setUser(subject: any) {
      this.id_subject = subject.id_subject;
      this.id_university = subject.id_university;
      this.id_channel = subject.id_channel;
      this.year = subject.year || '';
      this.id_asignatura = subject.id_asignatura;
      this.id_centro = subject.id_centro;
      this.id_plan = subject.id_plan;
      this.id_estudio = subject.id_estudio;
      this.periodo = subject.location || '';
      this.name = subject.name || '';
      this.description = subject.description || '';
    }
  }
  