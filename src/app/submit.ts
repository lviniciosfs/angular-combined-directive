import { Showspinner } from './showspinner';
import { DisableWhilePending } from './disable-while-pending';
import { Directive, input, inject, computed } from '@angular/core';

@Directive({
  selector: '[appSubmit]',
  hostDirectives: [
    {
      directive: DisableWhilePending,
      inputs: ['pending']
    },
    {
      directive: Showspinner,
      inputs: ['pending']
    }
  ]
})
export class Submit {
  pending = input(false);
  disablewhilepending = inject(DisableWhilePending)
  showspinner = inject(Showspinner)

  readonly isDisabled = computed(() => this.disablewhilepending.isDisabled() && this.showspinner.pending())

}
