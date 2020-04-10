import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'startmw',
        loadChildren: () =>
          import('../startmw/startmw.module').then(m => m.StartmwPageModule)
      },
      {
        path: 'aktmw',
        loadChildren: () =>
          import('../aktmw/aktmw.module').then(m => m.AktmwPageModule)
      },
      {
        path: 'infomw',
        loadChildren: () =>
          import('../infomw/infomw.module').then(m => m.InfomwPageModule)
      },
      {
        path: 'cammw',
        loadChildren: () => import('../cammw/cammw.module').then( m => m.CammwPageModule)
      },
      {
        path: 'polimw',
        loadChildren: () => import('../polimw/polimw.module').then( m => m.PolimwPageModule)
      },
      {
        path: 'kurse',
        loadChildren: () => import('../kurse/kurse.module').then( m => m.KursePageModule)
      },
      {
        path: 'schul',
        loadChildren: () => import('../schul/schul.module').then( m => m.SchulPageModule)
      },
      {
        path: 'austtmw',
        loadChildren: () => import('../austtmw/austtmw.module').then( m => m.AusttmwPageModule)
      },
      {
        path: 'abend',
        loadChildren: () => import('../abend/abend.module').then( m => m.AbendPageModule)
      },
      {
        path: 'tag',
        loadChildren: () => import('../tag/tag.module').then( m => m.TagPageModule)
      },
      {
        path: 'call0mw',
        loadChildren: () => import('../call0mw/call0mw.module').then( m => m.Call0mwPageModule)
      },
      {
        path: 'callmw',
        loadChildren: () => import('../callmw/callmw.module').then( m => m.CallmwPageModule)
      },
      {
        path: 'callwsmw',
        loadChildren: () => import('../callwsmw/callwsmw.module').then( m => m.CallwsmwPageModule)
      },
      {
        path: 'twmw',
        loadChildren: () => import('../twmw/twmw.module').then( m => m.TwmwPageModule)
      },
      {
        path: 'tdim',
        loadChildren: () => import('../tdim/tdim.module').then( m => m.TdimPageModule)
      },
      {
        path: 'tadmw',
        loadChildren: () => import('../tadmw/tadmw.module').then( m => m.TadmwPageModule)
      },
      {
        path: 'tstrmw',
        loadChildren: () => import('../tstrmw/tstrmw.module').then( m => m.TstrmwPageModule)
      },
      {
        path: 'twfalschmw',
        loadChildren: () => import('../twfalschmw/twfalschmw.module').then( m => m.TwfalschmwPageModule)
      },
      {
        path: 'lenmw',
        loadChildren: () => import('../lenmw/lenmw.module').then( m => m.LenmwPageModule)
      },
      {
        path: 'pannemw',
        loadChildren: () => import('../pannemw/pannemw.module').then( m => m.PannemwPageModule)
      },
      {
        path: 'unfmmw',
        loadChildren: () => import('../unfmmw/unfmmw.module').then( m => m.UnfmmwPageModule)
      },
      {
        path: 'unfallmw',
        loadChildren: () => import('../unfallmw/unfallmw.module').then( m => m.UnfallmwPageModule)
      },
      {
        path: 'anfmw',
        loadChildren: () => import('../anfmw/anfmw.module').then( m => m.AnfmwPageModule)
      },
      {
        path: '',
        redirectTo: 'startmw',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
