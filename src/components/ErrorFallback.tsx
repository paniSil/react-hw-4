interface ErrorFallbackProps {
  error: Error;
}

export const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div
      role="alert"
      style={{
        color: "red",
        padding: "10px",
        border: "2px solid red",
        borderRadius: "10px",
      }}
    >
      <p>
        <b>Error Occured</b>
      </p>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorFallback;
