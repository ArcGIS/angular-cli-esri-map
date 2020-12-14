import { Injectable } from "@angular/core";
import { loadModules } from "esri-loader";

@Injectable({
  providedIn: "root",
})
export class EsriLoaderService {
  apiOptions = { version: "4.17", css: true };
  constructor() {}

  public async loadModules(modules: string[]): Promise<any[]> {
    return await loadModules(modules, this.apiOptions);
  }

  public getInstance<T>(type: new (paramObj: any) => T, paramObj?: any): T {
    return new type(paramObj);
  }
}
