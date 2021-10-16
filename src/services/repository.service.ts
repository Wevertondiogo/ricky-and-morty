import { environment } from './../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({providedIn: 'root'})

export class RepositoryService<Entity> {
  private envAdress: string = environment.envAdress;
  constructor(private http: HttpClient) {}

  public getData(route:string):Observable<Entity> {
    return this.http.get<Entity>(this.createRoute(this.envAdress, route)).
            pipe(map((map:any)=> map.results))
  }

  private createRoute = (envAdress: string, route:string) => `${envAdress}/${route}`

  private generateHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }
}
