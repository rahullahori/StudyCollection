import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuestionListComponent } from './question-list/question-list.component';

const routes: Routes = [
  {
    path: 'contactUs',
    component: ContactUsComponent  
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'questionList',
    component: QuestionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
