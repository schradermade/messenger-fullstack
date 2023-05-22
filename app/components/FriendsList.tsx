"use client";
import Link from "next/link";
import { data } from "../data";
import Avatar from "./Avatar";

type FriendsListProps = {};

type Friend = {
  firstName: string;
  lastName: string;
  srcPath: string;
};

const FriendsList: React.FC<FriendsListProps> = ({}) => {
  const friendsList: Friend[] = data;
  return (
    <>
      <div>
        {friendsList.map((friend: any, i: number) => {
          return (
            <div className="friend" key={i}>
              <Link href="">
                <Avatar
                  firstName={friend.firstName}
                  lastName={friend.lastName}
                  imagePath={friend.srcPath}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .friend {
          margin: 50px 0 50px 0;
        }
      `}</style>
    </>
  );
};

export default FriendsList;
