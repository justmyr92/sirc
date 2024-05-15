import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'agreement',
    loadChildren: () =>
      import('./agreement/agreement.module').then((m) => m.AgreementPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'create-form',
    loadChildren: () => import('./create-form/create-form.module').then( m => m.CreateFormPageModule)
  },
  {
    path: 'survey-list',
    loadChildren: () => import('./survey-list/survey-list.module').then( m => m.SurveyListPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then( m => m.SurveyPageModule)
  },
  {
    path: 'records',
    loadChildren: () => import('./records/records.module').then( m => m.RecordsPageModule)
  },
  {
    path: 'view-survey',
    loadChildren: () => import('./view-survey/view-survey.module').then( m => m.ViewSurveyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
