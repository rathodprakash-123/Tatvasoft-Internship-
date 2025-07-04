import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    name = new FormControl();
    password= new FormControl();
}
