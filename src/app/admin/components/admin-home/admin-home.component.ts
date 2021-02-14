import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router.navigate(['view'], { relativeTo: this.route });
  }

  doLogout() {
    this.authService.doLogout();
    this.router.navigateByUrl('admin');
  }
}
