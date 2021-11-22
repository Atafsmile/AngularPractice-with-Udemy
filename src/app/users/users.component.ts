import { Component, OnInit } from '@angular/core';
import { EmailPhoneService } from '../email-phone.service';
import { PhonesService } from '../phones.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userEmail:any="";
userList:any=[];
userNumber:any='';
userNuberList:any=[];
addUserList:any=[];
  //constructor(private service:EmailService) { }
constructor(private service:EmailPhoneService,private service2:PhonesService){}
  ngOnInit(): void {
       }

onUserAdd():any{
  this.service.getEmailValidation(this.userEmail).subscribe(data=>{
    console.log(data);
    if(data.is_valid_format.value==true){
      alert('this emails is :'+data.email+'valid')
      if(data.is_valid_format.value==true){
        this.userList.push("email "+data.email+'  is valid ');
      
         console.log(this.userList);
      }

      this.userEmail='';
    }else{
      alert('this email is :'+data.email+'Not Valid')
      const jsondta=JSON.stringify(data.email);
      localStorage.setItem('myData',jsondta);
      if(data.is_valid_format.value==false){
        this.userList.push("email "+data.email+' is Invalid');
      
         console.log(this.userList);
      }
    }  
  });

}
 /* this.userList.push(this.userEmail);
  console.log(this.userEmail);
  this.userEmail='';*/
 /* this.service.getEmailValidData(this.userEmail).subscribe(data=>{
    console.log(data);*/

  /* 

    }*/
 // })
  
 
 onUserPhoneAdd():any{
   this.service2.getPhoneValid(this.userNumber).subscribe(datas=>{
     console.log(datas);
     if(datas.valid==true){
      this.userNuberList.push("Phone Number: "+datas.phone+' is valid');

     }else{
       this.userNuberList.push("phone number:" +datas.phone+'is invalid');
     }
     this.userNumber='';
   })

 }
 onUserPhoneAdds(event:any){
   this.addUserList.push(event);
   
 }
  }
      

