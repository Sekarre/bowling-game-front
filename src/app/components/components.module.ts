import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, ReactiveFormsModule],
  declarations: [FooterComponent, SidebarComponent, AlertComponent],
    exports: [FooterComponent,SidebarComponent, AlertComponent]
})
export class ComponentsModule {
}
