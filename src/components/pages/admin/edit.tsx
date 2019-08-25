import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { TInitialState } from '../../../redux/createStore';
import { Form } from '../../organisms/form';

type TParams = { id?: string };

export const Edit: FC<RouteComponentProps<TParams>> = ({ match, history }) => {
  const { id } = match.params;
  const { members } = useSelector((state: TInitialState) => state.members);
  const member = members.filter(member => id === member.docId)[0];
  if (!member) {
    history.push('/admin');
  }
  const { name, position, slackId, comment, indexId } = member;
  return (
    <Form
      docId={id}
      name={name}
      position={position}
      slackId={slackId}
      comment={comment}
      indexId={indexId}
    />
  );
};
