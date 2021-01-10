import { AuthModel } from './auth.model';

export class UserModel extends AuthModel {
  uuid: string;
  username: string;
  password: string;
  fullname: string;
  email: string;
  active: boolean;

  setUser(user: any) {
    this.uuid = user.uuid;
    this.username = user.username || '';
    this.password = user.password || '';
    this.fullname = user.fullname || '';
    this.email = user.email || '';
    this.active = user.active || false;
  }
}
