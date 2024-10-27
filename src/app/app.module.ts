import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicanosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
