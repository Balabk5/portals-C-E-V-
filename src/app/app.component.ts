import { Component } from '@angular/core';
import * as $ from 'jquery';
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portaldemo';
  constructor(private ngxService: NgxUiLoaderService){}
  ngOnInit(): void{
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 2000);
  }
}
