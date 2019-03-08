//typically this file is used to bootstrap the app; can be run on browser, server, or web worker

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'// function used to bootstrap rootmodule onto platform
import { appModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(appModule)
