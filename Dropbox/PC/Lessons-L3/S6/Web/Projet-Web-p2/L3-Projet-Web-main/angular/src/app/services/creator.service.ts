import { Subject } from 'rxjs';



export class CreatorService {


    constructor() {}

    creatorsSubject = new Subject<any[]>() ;

    private creators = [
        {
            id: 1,
            name: 'Ryadh',
            status: 'present'

        },
        {
            id: 2,
            name: 'Yohann',
            status: 'present'
        },
        {
            id: 3,
            name: 'Florian',
            status: 'present'
        }
    ];


    switchOnAll() {
        for (const creator of this.creators) {
            status = 'present';
        }
        this.emitCreatorSubject();
    }

    switchOffAll() {
        for (const creator of this.creators) {
            creator.status = 'absent';
        }
        this.emitCreatorSubject();
    }

    switchOnOne(i: number) {
        this.creators[i].status = 'present';
        this.emitCreatorSubject();
    }
    switchOffOne(i: number) {
        this.creators[i].status = 'absent';
        this.emitCreatorSubject();
    }

    getCreatorById(id: number) {
        const creator = this.creators.find((s) => {
                return s.id === id;
            }
        ); return creator;
    }

    emitCreatorSubject() {
        this.creatorsSubject.next(this.creators.slice());
    }

    addCreator(name: string, status: string) {
        const creatorObject = {
            id: 0,
            name: '',
            status: ''
        };
        creatorObject.name = name;
        creatorObject.status = status;
        creatorObject.id = this.creators[(this.creators.length - 1)].id + 1;
        this.creators.push(creatorObject);
        this.emitCreatorSubject();
    }
}


export class CreatorComponent {
}
