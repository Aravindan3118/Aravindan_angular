import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: object;
  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.user = data
    );
  }

}
