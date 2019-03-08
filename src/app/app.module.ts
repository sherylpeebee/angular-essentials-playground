import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'

//'@' syntax indicates a TS decorator
//takes in as argument an object with known props (metadata) to configure the class being decorated as ng *module* (in this case)
@NgModule({
    imports: [
        BrowserModule// contains core directives, pipes, etc. (many built-ins for DOM manip.)
    ],//~import other ng modules that this module depends on~
    declarations: [AppComponent],//~make components, directives and pipes available w/i same module~
    bootstrap: [AppComponent]// ~=== root module component + all entrypoint components~
})  
export class appModule{}

