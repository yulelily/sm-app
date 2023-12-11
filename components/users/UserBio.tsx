import { format } from "date-fns";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useMemo } from "react";
import Button from "../Button";

interface UserBioProps {
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);
  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }

    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          // viewing self
          <Button secondary label="Edit" onClick={() => {}} />
        ) : (
          // viewing someone else
          <Button secondary label="Follow" onClick={() => {}} />
        )}
      </div>
      <div className="mt-7 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">
            {fetchedUser?.name}
          </p>
          <p className="text-md text-neutral-500">@{fetchedUser?.username}</p>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
