import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusModeOverlayComponent } from './focus-mode-overlay/focus-mode-overlay.component';
import { UiModule } from '../../ui/ui.module';
import { RouterModule } from '@angular/router';
import { TaskAttachmentModule } from '../tasks/task-attachment/task-attachment.module';
import { FocusModeMainComponent } from './focus-mode-main/focus-mode-main.component';
import { FocusModeTaskSelectionComponent } from './focus-mode-task-selection/focus-mode-task-selection.component';
import { FocusModeTaskDoneComponent } from './focus-mode-task-done/focus-mode-task-done.component';
import { TasksModule } from '../tasks/tasks.module';
import { FocusModeDurationSelectionComponent } from './focus-mode-duration-selection/focus-mode-duration-selection.component';
import { IssueModule } from '../issue/issue.module';
import { SimpleCounterModule } from '../simple-counter/simple-counter.module';
import { ProcrastinationModule } from '../procrastination/procrastination.module';
import { FocusModePreparationComponent } from './focus-mode-preparation/focus-mode-preparation.component';
import { InlineMultilineInputComponent } from '../../ui/inline-multiline-input/inline-multiline-input.component';
import { BannerComponent } from '../../core/banner/banner/banner.component';

@NgModule({
  declarations: [
    FocusModeOverlayComponent,
    FocusModeMainComponent,
    FocusModeTaskSelectionComponent,
    FocusModeDurationSelectionComponent,
    FocusModeTaskDoneComponent,
    FocusModePreparationComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
    TaskAttachmentModule,
    TasksModule,
    IssueModule,
    SimpleCounterModule,

    ProcrastinationModule,
    InlineMultilineInputComponent,
    BannerComponent,
  ],
  exports: [FocusModeOverlayComponent],
})
export class FocusModeModule {}
