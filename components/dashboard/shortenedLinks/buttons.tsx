import { PencilIcon, PlusIcon, TrashIcon, ShareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import { deleteInvoice } from '@/app/lib/actions';

export function CreateShortLink() {
  return (
    <Link
      href="/dashboard/shortlinks/create"
      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-black transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Add</span>{' '}
      <PlusIcon className="h-5 md:ml-4 text-black" />
    </Link>
  );
}

export function UpdateShortLink({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-green-500 bg-green-600"
    >
      <PencilIcon className="w-5 text-white" />
    </Link>
  );
}

export function DeleteShortLink({ id }: { id: string }) {
//   const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    // <form action={deleteInvoiceWithId}>
    <form>
      <button className="rounded-md border p-2 bg-red-600 hover:bg-red-500">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-white" />
      </button>
    </form>
  );
}

export function ShareShortLink({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/share`}
      className="rounded-md border p-2 hover:bg-blue-500 bg-blue-600"
    >
      <ShareIcon className="w-5 text-white" />
    </Link>
  );
}