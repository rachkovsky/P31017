import { Observable, fromEvent, timer, interval, pipe } from 'rxjs';
import { first, count, take } from 'rxjs/operators'



let source = fromEvent(document, 'click');

source.pipe(
    take(5)
)
.subscribe((res) => {
    console.log(res)
});
