import { Component  } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/menu';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent   {

  constructor(private menuservice: MenuServiceService) {
    this.getListApproved()
  }

  listMenuApproved : Menu[] = []

  getListApproved() {
    this.menuservice.getListMenus().subscribe((data) => {
      data.forEach((menu) => {
        if(menu.approved) this.listMenuApproved.push(menu)
      })
    })
 }


}
