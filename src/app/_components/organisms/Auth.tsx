import { getServerSession } from "next-auth";

import { authOptions } from "../../../../pages/api/auth/[...nextauth]";
import AuthInfo from "@molecules/AuthInfo";

const Auth = async () => {
  const userData = await getServerSession(authOptions);

  return (
    <>
      <AuthInfo user={userData} />
    </>
  );
};

export default Auth;
