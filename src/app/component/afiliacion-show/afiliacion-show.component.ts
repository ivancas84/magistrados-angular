import { Component, OnInit } from "@angular/core";
import { FormArrayConfig } from "@class/reactive-form-config";
import { TableComponent } from "@component/structure/table.component";

@Component({
    selector: 'app-afiliacion-admin',
    templateUrl: '../../core/component/structure/detail.component.html',
})
export class AfiliacionShowComponent extends TableComponent implements OnInit{

  override config!: FormArrayConfig

}

