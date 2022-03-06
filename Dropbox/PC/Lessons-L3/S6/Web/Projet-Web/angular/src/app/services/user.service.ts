import { User } from '../models/user.model';
import { Subject } from 'rxjs';
export class UserService {

    // tslint:disable-next-line:max-line-length
    private users: User[] = [new User('Charles', 'Quint', 'charles.quint@lesrois.fr', 'License 3 informatique', ['Web application', 'baby-foot'])];
    userSubject = new Subject<User[]>();


    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}
