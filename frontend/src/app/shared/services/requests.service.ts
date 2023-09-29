import { Injectable } from '@angular/core';
import {DefaultResponseType} from "../../../types/default-response.type";
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {RequestsType} from "../../../types/requests.type";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient) { }

  sendRequest(name: string, phone: string, type: string, service?: string) {
    if (name && phone && service && type) {
      this.http.post<DefaultResponseType>(environment.api + 'requests', {
        name: name,
        phone: phone,
        service: service,
        type: type,
      });
    } else if (name && phone && type) {
      this.http.post<DefaultResponseType>(environment.api + 'requests', {
        name: name,
        phone: phone,
        type: type,
      });
    }
  }
}
