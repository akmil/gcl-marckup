import { Component } from '@angular/core';
import { Modals } from '../../enums/Modals';
import { ModalService } from '../../services/ModalService';

@Component({
  selector: 'modal-adapter',
  templateUrl: 'template.html'
})
export class ModalAdapter {
  public Modal: any = Modals;
  constructor(public modalService: ModalService) {}
}
