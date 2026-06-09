import { Product } from "@/types";

export function FaqList({ faqs }: { faqs: Product["faqs"] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.question} className="surface-panel p-5">
          <h3 className="text-base font-semibold">{faq.question}</h3>
          <p className="mt-2 text-sm leading-6 text-ink/72">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
