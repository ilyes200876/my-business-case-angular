import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/services/address/address.service';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.scss']
})
export class AddressUpdateComponent {

  constructor(private addressService: AddressService, private route: ActivatedRoute, private router: Router){}

  public formUpdate: FormGroup = new FormGroup({
    street: new FormControl(''),
    zipCode: new FormControl(''),
    department: new FormControl(''),
    country: new FormControl('')
  })

  updateAddress(){
    this.addressService.updateAddress(this.route.snapshot.params['id'], this.formUpdate.value).subscribe((result)  => {
      console.log(result);
      this.router.navigate(['/profile']);
    })
  }

}
