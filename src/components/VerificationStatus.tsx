const VerificationStatus = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-4">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-base font-medium">
          Company verification submitted
        </h2>
        <div className="bg-dashboard-green px-4 py-1 text-sm rounded-full">
          Submitted
        </div>
      </div>

      <p className="text-sm text-dashboard-muted">
        Your company verification has been successfully submitted! We'll notify
        you as soon as it's approved, so you can begin creating mobile plans
        right away.
      </p>
    </div>
  );
};

export default VerificationStatus;
