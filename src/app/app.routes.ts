import { Routes } from '@angular/router';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';

export const routes: Routes = [
    {
        path: 'parent',
        component: ParentComponentComponent,
        children: [
            {
                path: 'child',
                component: ChildComponentComponent
            }
        ]
    }
];
