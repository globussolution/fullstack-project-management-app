import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="w-full">
          <Link href="/admin/">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </Link>
          <Link href="/admin/tasks">
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </Link>
          <Link href="/admin/users">
            <TabsTrigger value="users">Users</TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="dashboard">{children}</TabsContent>
        <TabsContent value="tasks">{children}</TabsContent>
        <TabsContent value="users">{children}</TabsContent>
      </Tabs>
    </div>
  );
}
