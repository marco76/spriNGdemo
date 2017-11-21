# Angular cheatsheet

|   |   |   |   |   |
|---|---|---|---|---|
| []  | one way databinding  |   |   |   |
| {{}}  |  data binding |   |   |   |
| ( )  |  event |   |   |   |
| [()] | two way databinding||
| [ngModel] | form control | `<input [(ngModel)]="name" #ctrl="ngModel" required>`|
| # | access a variable in the template
| ngClass | 
| ngStyle | inline style
| \| | pipe|
| ? | optional |
| ? | safe navigation |
| * | synonym for template
| *ngFor | | `*ngFor = 'let _single_element_ of _list_; let _i_ = index` |
|*ngIf | ||
|[EventEmitter](https://angular.io/api/core/EventEmitter)| used to generate custom events| `@Output() open: EventEmitter<any> = new EventEmitter(); this.open.emit(null);`|
|$event| access the event payload | `<zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>`|

Annotations and decorators
| | | |
| --- | --- | --- |
|[@Component](https://angular.io/api/core/Component)||Primitive used to build the UI interface. Similar to directives in AngularJS |
|@Directive||Directives allow you to attach behavior to elements in the DOM.|
|[@Injectable()](https://angular.io/api/core/Injectable)| decorator| Required by the components that are injected and require injection (services passed through constructor). Add as provider. Remember the parentheses.||
|providers:[]| | used by injector to create instances of the services ||


Unterschiede zwischen @Directive und @Component.
@Directive ändern die Verhaltung von bestehende DOM Komponente
@Component erstellt eine neue Komponente
