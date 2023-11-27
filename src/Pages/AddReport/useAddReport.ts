import { useState, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../Hooks/hooks';
import { addReports } from '../../Store/Slice/reportSlice';

export const useAddEditInput = () => {
  const { id, name } = useParams();
  const [reports, setReports] = useState<Reports>({
    userId: Number(id),
    title: '',
    content: '',
    dateCreated: '',
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userId, title, content, dateCreated } = reports;

  const handelChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setReports({ ...reports, [name]: value });
  };

  const handelGoBack = () => {
    navigate(`/user/reports/${name}/${id}`);
  };

  const handelSubmit = async (event: any) => {
    event.preventDefault();
    const newReport = {
      userId,
      title,
      content,
      dateCreated,
    };

    if (title.trim() === '') {
      alert('lracreq dashte');
    } else {
      await dispatch(addReports(newReport));
      navigate('/');
    }
  };

  return {
    handelChange,
    handelSubmit,
    reports,
    handelGoBack,
  };
};
