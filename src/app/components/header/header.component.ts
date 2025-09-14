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
  dropdownOpen = false;
  private dropdownCloseTimer: any = null;
  private readonly CLOSE_DELAY = 200;

  constructor(private router: Router) {}

  private isDesktop(): boolean { return window.innerWidth > 768; }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleDropdown(): void {
    this.cancelDropdownCloseTimer();
    this.dropdownOpen = !this.dropdownOpen;
  }

  onDropdownEnter(): void {
    if (!this.isDesktop()) return;
    this.cancelDropdownCloseTimer();
    this.dropdownOpen = true;
  }

  onDropdownLeave(): void {
    if (!this.isDesktop()) return;
    this.startDropdownCloseTimer();
  }

  onMenuEnter(): void {
    if (!this.isDesktop()) return;
    this.cancelDropdownCloseTimer();
  }

  onMenuLeave(): void {
    if (!this.isDesktop()) return;
    this.startDropdownCloseTimer();
  }

  navTo(commands: any[], queryParams?: Record<string, any>) {
    void this.router.navigate(commands, { queryParams });
    this.dropdownOpen = false;
    this.cancelDropdownCloseTimer();
    this.closeMenu?.();
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

  private startDropdownCloseTimer(): void {
    this.cancelDropdownCloseTimer();
    this.dropdownCloseTimer = setTimeout(() => {
      this.dropdownOpen = false;
    }, this.CLOSE_DELAY);
  }

  private cancelDropdownCloseTimer(): void {
    if (this.dropdownCloseTimer) {
      clearTimeout(this.dropdownCloseTimer);
      this.dropdownCloseTimer = null;
    }
  }
}
