import { environment } from './../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({providedIn: 'root'})

export class RepositoryService<Entity> {
  private envAdress: string = environment.envAdress;
  constructor(private http: HttpClient) {}

  public getData(route:string):Observable<any> {
    return this.http.get<any>(this.createRoute(this.envAdress, route))
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
