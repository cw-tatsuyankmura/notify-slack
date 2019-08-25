import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { submitMember } from '../../../redux/members/actions';

type TFormProps = {
  docId?: string;
  name?: string;
  position?: string;
  slackId?: string;
  comment?: string;
  indexId?: number;
};

export const Form: FC<TFormProps> = ({
  docId = '',
  name: propsName = '',
  position: propsPosition = '',
  slackId: propsSlackId = '',
  comment: propsComment = '',
  indexId = 0,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(propsName);
  const [position, setPosition] = useState(propsPosition);
  const [slackId, setSlackId] = useState(propsSlackId);
  const [comment, setComment] = useState(propsComment);

  const onChange = (value: string, name: string) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'position':
        setPosition(value);
        break;
      case 'slackId':
        setSlackId(value);
        break;
      case 'comment':
        setComment(value);
        break;
    }
  };

  const onSubmit = () => {
    dispatch(
      submitMember.start({
        docId,
        name,
        position,
        slackId,
        comment,
        indexId,
      }),
    );
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <TextField
            required
            id="standard-required"
            label="名前"
            margin="normal"
            value={name}
            name="name"
            onChange={e => onChange(e.target.value, 'name')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-required"
            label="役職"
            margin="normal"
            value={position}
            name="position"
            onChange={e => onChange(e.target.value, 'position')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="standard-required"
            label="Slack Id"
            margin="normal"
            value={slackId}
            name="slackId"
            onChange={e => onChange(e.target.value, 'slackId')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-required"
            label="ヒトコト"
            margin="normal"
            value={comment}
            name="comment"
            onChange={e => onChange(e.target.value, 'comment')}
            fullWidth
          />
        </Grid>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          {docId ? '更新' : '登録'}
        </Button>
        <Grid item xs={12}>
          <Typography align="center" paragraph={true}>
            <Link to="/admin">管理画面に戻る</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
