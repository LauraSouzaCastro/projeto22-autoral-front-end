import WalletChart from "@/components/WalletChart"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
        if (!("Notification" in window)) {
            alert("Este browser não suporta notificações de Desktop");
        }else if (Notification.permission === "granted") {
            var notification = new Notification("Hi there!");
        }else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    var notification = new Notification("Hi there!");
                }
            });
        }
    }, 5000);
  }, []);
  return (
    <main>
      <WalletChart />
    </main>
  )
}
