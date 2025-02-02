// import UserAnalytics from "@components/UserAnalytics";
// import RevenueMatrix from "@components/RevenueMatrix";
// import Notifications from "@components/Notifications";

export default function AuthLayout({
    children,
    users,
    revenue,
    notifications,
  }: Readonly<{
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;  
}>) {
 
    return (
      <>

      <div>
      <h1>{children}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
      </>
    );
  }
  