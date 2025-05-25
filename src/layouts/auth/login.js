import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

import BasicLayout from "layouts/authentication/components/BasicLayout";

import { useAuth } from "hooks/useAuth";

import curvedImg from "assets/images/curved-images/curved6.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/dashboard");
  };

  return (
    <BasicLayout title="Login" description="Sign in to access the dashboard" image={curvedImg}>
      <SoftBox component="form" role="form" onSubmit={handleSubmit}>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton type="submit" variant="gradient" color="info" fullWidth>
            Login
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </BasicLayout>
  );
}

export default Login;
