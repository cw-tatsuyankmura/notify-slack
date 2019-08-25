import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Spinner from '../../atoms/spinner';
import { TInitialState } from '../../../redux/createStore';
import { getMembers as getMembersAction } from '../../../redux/members/actions';
import { TMember } from '../../../model';
import { call } from '../../../redux/call/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2, 2),
      width: '100%',
      boxSizing: 'border-box',
      cursor: 'pointer',
      height: '100%',
    },
    search: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(-2),
      width: '100%',
      boxSizing: 'border-box',
    },
  }),
);

export const Members: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { members, isLoading } = useSelector(
    (state: TInitialState) => state.members,
  );
  const [callList, setcallList] = useState<TMember[]>(members);
  const [isGetMembers, setIsGetMembers] = useState<boolean>(false);

  useEffect(() => {
    const getMembers = async () => {
      await dispatch(getMembersAction.start());
      setIsGetMembers(true);
    };
    getMembers();
  }, [dispatch]);

  useEffect(() => {
    setcallList(members);
  }, [members]);

  const handleFilter = (value: string) => {
    const searchedMembers: TMember[] = value
      ? members.filter(list => list.name.indexOf(value) >= 0)
      : members;
    setcallList(searchedMembers);
  };

  return (
    <Grid container spacing={2}>
      {isLoading || !isGetMembers ? (
        <Grid item xs={12}>
          <Spinner />
        </Grid>
      ) : (
        <>
          <TextField
            id="standard-required"
            label="呼び出したい人の名前を入力してください"
            margin="normal"
            name="searchValue"
            onChange={e => handleFilter(e.target.value)}
            fullWidth
            className={classes.search}
          />
          {callList.map((member: TMember) => (
            <Grid item xs={4} key={member.docId}>
              <Paper
                className={classes.paper}
                onClick={() => dispatch(call.start(`<@${member.slackId}>`))}
              >
                <Typography variant="subtitle2" gutterBottom>
                  {member.name}
                  {member.position && (
                    <Typography variant="caption">{` / ${member.position}`}</Typography>
                  )}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {member.comment}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </>
      )}
      <Grid item xs={12}>
        <Typography align="center" paragraph={true}>
          <Link to="/">トップに戻る</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
