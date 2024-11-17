"use client";
import React, { useState } from "react";
import { Image, Dropdown } from "react-bootstrap";
import { useTheme } from "@/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faAt,
  faUserPlus,
  faEllipsisV,
  faCheck,
  faBan,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import {
  NotificationItem,
  NotificationContent,
  NotificationTime,
  NotificationIcon,
  NotificationPreview,
  NotificationActions,
  ActionButton,
} from "./styles/NotificationsStyle";

export default function NotificationsItemComp({
  notification,
  setNotifications,
}) {
  const { theme } = useTheme();
  const [showPreview, setShowPreview] = useState(false);

  const getIcon = (type) => {
    const icons = {
      like: { icon: faHeart, color: "#ff4757" },
      comment: { icon: faComment, color: "#2e86de" },
      mention: { icon: faAt, color: "#ffa502" },
      follow: { icon: faUserPlus, color: "#2ed573" },
      system: { icon: faBell, color: "#5f27cd" },
    };
    return icons[type] || icons.system;
  };

  const handleMarkAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notification.id ? { ...n, unread: false } : n))
    );
  };

  const { icon, color } = getIcon(notification.type);

  return (
    <NotificationItem theme={theme} $unread={notification.unread}>
      <NotificationIcon color={color}>
        <FontAwesomeIcon icon={icon} />
      </NotificationIcon>

      <Image
        src={notification.avatar}
        roundedCircle
        width={50}
        height={50}
        className="me-3"
      />

      <NotificationContent>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <strong>{notification.user}</strong> {notification.action}
            <NotificationTime>{notification.time}</NotificationTime>
          </div>

          <NotificationActions>
            <ActionButton
              onClick={(e) => {
                e.stopPropagation();
                handleMarkAsRead();
              }}
              theme={theme}
            >
              <FontAwesomeIcon icon={faCheck} />
            </ActionButton>

            <Dropdown align="end">
              <Dropdown.Toggle as={ActionButton} theme={theme}>
                <FontAwesomeIcon icon={faEllipsisV} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleMarkAsRead}>
                  Mark as read
                </Dropdown.Item>
                <Dropdown.Item className="text-danger">
                  <FontAwesomeIcon icon={faBan} className="me-2" />
                  Turn off notifications
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </NotificationActions>
        </div>

        {showPreview && notification.preview && (
          <NotificationPreview theme={theme}>
            {notification.preview}
          </NotificationPreview>
        )}
      </NotificationContent>
    </NotificationItem>
  );
}
