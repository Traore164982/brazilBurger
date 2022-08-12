import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  constructor() { }
  
  @Input()
  btn:string='';
  ngOnInit(): void {
  }
  recup(bt:any){
    console.log(bt.value);
    
  }
}
