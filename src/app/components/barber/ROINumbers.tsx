import Section from "../common/Section";
import Container from "../common/Container";

export default function ROINumbers({ avgCutPrice, bookingsPerMonthRange }: { avgCutPrice: number; bookingsPerMonthRange: [number, number] }) {
  const weekly = avgCutPrice * 1;
  const monthly = avgCutPrice * 4;
  return (
    <Section>
      <Container>
        <h2 className="text-2xl font-semibold text-white">ROI snapshot</h2>
        <p className="mt-2 text-white/90">
          One extra client/week at ${weekly} per cut = ${monthly}/month. Many shops add {bookingsPerMonthRange[0]}–{bookingsPerMonthRange[1]} bookings/month.
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
                <td className="px-4 py-2">Missed calls, DMs</td>
                <td className="px-4 py-2">24/7 answered + instant booking</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2">No-shows hurt revenue</td>
                <td className="px-4 py-2">Reminders + easy reschedule</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-4 py-2">Hard to track clients</td>
                <td className="px-4 py-2">CRM + dashboard</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}


