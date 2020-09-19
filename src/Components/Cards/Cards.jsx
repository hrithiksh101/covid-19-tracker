import React from 'react';
import styles from './Cards.module.css';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import moment from 'moment';
import cx from 'classnames';

const Cards = (props) => {


  console.log(props.data);


  const { confirmed, recovered, deaths, lastUpdate } = props.data;

  if (!confirmed) {
    return <h1> Loading... </h1>;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {' '}
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                seprator=","
              />{' '}
            </Typography>
            <Typography color="textSecondary">
              {moment(lastUpdate).calendar().toString()}
            </Typography>
            <Typography variant="body2">
              Number of Active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {' '}
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                seprator=","
              />{' '}
            </Typography>
            <Typography color="textSecondary">
              {moment(lastUpdate).calendar().toString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries of covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              {' '}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                seprator=","
              />{' '}
            </Typography>
            <Typography color="textSecondary">
              {moment(lastUpdate).calendar().toString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
