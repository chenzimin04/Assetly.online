const defaultSupportEmail = "support@assetly.online";

export default function ChineseContactPage() {
  const supportEmail = process.env.SUPPORT_EMAIL || defaultSupportEmail;

  return (
    <div className="section-gap">
      <div className="container-shell max-w-4xl space-y-6">
        <p className="section-kicker">联系</p>
        <h1 className="text-4xl font-semibold tracking-tight">如有订单、交付、文件访问或产品内容相关问题，可通过支持邮箱联系。</h1>
        <div className="space-y-4 text-sm leading-7 text-ink/75">
          <p>买家可以通过支持邮箱咨询结账、数字交付、文件访问，或在购买前后确认产品包含内容。</p>
          <p className="font-semibold text-ink">{supportEmail}</p>
          <p>如果你是为了某笔订单联系支持，请附上结账时使用的邮箱地址和商品名称，以便更快定位购买记录。</p>
          <p>该支持渠道主要处理店铺、文件和订单相关问题，不作为定制顾问或代做服务入口展示。</p>
        </div>
      </div>
    </div>
  );
}
