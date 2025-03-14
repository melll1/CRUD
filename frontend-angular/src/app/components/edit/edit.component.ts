import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  item: any = { nombre: '', descripcion: '' };
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    this.crudService.getItem(this.id).subscribe(data => {
      this.item = data;
    });
  }

  updateItem() {
    this.crudService.updateItem(this.id, this.item).subscribe(() => {
      this.router.navigate(['/']);
    });
  }


}
