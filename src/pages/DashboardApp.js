import { faker } from '@faker-js/faker/locale/tr';
// @mui
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// eslint-disable-next-line
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppWebsiteVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  // eslint-disable-next-line
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Merhaba, Hoşgeldiniz :)
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} component={RouterLink} to="/dashboard/user" style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Sürücüler" total={120} icon={'healthicons:truck-driver'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} component={RouterLink} to="/dashboard/products" style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Yolcular" total={100} color="info" icon={'eva:people-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} component={RouterLink} to="/dashboard/tasks" style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Tamamlanan Görevler" total={43} color="warning" icon={'fluent:clipboard-task-list-rtl-24-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} component={RouterLink} to="/dashboard/tasks" style={{ textDecoration: 'none' }}>
            <AppWidgetSummary title="Reddedilen Görevler" total={32} color="error" icon={'carbon:warning-square-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <AppOrderTimeline
              title="Rota "
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Onaylanan Görevler"
              list={[...Array(5)].map((_, index) => ({
                title: faker.address.streetAddress(),
                description: faker.address.cityName(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTasks
              title="Görevler"
              list={[...Array(8)].map(() => ({
                title: faker.address.streetAddress(),
                description: faker.address.cityName(),
              }))}
            />
          </Grid>

          <p>Copyrights 2022© softalya.com</p>
        </Grid>

      </Container>
    </Page >
  );
}
