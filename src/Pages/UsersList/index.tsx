import React from 'react';

import { useAppSelector } from '../../Hooks/hooks';
import Card from '../../Components/Ui/Card';
import Button from '../../Components/Ui/Button';
import * as Styled from './userList.styled';

const UserList: React.FC = () => {
  const { users } = useAppSelector((state) => state.user);

  return (
    <>
      <Styled.UserListTitle>Users</Styled.UserListTitle>
      <Styled.UserCardContainer>
        {users?.map(({ id, name, email, dateJoined }) => {
          return (
            <Card key={id} maxWidth="380px" name={name} id={id}>
              <Styled.CardUserEmail>Email : {email}</Styled.CardUserEmail>
              <Styled.CarDateUserInfo>
                DateJoined : {dateJoined}
              </Styled.CarDateUserInfo>
              <Styled.UserReportsLink to={`/user/reports/${name}/${id}`}>
                <Button content="User Reports" />
              </Styled.UserReportsLink>
            </Card>
          );
        })}
      </Styled.UserCardContainer>
    </>
  );
};

export default UserList;
