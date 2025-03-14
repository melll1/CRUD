import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: any[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.crudService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  deleteItem(id: number) {
    if (confirm('¿Estás seguro de eliminar este registro?')) {
      this.crudService.deleteItem(id).subscribe(() => {
        this.getItems();
      });
    }
  }

}
