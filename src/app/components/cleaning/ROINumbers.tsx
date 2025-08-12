import Section from "../common/Section";
import Container from "../common/Container";

export default function ROINumbers({ avgJobValueRange, extraJobsPerMonthRange }: { avgJobValueRange: [number, number]; extraJobsPerMonthRange: [number, number] }) {
  const [low, high] = avgJobValueRange;
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold text-white">ROI snapshot</h2>
        <p className="mt-2 text-white/90">
          Two extra jobs/month typically covers the monthly fee. Average job value: ${low}–${high}. Many teams add {extraJobsPerMonthRange[0]}–{extraJobsPerMonthRange[1]} booked jobs/month once calls are answered 24/7.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/20 bg-white/5">
          <table className="w-full text-left text-sm text-white/90">
            <thead className="bg-white/10 text-white">
              <tr>
                <th className="px-4 py-2">Before</th>
                <th className="px-4 py-2">After</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2">Voicemail tag</td>
                <td className="px-4 py-2">Answered instantly</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2">Manual quotes</td>
                <td className="px-4 py-2">Fast quotes with rules</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2">Forgotten follow-ups</td>
                <td className="px-4 py-2">Set-and-forget reminders</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}


