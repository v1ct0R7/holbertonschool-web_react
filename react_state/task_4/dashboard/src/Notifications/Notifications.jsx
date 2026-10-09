import { PureComponent } from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends PureComponent {
  render() {
    const { notifications = [], markNotificationAsRead = () => {} } = this.props;

    return (
      <div className="notifications">
        <p>Here is the list of notifications</p>
        <ul>
          {notifications.map((n) => (
            <NotificationItem
              key={n.id}
              id={n.id}
              type={n.type}
              value={n.value}
              html={n.html}
              markAsRead={markNotificationAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Notifications;