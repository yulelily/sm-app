import NotificationsFeed from "@/components/NotificationsFeed";
import Header from "@/components/layout/Header";

export default function Notifications() {
  return (
    <>
      <Header showBackArrow label="Notifications" />
      <NotificationsFeed />
    </>
  );
}
