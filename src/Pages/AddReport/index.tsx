import { FC } from 'react';

import { useAddEditInput } from './useAddReport';
import Button from '../../Components/Ui/Button';
import * as Styled from './addReport.styled';

const AddReport: FC = () => {
  const { handelSubmit, handelChange, reports, handelGoBack } =
    useAddEditInput();
  const { title, content, dateCreated } = reports;

  return (
    <Styled.Form action="" method="post" onSubmit={handelSubmit}>
      <Styled.FormGroup>
        <Styled.Label>Title*</Styled.Label>
        <Styled.Input
          type="text"
          name="title"
          value={title}
          onChange={handelChange}
        />
      </Styled.FormGroup>
      <Styled.FormGroup>
        <Styled.Label>Content*</Styled.Label>
        <Styled.Textarea
          placeholder="Messege"
          name="content"
          value={content}
          onChange={handelChange}
        />
      </Styled.FormGroup>
      <Styled.FormGroup>
        <Styled.Label>Date Created*</Styled.Label>
        <Styled.Input
          type="date"
          name="dateCreated"
          value={dateCreated}
          onChange={handelChange}
        />
      </Styled.FormGroup>
      <Styled.ButtonWrapper>
        <Button content="Save" bgColor="green" />
        <Button content="Cancel" bgColor="red" click={handelGoBack} />
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
};

export default AddReport;
