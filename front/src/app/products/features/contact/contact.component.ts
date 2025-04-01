import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MessageModule,FormsModule,ButtonModule,CardModule, ReactiveFormsModule,ToastModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [MessageService]
})
export class ContactComponent {

  contactForm = new FormGroup({
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private messageService: MessageService) {}


  onSubmit() {
    console.warn(this.contactForm.value);
    this.contactForm.reset();
    this.showSuccess();

  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Demande de contact envoyée avec succès' });
}
}
