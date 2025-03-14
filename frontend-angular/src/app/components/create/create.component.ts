import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  item: any = { nombre: '', descripcion: '' };

  constructor(private crudService: CrudService, private router: Router) {}

  createItem() {
    this.crudService.createItem(this.item).subscribe(() => {
      this.router.navigate(['/']); // Redirige a la lista después de guardar
    });
  }
}
