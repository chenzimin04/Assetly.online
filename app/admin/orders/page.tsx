import { getSupabaseAdmin } from "@/lib/supabase";
import { formatPrice } from "@/lib/utils";

export const dynamic = "force-dynamic";

type AdminOrderRow = {
  order_number: string;
  amount_cents: number;
  status: string;
  created_at: string;
  customers: { email: string } | { email: string }[] | null;
  products: { slug: string } | { slug: string }[] | null;
};

function pickEmail(customers: AdminOrderRow["customers"]) {
  if (!customers) return "";
  return Array.isArray(customers) ? customers[0]?.email || "" : customers.email;
}

function pickProductSlug(products: AdminOrderRow["products"]) {
  if (!products) return "";
  return Array.isArray(products) ? products[0]?.slug || "" : products.slug;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function formatCompactDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric"
  }).format(new Date(value));
}

function getStatusClasses(status: string) {
  switch (status) {
    case "fulfilled":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "paid":
      return "bg-sky-50 text-sky-700 border-sky-200";
    case "pending":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-zinc-50 text-zinc-700 border-zinc-200";
  }
}

export default async function AdminOrdersPage({ searchParams }: { searchParams: { token?: string } }) {
  const allowed = searchParams.token && searchParams.token === process.env.ADMIN_TOKEN;

  if (!allowed) {
    return (
      <div className="section-gap">
        <div className="container-shell max-w-3xl">
          <div className="rounded-lg border border-red-200 bg-white p-6 text-sm text-red-700 shadow-sm">
            Unauthorized. Add `?token=YOUR_ADMIN_TOKEN` to the URL to view the operations dashboard.
          </div>
        </div>
      </div>
    );
  }

  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("orders")
    .select("order_number, amount_cents, status, created_at, customers(email), products(slug)")
    .order("created_at", { ascending: false })
    .limit(50);

  const rows = (data || []) as AdminOrderRow[];
  const grossRevenue = rows.reduce((sum, row) => sum + row.amount_cents, 0);
  const fulfilledCount = rows.filter((row) => row.status === "fulfilled").length;
  const pendingCount = rows.filter((row) => row.status === "pending").length;
  const latestOrderDate = rows[0]?.created_at;

  return (
    <div className="section-gap py-10 sm:py-12">
      <div className="container-shell space-y-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/45">Operations</p>
            <h1 className="text-4xl font-semibold tracking-tight">Orders</h1>
            <p className="max-w-2xl text-sm leading-6 text-ink/68">
              A compact view of recent order activity, delivery status, and revenue across your latest transactions.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[520px]">
            <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">Recent orders</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">{rows.length}</p>
              <p className="mt-1 text-sm text-ink/55">Last 50 records</p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">Gross revenue</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">{formatPrice(grossRevenue)}</p>
              <p className="mt-1 text-sm text-ink/55">Visible orders only</p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">Delivery health</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">{fulfilledCount}</p>
              <p className="mt-1 text-sm text-ink/55">{pendingCount} pending</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-ink/10 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-ink/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Recent activity</h2>
              <p className="mt-1 text-sm text-ink/58">
                {latestOrderDate ? `Latest order recorded ${formatDate(latestOrderDate)}.` : "No recent orders yet."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-ink/45">
              <span className="rounded-full border border-ink/10 bg-paper px-3 py-2">Fulfilled {fulfilledCount}</span>
              <span className="rounded-full border border-ink/10 bg-paper px-3 py-2">Pending {pendingCount}</span>
            </div>
          </div>

          {rows.length === 0 ? (
            <div className="px-5 py-12 text-center">
              <p className="text-base font-semibold tracking-tight">No orders yet</p>
              <p className="mt-2 text-sm text-ink/58">Once payments start coming in, the latest orders will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-paper/80 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                  <tr>
                    <th className="px-5 py-3">Order</th>
                    <th className="px-5 py-3">Customer</th>
                    <th className="px-5 py-3">Product</th>
                    <th className="px-5 py-3">Created</th>
                    <th className="px-5 py-3">Amount</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.order_number} className="border-t border-ink/8 align-top">
                      <td className="px-5 py-4">
                        <div className="space-y-1">
                          <p className="font-semibold text-ink">{row.order_number}</p>
                          <p className="text-xs uppercase tracking-[0.12em] text-ink/45">{formatCompactDate(row.created_at)}</p>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-ink/72">{pickEmail(row.customers) || "Unknown"}</td>
                      <td className="px-5 py-4">
                        <span className="rounded-md bg-paper px-2.5 py-1 text-xs font-medium text-ink/72">
                          {pickProductSlug(row.products) || "Unknown"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-ink/58">{formatDate(row.created_at)}</td>
                      <td className="px-5 py-4 font-semibold text-ink">{formatPrice(row.amount_cents)}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${getStatusClasses(
                            row.status
                          )}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
