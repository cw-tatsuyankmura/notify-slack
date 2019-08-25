import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Spinner from '../../atoms/spinner';
import { TInitialState } from '../../../redux/createStore';
import { getMembers, deleteMember } from '../../../redux/members/actions';
import { TMember } from '../../../model';

export const Index: FC = () => {
  const dispatch = useDispatch();
  const { members, isLoading } = useSelector(
    (state: TInitialState) => state.members,
  );

  useEffect(() => {
    dispatch(getMembers.start());
  }, [dispatch]);

  const onDelete = (id?: string) => {
    const r = window.confirm('消しますか？');
    r && id && dispatch(deleteMember.start(id));
  };
  return (
    <Container maxWidth="md">
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/admin/create`}
        size="large"
      >
        新規登録
      </Button>
      {isLoading ? (
        <Grid item xs={12}>
          <Spinner />
        </Grid>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member: TMember) => (
              <TableRow key={member.docId}>
                <TableCell>{member.name}</TableCell>
                <TableCell>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`/admin/${member.docId}/edit`}
                      >
                        編集
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => onDelete(member.docId)}
                      >
                        削除
                      </Button>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Container>
  );
};
