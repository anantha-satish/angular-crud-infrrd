import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {
      employees: [
        {
          "id": 1,
          "name": "Cleo Weeks",
          "company": "Odio Consulting",
          "email": "sed.sem.egestas@icloud.net",
          "contactNumber": "(438) 776-7337",
          "designation": "Technical Lead"
        },
        {
          "id": 2,
          "name": "Acton Haley",
          "company": "Neque Nullam Inc.",
          "email": "nulla@hotmail.couk",
          "contactNumber": "(868) 656-3145",
          "designation": "Manager"
        },
        {
          "id": 3,
          "name": "Illiana Thomas",
          "company": "Nec Urna Suscipit Institute",
          "email": "nulla.integer@google.org",
          "contactNumber": "(246) 553-1668",
          "designation": "Technical Lead"
        },
        {
          "id": 4,
          "name": "Bree Roberts",
          "company": "Duis Risus Limited",
          "email": "tellus.sem@aol.org",
          "contactNumber": "1-732-957-0711",
          "designation": "Manager"
        },
        {
          "id": 5,
          "name": "Cole Mathis",
          "company": "Eget Magna Corp.",
          "email": "in.consectetuer.ipsum@outlook.edu",
          "contactNumber": "1-801-474-3247",
          "designation": "Quality Assurance"
        },
        {
          "id": 6,
          "name": "Uma Buckner",
          "company": "Vitae Erat Vivamus Industries",
          "email": "pede.blandit@outlook.couk",
          "contactNumber": "1-313-255-1528",
          "designation": "Technical Lead"
        },
        {
          "id": 7,
          "name": "Sylvester Blackwell",
          "company": "Vestibulum Accumsan Neque LLC",
          "email": "cras@yahoo.couk",
          "contactNumber": "(283) 932-7355",
          "designation": "Technical Lead"
        },
        {
          "id": 8,
          "name": "Desirae Emerson",
          "company": "Rhoncus Nullam LLC",
          "email": "et@aol.ca",
          "contactNumber": "1-274-134-3622",
          "designation": "Manager"
        },
        {
          "id": 9,
          "name": "Carolyn Sullivan",
          "company": "Eros Incorporated",
          "email": "facilisi.sed.neque@hotmail.couk",
          "contactNumber": "1-273-839-8647",
          "designation": "Manager"
        },
        {
          "id": 10,
          "name": "Nerea Bond",
          "company": "Orci Associates",
          "email": "neque@outlook.edu",
          "contactNumber": "(574) 236-7882",
          "designation": "Technical Lead"
        },
        {
          "id": 11,
          "name": "Jackson Bauer",
          "company": "Proin Incorporated",
          "email": "velit@icloud.couk",
          "contactNumber": "(857) 556-3567",
          "designation": "Technical Lead"
        },
        {
          "id": 12,
          "name": "Iola Black",
          "company": "Lorem Luctus Ut LLC",
          "email": "libero.dui@google.com",
          "contactNumber": "(447) 257-5394",
          "designation": "Manager"
        },
        {
          "id": 13,
          "name": "Madeline Knapp",
          "company": "Orci Industries",
          "email": "sed@protonmail.ca",
          "contactNumber": "(434) 315-1115",
          "designation": "Software Developer"
        },
        {
          "id": 14,
          "name": "Fredericka Vincent",
          "company": "Tincidunt Aliquam Ltd",
          "email": "per.conubia@hotmail.net",
          "contactNumber": "1-968-261-2962",
          "designation": "Senior Software Developer"
        },
        {
          "id": 15,
          "name": "Upton Castaneda",
          "company": "Aenean Euismod Foundation",
          "email": "amet@aol.net",
          "contactNumber": "1-531-369-2325",
          "designation": "Quality Assurance"
        },
        {
          "id": 16,
          "name": "Tad English",
          "company": "Quisque Fringilla Euismod Associates",
          "email": "ipsum@google.ca",
          "contactNumber": "(527) 594-3484",
          "designation": "Software Developer"
        },
        {
          "id": 17,
          "name": "Adam Rhodes",
          "company": "Neque Morbi Incorporated",
          "email": "cursus.non@yahoo.com",
          "contactNumber": "1-214-858-2612",
          "designation": "Quality Assurance"
        },
        {
          "id": 18,
          "name": "Gail Sosa",
          "company": "Eros Non Enim Company",
          "email": "massa.mauris@icloud.couk",
          "contactNumber": "(628) 444-7871",
          "designation": "Manager"
        },
        {
          "id": 19,
          "name": "Kiayada Whitehead",
          "company": "Facilisis Magna Foundation",
          "email": "adipiscing@icloud.net",
          "contactNumber": "1-661-784-6876",
          "designation": "Senior Software Developer"
        },
        {
          "id": 20,
          "name": "Abdul Cline",
          "company": "Feugiat Sed Nec Institute",
          "email": "malesuada.fames@hotmail.couk",
          "contactNumber": "1-624-350-7772",
          "designation": "Senior Software Developer"
        }
      ]
    };
  }
}
