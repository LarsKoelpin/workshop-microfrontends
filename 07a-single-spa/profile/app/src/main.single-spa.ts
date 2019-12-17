import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import singleSpaAngular from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import 'zone.js';

if (environment.production) {
  enableProdMode();
}

let lifecycles;
if (environment.standalone) {
  singleSpaPropsSubject.next({
    authToken: environment.authToken
  } as any);
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
  lifecycles = {}
} else {
  lifecycles = singleSpaAngular({
    bootstrapFunction: singleSpaProps => {
      singleSpaPropsSubject.next(singleSpaProps);
      return platformBrowserDynamic().bootstrapModule(AppModule);
    },
    template: '<app-root/>',
    NgZone: NgZone,
  });
}

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
