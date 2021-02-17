import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @ViewChild('confirmation', { static: true}) public el: ElementRef<HTMLInputElement>;
  public form!: FormGroup;

  get nom() {
    return this.form.get('nom');
  }

  get password() { return this.form.get('password');}

  constructor() { }

  validatorPaul(formControl: AbstractControl): {[s: string]: true} {
     if (formControl.value === 'Paul') {
      return { notPaul: true};
    }else {
      
      return null;
    }
  }
passwordMatch(formControl: FormControl): { [s: string]: true} {
  if (formControl.value !== this.el.nativeElement.value) {
    return { noMatching: true}
    }else
     {return null;}
}


validatorAsync(formControl: AbstractControl): Promise<{[s: string]: boolean} | null> {
  return new Promise((resolve, reject) => {
    console.log("début du traitement ");
    setTimeout(() =>{
      console.log("traitement en  cours");
      
      resolve(null);
    }, 3000);
    console.log("fin du traitement ");
    });
  
}

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl('', [this.validatorPaul, Validators.required]),
      password: new FormControl('', [this.passwordMatch.bind(this), Validators.required]),
      email: new FormControl('')
    });
   
  
  
  }
public submit(): void{
  console.log(this.form.valid);
  console.log(this.form);
  
 
  
 
}

}
