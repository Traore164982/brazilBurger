import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  choix:string[]=["Burger","Complément","Menu"];
  choi:string='';
  form!: FormGroup;
  Urlburgers:string = 'https://127.0.0.1:8000/api/burgers';
  imageShow: any= '';
  file: any;

  constructor(private fB:FormBuilder,private _http:HttpClient) { }

  ngOnInit(): void {
    this.form = this.fB.group({
      nom:['',Validators.required],
      prix:['',Validators.required],
      Image:[this.imageShow,Validators.required],
      gestionnaire:{
        id:11
      }
    })
  }

  ajout(){
      console.log(this.form.value)
/*       this.form.controls['Image'].value = this.imageShow;
 *//*      this._http.post<IProduit>(this.Urlburgers,this.form.value).subscribe()
 */   }
  choice(select:any){
    console.log(select.value);
    this.choi=select.value
  }

  onFileChange(event:any) {
      this.file = event.target.files[0]
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
       this.imageShow = (<FileReader>event.target).result;
     }
  }

  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('Image', this.form.get('fileSource')?.value);
  //   formData.append('nom', this.form.get('nom')?.value);
  //   formData.append('prix',this.form.get('prix')?.value);

  //   this._http.post('https://127.0.0.1:8000/api/burgers', formData)
  //     .subscribe(res => {
  //       console.log(res);
        
  //       alert('Uploaded Successfully.');
  //     })

  // console.log(formData);
  
  //  }

}
