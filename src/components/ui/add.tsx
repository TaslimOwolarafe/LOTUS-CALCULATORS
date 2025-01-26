// import { Button, styled } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';

// // Styled Button Container
// const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: theme.palette.common.black,
//   color: theme.palette.common.white,
//   width: '80px',
//   height: '34.24px',
//   borderRadius: '30px',
//   padding: '10px 40px',
//   fontSize: '9.49px',
//   fontWeight: 'bold',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   textTransform: 'none',
//   boxShadow: theme.shadows[2],
//   '&:hover': {
//     backgroundColor: theme.palette.grey[800],
//   },
// }));

// const AddButton = () => {
//   return (
//     <StyledButton className='align-middle'>
//         <AddIcon sx={{
//             border: '0px solid transparent',
//             borderRadius: '30px',
//             backgroundColor: 'white',
//             marginRight: '8px',
//             color: 'black',
//             width: '14px',
//             height: '14px',
//             transform: 'none !important', 
//         }}/>
//       Add
//     </StyledButton>
//   );
// };

// export default AddButton;


import { styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Styled Button Container
const StyledButton = styled('div')(({ theme }) => ({ // Change to 'div'
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  width: '80px',
  height: '34.24px',
  borderRadius: '30px',
  padding: '10px 40px',
  fontSize: '9.49px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',
  boxShadow: theme.shadows[2],
  cursor: 'pointer', // Add pointer cursor to mimic button behavior
  '&:hover': {
    backgroundColor: theme.palette.grey[800],
  },
}));

const AddButton = () => {
  return (
    <StyledButton className="align-middle">
      <AddIcon
        sx={{
          border: '0px solid transparent',
          borderRadius: '30px',
          backgroundColor: 'white',
          marginRight: '8px',
          color: 'black',
          width: '14px',
          height: '14px',
          transform: 'none !important',
        }}
      />
      Add
    </StyledButton>
  );
};

export default AddButton;
