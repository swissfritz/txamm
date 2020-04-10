import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'starttx',
        loadChildren: () =>
          import('../starttx/starttx.module').then(m => m.StarttxPageModule)
      },
      {
        path: 'akttx',
        loadChildren: () =>
          import('../akttx/akttx.module').then(m => m.AkttxPageModule)
      },
      {
        path: 'infotx',
        loadChildren: () =>
          import('../infotx/infotx.module').then(m => m.InfotxPageModule)
      },
      {
        path: 'camtx',
        loadChildren: () => import('../camtx/camtx.module').then( m => m.CamtxPageModule)
      },
      {
        path: 'camcon',
        loadChildren: () => import('../camcon/camcon.module').then( m => m.CamconPageModule)
      },
      {
        path: 'campr',
        loadChildren: () => import('../campr/campr.module').then( m => m.CamprPageModule)
      },
      {
        path: 'poli',
        loadChildren: () => import('../poli/poli.module').then( m => m.PoliPageModule)
      },
      {
        path: 'park',
        loadChildren: () => import('../park/park.module').then( m => m.ParkPageModule)
      },
      {
        path: 'werpr',
        loadChildren: () => import('../werpr/werpr.module').then( m => m.WerprPageModule)
      },
      {
        path: 'txfahr',
        loadChildren: () => import('../txfahr/txfahr.module').then( m => m.TxfahrPageModule)
      },
      {
        path: 'proz',
        loadChildren: () => import('../proz/proz.module').then( m => m.ProzPageModule)
      },
      {
        path: 'pausch',
        loadChildren: () => import('../pausch/pausch.module').then( m => m.PauschPageModule)
      },
      {
        path: 'ppau',
        loadChildren: () => import('../ppau/ppau.module').then( m => m.PpauPageModule)
      },
      {
        path: 'gehalt',
        loadChildren: () => import('../gehalt/gehalt.module').then( m => m.GehaltPageModule)
      },
      {
        path: 'schultx',
        loadChildren: () => import('../schultx/schultx.module').then( m => m.SchultxPageModule)
      },
      {
        path: 'austttx',
        loadChildren: () => import('../austttx/austttx.module').then( m => m.AustttxPageModule)
      },
      {
        path: 'call0tx',
        loadChildren: () => import('../call0tx/call0tx.module').then( m => m.Call0txPageModule)
      },
      {
        path: 'calltx',
        loadChildren: () => import('../calltx/calltx.module').then( m => m.CalltxPageModule)
      },
      {
        path: 'callwstx',
        loadChildren: () => import('../callwstx/callwstx.module').then( m => m.CallwstxPageModule)
      },
      {
        path: 'buchen0',
        loadChildren: () => import('../buchen0/buchen0.module').then( m => m.Buchen0PageModule)
      },
      {
        path: 'buchen1',
        loadChildren: () => import('../buchen1/buchen1.module').then( m => m.Buchen1PageModule)
      },
      {
        path: 'buchen2',
        loadChildren: () => import('../buchen2/buchen2.module').then( m => m.Buchen2PageModule)
      },
      {
        path: 'twtx',
        loadChildren: () => import('../twtx/twtx.module').then( m => m.TwtxPageModule)
      },
      {
        path: 'tdit',
        loadChildren: () => import('../tdit/tdit.module').then( m => m.TditPageModule)
      },
      {
        path: 'tadtx',
        loadChildren: () => import('../tadtx/tadtx.module').then( m => m.TadtxPageModule)
      },
      {
        path: 'tstrtx',
        loadChildren: () => import('../tstrtx/tstrtx.module').then( m => m.TstrtxPageModule)
      },
      {
        path: 'twfalschtx',
        loadChildren: () => import('../twfalschtx/twfalschtx.module').then( m => m.TwfalschtxPageModule)
      },
      {
        path: 'lentx',
        loadChildren: () => import('../lentx/lentx.module').then( m => m.LentxPageModule)
      },
      {
        path: 'pannetx',
        loadChildren: () => import('../pannetx/pannetx.module').then( m => m.PannetxPageModule)
      },
      {
        path: 'unfmtx',
        loadChildren: () => import('../unfmtx/unfmtx.module').then( m => m.UnfmtxPageModule)
      },
      {
        path: 'unfalltx',
        loadChildren: () => import('../unfalltx/unfalltx.module').then( m => m.UnfalltxPageModule)
      },
      {
        path: 'anftx',
        loadChildren: () => import('../anftx/anftx.module').then( m => m.AnftxPageModule)
      },
      {
        path: '',
        redirectTo: 'starttx',
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
  declarations: [Tab2Page]
})
export class Tab2PageModule {}