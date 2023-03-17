import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { NotificationType, Notification } from '../services/notification/models/notification';
import { NotificationService } from '../services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  notifications: Notification[] = [];
  private _subscription: Subscription;

  constructor(private _notificationSvc: NotificationService) { }

private addNotification(notification: Notification) {
    this.notifications.push(notification);

    if (notification.timeout !== 0) {
      setTimeout(() => this.close(notification), notification.timeout);

    }
  }

 ngOnInit(): void{
    this._subscription = this._notificationSvc.getObservable().subscribe(notification => this.addNotification(notification));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  close(notification: Notification) {
    this.notifications = this.notifications.filter(notif => notif.id !== notification.id);
  }


className(notification: Notification): string {

    let style: string;

    switch (notification.type) {

      case NotificationType.success:
        style = 'success';
        break;

      case NotificationType.warning:
        style = 'warning';
        break;

      case NotificationType.error:
        style = 'error';
        break;

      default:
        style = 'info';
        break;
    }

    return style;
  }
}
