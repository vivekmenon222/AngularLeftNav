import { Component } from '@angular/core';
import { LeftMenu } from './leftmenu/leftmenu.component';
@Component({
  selector: 'my-app',
  template: `
<table width="90%;" style="height:100%"  border="1">
    <tr style="text-align:center;height: 100px;">
        <td colspan="2">{{pageTitle}}</td>
    </tr>
    <tr style="text-align:center;height:100%;">
        <td valign="top" style="width: 100px;height:100%;background-color: yellow">
       <left-menu></left-menu>

        </td>
        <td>main page</td>
    </tr>
</table>
     `,
    directives:[LeftMenu]

})
export class AppComponent {
pageTitle: string = 'APP COMPONENT TITLE'
}
