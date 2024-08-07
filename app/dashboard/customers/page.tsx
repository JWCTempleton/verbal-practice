// import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";
import {
  CustomersTableType,
  FormattedCustomersTable,
} from "@/app/lib/definitions";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <Table customers={customers} />
    </main>
  );
}
