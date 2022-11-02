import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  freshnessList =["Brand New","Second Hand","Refurnished"]

  productForm=this.formBulider.group({

       
        productName :['',Validators.required],
        category : ['',Validators.required],
        freshness : ['',Validators.required],
        price : ['',Validators.required],
        comment : ['',Validators.required],
        date : ['',Validators.required]

  })
  constructor(private formBulider:FormBuilder,private apiservice:ApiService ,private router:Router) { }

  ngOnInit(): void {
     }

      addproduct(){

  let newProduct={
   
        productName :this.productForm.value.productName,
        category : this.productForm.value.category,
        freshness : this.productForm.value.freshness,
        price : this.productForm.value.price,
        comment : this.productForm.value.comment,
        date : this.productForm.value. date
        
          }
          this.apiservice.addproduct(newProduct).subscribe((data:any)=>{
            alert('new product added')
            // this.router.navigateByUrl('')
          })
      }
  }




