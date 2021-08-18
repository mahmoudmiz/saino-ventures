import * as React from "react";

export const MAIL_SERVER_ROUTE = "https://api.mailer.saino.tech/contact";
export const RECEPTION_EMAIL = "contact@saino.tech";

export const useIsAllowed = () => {
  const [isAllowed, setIsAllowed] = React.useState(false);
  React.useEffect(() => {
    const lastSeen = window.localStorage.getItem("lastSeen");
    if (lastSeen) {
      const difference = new Date().getTime() - new Date(lastSeen).getTime();
      const minutesDifference = Math.floor(difference / 1000 / 60);

      if (minutesDifference > 60) {
        setIsAllowed(true);
        window.localStorage.setItem("lastSeen", new Date());
      }
    } else {
      window.localStorage.setItem("lastSeen", new Date());
      setIsAllowed(true);
    }
  }, []);

  return isAllowed;
};
