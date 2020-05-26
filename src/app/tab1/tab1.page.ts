import {Component, OnInit} from '@angular/core';
import {UserService} from '../providers/user.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

    users: any[] = [];

    constructor(
        public userService: UserService
    ) {
    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(
                (data) => { // Success
                    this.users = data['results'];
                },
                (error) => {
                    console.error(error);
                }
            );
    }
}
