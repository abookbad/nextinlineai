import Section from "../common/Section";
import Container from "../common/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import type { CleaningContent } from "@/content/cleaning";

export default function FeatureGrid({ features }: { features: CleaningContent["features"] }) {
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold text-white">What you get</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="bg-white/70">
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}


