import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {

  form: FormGroup;
  isEditMode = false; // Add this property

  constructor(private fb: FormBuilder, private dataService: AvatarService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['']
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      return;
    }

    try {
      const data = {
        name: this.form.value.name,
        imageUrl: this.form.value.imageUrl,
        description: this.form.value.description
      };
      await this.dataService.createItem(data);
      this.form.reset();
    } catch (error) {
      console.error('Error creating item:', error);
      // Handle error appropriately (show alert, etc.)
    }
  }

}
