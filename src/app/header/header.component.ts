import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgxUiLoaderService } from "ngx-ui-loader";


import { SweetAlert } from 'sweetalert/typings/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) {}

  ngOnInit() {
    
  }
  popupcust(){
    Swal.fire({
      title: 'Coustomer Portal',
      text: 'One stop for getting details on your Inquiry data,Sale order data and List of Delivery from the organization',
      icon:'info',
      showCancelButton: true,
      
      
    }).then((result:any) =>{
      if(result.value){
        this.route.navigate(['']);
      }
    })
  }
}
