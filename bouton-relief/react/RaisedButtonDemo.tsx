import { RaisedButton } from "./RaisedButton";

export function RaisedButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 p-8">
      <RaisedButton size="small">Ajouter</RaisedButton>
      <RaisedButton>Réserver une table</RaisedButton>
      <RaisedButton variant="secondary">Voir la carte</RaisedButton>
      <RaisedButton size="large">Demander un devis</RaisedButton>
    </div>
  );
}
