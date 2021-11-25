import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router"
import { EmptyComponent } from "src/app/empty/empty.component";
import { OrderContainerComponent } from "src/app/order-container/order-container.component";
import { UserContainerComponent } from "src/app/user-container/user-container.component";



const routes:Routes =[
  {path:"", redirectTo: "user", pathMatch: "full"},
  {path:"user", component: UserContainerComponent},
  {path:"order", component: OrderContainerComponent},
  {path:"**", component: EmptyComponent}

]
@NgModule ({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})


export class AppRoutingModule{

}
