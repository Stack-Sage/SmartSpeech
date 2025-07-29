export default function MobileOTPAuth() {
  return (
    <div className="space-y-3">
      <input type="tel" placeholder="Mobile number" className="auth-input" />
      <button className="auth-button">Send OTP</button>
      {/* On OTP sent */}
      <input type="text" placeholder="Enter OTP" className="auth-input" />
    </div>
  );
}
