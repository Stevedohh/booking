import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { AnimateModule } from 'primeng/animate';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CalendarModule,
    InputNumberModule,
    CardModule,
    DropdownModule,
    DividerModule,
    AnimateModule,
    GalleriaModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ToastModule,
    TabViewModule,
    TableModule,
    DialogModule,
    DynamicDialogModule,
    InputTextareaModule,
    ProgressSpinnerModule
  ],
})
export class UiKitModule {}
