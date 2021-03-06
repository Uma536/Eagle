/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TrainingDemoResolve implements Resolve<any[]> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> | Promise<any[]> | any[] {
    return this.http
      .get<any[]>(`/public-assets/common/siemens/trainings/training_schedule.json`)
      .pipe(catchError(() => of([])));
  }
}
