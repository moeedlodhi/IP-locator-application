import { Apollo,gql } from "apollo-angular";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class DashboardService{
    constructor(private apollo:Apollo){}
 
    logIP(ipAddress:any){
        return this.apollo.mutate({
            mutation:gql`mutation{
                logIp(ipAddress:"${ipAddress}"){
                ok
                information
              }
            }`
        })
    }

}  