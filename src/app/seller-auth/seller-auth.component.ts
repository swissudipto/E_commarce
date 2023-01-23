import { Component, OnInit } from '@angular/core';
import { ApiconnectService } from '../services/apiconnect.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  response:string='';

  constructor(private apiconnect:ApiconnectService) { }

  ngOnInit(): void {
  }
  signup(data:object):void{
    this.apiconnect.signup(data).subscribe(data=>{
      this.response=data;
    });
  }

}
