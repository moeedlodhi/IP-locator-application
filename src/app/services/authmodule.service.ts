import { Apollo,gql } from "apollo-angular";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class AuthServiceModule{

    constructor(private apollo:Apollo){}


    registerUser(email:any,username:any,password:any){
        return this.apollo.mutate({
            mutation:gql`mutation registerMutation($email:String!,$username:String!,$password:String!){
                registerUser(email:$email,username:$username,password:$password){
                    ok
                  }
            }`,variables:{
                email:email,
                username:username,
                password:password
            }
        })
    }

    loginUser(email1:any,password1:any){
        return this.apollo.mutate({
            mutation:gql`mutation loginMutation($email:String!,$password:String!){
                tokenAuth(username:$email,password:$password){
                    token
                    payload
              
                  }
            }`,variables:{
                email:email1,
                password:password1
            }
        })
    }

    verifyToken(token:any){
        return this.apollo.mutate({
            mutation:gql`mutation verifyToken($token:String!){
                verifyToken(token:$token){
                    payload
                  }
            }`,variables:{
                token:token
            }
        })
    }
}  