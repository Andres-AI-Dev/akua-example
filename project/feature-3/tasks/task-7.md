# Task: User Dashboard Page

**1. Description**

Create a user dashboard page that serves as the main authenticated landing page. Displays user information, account statistics, recent activity, and quick action buttons for common tasks.

**2. Parent Feature**

* [Feature 3 PRD](../PRD.md)

**3. Acceptance Criteria**

* Dashboard page accessible at `/dashboard` route (protected)
* Welcome message with user's name
* Stats cards showing account metrics
* Recent activity section (placeholder for future features)
* Quick action buttons (View Profile, Account Settings, etc.)
* Responsive design for mobile/tablet/desktop
* Loading states for async data
* Error handling for data fetching

**4. Files to be Modified/Created**

* `src/pages/DashboardPage.tsx` (CREATE)
* `src/components/dashboard/StatsCard.tsx` (CREATE)
* `src/components/dashboard/RecentActivity.tsx` (CREATE)
* `src/components/dashboard/QuickActions.tsx` (CREATE)
* `src/App.tsx` (MODIFY - add dashboard route wrapped with PrivateRoute)
* `src/hooks/useAuth.ts` (READ-ONLY - from Task 2)

**5. Dependencies**

* Task 1: Firebase SDK Setup
* Task 2: AuthContext and useAuth Hook
* Task 6: Protected Routes

**6. Low-Level Steps (Ordered, information-dense)**

1. Create StatsCard component
   - File(s) involved: `src/components/dashboard/StatsCard.tsx`
   - Props interface:
     ```typescript
     interface StatsCardProps {
       title: string;
       value: string | number;
       icon: React.ReactNode;
       description?: string;
       trend?: { value: number; isPositive: boolean };
     }
     ```
   - Shadcn components: Card, CardHeader, CardTitle, CardContent
   - Styling: Tailwind with gradient backgrounds, responsive grid
   - Display icon, title, value, optional description and trend indicator

2. Create RecentActivity component
   - File(s) involved: `src/components/dashboard/RecentActivity.tsx`
   - Display placeholder for future activity feed
   - Shadcn components: Card, Separator
   - Show message: "No recent activity yet. Start using Akua AI services!"
   - Styling: List-style layout with timestamps

3. Create QuickActions component
   - File(s) involved: `src/components/dashboard/QuickActions.tsx`
   - Grid of action buttons:
     - View Profile (navigate to /profile)
     - Account Settings (navigate to /settings)
     - API Documentation (link to docs)
     - Get Started (link to services)
   - Shadcn components: Button, Card
   - Icons from Lucide React
   - Styling: Responsive grid (2 cols on mobile, 4 on desktop)

4. Create DashboardPage component
   - File(s) involved: `src/pages/DashboardPage.tsx`
   - React specifics:
     - Use useAuth hook to get user data
     - Use useState for loading/error states
     - Use useEffect to fetch user stats (from Firestore via Task 11)
   - Layout structure:
     ```tsx
     <div className="container mx-auto p-6">
       <div className="mb-8">
         <h1 className="text-3xl font-bold">Welcome back, {user.displayName}!</h1>
         <p className="text-muted-foreground">Here's what's happening with your account</p>
       </div>

       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
         <StatsCard
           title="Account Created"
           value={formatDate(user.createdAt)}
           icon={<Calendar />}
         />
         <StatsCard
           title="Last Login"
           value={formatDate(user.lastLoginAt)}
           icon={<Clock />}
         />
         <StatsCard
           title="API Requests"
           value={stats.totalRequests || 0}
           icon={<Activity />}
         />
         <StatsCard
           title="Plan"
           value={profile.plan || 'Free'}
           icon={<Zap />}
         />
       </div>

       <div className="grid gap-6 lg:grid-cols-2 mb-8">
         <RecentActivity />
         <QuickActions />
       </div>
     </div>
     ```
   - Handle loading state with skeleton components
   - Error boundary for graceful error handling

5. Add dashboard route to App
   - File(s) involved: `src/App.tsx`
   - Add protected route:
     ```typescript
     <Route path="/dashboard" element={
       <PrivateRoute>
         <DashboardPage />
       </PrivateRoute>
     } />
     ```

**7. Test Plan**

* **7.1. Unit Tests:**
    * Test StatsCard renders with all props
    * Test QuickActions buttons have correct navigation
    * Tools: Vitest + React Testing Library

* **7.2. Component Tests:**
    * Test DashboardPage renders welcome message with user name
    * Test stats cards display correctly
    * Test quick action buttons navigate correctly
    * Mock useAuth hook with test user data
    * Tools: React Testing Library

* **7.3. Integration Tests:**
    * Test dashboard fetches user stats from Firestore
    * Test dashboard updates when user data changes
    * Expected outcome: Dashboard displays accurate user information

* **7.4. Manual Testing:**
    * Navigate to /dashboard while authenticated
    * Verify welcome message shows user's name
    * Check all stats cards display correct data
    * Test all quick action buttons
    * Verify responsive layout on mobile/tablet/desktop
    * Test loading states
    * Test error handling (disconnect Firebase)
