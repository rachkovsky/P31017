import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';

import { BlogListResolverService } from './resolvers/blog-list-resolver/blog-list-resolver.service';




const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'blog', component: BlogListComponent, 
    resolve: {
      list: BlogListResolverService
    },
  },
  { path: 'blog/:id', component: BlogItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
