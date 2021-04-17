import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pswd-generator',
  templateUrl: './pswd-generator.component.html',
  styleUrls: ['./pswd-generator.component.scss']
})
export class PswdGeneratorComponent implements OnInit {


  length: number = 0;
  useLetters: boolean = false;
  useSymbols: boolean = false;
  useNumbers: boolean = false;
  showPassword: boolean = false;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  generatePassword(form: NgForm) {
    if (!form.value.length) {
      alert('Please enter the length of the password');
    } else if (!form.value.useLetters && !form.value.useNumbers && !form.value.useSymbols) {
      alert('Please choose at least one of the required characters')
    } else {
      const numbers = '0123456789';
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const symbols = '!@#$%^&*(){}[]';

      let validCharacters = "";

      if (form.value.useLetters) {
        validCharacters += letters;
      }

      if (form.value.useNumbers) {
        validCharacters += numbers;
      }

      if (form.value.useSymbols) {
        validCharacters += symbols;
      }

      let generatedPassword = '';

      for (let i = 0; i < form.value.length; i++) {
        const index = Math.floor(Math.random() * validCharacters.length);
        generatedPassword += validCharacters[index];
      }
      this.showPassword = true;
      this.password = generatedPassword;

    }


    // form.resetForm();
  }

}
