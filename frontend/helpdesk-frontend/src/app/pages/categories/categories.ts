import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../category.service/category.service';


@Component({

selector:'app-categories',

imports:[
 CommonModule,
 FormsModule
],

templateUrl:'./categories.html',
styleUrl:'./categories.css'

})

export class Categories implements OnInit{


categoryName="";
categories:any[]=[];

constructor(
 private categoryService:CategoryService,
 private cdr: ChangeDetectorRef
){}

ngOnInit(){

 this.loadCategories();

}

loadCategories(){

 this.categoryService.getCategories()
 .subscribe((response:any)=>{

 this.categories=response;
 this.cdr.detectChanges();
 });
}

addCategory(){
 if(this.categoryName.trim()=="")
 {
  return;
 }

 this.categoryService.addCategory({
    name:this.categoryName

 })
 .subscribe(()=>{

 alert("Category Added ✅");
    this.categoryName="";
    this.loadCategories();

 });


}

deleteCategory(id:string){

 this.categoryService.deleteCategory(id)
 .subscribe(()=>{
 alert("Category Deleted");
 this.loadCategories();

 });
}
editMode=false;
selectedId="";


editCategory(category:any){

    this.categoryName=category.name;
    this.selectedId=category._id;
    this.editMode=true;

}

updateCategory(){

    this.categoryService.updateCategory(
    this.selectedId,
    {
    name:this.categoryName
    }
)
.subscribe(()=>{
    alert("Category Updated ✅");
    this.categoryName="";
    this.editMode=false;
    this.loadCategories();

});

}
}