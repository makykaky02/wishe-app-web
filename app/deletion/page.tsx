

export default function DeletionPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold">Account Deletion</h1>

        <p className="mb-4 text-lg">
          Users can permanently delete their Wishe account directly from within the app.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">How to delete your account</h2>

        <ol className="mb-6 list-decimal space-y-2 pl-6">
          <li>Open the Wishe app.</li>
          <li>Go to Settings.</li>
          <li>Open the Information Change dropdown menu.</li>
          <li>Select Delete My Account.</li>
          <li>Confirm the deletion request.</li>
        </ol>

        <p className="mb-4">
          Deleting your account permanently removes your wishe profile and associated account data from the platform.
        </p>

        <p>
          If you are unable to access the app and need assistance with account deletion, contact us at{' '}
          <a
            href="mailto:support@wishe.app"
            className="text-blue-600 underline"
          >
            support@wishe.app
          </a>
          .
        </p>
      </div>
    </main>
  );
}