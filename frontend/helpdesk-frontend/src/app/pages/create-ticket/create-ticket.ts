import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../ticket.service/ticket.service';
import { CategoryService } from '../../category.service/category.service';

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  selector: 'app-create-ticket',
  styleUrl: './create-ticket.css',
  templateUrl: './create-ticket.html',
})
export class CreateTicket implements OnInit{
  selectedFile:any=null;
  imagePreview:any;
  constructor(
    private ticketService:TicketService,
    private categoryService:CategoryService
  ){}

  categories:any[] = [];
  ngOnInit(){
      this.categoryService.getCategories()
      .subscribe({
        next:(response:any)=>{
          this.categories=response;
          console.log(this.categories);
        },
        error:(error)=>{
          console.log(error);
        }
      });
    }
    
  ticketForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]),
    description: new FormControl('', [
      Validators.required,   
      Validators.maxLength(1000)
    ]),
    category:new FormControl('', [
    Validators.required
    ]),
    priority: new FormControl('', [
      Validators.required
    ])

  });
  uploadFile(event:any)
{

    this.selectedFile = event.target.files[0];

    if(this.selectedFile && this.selectedFile.type.startsWith('image'))
    {
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
    }

    console.log(this.selectedFile);
}
removeFile(){

    this.selectedFile = null;

    this.imagePreview = null;

}
      submitTicket() {

  if(this.ticketForm.valid){

    const formData = new FormData();

    formData.append(
      "title",
      this.ticketForm.value.title || ""
    );

    formData.append(
      "description",
      this.ticketForm.value.description || ""
    );

    formData.append(
      "category",
      this.ticketForm.value.category || ""
    );

    formData.append(
      "priority",
      this.ticketForm.value.priority || ""
    );


    if(this.selectedFile){

      formData.append(
        "attachment",
        this.selectedFile
      );

    }


    this.ticketService.createTicket(formData)
    .subscribe({

      next:(response:any)=>{

        console.log(response);

        alert("Ticket created successfully");

        this.ticketForm.reset();

        this.selectedFile=null;

        this.imagePreview=null;

      },


      error:(error)=>{

        console.log(error);

        alert(JSON.stringify(error.error));

      }

    });

  }

  else{

    alert("Please fill all required fields correctly.");

  }

}
    
}

