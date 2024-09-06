import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ExternalSystem } from "./external-system";

@Injectable({
  providedIn: "root",
})
export class ExternalSystemService {
  private url = "http://localhost:4000/api";

  constructor(private httpClient: HttpClient) {}

  // Return Observable here instead of signal value
  getExternalSystems(): Observable<ExternalSystem[]> {
    return this.httpClient.get<ExternalSystem[]>(`${this.url}/externalSystem`);
  }

  getExternalSystem(id: string): Observable<ExternalSystem> {
    return this.httpClient.get<ExternalSystem>(
      `${this.url}/externalSystem/${id}`
    );
  }

  createExternalSystem(
    externalSystem: ExternalSystem
  ): Observable<ExternalSystem> {
    return this.httpClient.post<ExternalSystem>(
      `${this.url}/externalSystem`,
      externalSystem
    );
  }

  // updateExternalSystem(
  //   id: string,
  //   externalSystem: ExternalSystem
  // ): Observable<string> {
  //   return this.httpClient.put<string>(
  //     `${this.url}/externalSystem/${id}`,
  //     externalSystem
  //   );
  // }

  updateExternalSystem(id: string, externalSystem: ExternalSystem) {
    return this.httpClient.put(
      `${this.url}/externalSystem/${id}`,
      externalSystem
    );
  }

  deleteExternalSystem(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${this.url}/externalSystem/${id}`);
  }
}
