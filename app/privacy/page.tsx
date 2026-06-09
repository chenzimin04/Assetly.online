import { copy } from "@/lib/products";

export default function PrivacyPage() {
  return (
    <div className="section-gap">
      <div className="container-shell max-w-4xl space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">{copy.en.privacy.title}</h1>
        <div className="space-y-4 text-sm leading-7 text-ink/75">
          {copy.en.privacy.body.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
