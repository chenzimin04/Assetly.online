import Link from "next/link";
import { absoluteUrl } from "@/lib/utils";

export default function ThankYouPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const supportEmail = process.env.SUPPORT_EMAIL;

  return (
    <div className="section-gap">
      <div className="container-shell max-w-3xl">
        <div className="rounded-lg border border-ink/10 bg-white p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">Payment received</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Thanks. Your order is being prepared.</h1>
          <p className="mt-4 text-lg leading-8 text-ink/72">
            If the webhook has already completed, your email with the secure download link should arrive shortly.
            You can also refresh this page in a few seconds if you just completed payment.
          </p>

          <div className="mt-8 rounded-md border border-ink/10 bg-paper p-5 text-sm leading-6 text-ink/75">
            <p>Payment reference: {searchParams.session_id || "Not provided"}</p>
            {supportEmail ? <p>Support: {supportEmail}</p> : null}
            <p>Return home: {absoluteUrl("/")}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="cta-primary">
              Back to Home
            </Link>
            <Link href="/faq" className="cta-secondary">
              Read FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
