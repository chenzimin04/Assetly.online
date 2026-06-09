export default function DeliveryPage() {
  const supportEmail = process.env.SUPPORT_EMAIL;

  return (
    <div className="section-gap">
      <div className="container-shell max-w-4xl space-y-6">
        <p className="section-kicker">Delivery</p>
        <h1 className="text-4xl font-semibold tracking-tight">All products sold on this website are delivered as digital downloads after successful payment.</h1>
        <div className="space-y-4 text-sm leading-7 text-ink/75">
          <p>PromptPocket sells standalone digital products only. No physical goods are shipped, and no managed service is fulfilled through this storefront.</p>
          <p>After payment is confirmed, the buyer receives access to a secure download link and a follow-up delivery email for the exact file bundle described on the product page.</p>
          <p>Each product page explains the file format, included materials, and one-time purchase terms before checkout.</p>
          <p>If a customer does not receive the download email or cannot access the purchased files, support can help restore access.</p>
          {supportEmail ? <p>Support contact for delivery issues: {supportEmail}</p> : null}
        </div>
      </div>
    </div>
  );
}
