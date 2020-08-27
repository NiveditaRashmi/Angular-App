import { InjectionToken } from '@angular/core';


export let TOASTR_TOKEN = new InjectionToken<Toastr>('Toastr')

export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string ): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}
// import { Injectable } from '@angular/core';

// // this variable is also in global scope but its usage is now limited to this class only.
// declare let toastr: any

// @Injectable()
// export class ToastrService {
//   success(message: string, title?: string) {
//     toastr.success(message, title);
//   }

//   info(message: string, title?: string) {
//     toastr.info(message, title);
//   }
//   warning (message: string, title: string) {
//     toastr.warning(message, title);
//   }
//   error(message: string, title: string) {
//     toastr.error(message, title);
//   }
// }
