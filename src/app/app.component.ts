import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'magistrados-angular';

  constructor(
    protected storage: SessionStorageService, 
  ) { }

  ngOnInit(): void {
    this.storage.clear();
  }
  
}
