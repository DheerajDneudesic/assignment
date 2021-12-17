import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 userDetailss : any = []; 
 public birthdate: Date;
 public age: Date;
 id: any;
 datee = new Date();
 hideSalary: boolean = true;
 hideContent : boolean = false
 isNotice: boolean ;
 bntStyle: string;
 showAge: any =[];

  constructor(private userDetails : UserDetailsService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if(this.id == 'hr'){
        this.hideSalary = true;
      }else{
        this.hideSalary = false;
      }
    })
  }

  getList(){
    this.hideContent = true;
    this.userDetails.getAllProducts().subscribe((user) => {
      this.userDetailss = user;
      this.userDetailss.forEach(x => {
        this.age = x.dateOfBirth
        const convertAge = new Date(this.age);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        
      })
         
    }, error => {
      alert('error')
    })
  }

  editDetails(){
    this.router.navigate(['/edit'])
  }

  download(){
    var element = document.getElementById('table');
    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF();
      var imgHeight = canvas.height * 208/canvas.width;
      doc.addImage(imgData ,0,0,208,imgHeight);
      doc.save("image.pdf")

    })
  }

  logOut(){
    localStorage.removeItem('role')
    this.router.navigate([''])
  }

}


