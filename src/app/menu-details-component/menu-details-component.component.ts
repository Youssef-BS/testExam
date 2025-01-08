import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuServiceService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/menu';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details-component.component.html',
  styleUrls: ['./menu-details-component.component.css'],
})
export class MenuDetailsComponentComponent implements OnInit {
  menu: Menu | null = null;

  constructor(
    private route: ActivatedRoute,
    private menuservice: MenuServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.menuservice.getMenuById(id).subscribe(
      (data: Menu) => {
        this.menu = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching menu:', error);
        this.router.navigate(['/Menu']);
      }
    );
  }
}
