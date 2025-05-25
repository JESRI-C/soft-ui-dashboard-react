import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function NatureCredits() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftTypography variant="h3">
          Velkommen til Nature Credits markedspladsen
        </SoftTypography>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NatureCredits;
