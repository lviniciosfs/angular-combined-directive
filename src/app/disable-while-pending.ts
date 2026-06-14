import { Directive, input, computed, TemplateRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisableWhilePending]',
  host: {
    '[disabled]': 'pending()'
  }
})
export class DisableWhilePending {
  pending = input(false);

  isDisabled = computed(() => Boolean(this.pending()))
}
