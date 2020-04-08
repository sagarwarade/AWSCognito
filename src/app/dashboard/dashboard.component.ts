import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = "sagar";

  constructor(private router: Router) {}

  ngOnInit() {}

  onLogOut() {
    Auth.signOut()
      .then(data => {
        console.log(data);
        console.log("You are successfully logged out");
        this.router.navigate(["/home"]);
      })
      .catch(err => console.log(err));
  }

}
