"use client";

function Error({ error, reset, }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong in the dynamic route!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

export default Error;