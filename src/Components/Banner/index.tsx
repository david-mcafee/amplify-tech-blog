import { Alert } from "@aws-amplify/ui-react";

const Banner = () => {

  return (
    <Alert isDismissible={true} hasIcon={true} heading="Test Header">
      test alert body
    </Alert>
  );
};

export default Banner;
