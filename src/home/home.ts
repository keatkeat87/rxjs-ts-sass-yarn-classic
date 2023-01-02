import { fromEvent } from 'rxjs';

const btn = document.querySelector('button')!;
const h1 = document.querySelector('h1')!;

console.log([btn, h1]);

fromEvent(btn, 'click').subscribe(() => {
  h1.style.color = 'red';
});
