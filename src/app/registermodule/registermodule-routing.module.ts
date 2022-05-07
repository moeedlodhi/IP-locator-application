import { NgModule } from "@angular/core";
import { RegistermoduleComponent } from "./registermodule.component";
import { RouterModule } from "@angular/router";
import { LoginmoduleComponent } from "./loginmodule/loginmodule.component";
const routes=[
    {path:'register',component:RegistermoduleComponent},
    {path:'login',component:LoginmoduleComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RegisterRoutingModule{}