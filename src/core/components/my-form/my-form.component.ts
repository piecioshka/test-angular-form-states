import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent {
  myForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
