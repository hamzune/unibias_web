
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
  
    setSubject(subject: any) {
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
  export class Select2SubjectModel {
    id : number;
    text : string;

    setCenter(subject : any){
      this.id = parseInt(subject.code,10);
      this.text = subject.name;
    }
  }
  

  export class CenterModel {
    code : string;
    name : string;

    setCenter(center : any){
      this.code = center.code;
      this.name = center.name;
    }
  }