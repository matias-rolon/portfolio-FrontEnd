import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TrabajoComponent } from './components/experiencia/trabajo/trabajo.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FormacionComponent } from './components/educacion/formacion/formacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CircleComponent } from './components/skills/circle/circle.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PortfolioComponent,
    SobreMiComponent,
    ExperienciaComponent,
    TrabajoComponent,
    EducacionComponent,
    FormacionComponent,
    SkillsComponent,
    CircleComponent,
    ProyectosComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
