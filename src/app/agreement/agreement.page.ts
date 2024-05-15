import { Component, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
//router
import { Router } from '@angular/router';
@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.page.html',
  styleUrls: ['./agreement.page.scss'],
})
export class AgreementPage implements OnInit {
  ngOnInit() {}

  title = 'Signature Pad by Rajesh Gami';
  signPad: any;
  @ViewChild('signPadCanvas', { static: false }) signaturePadElement: any;
  signImage: any;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.signPad = new SignaturePad(this.signaturePadElement.nativeElement);
  }
  /*It's work in devices*/
  startSignPadDrawing(event: Event) {
    console.log(event);
  }
  /*It's work in devices*/
  movedFinger(event: Event) {}
  /*Undo last step from the signature*/
  undoSign() {
    const data = this.signPad.toData();
    if (data) {
      data.pop(); // remove the last step
      this.signPad.fromData(data);
    }
  }
  /*Clean whole the signature*/
  clearSignPad() {
    this.signPad.clear();
  }
  /*Here you can save the signature as a Image*/
  saveSignPad() {
    const base64ImageData = this.signPad.toDataURL();
    this.signImage = base64ImageData;
    //Here you can save your signature image using your API call.

    //Navigate to the next page
    this.router.navigate(['/form']);
  }
}
