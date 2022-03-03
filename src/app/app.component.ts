import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  links = ['Ana sayfa', 'Users', 'Sorular'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  title = 'qa-admin-app';
}
