import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { NotificationType, Notification} from './models/notification';

@Injectable()
export class NotificationService {

  private subject = new Subject<Notification>();
  private idx = 0;

  constructor() { }

  getObservable(): Observable<Notification> {
    return this.subject.asObservable();
  }

  info(title: string, message: string, timeout = 3000) {
    this.subject.next(new Notification(this.idx++, NotificationType.info, title, message, timeout));
  }

  success(title: string, message: string, timeout = 3000) {
    this.subject.next(new Notification(this.idx++, NotificationType.success, title, message, timeout));
  }

  warning(title: string, message: string, timeout = 3000) {
    this.subject.next(new Notification(this.idx++, NotificationType.warning, title, message, timeout));
  }

  error(title: string, message: string, timeout = 0) {
    this.subject.next(new Notification(this.idx++, NotificationType.error, title, message, timeout));
  }

}
