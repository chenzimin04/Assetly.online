export default function RefundPage() {
  const supportEmail = process.env.SUPPORT_EMAIL;

  return (
    <div className="section-gap">
      <div className="container-shell max-w-4xl space-y-6">
        <p className="section-kicker">Refund policy</p>
        <h1 className="text-4xl font-semibold tracking-tight">Digital products are generally non-refundable once access has been delivered.</h1>
        <div className="space-y-4 text-sm leading-7 text-ink/75">
          <p>Because products sold on this website are digital downloads and access is typically provided immediately after payment, purchases are generally final unless otherwise required by law.</p>
          <p>Customers should review the product description carefully before purchase, including the included files, format, intended use, and delivery terms.</p>
          <p>If a customer receives the wrong file, has a failed delivery, or cannot access the purchased download, support can help correct the delivery issue or restore access where appropriate.</p>
          <p>This policy applies to digital goods sold as one-time purchases. It does not create a subscription cancellation right because no recurring subscription is sold through this storefront.</p>
          {supportEmail ? <p>Support contact for delivery or file-access issues: {supportEmail}</p> : null}
        </div>
      </div>
    </div>
  );
}
