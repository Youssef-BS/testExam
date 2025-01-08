import { Component , OnInit } from '@angular/core';
import { FormGroup , Validators , FormControl} from '@angular/forms';
import { Menu } from 'src/app/menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  formMenu : FormGroup ;
  menu : Menu = new Menu();

  menuList : Menu[] = [];



  ngOnInit() {
    this.formMenu= new FormGroup(
      {titre: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required, Validators.minLength(10)]),
      }
    );
  }

  save() {
    if (this.formMenu.valid) {
      this.menu.approved = false;
      this.menu.mark = 0;
      this.menuList.push({ ...this.menu });
      console.log(this.menuList);
      this.formMenu.reset(); 
    }
  }


}
