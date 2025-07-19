import { Component } from '@angular/core';
import { UserComponent } from "./components/user/user.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
