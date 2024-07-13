import { useState, useEffect } from "react";

const useInternetStatus = () => {
  const [isConnected, setIsConnected] = useState(navigator.onLine);

  const updateOnlineStatus = () => {
    setIsConnected(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return isConnected;
};

export default useInternetStatus;
