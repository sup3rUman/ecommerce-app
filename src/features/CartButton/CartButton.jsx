import React from 'react'
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const CartButton = () => {

    const StyledBadge = styled(Badge)( ({theme}) => ({
      '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px'
      },
    }));

  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={2} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
}

export default CartButton