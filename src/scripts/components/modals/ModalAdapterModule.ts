import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Components imports */
import { ModalAdapter } from './ModalAdapter';
import { RegistrationModal } from './registrationModal/RegistrationModal';
import { LoginModal } from './loginModal/LoginModal';
import { ConfirmEmailModal } from './confirmEmailModal/ConfirmEmailModal';
import {AddNewsModal} from "./addNewsModal/addNewsModal";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ModalAdapter, RegistrationModal, LoginModal, ConfirmEmailModal, AddNewsModal
  ],
  exports: [
    ModalAdapter
  ]
})
export class ModalAdapterModule { }
