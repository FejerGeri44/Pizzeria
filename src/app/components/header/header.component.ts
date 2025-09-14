import {Component, signal} from '@angular/core';
import {IsActiveMatchOptions, Router, RouterLink, RouterLinkActive, UrlTree} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = signal(false);

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  isActive(path: string | any[], queryParams?: Record<string, any>, exactPath = true): boolean {
    const tree: UrlTree = this.router.createUrlTree(
      Array.isArray(path) ? path : [path],
      queryParams ? { queryParams } : undefined
    );
    const matchOpts: IsActiveMatchOptions = {
      paths: exactPath ? 'exact' : 'subset',
      queryParams: queryParams ? 'exact' : 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };
    return this.router.isActive(tree, matchOpts);
  }
}
