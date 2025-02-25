import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import CurrencyRupee from '@mui/icons-material/CurrencyRupee';

export const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="Product"
          src={product.media}
          variant="square"
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {product.name}
      </Typography>
      <Typography
        align="center"
        color="textSecondary"
        variant="body1"
      >
        {product.description}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'center' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <CurrencyRupee color="action" />
          <Typography
            color="textPrimary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {product.price}
          </Typography>
        </Grid>

      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
