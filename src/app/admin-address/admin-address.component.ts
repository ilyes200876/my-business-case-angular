import { Component } from '@angular/core';
import { AddressService } from 'src/services/address/address.service';
import { AddressInterface } from '../interfaces/address-interface';
import { UserService } from 'src/services/user/user.service';
import { UserInterface } from '../interfaces/user-interface';

@Component({
  selector: 'app-admin-address',
  templateUrl: './admin-address.component.html',
  styleUrls: ['./admin-address.component.scss']
})
export class AdminAddressComponent {

  addresses: AddressInterface[] = [];
  

  constructor(private addressService: AddressService){}

  ngOnInit(){
    this.addressService.getAll().subscribe(dataAddress => {
      this.addresses = dataAddress;
      console.log(this.addresses);
    });
  }

}
