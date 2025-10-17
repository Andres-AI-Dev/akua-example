import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const services = [
  { id: 'api', name: 'AI API Services', status: 'operational', uptime: 99.99 },
  { id: 'web', name: 'Web Application', status: 'operational', uptime: 100 },
  { id: 'storage', name: 'Cloud Storage', status: 'operational', uptime: 99.95 }
];

const incidents = [
  {
    id: '1',
    title: 'Brief API Latency',
    description: 'Experienced slight increase in API response times',
    status: 'resolved',
    date: '2025-10-10',
    severity: 'low'
  }
];

export default function StatusPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            System Status
          </h1>
          <p className="text-xl text-muted-foreground">
            Current status of Akua AI Services
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="space-y-4 max-w-4xl">
          {services.map((service) => (
            <Card key={service.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      {service.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">{service.uptime}%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Incidents */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Past Incidents</h2>
          <div className="max-w-4xl">
            {incidents.length > 0 ? (
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <Card key={incident.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{incident.title}</h3>
                        <p className="text-muted-foreground mb-3">{incident.description}</p>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">{incident.status}</Badge>
                          <Badge variant="outline">{incident.severity}</Badge>
                          <span className="text-sm text-muted-foreground">{incident.date}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <p className="text-muted-foreground">No incidents in the past 90 days</p>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
