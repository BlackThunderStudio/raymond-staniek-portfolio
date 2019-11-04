import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NavItem } from '@models/nav-item';
import { NavService } from '@app/services/nav/nav.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements AfterViewInit {
  @ViewChild('appDrawer', {static: true}) appDrawer: ElementRef;
  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: 'home'
    },
    {
      displayName: 'Programming',
      iconName: 'laptop_chromebook',
      children: [
        {
          displayName: '.NET / .NET Core',
          iconName: 'developer_board',
          route: 'programming/dot-net'
        },
        {
          displayName: 'Python',
          iconName: 'developer_board',
          route: 'programming/python'
        }
      ]
    },
    {
      displayName: 'Photography',
      iconName: 'camera',
      children: [
        {
          displayName: 'General',
          iconName: 'keyboard_arrow_right',
          route: 'photography'
        },
        {
          displayName: 'Gallery',
          iconName: 'collections',
          children: [
            {
              displayName: 'Automotive',
              iconName: 'directions_car',
              route: 'photography/gallery/automotive'
            },
            {
              displayName: 'Culinary',
              iconName: 'fastfood',
              route: 'photography/gallery/culinary'
            },
            {
              displayName: 'Portrait',
              iconName: 'person_outline',
              route: 'photography/gallery/portraits'
            }
          ]
        },
        {
          displayName: 'Equipment',
          iconName: 'camera_alt',
          route: 'photography/equipment'
        }
      ]
    },
    {
      displayName: 'Contact',
      iconName: 'contacts',
      route: 'contact'
    },
    {
      displayName: 'Dev',
      iconName: 'keyboard',
      route: 'dev-console'
    }
  ];

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
