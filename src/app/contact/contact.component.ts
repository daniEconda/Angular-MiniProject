import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('contactForm')contactForm!: NgForm
  id!:string;
    model = {
    name: "",
    checkAdult: "true",
    department: "",
    comment: "..."
  }
  constructor(private readonly route: ActivatedRoute){}

  onSubmit():void{
    console.log('form values', this.contactForm)
  }
}
