# Task: Community and Status Pages

**1. Description**

Create Community and Status pages that provide users with information about the Akua community and system status. The Community page should include community guidelines, social platform links, and joining information. The Status page should display system status indicators, uptime information, and past incidents (using placeholder data for now).

**2. Parent Feature**

*   [project/feature-2/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   Community page (`/community`) renders with all sections
*   Community page includes introduction, guidelines, social links, and CTA
*   Status page (`/status`) renders with system status display
*   Status page includes service uptime indicators (placeholder data)
*   Status page includes past incidents section (placeholder)
*   Status page includes subscription form placeholder
*   Both pages are fully responsive
*   Both pages use Layout wrapper (Header + Footer)
*   All links and CTAs are functional
*   TypeScript types defined for status data

**4. Files to be Modified/Created**

*   `src/pages/CommunityPage.tsx` - NEW: Community page component
*   `src/pages/StatusPage.tsx` - NEW: Status page component
*   `src/pages/CommunityPage.test.tsx` - NEW: Community page tests
*   `src/pages/StatusPage.test.tsx` - NEW: Status page tests
*   `src/types/status.ts` - NEW: Status page TypeScript types
*   `src/data/status-data.ts` - NEW: Placeholder status data
*   `src/data/community-data.ts` - NEW: Community page data
*   `src/App.tsx` - MODIFIED: Add routes for `/community` and `/status`

**5. Dependencies**

*   Task 1: Navigation header and layout structure (Layout component must exist)
*   Task 7: Footer updates (for footer links to these pages)

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Create TypeScript types for status data**
    - File(s) involved: `src/types/status.ts`
    - Algorithm:
        ```typescript
        export interface ServiceStatus {
          id: string;
          name: string;
          status: 'operational' | 'degraded' | 'outage';
          uptime: number; // percentage
        }

        export interface Incident {
          id: string;
          title: string;
          description: string;
          status: 'resolved' | 'investigating' | 'monitoring';
          date: string;
          severity: 'low' | 'medium' | 'high' | 'critical';
        }

        export interface StatusData {
          services: ServiceStatus[];
          incidents: Incident[];
          lastUpdated: string;
        }
        ```

2.  **Create placeholder status data**
    - File(s) involved: `src/data/status-data.ts`
    - Algorithm:
        ```typescript
        import { StatusData } from '@/types/status';

        export const statusData: StatusData = {
          services: [
            {
              id: 'api',
              name: 'AI API Services',
              status: 'operational',
              uptime: 99.99,
            },
            {
              id: 'web',
              name: 'Web Application',
              status: 'operational',
              uptime: 100,
            },
            {
              id: 'storage',
              name: 'Cloud Storage',
              status: 'operational',
              uptime: 99.95,
            },
          ],
          incidents: [
            {
              id: '1',
              title: 'Brief API Latency',
              description: 'Experienced slight increase in API response times',
              status: 'resolved',
              date: '2025-10-10',
              severity: 'low',
            },
          ],
          lastUpdated: new Date().toISOString(),
        };
        ```

3.  **Create community data**
    - File(s) involved: `src/data/community-data.ts`
    - Algorithm:
        ```typescript
        export const communityData = {
          intro: {
            title: 'Join the Akua Community',
            description: 'Connect with other AI enthusiasts, developers, and businesses leveraging Akua AI Services.',
          },
          guidelines: [
            'Be respectful and inclusive',
            'Share knowledge and help others',
            'Provide constructive feedback',
            'Report bugs and issues responsibly',
            'No spam or self-promotion without permission',
          ],
          platforms: [
            { name: 'Discord', url: '#', description: 'Real-time chat and support' },
            { name: 'GitHub', url: '#', description: 'Open source contributions' },
            { name: 'Twitter', url: '#', description: 'Updates and announcements' },
            { name: 'LinkedIn', url: '#', description: 'Professional networking' },
          ],
          cta: {
            title: 'Ready to Join?',
            description: 'Sign up today and become part of our growing community.',
            buttonText: 'Get Started',
            buttonLink: '/contact',
          },
        };
        ```

4.  **Create CommunityPage component**
    - File(s) involved: `src/pages/CommunityPage.tsx`
    - React specifics:
        - Import: Link from react-router-dom
        - Import: Button, Card from Shadcn UI
        - Import: communityData
    - Styling:
        - Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16`
        - Hero section: `text-center mb-16`
        - Guidelines: `grid md:grid-cols-2 gap-8`
        - Platforms: `grid sm:grid-cols-2 lg:grid-cols-4 gap-6`
    - Algorithm:
        ```typescript
        export default function CommunityPage() {
          return (
            <div className="min-h-screen bg-white">
              {/* Hero Section */}
              <section className="bg-gradient-to-b from-blue-50 to-white py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    {communityData.intro.title}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {communityData.intro.description}
                  </p>
                </div>
              </section>

              {/* Community Guidelines */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold mb-8">Community Guidelines</h2>
                <Card className="p-6">
                  <ul className="space-y-4">
                    {communityData.guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3">✓</span>
                        <span className="text-gray-700">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>

              {/* Platforms */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
                <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {communityData.platforms.map((platform) => (
                    <Card key={platform.name} className="p-6 hover:shadow-lg transition">
                      <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                      <Button asChild variant="outline" size="sm">
                        <a href={platform.url} target="_blank" rel="noopener noreferrer">
                          Visit
                        </a>
                      </Button>
                    </Card>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="max-w-4xl mx-auto px-4 text-center py-20">
                <h2 className="text-3xl font-bold mb-4">{communityData.cta.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{communityData.cta.description}</p>
                <Button asChild size="lg">
                  <Link to={communityData.cta.buttonLink}>
                    {communityData.cta.buttonText}
                  </Link>
                </Button>
              </section>
            </div>
          );
        }
        ```

5.  **Create StatusPage component**
    - File(s) involved: `src/pages/StatusPage.tsx`
    - React specifics:
        - Import: statusData
        - Import: Card, Badge from Shadcn UI
        - Import: CheckCircle, AlertCircle, XCircle icons from lucide-react
    - Styling:
        - Status indicators with color coding
        - Uptime percentages
        - Incident timeline
    - Algorithm:
        ```typescript
        export default function StatusPage() {
          const getStatusIcon = (status: string) => {
            switch (status) {
              case 'operational':
                return <CheckCircle className="h-6 w-6 text-green-500" />;
              case 'degraded':
                return <AlertCircle className="h-6 w-6 text-yellow-500" />;
              case 'outage':
                return <XCircle className="h-6 w-6 text-red-500" />;
              default:
                return null;
            }
          };

          const getStatusColor = (status: string) => {
            switch (status) {
              case 'operational':
                return 'bg-green-100 text-green-800';
              case 'degraded':
                return 'bg-yellow-100 text-yellow-800';
              case 'outage':
                return 'bg-red-100 text-red-800';
              default:
                return 'bg-gray-100 text-gray-800';
            }
          };

          return (
            <div className="min-h-screen bg-white">
              {/* Hero */}
              <section className="bg-gradient-to-b from-green-50 to-white py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    System Status
                  </h1>
                  <p className="text-xl text-gray-600">
                    Current status of Akua AI Services
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    Last updated: {new Date(statusData.lastUpdated).toLocaleString()}
                  </p>
                </div>
              </section>

              {/* Service Status */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold mb-8">Services</h2>
                <div className="space-y-4">
                  {statusData.services.map((service) => (
                    <Card key={service.id} className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(service.status)}
                          <div>
                            <h3 className="text-lg font-semibold">{service.name}</h3>
                            <Badge className={getStatusColor(service.status)}>
                              {service.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">
                            {service.uptime}%
                          </p>
                          <p className="text-sm text-gray-500">Uptime</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Past Incidents */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
                <h2 className="text-3xl font-bold mb-8">Past Incidents</h2>
                {statusData.incidents.length > 0 ? (
                  <div className="space-y-4">
                    {statusData.incidents.map((incident) => (
                      <Card key={incident.id} className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{incident.title}</h3>
                            <p className="text-gray-600 mb-3">{incident.description}</p>
                            <div className="flex items-center space-x-3">
                              <Badge variant="outline">{incident.status}</Badge>
                              <Badge variant="outline">{incident.severity}</Badge>
                              <span className="text-sm text-gray-500">{incident.date}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="p-8 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-600">No incidents in the past 90 days</p>
                  </Card>
                )}
              </section>

              {/* Subscribe Section */}
              <section className="max-w-4xl mx-auto px-4 text-center py-20">
                <h2 className="text-3xl font-bold mb-4">Get Status Updates</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Subscribe to receive notifications about system status changes
                </p>
                <Card className="p-8">
                  <p className="text-gray-600">
                    Status update subscriptions coming soon. Follow us on social media for now.
                  </p>
                </Card>
              </section>
            </div>
          );
        }
        ```

6.  **Add routes to App.tsx**
    - File(s) involved: `src/App.tsx`
    - Algorithm:
        ```typescript
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/status" element={<StatusPage />} />
        ```

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test status data structure is valid
    *   Test community data structure is valid
    *   Test getStatusIcon function returns correct icons
    *   Test getStatusColor function returns correct classes
    *   Tools: Vitest

*   **7.2. Component Tests:**
    *   Test CommunityPage renders hero, guidelines, platforms, CTA
    *   Test all platform links are present
    *   Test CTA button navigates to contact
    *   Test StatusPage renders services, incidents, subscribe section
    *   Test each service shows status, uptime, and icon
    *   Test incidents display correctly
    *   Test empty incidents state shows "No incidents" message
    *   Tools: Vitest + React Testing Library

*   **7.3. Integration Tests:**
    *   Test navigation to `/community` works
    *   Test navigation to `/status` works
    *   Test Layout (Header + Footer) appears on both pages
    *   Expected outcome: Pages accessible via routes

*   **7.4. Visual Tests:**
    *   Test responsive design at 375px, 768px, 1440px
    *   Test status color coding is visible
    *   Test uptime percentages display correctly
    *   Test community platforms grid layout

*   **7.5. Manual Testing:**
    *   Navigate to `/community`, verify all sections visible
    *   Click platform links, verify they open (even if placeholder)
    *   Navigate to `/status`, verify services show correct status
    *   Verify uptime percentages display
    *   Verify past incidents section
    *   Test on mobile device
