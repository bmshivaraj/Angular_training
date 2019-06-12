import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/nested-routes-demo/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { JavaComponent } from './components/nested-routes-demo/java/java.component';
import { AngularComponent } from './components/nested-routes-demo/angular/angular.component';
import { NodeComponent } from './components/nested-routes-demo/node/node.component';


const routesConfig: Routes = [
    
    {
        path: '/',
        pathMatch: 'full',
        redirectTo: 'java'
    },
    {
        path: 'java',
        component: JavaComponent
    },
    {
        path: 'angular',
        component: AngularComponent
        
    },
    {
        path: 'node.js',
        component: NodeComponent
    }
];
@NgModule(
    {
        declarations: [
            HomeComponent,
            JavaComponent,
            NodeComponent,
            AngularComponent
        ],
        imports: [
            BrowserModule,
            RouterModule.forRoot(routesConfig, {useHash: true})
        ],
        bootstrap:[
            HomeComponent
        ]

    }
)
export class NestedRoutesAppModule {}
