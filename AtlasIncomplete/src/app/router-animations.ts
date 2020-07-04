import {
    trigger,
    transition,
    style,
    query,
    animate
} from '@angular/animations';

export const fader =
    trigger('routeAnimations', [
        transition('* <=> landPage', [
            // Set a default  style for enter and leave
            query(':enter', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',
                }),
            ], { optional: true }),
            // Animate the new page in
            query(':leave', [
                style({
                    position: 'absolute',
                    width: '100%',
                    opacity: 1,
                }),
                animate('600ms ease', style({ opacity: 0, transform: 'scale(1.5) translateY(0)' }))
            ], { optional: true }),
            query(':enter', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',
                }),
                animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
            ]),
        ]),
    ]);
