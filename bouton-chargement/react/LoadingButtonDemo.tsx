import { LoadingButton } from "./LoadingButton";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function LoadingButtonDemo() {
  return (
    <div className="grid justify-items-center gap-4 p-8 text-center">
      <LoadingButton onAction={() => wait(2000)}>Envoyer ma demande</LoadingButton>
      <p>Cliquez pour simuler un envoi de deux secondes.</p>
    </div>
  );
}
