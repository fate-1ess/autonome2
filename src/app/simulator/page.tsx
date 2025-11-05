import SimulatorPanel from "../../components/simulator/SimulatorPanel";

export const metadata = {
  title: "Simulator",
};

export default function SimulatorPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Exchange Simulator</h1>
      {/* Client component mounts here */}
      <SimulatorPanel />
    </main>
  );
}
