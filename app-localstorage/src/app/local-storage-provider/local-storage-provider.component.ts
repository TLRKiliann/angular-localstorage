import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import Validation from './utils/validation';

@Component({
  selector: 'app-local-storage-with-provider',
  templateUrl: './local-storage-with-provider.component.html',
  styleUrls: ['./local-storage-with-provider.component.css']
})
export class LocalStorageWithProviderComponent implements OnInit {
  formGroup: FormGroup;
  storedData: string;


  signin: FormGroup = new FormGroup({
    siemail: new FormControl(''),
    sipassword: new FormControl('')
  })

  storedData: string;

  constructor(private formBuilder: FormBuilder, private localStorageService: LocalStorageService) {
    this.formGroup = this.formBuilder.group({
      storageKey: '',
      storageData: '',
    });
  }

  ngOnInit() {
    this.signin = this.formBuilder.group(
      {
        siemail: ['', [Validators.required, Validators.email]],
        sipassword: ['', 
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(40)]
          ]
        },
        {
          validators: [Validation.match('siemail', 'sipassword')]
    });
  }

  sendTheNewValue(event: any) {
    this.values += event.target.value;
    console.log(event.target.value);
  }

  onSetData() {
    this.localStorageService.setItem(
      this.formGroup.get('storageKey').value,
      this.formGroup.get('storageData').value
    );
  }

  onGetData() {
    this.storedData = this.localStorageService.getItem(this.formGroup.get('storageKey').value);
  }

  onRemoveData() {
    this.localStorageService.removeItem(this.formGroup.get('storageKey').value);
  }

  onClearData() {
    this.localStorageService.clear();
  }
}