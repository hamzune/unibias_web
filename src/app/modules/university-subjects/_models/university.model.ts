
export class UniversityModel {
  id_university: number;
  name: string;
  description: string;
  location: string;

  setUser(university: any) {
    this.id_university = university.id_university;
    this.name = university.name || '';
    this.description = university.description || '';
    this.location = university.location || '';
  }
}
