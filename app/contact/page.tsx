export default function ContactPage() {
  const supportEmail = process.env.SUPPORT_EMAIL;

  return (
    <div className="section-gap">
      <div className="container-shell max-w-4xl space-y-6">
        <p className="section-kicker">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight">Need help with a purchase, download, or product question?</h1>
        <div className="space-y-4 text-sm leading-7 text-ink/75">
          <p>Use the support contact for checkout questions, delivery issues, file access problems, or clarifying what is included in a product before you buy.</p>
          {supportEmail ? <p className="font-semibold text-ink">{supportEmail}</p> : <p className="font-semibold text-ink">Support contact available on request.</p>}
          <p>If your message is about an order, include the email address used at checkout and the product name so we can locate it more quickly.</p>
          <p>Support is focused on store, file, and order-related questions.</p>
        </div>
      </div>
    </div>
  );
}
