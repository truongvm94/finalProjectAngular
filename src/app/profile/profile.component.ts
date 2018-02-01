import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {}

  onMBook(){
    this.router.navigate(['../book'],{relativeTo:this.route});
  }
  onChat(){
    this.router.navigate(['../chat'],{relativeTo:this.route});
  }
  signOut() {
    this.authService.logout();
  }
}
