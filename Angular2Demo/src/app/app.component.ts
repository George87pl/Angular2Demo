import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>{{ getFullName() }}</h1>
                    <img src='https://icdn.2cda.pl/obr/oryginalne/{{imagePath}}' />
                    <my-employee></my-employee>
                    <button [disabled]="isDisabled">Click Me</button>
                </div>`
})
export class AppComponent {
    pageHeader: string = null;
    imagePath: string = '850ca7d90566b9ed82c60d9d50771230.jpg'

    isDisabled: boolean = false;
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}