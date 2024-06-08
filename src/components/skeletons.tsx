

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between py-4">
      <div className="flex items-center">
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function SidebarSkeleton() {
  return (
    <div className="p-5">
      <InvoiceSkeleton />
      <InvoiceSkeleton />
      <InvoiceSkeleton />
      <InvoiceSkeleton />
    </div>
  );
}