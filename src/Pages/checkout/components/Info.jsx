import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const products = [
  {
    name: 'Plano Chegaí Metrópole',
    desc: 'Assinatura mensal',
    price: 'R$260,00',
  },
  {
    name: 'Suporte dedicado',
    desc: 'Incluído no plano Chegaí Metrópole',
    price: 'Gratuito',
  },
  {
    name: 'Features adicionais',
    desc: 'Acesso a recursos exclusivos',
    price: 'R$69,99',
  },
  {
    name: 'Layout personalizado',
    desc: 'Licença',
    price: 'R$49,99',
  },
];

function Info({ totalPrice }) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default Info;