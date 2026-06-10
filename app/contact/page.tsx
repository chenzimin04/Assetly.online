const defaultSupportEmail = "support@assetly.online";

export default function ContactPage() {
  const supportEmail = process.env.SUPPORT_EMAIL || defaultSupportEmail;

  return (
    <div className="section-gap">
      <div className="container-shell max-w-4xl space-y-6">
        <p className="section-kicker">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight">Need help with an order, download, or product question?</h1>
        <div className="space-y-4 text-sm leading-7 text-ink/75">
          <p>Use the support email for checkout questions, delivery issues, file access problems, or clarifying what is included in a product before you buy.</p>
          <p className="font-semibold text-ink">{supportEmail}</p>
          <p>If your message is about an order, include the email address used at checkout and the product name so the purchase can be located more quickly.</p>
          <p>Support is focused on product, file, checkout, and order-related questions for this storefront.</p>
        </div>
      </div>
    </div>
  );
}
