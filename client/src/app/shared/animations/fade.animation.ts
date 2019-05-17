import { trigger, state, style, animate, transition } from '@angular/animations';

/**
 * A simple fade in/out animation.
 */
export const fadeAnimation = trigger('fadeAnimation', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(200)),
  ]);