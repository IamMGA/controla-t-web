import { Intakes } from './../model/intakes.model';
import { BaseApiService } from './base-api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class IntakesService extends BaseApiService {
  private static readonly INTAKES_API = `${BaseApiService.BASE_API}/intakes`;

  constructor(private http: Http) {
    super();
  }

  addIntake(intakes: Object): Observable<Intakes> {
    return this.http.post(IntakesService.INTAKES_API, JSON.stringify(intakes), BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }
}
