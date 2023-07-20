import { Injectable } from "@angular/core";
import {Resolve } from "@angular/router";
import { Observable, of } from "rxjs";


const deparments = ['MARKETING', 'SALES', 'OTHER', 'HV'];
@Injectable({ providedIn: 'root' })
export class DataResolverService implements Resolve <unknown>{

    resolve(): Observable<unknown>{
        //TODO: CALL SERVICE
        return of (deparments);
    }
}