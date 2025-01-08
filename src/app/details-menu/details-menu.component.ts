import { Component , OnInit } from '@angular/core';
import { Menu } from '../menu';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuServiceService } from 'src/app/services/menu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-menu',
  templateUrl: './details-menu.component.html',
  styleUrls: ['./details-menu.component.css']
})
export class DetailsMenuComponent implements OnInit {
  formVote : FormGroup ;
  menu: Menu | null = null;


  constructor(
    private route: ActivatedRoute,
    private menuservice: MenuServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log('Extracted ID:', id);

    this.menuservice.getMenuById(id).subscribe(
      (data: Menu) => {
        this.menu = data;
        console.log('Fetched Menu:', data);
      },
    );

    this.formVote = new FormGroup({
      vote: new FormControl('', [
        Validators.min(1),
        Validators.max(5),
        Validators.pattern(/^[1-5]?$/)
      ])
    });
  }

  get vote() {
    return this.formVote.get('vote');
  }

  voteClick() {
    if (this.formVote.valid && this.menu) {
      if (this.menu.mark === 0) {
        this.menu.mark = parseInt(this.vote?.value);
        console.log(`Updated mark to: ${this.menu.mark}`);
        this.menuservice.updateMenu(this.menu.id, this.menu).subscribe()
      } else {
        this.menuservice.updateMenu(this.menu.id, this.menu).subscribe()
      }
    } else {
      alert('Veuillez entrer une note valide entre 1 et 5.');
    }
  }

}
