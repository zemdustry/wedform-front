import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MaintenanceComponent } from "./maintenance/maintenance/maintenance.component";
import { AgePipe } from "./pipes/age-pipe";

export const declarationComponents: any[] = [HeaderComponent, FooterComponent, MaintenanceComponent, AgePipe];
export const exportComponents : any[] = [HeaderComponent, FooterComponent, MaintenanceComponent, AgePipe];
