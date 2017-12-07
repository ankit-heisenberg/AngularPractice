import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const heroes = [
            { id: 11, name: 'Walter White' },
            { id: 12, name: 'Rick Grimes' },
            { id: 13, name: 'Gandalf' },
            { id: 14, name: 'Jon Snow' },
            { id: 15, name: 'Tyler Durden' },
            { id: 16, name: 'Jaquen H\'ghar' },
            { id: 17, name: 'Jesse Pinkman' },
            { id: 18, name: 'Harvey spectre' },
            { id: 19, name: 'Tyrion Lannister' },
            { id: 20, name: 'Bruce Wayne' }
        ];
        return {heroes};
    }

}