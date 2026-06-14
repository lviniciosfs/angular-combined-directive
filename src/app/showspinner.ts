import { Directive, HostBinding, computed, input } from '@angular/core';

@Directive({
  selector: '[appShowspinner]',
  host: {
    '[class.loading]': 'pending()'
  }
})
export class Showspinner {
  pending = input(false);
}
