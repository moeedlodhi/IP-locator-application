import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { AuthServiceModule } from './services/authmodule.service';


@Injectable({
    providedIn: 'root'
  })
export class AuthenticationGuard implements CanActivate{
    constructor(private authservice:AuthServiceModule,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
     
        const token=localStorage.getItem('Token')
        return this.authservice.verifyToken(token).pipe(
            map((res:any)=>{

                return true            
            }
    
        ),catchError(() => {
            localStorage.removeItem('Token')
            localStorage.removeItem('username')
            this.router.navigateByUrl('/login')
            return of(false);
        }))
        

    }
}  