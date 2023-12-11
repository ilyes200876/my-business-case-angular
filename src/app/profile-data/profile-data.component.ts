import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user/user.service';
import { urlUploadPicture } from '../environmental/environmental';


@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit{

  userData: any;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserData().subscribe(
      (data) => {
        console.log('Données de l\'utilisateur connecté :', data);
        if(data){
          for(let i = 0; i < data.nfts.length; i++){
            data.nfts[i].src = urlUploadPicture + data.nfts[i].src;
          }
          this.userData = data;
          // console.log(this.userData.profilePic);
        }
      },
      (error) => {
        console.error('Erreur :', error);
      }
    );
  }
}
