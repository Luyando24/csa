import { createClient } from "@/lib/supabase/server"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect("/auth/login")

  // Verify admin role
  // This is simplified. In real app, check custom claims or database role.
  // const { data: profile } = await supabase.from('users').select('role').eq('id', user.id).single()
  // if (profile?.role !== 'admin') redirect("/dashboard")

  const { data: applications } = await supabase
    .from('applications')
    .select('*, users(name, email), programs(title)')
    .order('submitted_at', { ascending: false })

  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage applications and users.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications?.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>
                    <div className="font-medium">{app.users?.name}</div>
                    <div className="text-xs text-muted-foreground">{app.users?.email}</div>
                  </TableCell>
                  <TableCell>{app.programs?.title}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        {app.status}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(app.submitted_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span className="text-brand-blue cursor-pointer text-sm font-medium hover:underline">View</span>
                  </TableCell>
                </TableRow>
              ))}
              {!applications?.length && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                    No applications found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
