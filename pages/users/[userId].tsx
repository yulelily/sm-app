import Header from "@/components/layout/Header";
import UserBio from "@/components/users/UserBio";
import UserCard from "@/components/users/UserCard";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserCard userId={userId as string} />
      <UserBio userId={userId as string} />
    </>
  );
};

export default UserView;
