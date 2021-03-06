import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './root/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'version', component: MainComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
